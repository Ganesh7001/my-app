import React from "react";



const Route1=(props)=>{
return(
    <div>
    <div>Route</div>
    <span>data1:{props.path.component}</span>
    <span>data2:{props.path.Address}</span>
    </div>
   
)
}
export default Route1;
// const AppRoutes = (props) => {

//     return (
//       <Routes>
//         <Route path="*" element={<NotFound />}></Route>
//         <Route path="/sso/initiate" element={<BlankRoute />} />
//         {props.loggedIn !== "false" ? (
//           <>
//             <Route path="/notfound" element={<NotFound />}></Route>
//             <Route path="/dashboard" element={<Mainlayout />}>
//               <Route index element={<Dashboard />} />
//               <Route path="/dashboard/userdeatils" element={<UserDeatils />}/>
//               <Route path="/dashboard/share-file" element={<ShareFile />}/>
//               <Route path="/dashboard/docu-sign" element={<DocuSign />} />
//               <Route path="/dashboard/Messages" element={<SendBird />} />
//               <Route path="/dashboard/notification" element={<Notification />} />
//               <Route path="/dashboard/calendar" element={<CalendarMain />} />
//               <Route path="/dashboard/client-user" element={<ClientUser />} />
//               <Route path="/dashboard/profile" element={<ProfileSetting />} />
//             </Route>
//           </>
//         ) :
//          <> < Route path="/" element={<Auth/>} />
//         <Route path="/dashboard" element={<LoginLayout />}>
//                <Route index element={<Auth/>} />            
//               <Route path="/dashboard/userdeatils" element={<Auth/>} />
//               <Route path="/dashboard/share-file" element={<Auth/>} />
//               <Route path="/dashboard/docu-sign" element={<Auth/>} />
//               <Route path="/dashboard/Messages" element={<Auth/>} />
//               <Route path="/dashboard/notification" element={<Auth/>} />
//               <Route path="/dashboard/calendar" element={<Auth/>} />
//               <Route path="/dashboard/client-user" element={<Auth/>} />
//               <Route path="/dashboard/profile" element={<Auth/>} />
//             </Route>
//             </>
        
//         }
//         <Route path="/" element={<LoginLayout />} >
//           <Route index element={<Auth />} />
//           <Route path="/forgot-password-verify" element={<ForgotPasswordVerification />} />
//           <Route path="/forgot-email" element={<ForgotEmailAddress />} />
//           <Route path="/send-otp" element={<PasswordAndOtp />} />
//           <Route path="/reset-password" element={<ResetPassword />} />
//           <Route path="/forgot-password-code" element={<ForgotPasswordCode />} />
//           <Route path="/verify-code" element={<LoginCodeVerify />} />
//           <Route path="/login-password" element={<PasswordOnly />} />
//           <Route path="/reset-forgot-password" element={<ResetForgotPassword />} />
//         </Route>
//       </Routes>
//     )
//   } 
  
//   export default AppRoutes;
  