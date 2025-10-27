import { useState } from 'react';
import './Folder.css';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ 
  color = '#3300ffff', 
  size = 1, 
  images = [], 
  games = [], 
  className = '',
  title = '',
  description = ''
}) => {
  const maxItems = 3;
  const papers = images.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

  // ✅ Changed: Back color now matches front color exactly
  const folderBackColor = color; // Instead of: darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperClick = (e, image, index) => {
    e.stopPropagation();
    document.body.classList.add('modal-open');

    if (games && games[index]) {
      setSelectedGame(games[index]);
    } else if (image) {
      setSelectedImage(image);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedGame(null);
    document.body.classList.remove('modal-open');
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor, // ✅ Now uses same color as front
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  };

  const folderClassName = `folder ${open ? 'open' : ''}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <>
      <div className={`folder-wrapper ${className}`}>
        {/* Title at top left corner */}
        {title && (
          <h3 className="folder-title">{title}</h3>
        )}

        <div style={scaleStyle}>
          <div className={folderClassName} style={folderStyle} onClick={handleClick}>
            <div className="folder__back">
              {papers.map((image, i) => (
                <div
                  key={i}
                  className={`paper paper-${i + 1}`}
                  onClick={(e) => handlePaperClick(e, image, i)}
                  onMouseMove={e => handlePaperMouseMove(e, i)}
                  onMouseLeave={e => handlePaperMouseLeave(e, i)}
                  style={{
                    ...(open
                      ? {
                          '--magnet-x': `${paperOffsets[i]?.x || 0}px`,
                          '--magnet-y': `${paperOffsets[i]?.y || 0}px`
                        }
                      : {}),
                    ...(image && {
                      backgroundImage: `url(${image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }),
                    cursor: 'pointer'
                  }}
                >
                  {!image && <div className="empty-paper"></div>}
                </div>
              ))}
              <div className="folder__front"></div>
              <div className="folder__front right"></div>
            </div>
          </div>
        </div>

        {/* Description below folder */}
        {description && (
          <p className="folder-description">{description}</p>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Certificate" className="modal-image" />
          </div>
        </div>
      )}

      {/* Game Modal */}
      {selectedGame && (
        <div className="game-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <div className="game-container">
              {selectedGame}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Folder;
