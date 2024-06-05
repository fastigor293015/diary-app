import { IconProps } from "@components/UI/icons/props";

const CleanIcon: React.FC<IconProps> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <clipPath id="clip2_942">
          <rect width="20" height="20" fill="white" fillOpacity="0" />
        </clipPath>
      </defs>
      <rect width="20" height="20" fill="#FFFFFF" fillOpacity="0" />
      <g clipPath="url(#clip2_942)">
        <path d="M10 1.66C14.6 1.66 18.33 5.39 18.33 10C18.33 14.6 14.6 18.33 10 18.33C5.39 18.33 1.66 14.6 1.66 10C1.66 5.39 5.39 1.66 10 1.66ZM15.43 5.45L5.45 15.43C6.81 16.56 8.54 17.15 10.31 17.07C12.08 16.99 13.75 16.26 15 15C16.26 13.75 16.99 12.08 17.07 10.31C17.15 8.54 16.56 6.81 15.43 5.45ZM10 2.91C8.65 2.91 7.33 3.3 6.19 4.02C5.05 4.74 4.15 5.78 3.58 7C3.01 8.22 2.8 9.58 2.97 10.91C3.15 12.25 3.7 13.51 4.56 14.54L14.54 4.56C13.27 3.49 11.66 2.91 10 2.91Z" fill="currentColor" fillOpacity="1" fillRule="nonzero" />
      </g>
    </svg>

  );
}

export default CleanIcon;