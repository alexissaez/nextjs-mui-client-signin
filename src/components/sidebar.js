import PropTypes from 'prop-types';

export default function SideBar(props) {
    return <>Hola</>
}

SideBar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};