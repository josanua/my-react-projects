import {Outlet} from 'react-router-dom'

export default function RootLayout() {
    return <>
        <h2>Root Layout</h2>
        <Outlet/>
    </>
}