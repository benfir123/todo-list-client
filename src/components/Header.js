import { StyledHeader } from "./styles/Header.styled";

const Header = ({ todos, handleTodoClear }) => {
  return (
    <StyledHeader>
      <div>
        <h2>TODAY</h2>
        <a href="#" onClick={handleTodoClear}>
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4783 9.16578C19.1739 8.47017 19.1739 7.34234 18.4783 6.64673L12.5408 0.709225C11.8452 0.0136101 10.7174 0.013573 10.0217 0.709225L0.521681 10.2092C-0.173934 10.9048 -0.173934 12.0327 0.521681 12.7283L4.08418 16.2908C4.41825 16.6248 4.87132 16.8125 5.34375 16.8125H18.5547C18.8006 16.8125 19 16.6131 19 16.3672V14.8828C19 14.6369 18.8006 14.4375 18.5547 14.4375H13.2066L18.4783 9.16578ZM7.24798 6.84174L12.3458 11.9396L9.84783 14.4375H5.58971L2.62096 11.4688L7.24798 6.84174Z"
              fill="#FF7575"
            />
          </svg>
        </a>
      </div>
      <span>{todos.length} Tasks</span>
    </StyledHeader>
  );
};

export default Header;
