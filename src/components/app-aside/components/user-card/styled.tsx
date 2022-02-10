import styled from 'styled-components'

export default styled.div<{}>`
    box-sizing: border-box;
    background-color: #fff;

    .card-header {
        border-bottom: 1px solid #e4e6eb;
        padding: 16px 20px;

        .user-name {
            margin-left: 8px;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: rgb(51, 51, 51);
            overflow: hidden;
        }
    }
`
