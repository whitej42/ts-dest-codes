import './IconButton.css';

function IconButton({onClick, icon: Icon, text, baseColor, className }) {
    return (
        <div
            onClick={onClick}
            className={`icon-button ${className}`}
            style={{
                '--base-color': baseColor,
                color: baseColor,
                borderColor: baseColor,
            }}
        >
            {Icon && <Icon />}
            <span className="icon-button-text">{text}</span>
        </div>
    );
}

export default IconButton;