import bannerImg from "../../img/banner.png"
import styled from "styled-components";

const BannerStyled = styled.div`
    background: linear-gradient(to bottom, rgba(0, 18, 51, 0.5), rgb(20, 20, 20)), url(${bannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    height: 832px;
    width: 100%;
`

function BannerImg (props){
    return(
            <BannerStyled>
                {props.children}
            </BannerStyled>
    );
};

export default BannerImg