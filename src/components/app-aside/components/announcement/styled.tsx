import styled from 'styled-components'

import { Card } from 'antd'

export default styled(Card)`
    .announcenment-content {
        min-height: 208px;
        padding: 8px 0;

        .announcenment-item {
            moz-box-direction: normal;
            cursor: pointer;
            display: -webkit-flex;
            display: -moz-box;
            display: flex;
            -webkit-flex-direction: column;
            flex-direction: column;
            padding: 8px 20px;
            -webkit-transform: all 0.2s;
            -moz-transform: all 0.2s;
            -o-transform: all 0.2s;
            transform: all 0.2s;

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

                .post-title:hover {
                    color: blue;
                }
            }

            .post-time {
                color: #8a919f;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                margin: 0;
            }
        }
    }
`
