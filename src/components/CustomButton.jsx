import '../style/CustomButton.scss'

function CustomButton({ label, width, height, className, onClick }) {
  return (
    <button 
      className={`customButton ${className}`}
      style={{width: `${width}px`, height: `${height}px`,}}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default CustomButton