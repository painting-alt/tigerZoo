import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 导入 HTML 元素样式重置文件
import './assets/css/reset.css'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
