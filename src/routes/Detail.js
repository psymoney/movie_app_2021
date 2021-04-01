import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location} = this.props;
        if (location.state) {
            return (
                <div className="detail">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="detail__data">
                        <h2 className="detail__title">{location.state.title}</h2>
                        <h3 className="detail__year">{location.state.year}</h3>
                        <ul className="detail__genres">
                            {location.state.genres.map((genre, index) => {
                                return <li key={index} className="movie__genre">{genre}</li>;
                            })}
                        </ul>
                        <h5 className="movie__summary">{location.state.summary}</h5>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}


export default Detail;