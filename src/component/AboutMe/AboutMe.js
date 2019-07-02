import React from 'react'
import me from '../../image/me.jpg'

import '../AboutMe/AboutMe.css'
import { Segment, Image, Icon } from 'semantic-ui-react'


export default class AboutMe extends React.Component {
    state = {
        clickedIcon: '',
        clicked: false
    }


    handleClick = (e, { name }) => {
        this.setState({
            clickedIcon: name,
            clicked: true
        })
    }

    
    render() {
        return (
            <div className = "aboutMe">
                <Segment attached='bottom'>
                    <Image className="image"
                        src={me} size='medium'
                        circular
                    />

                    <div className="social">
                        <a href="https://github.com/mingjingtang">
                            <Icon
                                size="huge"
                                name="github square"
                                onClick={this.handleClick}
                            ></Icon>
                        </a>

                        <a href="https://www.linkedin.com/in/mingjing/">
                            <Icon
                                size="huge"
                                name="linkedin"
                                onClick={this.handleClick}
                            >
                            </Icon>
                        </a>

                        <a href="https://www.instagram.com/mingjingtang/">
                            <Icon
                                size="huge"
                                name="instagram"
                                onClick={this.handleClick}
                            >
                            </Icon>
                        </a>
                    </div>
                </Segment>
            </div>
        )
    }
}