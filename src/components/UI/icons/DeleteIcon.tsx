import { IconProps } from "@components/UI/icons/props";

const DeleteIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <clipPath id="clip8_926">
          <rect
            id="icon delete"
            rx="-0.500000"
            width="15"
            height="15"
            transform="translate(0.500000 0.500000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="icon delete"
        rx="-0.500000"
        width="15"
        height="15"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip8_926)">
        <path
          id="Vector"
          d="M13.03 11.96C13.17 12.11 13.25 12.3 13.25 12.5C13.25 12.69 13.17 12.89 13.03 13.03C12.88 13.17 12.69 13.25 12.49 13.25C12.3 13.25 12.1 13.17 11.96 13.03L8 9.06L4.03 13.03C3.88 13.17 3.69 13.25 3.49 13.25C3.3 13.25 3.1 13.17 2.96 13.03C2.82 12.88 2.74 12.69 2.74 12.49C2.74 12.3 2.82 12.1 2.96 11.96L6.93 8L2.96 4.03C2.82 3.88 2.74 3.69 2.74 3.49C2.74 3.3 2.82 3.1 2.96 2.96C3.11 2.82 3.3 2.74 3.5 2.74C3.69 2.74 3.89 2.82 4.03 2.96L8 6.93L11.96 2.96C12.11 2.82 12.3 2.74 12.5 2.74C12.69 2.74 12.89 2.82 13.03 2.96C13.17 3.1 13.25 3.29 13.25 3.49C13.25 3.69 13.17 3.88 13.03 4.03L9.06 8L13.03 11.96Z"
          fill="currentColor"
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default DeleteIcon;
