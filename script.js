const Card = (props) => {
    return (
        <div>
            <img src = "http://placeholder.it/75" />
            <div style = {{display: 'inlineBlock', marginLeft : 10}}>
              <div style = {{fontSize: '1.25em' fontweight:'bold'}}>Name here </div>
              <div>Place here</div>
            </div>
        </div>
    );
};
const CardList = (props) => {
    return (
        <div>
            <Card />
        </div>
    );
}
ReactDOM.render(<CardList /> , mountNode);
