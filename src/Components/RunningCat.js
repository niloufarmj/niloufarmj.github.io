import '../Assets/CSS/RunningCat.css';

function RunningCat() {
  return (
    <div className="running-cat-container">
      <div className="cat-runner">
        <div className="cat-body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 52"
            width="80"
            height="52"
          >
            {/* Tail */}
            <g className="tail-anim" style={{ transformOrigin: '18px 32px' }}>
              <path
                d="M18,32 Q4,26 2,16 Q0,8 6,6"
                stroke="rgb(164,46,207)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
            </g>

            {/* Body */}
            <ellipse cx="44" cy="32" rx="22" ry="14" fill="rgb(164,46,207)" />

            {/* Neck */}
            <ellipse cx="30" cy="24" rx="9" ry="8" fill="rgb(164,46,207)" />

            {/* Head */}
            <ellipse cx="22" cy="16" rx="14" ry="12" fill="rgb(164,46,207)" />

            {/* Ears */}
            <polygon points="10,8 6,0 16,6" fill="rgb(134,26,177)" />
            <polygon points="30,8 34,0 26,6" fill="rgb(134,26,177)" />
            {/* Inner ears */}
            <polygon points="11,7 8,2 15,6" fill="rgb(255,150,200)" />
            <polygon points="29,7 32,2 27,6" fill="rgb(255,150,200)" />

            {/* Eyes */}
            <ellipse cx="16" cy="15" rx="3.5" ry="3" fill="#1d1d20" />
            <ellipse cx="27" cy="15" rx="3.5" ry="3" fill="#1d1d20" />
            {/* Eye shine */}
            <circle cx="17.5" cy="13.5" r="1.2" fill="white" />
            <circle cx="28.5" cy="13.5" r="1.2" fill="white" />

            {/* Nose */}
            <ellipse cx="22" cy="20" rx="2.5" ry="1.8" fill="rgb(255,120,180)" />

            {/* Mouth */}
            <path d="M19,22 Q22,25 25,22" stroke="#1d1d20" fill="none" strokeWidth="1.2" strokeLinecap="round" />

            {/* Whiskers */}
            <line x1="6" y1="19" x2="17" y2="20" stroke="rgba(255,255,255,0.7)" strokeWidth="0.9" />
            <line x1="6" y1="22" x2="17" y2="22" stroke="rgba(255,255,255,0.7)" strokeWidth="0.9" />
            <line x1="27" y1="20" x2="38" y2="19" stroke="rgba(255,255,255,0.7)" strokeWidth="0.9" />
            <line x1="27" y1="22" x2="38" y2="22" stroke="rgba(255,255,255,0.7)" strokeWidth="0.9" />

            {/* Front legs */}
            <g className="leg-fl" style={{ transformOrigin: '30px 38px' }}>
              <rect x="28" y="38" width="5" height="12" rx="2.5" fill="rgb(144,36,187)" />
              <ellipse cx="30.5" cy="50" rx="3.5" ry="2" fill="rgb(124,16,167)" />
            </g>
            <g className="leg-fr" style={{ transformOrigin: '38px 38px' }}>
              <rect x="36" y="38" width="5" height="12" rx="2.5" fill="rgb(144,36,187)" />
              <ellipse cx="38.5" cy="50" rx="3.5" ry="2" fill="rgb(124,16,167)" />
            </g>

            {/* Back legs */}
            <g className="leg-bl" style={{ transformOrigin: '52px 40px' }}>
              <rect x="50" y="40" width="5" height="10" rx="2.5" fill="rgb(144,36,187)" />
              <ellipse cx="52.5" cy="50" rx="3.5" ry="2" fill="rgb(124,16,167)" />
            </g>
            <g className="leg-br" style={{ transformOrigin: '60px 40px' }}>
              <rect x="58" y="40" width="5" height="10" rx="2.5" fill="rgb(144,36,187)" />
              <ellipse cx="60.5" cy="50" rx="3.5" ry="2" fill="rgb(124,16,167)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default RunningCat;
