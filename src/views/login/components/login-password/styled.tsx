import styled from 'styled-components'

import { Form } from 'antd'

export default styled(Form)`
    width: 100%;
    .login-form-forgot {
        float: right;
    }
    .ant-col-rtl .login-form-forgot {
        float: left;
    }
    .login-form-button {
        width: 100%;
    }
`
