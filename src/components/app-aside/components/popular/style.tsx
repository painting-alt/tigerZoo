import styled from 'styled-components'

import { Card } from 'antd'

export default styled(Card)`
    .popular-content {
        min-height: 208px;
        padding: 8px 0;

        .popular-item {
            moz-box-direction: normal;
            cursor: pointer;
            display: -webkit-flex;
            display: -moz-box;
            display: flex;
            padding: 8px 20px;
            -webkit-transform: all 0.2s;
            -moz-transform: all 0.2s;
            -o-transform: all 0.2s;
            transform: all 0.2s;

            .popular-rank {
                color: #8a919f;
                display: block;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                text-align: center;
                width: 30px;
            }

            .post-title {
                color: #252933;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                margin: 0 0 4px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-transform: all 0.2s;
                -moz-transform: all 0.2s;
                -o-transform: all 0.2s;
                transform: all 0.2s;
                white-space: nowrap;
                word-break: break-word;
            }
        }
    }
`
