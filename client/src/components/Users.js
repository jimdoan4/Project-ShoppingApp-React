// import React, { Component } from 'react';
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'

// const ButtonStyled = styled.button `
//     border-radius: 5px;
//     padding: 15px 25px;
//     font-size: 22px;
//     text-decoration: none;
//     margin: 20px;
// `

// class Users extends Component {
//     state = {
//         users: [],
//         newUser: {
//             userName: '',
//             password: '',
//         },
//         displayUserForm: false
//     }

//     componentDidMount = () => {
//         axios
//             .get('/api/apparels')
//             .then(res => {
//                 this.setState({ users: res.data})
//             })
//     }

//     toggleUserForm = () => {
//         this.setState((state, props) => {
//             return ({displayUserForm: !state.displayUserForm})
//         })
//     }

//     handleChange = (e) => {
//         const changeNewUser = {...this.state.newUser}
//         changeNewUser[e.target.name] = e.target.value
//         this.setState({newUser: changeNewUser})
//     }

//     createUser = (e) => {
//         e.preventDefault()
//         axios
//             .post('/api/apparels', {
//                 userName: this.state.newUser.userName,
//                 password: this.state.newUser.password,
//             })
//             .then(res => {
//                 const usersList = [this.state.users]
//                 usersList.unshift(res.data)
//                 this.setState({
//                     newUser: {
//                         userName: '',
//                         password: '',
//                     },
//                     displayUserForm: false,
//                     users: usersList
//                 })
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Select User Account</h3>
//                 { 
//                     this.state.users.map(user => {
//                         return (
//                             <div key = {user._id}>
//                                 <ButtonStyled className="green lighten-3 btn-large"><Link to = {`/${user._id}`} className="white-text">{user.displayName}</Link></ButtonStyled>
//                             </div>
//                         )
//                     })
//                 }
//                 <ButtonStyled onClick = {this.toggleUserForm} className="btn-small">Sign Up</ButtonStyled>
//                 { 
//                     this.state.displayUserForm
//                         ? <form onSubmit = {this.createUser}>
//                             <div>
//                                 <label htmlFor="userName">Username</label>
//                                 <input
//                                     id="userName"
//                                     type="text"
//                                     name="userName"
//                                     onChange={this.handleChange}
//                                     value={this.state.newUser.userName}
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="password">Password</label>
//                                 <input
//                                     id="password"
//                                     type="password"
//                                     name="password"
//                                     onChange={this.handleChange}
//                                     value={this.state.newUser.password}
//                                 />
//                             </div>
//                             <ButtonStyled>Save Account!</ButtonStyled>
//                         </form>
//                         : null
//                 }
//             </div>
//         );
//     }
// }

// export default Users;