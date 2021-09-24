import Link from 'next/link'
import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'
import { MainMenuStyled } from './styles'

export const MainMenu: React.FC = () => {
  const context = useContext(Context)

  const user = context?.user ? (
    <div>{context.user.fullname || context.user.username || 'NoName'}</div>
  ) : (
    <Link href="/signin">SignIn</Link>
  )

  // let user: JSX.Element | undefined

  // if(context?.user) {
  //   user = <div>{context.user.fullname || context.user.username || 'NoName'}</div>
  // }

  return (
    <MainMenuStyled>
      <Link href="/">MainPage</Link>
      <Link href="/users">Users</Link>

      <div className="separator" />

      {context?.hello || ''}

      {user}
    </MainMenuStyled>
  )
}
