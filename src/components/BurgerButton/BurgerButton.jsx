import "./BurgerButton.scss";

const BurgerButton = ({ isActive, onClick }) => (
  <button
    className="header__menu-button visible-mobile"
    onClick={onClick}
    aria-label={isActive ? "Close menu" : "Open menu"}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {isActive ? (
        <>
          <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="1" />
          <line x1="22" y1="2" x2="2" y2="22" stroke="currentColor" strokeWidth="1" />
        </>
      ) : (
        <>
          <rect y="4" width="24" height="1" fill="currentColor" />
          <rect y="11" width="19" height="1" fill="currentColor" />
          <rect y="18" width="15" height="1" fill="currentColor" />
        </>
      )}
    </svg>
  </button>
);

export default BurgerButton;
