import React from 'react';
import './ScrollToTop.css';

class ScrollToTop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.prev = window.scrollY;
        window.addEventListener('scroll', e => this.handleNavigation(e));
    }
    
    handleNavigation = (e) => {
        const window = e.currentTarget;
    
        if (this.prev > window.scrollY) {
            this.setState({visible: true})
        } else if (this.prev < window.scrollY) {
            this.setState({visible: false})
        }
        this.prev = window.scrollY;
    };

    render(){
        if(this.state.visible === false || window.pageYOffset < 200){
            return false;
        }
        
        return (
            <div className="scroll to top" onClick={e => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <i className="chevron circle up icon"></i>
            </div>
        );
    }
}



export default ScrollToTop;