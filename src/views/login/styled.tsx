import styled from 'styled-components'

import { Form } from 'antd'

export default styled(Form)`
    box-sizing: border-box;
    background-color: #fff;
    width: 350px;
    padding: 40px 20px 10px;
    margin: 200px auto;
    border-radius: 10px;
    box-shadow: 0 5px 5px #a7a7a7;

    .login-form {
        max-width: 300px;
    }

    .login-message {
        float: right;
    }

    .login-form-button {
        width: 100%;
    }
`
