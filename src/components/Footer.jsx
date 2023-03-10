import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function Footer() {
  return (
    <>
      <h2>Footer section!!</h2>
      <FontAwesomeIcon icon={brands("square-twitter")} />
      <FontAwesomeIcon icon={brands("square-github")} />
    </>
  );
}
