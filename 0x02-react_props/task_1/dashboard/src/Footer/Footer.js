import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

function Footer() {
  return (
    <div className="App-footer">
      <footer>
        <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  )
}
export default Footer;