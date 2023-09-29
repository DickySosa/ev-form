import React from "react";

const FormManagement = () => {
    return (
        <main className="menu-admin">
                <header className="menu-admin-header">
                    <div className='menu-admin-header-grid-container'>
                        <button className="back-btn"
                            onClick={() => handleNavigation('/home')}
                        >
                            &#8249;
                        </button>
                        <h3 className='title-h3'>Users</h3>

                    </div>
                </header>

                <main className='main-layout'>
                    <section className='main-buttons-container'>
                        <button
                            onClick={() => handleNavigation('/create-user')}
                            className="create-user-button"
                        >
                            + Create User
                        </button>

                        <button
                            onClick={() => handleNavigation('/get-user-by-id')}
                            className="search-user-button"
                        >
                            Search user by Id
                        </button>
                    </section>



                    <section className='tables-layout'>
                        <table>
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Username</td>
                                    <td>Email</td>
                                    <td>Password</td>
                                    <td>Options</td>
                                </tr>
                            </thead>
                            <tbody>
                                {getUsers.map((user) => (
                                    <tr key={user.id} >
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <button
                                                className='edit-btn'
                                                onClick={() => handleNavigation(`/update-user/${user.id}`, { state: { user } })}>
                                                Edit
                                            </button>
                                            <button
                                                className='dlt-btn'
                                                onClick={() => handleDelete(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>

                </main>

        </main>
    )
}
export default FormManagement;