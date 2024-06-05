import { IconProps } from "@components/UI/icons/props";

const ChevronDownIcon: React.FC<IconProps> = (props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <clipPath id="clip115_776">
          <rect id="icons / 16 / chevron down" width="16" height="16" fill="white" fillOpacity="0" />
        </clipPath>
      </defs>
      <rect id="icons / 16 / chevron down" width="16" height="16" fill="#FFFFFF" fillOpacity="0" />
      <g clipPath="url(#clip115_776)">
        <path id="Vector" d="M13.53 6.53L8.53 11.53C8.46 11.6 8.37 11.65 8.28 11.69C8.19 11.73 8.09 11.75 7.99 11.75C7.9 11.75 7.8 11.73 7.71 11.69C7.62 11.65 7.53 11.6 7.46 11.53L2.46 6.53C2.32 6.38 2.24 6.19 2.24 5.99C2.24 5.8 2.32 5.6 2.46 5.46C2.6 5.32 2.8 5.24 2.99 5.24C3.19 5.24 3.38 5.32 3.53 5.46L8 9.93L12.46 5.46C12.61 5.32 12.8 5.24 13 5.24C13.19 5.24 13.39 5.32 13.53 5.46C13.67 5.6 13.75 5.79 13.75 5.99C13.75 6.19 13.67 6.38 13.53 6.53L13.53 6.53Z" fill="currentColor" fillOpacity="1" fillRule="nonzero" />
      </g>
    </svg>

  );
}

export default ChevronDownIcon;