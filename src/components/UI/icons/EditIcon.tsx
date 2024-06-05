import { IconProps } from "./props";

const EditIcon: React.FC<IconProps> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <clipPath id="clip10_242">
          <rect id="icon edit" width="24" height="24" fill="white" fillOpacity="0" />
        </clipPath>
      </defs>
      <rect id="icon edit" width="24" height="24" fill="#FFFFFF" fillOpacity="0" />
      <g clipPath="url(#clip10_242)">
        <path id="Vector" d="M21.03 2.97C21.7 3.64 22.07 4.55 22.07 5.5C22.07 6.44 21.7 7.35 21.03 8.03L9.06 20C8.78 20.27 8.44 20.47 8.06 20.58L2.94 21.97C2.81 22 2.68 22.01 2.55 21.97C2.42 21.94 2.31 21.87 2.21 21.78C2.12 21.68 2.05 21.57 2.02 21.44C1.99 21.31 1.99 21.18 2.02 21.05L3.42 15.93C3.52 15.56 3.72 15.21 4 14.93L15.97 2.97C16.64 2.29 17.55 1.92 18.5 1.92C19.44 1.92 20.35 2.29 21.03 2.97ZM15 6.06L5.06 16C4.96 16.09 4.9 16.2 4.86 16.33L3.81 20.18L7.66 19.13C7.79 19.09 7.9 19.03 7.99 18.93L17.94 9L15 6.06ZM17.03 4.03L16.06 5L19 7.94L19.96 6.97C20.35 6.57 20.56 6.05 20.56 5.5C20.56 4.95 20.34 4.43 19.95 4.04C19.56 3.65 19.04 3.43 18.49 3.43C17.94 3.43 17.42 3.64 17.03 4.03Z" fill="currentColor" fillOpacity="1" fillRule="nonzero" />
      </g>
    </svg>

  );
}

export default EditIcon;