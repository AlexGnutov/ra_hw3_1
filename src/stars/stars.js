import PropTypes from "prop-types";
import Star from "./star";
import shortid from "shortid";

function Stars(props) {
    const {count} = props;

    if (typeof count === 'number' && Math.floor(count) > 0 && Math.ceil(count) < 6) {
        return (
            <ul className="card-body-stars u-clearfix">
                {Array(Math.round(count)).fill(1).map(x =>
                    <li key={shortid.generate()}>
                        <Star/>
                    </li>
                    )
                }
            </ul>
        )
    }
    return null;
}

Stars.defaultProps = {
    count: 0,
}
Stars.propTypes = {
    count: PropTypes.number,
}

export default Stars;
