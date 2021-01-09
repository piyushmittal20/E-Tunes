import styled from 'styled-components';

const SongWrapper = styled.div`
    box-shadow: 5px 5px rgb(255, 15, 87), 
    0px 5px 15px rgb(255, 15, 87), 
    0px 5px 15px rgb(255, 15, 87);
    background: #d9a7c7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #fffcdc, #d9a7c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 35%;
    margin: 20px 10px;
    padding: 10px;
    border-radius: 10px;
    transition: transform 0.5s ease-out;

    :hover {
        transform: scale(1.05);
    }

    @media screen and (max-width:790px) {
        width: 100%;
        margin: 20px;
    }
`

const TitleWrapper = styled.h1`
    font-size: 25px;
    font-weight: 800;
    color: #111;
`

const SubTitleWrapper = styled.p`
    font-weight: 800;
    text-decoration: none;
`

const ImageWrapper = styled.img`
    padding: 20px;
`

const LinkWrapper = styled.a`
    text-decoration: none;
    color: #111;
`;

const Song = ({ title, image, trackUrl }) => {
    return (
        <SongWrapper>
            <ImageWrapper src={image} alt='img' />
            <TitleWrapper><i style={{ color: '#ff0157' }} className="fas fa-music"></i> {title}</TitleWrapper>
            <SubTitleWrapper><LinkWrapper href={trackUrl}><i style={{ color: '#ff0157' }} className="fas fa-play"></i>  {trackUrl}</LinkWrapper></SubTitleWrapper>
        </SongWrapper>
    )
}

export default Song
