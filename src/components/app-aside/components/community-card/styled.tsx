import styled from 'styled-components'

export default styled.div<{}>`
    /* 社区卡片样式 */
    width: 100%;
    background-color: #fff;
    margin-bottom: 16px;

    /* 社区卡片头部样式 */
    .card-header {
        width: 100%;
        padding: 16px 20px;
        border-bottom: 1px solid #e4e6eb;

        .logo {
            height: 32px;
        }

        .community-name {
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            text-align: center;
            color: rgb(51, 51, 51);
        }

        .introduction {
            font-size: 14px;
            line-height: 22px;
            color: rgb(81, 87, 103);
            margin: 7px 0 0;
        }
    }

    /* 社区卡片内容样式 */
    .card-content {
        width: 100%;
        padding: 16px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        .divider {
            height: 32px;
            margin: 0;
            flex-grow: 0;
        }

        .post-name {
            color: #515767;
            font-size: 14px;
            line-height: 22px;
            text-align: center;
        }

        .post-number {
            color: #252933;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            text-align: center;
        }
    }
`
