import { connect } from 'react-redux'
import Pics from '../components/Pics'
import { addPic } from '../actions'

const mapStateToProps = (state) => {
    return {
        pics: state.pics
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPicFromRedux: () => dispatch(addPic())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pics)
