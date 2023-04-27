import { ButtonDetail } from '../Interfaces/Interfaces';
export default function Button({ onClick, text, icon, classes }: ButtonDetail) {
  return (
    <>
      <button className={classes} onClick={onClick}>
        {text ? text : null}
        {icon ? <img src={icon} alt="" /> : null}
      </button>
    </>
  );
}
