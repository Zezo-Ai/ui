import React from 'react'
import './styles.css'

const ActivityIcon = ({ hasActivity = false }: { hasActivity?: boolean }) => (
  <div className="iconContainer">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={'var(--navbar-icons)'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/otline/darkmode/activity">
        <path
          id="Vector"
          d="M12 4.50101C13.4834 4.50101 14.9334 4.94087 16.1668 5.76498C17.4001 6.58909 18.3614 7.76043 18.9291 9.13088C19.4967 10.5013 19.6453 12.0093 19.3559 13.4642C19.0665 14.919 18.3522 16.2554 17.3033 17.3043C16.2544 18.3532 14.918 19.0675 13.4632 19.3569C12.0083 19.6463 10.5003 19.4978 9.12987 18.9301C7.75942 18.3624 6.58809 17.4011 5.76398 16.1678C4.93987 14.9344 4.5 13.4844 4.5 12.001C4.5 11.6695 4.3683 11.3515 4.13388 11.1171C3.89946 10.8827 3.58152 10.751 3.25 10.751C2.91848 10.751 2.60054 10.8827 2.36612 11.1171C2.1317 11.3515 2 11.6695 2 12.001C2.00023 14.2448 2.75506 16.4233 4.14312 18.1862C5.53119 19.9492 7.47181 21.194 9.65293 21.7207C11.834 22.2473 14.1289 22.0251 16.1684 21.0898C18.208 20.1545 19.8737 18.5604 20.8978 16.5639C21.9218 14.5674 22.2447 12.2846 21.8144 10.0824C21.3841 7.88025 20.2258 5.88679 18.5255 4.42259C16.8253 2.9584 14.6821 2.10855 12.4405 2.00971C10.1989 1.91088 7.98914 2.5688 6.16666 3.87767V3.25101C6.16666 2.91949 6.03497 2.60155 5.80055 2.36713C5.56613 2.13271 5.24819 2.00101 4.91666 2.00101C4.58514 2.00101 4.2672 2.13271 4.03278 2.36713C3.79836 2.60155 3.66667 2.91949 3.66667 3.25101V7.41767C3.66667 8.10767 4.22667 8.66767 4.91666 8.66767H7.41666C7.74818 8.66767 8.06613 8.53598 8.30055 8.30156C8.53497 8.06713 8.66666 7.74919 8.66666 7.41767C8.66666 7.08615 8.53497 6.76821 8.30055 6.53379C8.06613 6.29937 7.74818 6.16767 7.41666 6.16767H7.285C8.61836 5.08666 10.2835 4.49808 12 4.50101ZM12.8333 8.25101C12.8333 7.91948 12.7016 7.60154 12.4672 7.36712C12.2328 7.1327 11.9148 7.00101 11.5833 7.00101C11.2518 7.00101 10.9339 7.1327 10.6994 7.36712C10.465 7.60154 10.3333 7.91948 10.3333 8.25101V12.4177C10.3333 13.1077 10.8933 13.6677 11.5833 13.6677H14.0833C14.4148 13.6677 14.7328 13.536 14.9672 13.3016C15.2016 13.0671 15.3333 12.7492 15.3333 12.4177C15.3333 12.0861 15.2016 11.7682 14.9672 11.5338C14.7328 11.2994 14.4148 11.1677 14.0833 11.1677H12.8333V8.25101Z"
          fill={'var(--navbar-icons)'}
        />
        {hasActivity && (
          <circle id="Ellipse 15" cx="20.5" cy="6.5" r="4.5" fill="#FF2D55" />
        )}
      </g>
    </svg>
  </div>
)

export default ActivityIcon