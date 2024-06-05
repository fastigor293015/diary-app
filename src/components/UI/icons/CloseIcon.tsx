import { IconProps } from "@components/UI/icons/props";

const CloseIcon: React.FC<IconProps> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <clipPath id="clip2_1004">
          <rect id="icons / 24 / clean text" width="24" height="24" fill="white" fillOpacity="0" />
        </clipPath>
      </defs>
      <rect id="icons / 24 / clean text" width="24" height="24" fill="#FFFFFF" fillOpacity="0" />
      <g clipPath="url(#clip2_1004)">
        <path id="Vector" d="M4.39 4.55L4.47 4.46C4.59 4.34 4.76 4.26 4.94 4.25C5.12 4.23 5.3 4.29 5.44 4.39L5.53 4.46L12 10.93L18.47 4.46C18.53 4.39 18.62 4.34 18.71 4.3C18.8 4.26 18.9 4.24 19 4.24C19.1 4.23 19.2 4.25 19.29 4.29C19.38 4.33 19.46 4.38 19.53 4.46C19.61 4.53 19.66 4.61 19.7 4.7C19.74 4.79 19.76 4.89 19.75 4.99C19.75 5.09 19.73 5.19 19.69 5.28C19.65 5.37 19.6 5.46 19.53 5.53L13.06 12L19.53 18.46C19.65 18.59 19.73 18.76 19.74 18.94C19.76 19.12 19.7 19.3 19.6 19.44L19.53 19.53C19.4 19.65 19.23 19.73 19.05 19.74C18.87 19.76 18.69 19.7 18.55 19.6L18.47 19.53L12 13.06L5.53 19.53C5.38 19.66 5.19 19.74 5 19.74C4.8 19.73 4.61 19.66 4.47 19.52C4.33 19.38 4.26 19.19 4.25 18.99C4.25 18.8 4.33 18.61 4.47 18.46L10.93 12L4.46 5.53C4.34 5.4 4.26 5.23 4.25 5.05C4.23 4.87 4.29 4.69 4.39 4.55Z" fill="currentColor" fillOpacity="1" fillRule="nonzero" />
      </g>
    </svg>
  );
}

export default CloseIcon;