import styled from 'styled-components'

import { Form } from 'antd'

export default styled(Form)`
    width: 100%;

    .signin-form-forgot {
        float: right;
    }

    .ant-col-rtl .signin-form-forgot {
        float: left;
    }

    .signin-form-button {
        width: 100%;
    }
`
