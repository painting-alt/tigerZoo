import styled from 'styled-components'
import { Card } from 'antd'

export default styled(Card)`
    .community-name {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: rgb(51, 51, 51);
    }

    .community-introduction {
        font-size: 14px;
        line-height: 22px;
        color: rgb(81, 87, 103);
        margin: 7px 0px 0px;
        white-space: normal;
    }

    .divider {
        height: 32px;
        background-color: rgba(204, 204, 204, 0.2);
        margin: 0px;
        flex-grow: 0;
    }

    .count-title {
        color: #515767;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
    }

    .count-data {
        color: #252933;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-align: center;
    }
`
