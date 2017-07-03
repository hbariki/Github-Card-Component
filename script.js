const Card = (props) => {
    return (
        <div style = {margin : 1em}>
            <img width = "75" src = {props.avatar_url} />
            <div style = {{display: 'inlineBlock', marginLeft : 10}}>
              <div style = {{fontSize: '1.25em' fontweight:'bold'}}>{props.name} </div>
              <div>{props.company}</div>
            </div>
        </div>
    );
};

let = data [
  { name : paul O' Shannesy',
    avatar_url: "https://avatars3.githubusercontent.com/u/1?v=3",
    company : facebook,
  },
  {
      name: "Ben Alpert",
      avatar_url: "https://avatars3.githubusercontent.com/u/2?v=3",
      company: facebook,
  }
];
const CardList = (props) => {
    return (
        <div>
          {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}
ReactDOM.render(<CardList cards = {data} /> , mountNode);
