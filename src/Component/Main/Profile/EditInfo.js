import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import AddInviterId from './AddInviterId'
import ChangeAvtar from './changeAvtar'
import ChangeNickName from './ChangeNickName'
import ChangePassword from './ChangePassword'
import { connect } from 'react-redux'
import { MyProfileUpdateDetails } from '../../../redux/action/FetchData'
const EditInfo = ({ dispatch, res }) => {
    const params = useParams()
    const location = useLocation()
    const [state, setState] = useState([{
        type: "",
        userId: "",
        file: "",
        nickname: "", password: "", inviterId: ""
    }])

    const handleChange = (e) => {
        setState({
            userId: location.state.value,
            type: e.type,
            [e.name]: e.value
        })
    }
    const handleSubmit = (e) => {
        if (e == true) {
            let formData = new FormData()
            formData.append("file", state.file)
            formData.append("userId", state.userId)
            formData.append("type", state.type)
            formData.append("nickname", state.nickname)
            formData.append("password", state.password)
            formData.append("inviterId", state.inviterId)
            dispatch(MyProfileUpdateDetails(formData))
        }
    }
    return (
        <>
            {params.id == 1 && <ChangeAvtar state={location.state.state} onChange={handleChange} onSubmit={handleSubmit} />}
            {params.id == 2 && <ChangeNickName state={location.state.state} onChange={handleChange} onSubmit={handleSubmit} />}
            {params.id == 3 && <ChangePassword state={location.state.state} onChange={handleChange} onSubmit={handleSubmit} />}
            {params.id == 4 && <AddInviterId state={location.state.state} onChange={handleChange} onSubmit={handleSubmit} />}
        </>
    )
}
// redux connect
const mapStateToProps = (state) => ({
    res1: state.updateProfile,

});

export default connect(mapStateToProps)(EditInfo);