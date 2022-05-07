import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 100% ;

.play-info{
    position: relative;
}

.header{
    position: absolute;
    top: 0.6vmin;
    left: 1vmin;
    font-size: 1.3vmin;
}

#player-info-container{
    height: 37vmin;
    width: 49vmin;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 2vmin;

    
}

#current-play,#personal-best,#world-record{
    padding: 4vmin;
    width: inherit;
    border-radius: 1vmin;
    color: white;
}
#current-play{
    background: #152938;
    
}
#personal-best{
    background: #152938;
    
    
}
#world-record{
    background: #DFE7EC;
    color: #304859
    
}

#new{
    background: orange;
    color: white;
    font-size: 2vmin;
    width: 17vmin;
}

@media screen and (max-width: 550px){
    #player-info-container{
height: 44vmin;
width: 60vmin;
font-size: 3.5vmin;


    }

    #new{
        font-size: 3.5vmin;
        width: 25vmin;
    }


}

`