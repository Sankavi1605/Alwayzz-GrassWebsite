import React, { useMemo } from 'react';

export default function LoadingScreen({ isLoading = true }) {
  // Generate 3 compact concentric layers of dots
  const layers = useMemo(() => {
    return [
      { id: 'inner', radius: 14, count: 12, dotSize: 3, speed: '1.2s', direction: 'normal' },
      { id: 'middle', radius: 24, count: 20, dotSize: 3.5, speed: '1.2s', direction: 'normal' },
      { id: 'outer', radius: 34, count: 28, dotSize: 4, speed: '1.2s', direction: 'normal' },
    ];
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-page-overlay">
      <div className="loading-circle-container">
        {layers.map((layer) => {
          const dots = Array.from({ length: layer.count }, (_, i) => i);
          return (
            <div
              key={layer.id}
              className="dots-ring-layer spinning-layer"
              style={{
                width: `${layer.radius * 2}px`,
                height: `${layer.radius * 2}px`,
                animationDuration: layer.speed,
                animationDirection: layer.direction,
              }}
            >
              {dots.map((i) => {
                const angle = (i * 360) / layer.count;
                const rad = (angle * Math.PI) / 180;
                const x = layer.radius * Math.cos(rad);
                const y = layer.radius * Math.sin(rad);

                // Calculate leading black arc vs grey trailing dots
                const ratio = i / layer.count;
                // High contrast: Leading section is solid black (#000000), tail is light grey (#e5e7eb)
                const isBlackHead = ratio <= 0.35;
                const dotOpacity = isBlackHead ? 1 - ratio * 1.8 : 0.25;
                const dotColor = isBlackHead ? '#000000' : '#d1d5db';

                return (
                  <div
                    key={`${layer.id}-dot-${i}`}
                    className="dot-positioner"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div
                      className="loading-dot"
                      style={{
                        width: `${layer.dotSize}px`,
                        height: `${layer.dotSize}px`,
                        backgroundColor: dotColor,
                        opacity: dotOpacity,
                        transform: isBlackHead ? `scale(${1.2 - ratio * 0.4})` : 'scale(0.95)',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
