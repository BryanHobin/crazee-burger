import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function Tab({ label, Icon, onClick, className }) {

  return (
    <TabStyled onClick={onClick} className={className} >
      {Icon && <span className="icon">{Icon}</span>}
      {label && <span className="label">{label}</span>}
    </TabStyled>
  )
}
const TabStyled = styled.button`
  background-color: ${theme.colors.white};
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height:43px;
  padding:0 22px;
  top: 1px;
  position: relative;
  font-size: ${theme.fonts.size.XS};
  color: ${theme.colors.greySemiDark};
  border: 1px solid ${theme.colors.greyLight};
  border-bottom-width:2px;
  box-shadow: ${theme.shadows.subtle};
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover{
   border-bottom: 2px solid white;
  }

  .label{
   margin-left: ${theme.gridUnit}px;
  }
  .label, .icon{
   display: flex;
   align-items: center;
   justify-content: center;
  }
`;