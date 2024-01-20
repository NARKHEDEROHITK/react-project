import {
Link
} from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <ul>
        <Link to="home" >HOME</Link>
        <Link to="about" >About</Link>
      </ul>
    </div>
  )
}

export default Header
