import styled from 'styled-components'

const Header = styled.header<{}>`
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    background-color: #ffffff;
    border-bottom: 1px solid #f1f1f1;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 5%);

    .actionBar {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 14px 0;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default Header
