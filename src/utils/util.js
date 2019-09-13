import moment from 'moment'
import 'moment/locale/zh-cn'

const diffForHumans = (date, format = 'YYYYMMDD H:mm:ss') => {
  moment.locale('zh-cn')
  return moment.unix(date).fromNow()
}

export default {
  diffForHumans
}
