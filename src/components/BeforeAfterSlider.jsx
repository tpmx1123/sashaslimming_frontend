import React, { useState, useRef, useEffect } from 'react'

const BeforeAfterSlider = ({ beforeImage, afterImage, alt = "Transformation" }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [containerHeight, setContainerHeight] = useState('auto')
  const containerRef = useRef(null)
  const afterImageRef = useRef(null)

  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  useEffect(() => {
    if (!isDragging) return

    const handleMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX ? e.clientX - rect.left : e.touches[0].clientX - rect.left
      const percentage = (x / rect.width) * 100
      const clampedPercentage = Math.max(0, Math.min(100, percentage))
      setSliderPosition(clampedPercentage)
    }

    const handleUp = () => {
      setIsDragging(false)
    }

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleUp)
    document.addEventListener('touchmove', handleMove)
    document.addEventListener('touchend', handleUp)
    
    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseup', handleUp)
      document.removeEventListener('touchmove', handleMove)
      document.removeEventListener('touchend', handleUp)
    }
  }, [isDragging])

  useEffect(() => {
    const updateHeight = () => {
      if (afterImageRef.current) {
        setContainerHeight(afterImageRef.current.offsetHeight)
      }
    }
    
    updateHeight()
    window.addEventListener('resize', updateHeight)
    
    return () => window.removeEventListener('resize', updateHeight)
  }, [afterImage])

  return (
    <div 
      ref={containerRef}
      className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-col-resize"
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={handleMouseDown}
      style={{ userSelect: 'none' }}
    >
      {/* After Image (Full Color) - Background */}
      <img 
        ref={afterImageRef}
        src={afterImage} 
        alt={`${alt} - After`}
        className="w-full h-auto block"
        style={{ display: 'block' }}
        onLoad={() => {
          if (afterImageRef.current) {
            setContainerHeight(afterImageRef.current.offsetHeight)
          }
        }}
      />

      {/* Before Image (Grayscale) - Clipped Overlay */}
      <div 
        className="absolute top-0 left-0 overflow-hidden"
        style={{ 
          width: `${sliderPosition}%`,
          height: containerHeight !== 'auto' ? `${containerHeight}px` : '100%'
        }}
      >
        <img 
          src={beforeImage} 
          alt={`${alt} - Before`}
          className="grayscale"
          style={{ 
            width: `${(100 / sliderPosition) * 100}%`,
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'left center',
            display: 'block'
          }}
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white z-10 shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Button */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border-2 border-gray-300 shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing pointer-events-auto"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeforeAfterSlider

