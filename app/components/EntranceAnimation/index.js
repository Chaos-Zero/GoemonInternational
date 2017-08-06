import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import styled from 'styled-components'
const colours = [
'#DE3022',
'#FF9800',
'#005418',
'#333333',
'#E7DEBB',
];
const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    min-height: 100vh;
`;

const Box = styled.div`
flex-basis: ${(props) => props.width}%;
background: ${(props) => props.bgColor};
//border-right: 1px solid #FFF;
`;

const ContentWrapper = styled.div`
flex-basis 100%;
`;

class EntranceAnimation extends React.Component {
    render() {
        const {
            children,
        } = this.props;
        return(
            <StaggeredMotion
            defaultStyles={[
                { width: 200 },
                { width: 0 },
                { width: 0 },
                { width: 0 },
            ]}
            styles={(prevStyles) => [
                { width: spring(10) },
                { width: spring(prevStyles[0].width) },
                { width: spring(prevStyles[1].width ) },
                { width: spring(prevStyles[2].width) }, 
            ]}
            >
            {(styles) => (
            <Wrapper>
              <Box bgColor ={colours[0]} width={styles[0].width} />
              <Box bgColor ={colours[1]} width={styles[1].width} />
              <Box bgColor ={colours[2]} width={styles[2].width} />
              <Box bgColor ={colours[3]} width={styles[3].width} />
              <ContentWrapper bgColor ={colours[0]}>
               {children}
              </ContentWrapper>
            </Wrapper> 
            )}
            </StaggeredMotion>   
        );
    }
}

export default EntranceAnimation;