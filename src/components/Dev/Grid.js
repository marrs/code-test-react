var React = require('react');

function DevGrid(props) {
    var classNames = "dev-grid";
    if (!props.display) {
        classNames += " hide";
    }
    return <div className={classNames}>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
        <div className="dev-grid-col"></div>
        <div className="dev-grid-gutter"></div>
    </div>
}

export default DevGrid
