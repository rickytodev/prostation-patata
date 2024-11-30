
import PropTypes from 'prop-types';



const NavMenu = ({mapMenu = []   }) => {
  return (
    <ul className={` flex items-center justify-center  space-x-4`}>
    {
        mapMenu.map((item, index) => (
            <li className="" key={index}>
                <a href={item.link}>{item.text}</a>
            </li>
        ))

    }
    </ul>

  )
}

NavMenu.propTypes = {
    mapMenu: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  };

export default NavMenu
