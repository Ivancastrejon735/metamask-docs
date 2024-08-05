import React from "react";

const Icon = ({ name, classes }) => {
  const renderIcon = () => {
    switch (name) {
      case "key":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 4.5C10.75 4.09375 11.0625 3.75 11.5 3.75C11.9062 3.75 12.25 4.09375 12.25 4.5C12.25 4.9375 11.9062 5.25 11.5 5.25C11.0625 5.25 10.75 4.9375 10.75 4.5ZM10.5 11C10.1875 11 9.90625 11 9.625 10.9375L8.75 11.7812C8.625 11.9375 8.4375 12 8.25 12H7V13.25C7 13.6875 6.65625 14 6.25 14H5V15.25C5 15.6875 4.65625 16 4.25 16H0.75C0.3125 16 0 15.6875 0 15.25V12.25C0 12.0625 0.0625 11.875 0.21875 11.7188L5.125 6.8125C5.03125 6.375 5 5.96875 5 5.5C5 2.46875 7.4375 0 10.5 0C13.5312 0 16 2.46875 16 5.5C16 8.5625 13.5312 11 10.5 11ZM10.5 10C12.9688 10 15 8 15 5.5C15 3.03125 12.9688 1 10.5 1C8 1 6 3.03125 6 5.5C6 5.875 6.03125 6.21875 6.09375 6.5625L6.25 7.125L1 12.375V15H4V13H6V11H8.125L9.28125 9.875L9.78125 9.96875C10 10 10.25 10 10.5 10Z"
              fill="currentColor"
            />
          </svg>
        );
      case "network":
        return (
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 2C5 0.90625 5.875 0 7 0C8.09375 0 9 0.90625 9 2C9 2.625 8.71875 3.15625 8.28125 3.53125L9.5 6.15625C9.8125 6.0625 10.1562 6 10.5 6C11.4688 6 12.375 6.4375 13 7.09375L16.1562 4.8125C16.0312 4.5625 16 4.3125 16 4C16 2.90625 16.875 2 18 2C19.0938 2 20 2.90625 20 4C20 5.125 19.0938 6 18 6C17.5312 6 17.0938 5.875 16.7812 5.59375L13.5938 7.90625C13.8438 8.375 14 8.9375 14 9.5C14 10 13.875 10.4375 13.7188 10.875L16.5938 12.5938C16.9375 12.2188 17.4375 12 18 12C19.0938 12 20 12.9062 20 14C20 15.125 19.0938 16 18 16C16.875 16 16 15.125 16 14C16 13.8125 16 13.625 16.0625 13.4375L13.1875 11.7188C12.5625 12.5 11.5938 13 10.5 13C8.71875 13 7.25 11.7188 7.03125 10H3.90625C3.6875 10.875 2.90625 11.5 2 11.5C0.875 11.5 0 10.625 0 9.5C0 8.40625 0.875 7.5 2 7.5C2.90625 7.5 3.6875 8.15625 3.90625 9H7.03125C7.15625 8 7.75 7.125 8.59375 6.5625L7.40625 3.96875C7.25 4 7.125 4 7 4C5.875 4 5 3.125 5 2ZM7 3C7.53125 3 8 2.5625 8 2C8 1.46875 7.53125 1 7 1C6.4375 1 6 1.46875 6 2C6 2.5625 6.4375 3 7 3ZM18 5C18.5312 5 19 4.5625 19 4C19 3.46875 18.5312 3 18 3C17.4375 3 17 3.46875 17 4C17 4.5625 17.4375 5 18 5ZM18 13C17.4375 13 17 13.4688 17 14C17 14.5625 17.4375 15 18 15C18.5312 15 19 14.5625 19 14C19 13.4688 18.5312 13 18 13ZM2 10.5C2.53125 10.5 3 10.0625 3 9.5C3 8.96875 2.53125 8.5 2 8.5C1.4375 8.5 1 8.96875 1 9.5C1 10.0625 1.4375 10.5 2 10.5ZM10.5 12C11.875 12 13 10.9062 13 9.5C13 8.125 11.875 7 10.5 7C9.09375 7 8 8.125 8 9.5C8 10.9062 9.09375 12 10.5 12Z"
              fill="currentColor"
            />
          </svg>
        );
      case "method":
        return (
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 0C15.0938 0 16 0.90625 16 2V4C16 5.125 15.0938 6 14 6H2C0.875 6 0 5.125 0 4V2C0 0.90625 0.875 0 2 0H14ZM15 4V2C15 1.46875 14.5312 1 14 1H2C1.4375 1 1 1.46875 1 2V4C1 4.5625 1.4375 5 2 5H14C14.5312 5 15 4.5625 15 4ZM13 2.25C13.4062 2.25 13.75 2.59375 13.75 3C13.75 3.4375 13.4062 3.75 13 3.75C12.5625 3.75 12.25 3.4375 12.25 3C12.25 2.59375 12.5625 2.25 13 2.25ZM10 2.25C10.4062 2.25 10.75 2.59375 10.75 3C10.75 3.4375 10.4062 3.75 10 3.75C9.5625 3.75 9.25 3.4375 9.25 3C9.25 2.59375 9.5625 2.25 10 2.25ZM14 8C15.0938 8 16 8.90625 16 10V12C16 13.125 15.0938 14 14 14H2C0.875 14 0 13.125 0 12V10C0 8.90625 0.875 8 2 8H14ZM15 12V10C15 9.46875 14.5312 9 14 9H2C1.4375 9 1 9.46875 1 10V12C1 12.5625 1.4375 13 2 13H14C14.5312 13 15 12.5625 15 12ZM13 10.25C13.4062 10.25 13.75 10.5938 13.75 11C13.75 11.4375 13.4062 11.75 13 11.75C12.5625 11.75 12.25 11.4375 12.25 11C12.25 10.5938 12.5625 10.25 13 10.25ZM10 10.25C10.4062 10.25 10.75 10.5938 10.75 11C10.75 11.4375 10.4062 11.75 10 11.75C9.5625 11.75 9.25 11.4375 9.25 11C9.25 10.5938 9.5625 10.25 10 10.25Z"
              fill="currentColor"
            />
          </svg>
        );
      case "type":
        return (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 0C13.4375 0 14 0.5625 14 1.25V2.75C14 3.46875 13.4375 4 12.75 4H12.5V10H12.75C13.4375 10 14 10.5625 14 11.25V12.75C14 13.4688 13.4375 14 12.75 14H11.25C10.5312 14 10 13.4688 10 12.75V12.5H4V12.75C4 13.4688 3.4375 14 2.75 14H1.25C0.53125 14 0 13.4688 0 12.75V11.25C0 10.5625 0.53125 10 1.25 10H1.5V4H1.25C0.53125 4 0 3.46875 0 2.75V1.25C0 0.5625 0.53125 0 1.25 0H2.75C3.4375 0 4 0.5625 4 1.25V1.5H10V1.25C10 0.5625 10.5312 0 11.25 0H12.75ZM12.75 1H11.25C11.0938 1 11 1.125 11 1.25V2.75C11 2.90625 11.0938 3 11.25 3H12.75C12.875 3 13 2.90625 13 2.75V1.25C13 1.125 12.875 1 12.75 1ZM2.5 10H2.75C3.4375 10 4 10.5625 4 11.25V11.5H10V11.25C10 10.5625 10.5312 10 11.25 10H11.5V4H11.25C10.5312 4 10 3.46875 10 2.75V2.5H4V2.75C4 3.46875 3.4375 4 2.75 4H2.5V10ZM1 11.25V12.75C1 12.9062 1.09375 13 1.25 13H2.75C2.875 13 3 12.9062 3 12.75V11.25C3 11.125 2.875 11 2.75 11H1.25C1.09375 11 1 11.125 1 11.25ZM11 11.25V12.75C11 12.9062 11.0938 13 11.25 13H12.75C12.875 13 13 12.9062 13 12.75V11.25C13 11.125 12.875 11 12.75 11H11.25C11.0938 11 11 11.125 11 11.25ZM1 1.25V2.75C1 2.90625 1.09375 3 1.25 3H2.75C2.875 3 3 2.90625 3 2.75V1.25C3 1.125 2.875 1 2.75 1H1.25C1.09375 1 1 1.125 1 1.25Z"
              fill="currentColor"
            />
          </svg>
        );
      case "arrow-right":
        return (
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8438 7.34375L8.65625 12.8438C8.5625 12.9688 8.40625 13 8.28125 13C8.15625 13 8.03125 12.9688 7.9375 12.875C7.71875 12.6875 7.71875 12.375 7.90625 12.1875L12.2812 7.5H0.5C0.21875 7.5 0 7.28125 0 7.03125C0 6.78125 0.21875 6.5 0.5 6.5H12.2812L7.90625 1.84375C7.71875 1.65625 7.71875 1.34375 7.9375 1.15625C8.15625 0.96875 8.46875 0.96875 8.65625 1.1875L13.8438 6.6875C14.0312 6.875 14.0312 7.15625 13.8438 7.34375Z"
              fill="#FF5833"
            />
          </svg>
        );
      case "alert-error":
        return (
          <svg
            width="22"
            height="25"
            viewBox="0 0 22 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8281 11.2656C15.9688 11.5938 16.1562 11.875 16.2969 12.1562C17.6562 14.6875 16.9531 17.8281 14.7031 19.375C14.5625 19.4688 14.4219 19.5156 14.2812 19.5156C14.0469 19.5156 13.8125 19.4219 13.625 19.2344C13.3906 18.8594 13.4844 18.3906 13.8125 18.1562C15.4531 17.0312 15.9219 14.8281 15.0312 12.9531L13.3438 14.9219C13.2031 15.0625 12.9688 15.1562 12.7344 15.1562C12.5 15.1562 12.3125 15.0625 12.1719 14.875C11.0469 13.4688 9.54688 11.5 8.70312 10.4688C7.15625 12.3438 6.5 13.4688 6.5 14.6406C6.5 15.0625 6.125 15.3906 5.75 15.3906C5.32812 15.3906 5 15.0625 5 14.6406C5 12.7188 6.21875 11.0781 8.14062 8.78125C8.28125 8.64062 8.46875 8.54688 8.70312 8.5C8.89062 8.5 9.125 8.59375 9.26562 8.78125C9.5 9.0625 11.7031 11.875 12.7812 13.2344L14.6094 11.1719C14.75 10.9844 14.9844 10.8906 15.2188 10.9375C15.4531 10.9375 15.6875 11.0781 15.8281 11.2656ZM15.8281 3.48438C19.1562 6.57812 21.5 11.5938 21.5 14.1719C21.5 20.125 16.7656 25 11 25C5.1875 25 0.5 20.125 0.5 14.125C0.5 10.75 3.64062 5.3125 8.04688 1.23438C8.32812 0.953125 8.75 0.953125 9.03125 1.23438C10.4844 2.54688 11.7969 4 12.875 5.45312C13.4844 4.75 14.1406 4.09375 14.7969 3.48438C15.0781 3.20312 15.5469 3.20312 15.8281 3.48438ZM11 23.5C15.9219 23.5 20 19.3281 20 14.125C20 12.1094 17.9844 7.84375 15.3125 5.125C14.6562 5.78125 14.0469 6.4375 13.4375 7.1875C13.2969 7.32812 13.1094 7.46875 12.8281 7.46875C12.5938 7.42188 12.4062 7.32812 12.2656 7.14062C11.1875 5.6875 9.92188 4.1875 8.5625 2.82812C4.76562 6.57812 2 11.3594 2 14.1719C2 19.3281 6.03125 23.5 11 23.5Z"
              fill="currentColor"
            />
          </svg>
        );
      case "alert-success":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0156 15.5625C10.7344 15.8438 10.2188 15.8438 9.9375 15.5625L6.9375 12.5625C6.65625 12.2812 6.65625 11.7656 6.9375 11.4844C7.21875 11.2031 7.73438 11.2031 8.01562 11.4844L10.5 13.9688L15.9375 8.48438C16.2188 8.20312 16.7344 8.20312 17.0156 8.48438C17.2969 8.76562 17.2969 9.28125 17.0156 9.5625L11.0156 15.5625ZM24 12C24 18.6562 18.6094 24 12 24C5.34375 24 0 18.6562 0 12C0 5.39062 5.34375 0 12 0C18.6094 0 24 5.39062 24 12ZM12 1.5C6.1875 1.5 1.5 6.23438 1.5 12C1.5 17.8125 6.1875 22.5 12 22.5C17.7656 22.5 22.5 17.8125 22.5 12C22.5 6.23438 17.7656 1.5 12 1.5Z"
              fill="currentColor"
            />
          </svg>
        );
      case "alert-info":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C18.6094 0 24 5.39062 24 12C24 18.6562 18.6094 24 12 24C5.34375 24 0 18.6562 0 12C0 5.39062 5.34375 0 12 0ZM12 22.5C17.7656 22.5 22.5 17.8125 22.5 12C22.5 6.23438 17.7656 1.5 12 1.5C6.1875 1.5 1.5 6.23438 1.5 12C1.5 17.8125 6.1875 22.5 12 22.5ZM12 8.625C11.3438 8.625 10.875 8.15625 10.875 7.5C10.875 6.89062 11.3438 6.375 12 6.375C12.6094 6.375 13.125 6.89062 13.125 7.5C13.125 8.15625 12.6094 8.625 12 8.625ZM14.25 16.5C14.625 16.5 15 16.875 15 17.25C15 17.6719 14.625 18 14.25 18H9.75C9.32812 18 9 17.6719 9 17.25C9 16.875 9.32812 16.5 9.75 16.5H11.25V12H10.5C10.0781 12 9.75 11.6719 9.75 11.25C9.75 10.875 10.0781 10.5 10.5 10.5H12C12.375 10.5 12.75 10.875 12.75 11.25V16.5H14.25Z"
              fill="currentColor"
            />
          </svg>
        );
      case "angle-right":
        return (
          <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33337 15C1.05212 15 0.802124 14.9062 0.614624 14.7188C0.208374 14.3438 0.208374 13.6875 0.614624 13.3125L5.89587 8L0.614624 2.71875C0.208374 2.34375 0.208374 1.6875 0.614624 1.3125C0.989624 0.90625 1.64587 0.90625 2.02087 1.3125L8.02087 7.3125C8.42712 7.6875 8.42712 8.34375 8.02087 8.71875L2.02087 14.7188C1.83337 14.9062 1.58337 15 1.33337 15Z"
              fill="currentColor"
            />
          </svg>
        );
      case "angle-line-right":
        return (
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z"
              fill="currentColor"
            />
          </svg>
        );
      case "spinner-ellipse":
        return (
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM4.5 30C4.5 44.0833 15.9167 55.5 30 55.5C44.0833 55.5 55.5 44.0833 55.5 30C55.5 15.9167 44.0833 4.5 30 4.5C15.9167 4.5 4.5 15.9167 4.5 30Z"
              fill="url(#grad1)"
            />
            <defs>
            <linearGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#43AEFC" stopOpacity="1" />
              <stop offset="100%" stopColor="#43AEFC" stopOpacity="0" />
            </linearGradient>
            </defs>
          </svg>
        );
      case "spinner-error":
        return (
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM4.5 30C4.5 44.0833 15.9167 55.5 30 55.5C44.0833 55.5 55.5 44.0833 55.5 30C55.5 15.9167 44.0833 4.5 30 4.5C15.9167 4.5 4.5 15.9167 4.5 30Z"
              fill="#E88F97"
            />
          </svg>
        );
      case "metamask":
        return (
          <svg
            width="30"
            height="28"
            viewBox="0 0 30 28" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.000488281" y="0.0438232" width="29.999" height="27.6615" fill="url(#pattern0_712_369)"/>
            <defs>
            <pattern id="pattern0_712_369" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_712_369" transform="matrix(0.00623026 0 0 0.00675676 -0.00153563 0)"/>
            </pattern>
            <image id="image0_712_369" width="161" height="148" xlinkHref="data:image/png;base64,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"/>
            </defs>
          </svg>
        );
        case "close":
          return (
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25934 17.3333C7.08156 17.3333 6.96304 17.274 6.84453 17.1555C6.60749 16.9185 6.60749 16.5629 6.84453 16.3259L16.326 6.8444C16.563 6.60737 16.9186 6.60737 17.1556 6.8444C17.3927 7.08144 17.3927 7.437 17.1556 7.67403L7.67416 17.1555C7.55564 17.274 7.43712 17.3333 7.25934 17.3333Z"
                fill="white"
              />
              <path
                d="M16.7408 17.3333C16.563 17.3333 16.4445 17.274 16.326 17.1555L6.84453 7.67403C6.60749 7.437 6.60749 7.08144 6.84453 6.8444C7.08156 6.60737 7.43712 6.60737 7.67416 6.8444L17.1556 16.3259C17.3927 16.5629 17.3927 16.9185 17.1556 17.1555C17.0371 17.274 16.9186 17.3333 16.7408 17.3333Z"
                fill="white"
              />
            </svg>
          )
      default:
        return null;
    }
  };
  return <span className={classes}>{renderIcon()}</span>;
};

export default Icon;
