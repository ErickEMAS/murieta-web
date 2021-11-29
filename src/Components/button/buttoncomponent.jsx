import Button from '@material-ui/core/Button';

import "./buttoncomponent.css"

const ButtonComponent = ({ submit, title }) => {
    return (
        <Button fullWidth className="button" variant="contained" type="submit">
            {title}
        </Button>

    );
}

export default ButtonComponent;