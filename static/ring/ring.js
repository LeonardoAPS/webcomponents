class ProgressRing extends React.Component
{
  constructor(props){
    super(props);    
    const { radius, stroke } = this.props;    
    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }  
  render(){
    const { radius, stroke, progress } = this.props;
    const strokeDashoffset = this.circumference - progress / 100 * this.circumference;  
    return (
      <svg height={radius * 2} width={radius * 2} >
        <circle
          strokeWidth={ stroke }
          strokeDasharray={ this.circumference + ' ' + this.circumference }
          style={ { strokeDashoffset } }
          stroke-width={ stroke }
          r={ this.normalizedRadius }
          cx={ radius }
          cy={ radius }
         />
        <text x={radius/1.5} y="50%">{ progress }</text>        
      </svg>
    );
  }
}

class Example extends React.Component{
  constructor(props){
    super(props);  
    this.state = {progress: 0};    
  }
  componentDidMount(){
    var finalProgress = 130;
    var intervalMs = 25;
    
    // emulating progress
    const interval = setInterval(() =>{
      this.setState({ progress: this.state.progress + 1 });
      if (this.state.progress === finalProgress)
        clearInterval(interval);
    }, intervalMs);
  }
  render(){
    return (
      <ProgressRing radius={ 60 } stroke={ 4 } progress={this.state.progress}/>
    );
  }
}
ReactDOM.render(<Example />,document.getElementById('example'));