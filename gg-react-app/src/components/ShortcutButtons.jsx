import propTypes from 'prop-types'

const ShortcutButtons = (props) => {

    return(
        <button className='shortcut-buttons'>
            {props.name}
        </button>
    );
}

export default ShortcutButtons