function Loading() {
  return (
    <>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.4444 14C26.4444 7.12733 20.8733 1.55554 14 1.55554C7.12733 1.55554 1.55554 7.12733 1.55554 14H4.26517C4.26517 8.62402 8.62336 4.26517 14 4.26517C19.3766 4.26517 23.7348 8.62336 23.7348 14H26.4444Z"
          fill="white"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 14 14"
            to="360 14 14"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </>
  );
}

export default Loading;
