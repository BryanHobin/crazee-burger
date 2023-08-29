import { styled } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function CasinoEffect({ count }) {
 //state

 //comportements

 //affichage
 return <TransitionGroup component={CasinoEffectStyled}>
  <CSSTransition classNames="count-animated" timeout={500} key={count}>
   <span>{count}</span>
  </CSSTransition>
 </TransitionGroup>
}

const CasinoEffectStyled = styled.div`
position: relative;
overflow-y: hidden;
span{
 display: inline-block;
}

.count-animated-enter{
 transform: translateY(100%);
}
.count-animated-enter-active{
 transform: translateY(0%);
 transition:all ease-in-out .5s;
}

.count-animated-exit{
 transform: translateY(0%);
 position:absolute;
 top:0;
 right: 0;
}
.count-animated-exit-active{
 transform: translateY(-100%);
 transition:all ease-in-out .5s;

}
`