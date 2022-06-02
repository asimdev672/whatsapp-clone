import React from 'react'
import FriendChat from './FriendChat'
import {BsChatLeftTextFill} from 'react-icons/bs'
import Header from './Header'
import { Link } from 'react-router-dom'

const Chat = () => {
  return (
    <>
      <div className='Chat'>
        <Header/>
       <FriendChat
         link='/pmas'
          img='./img/pmas.png'
          heading='PMAS BS CS-6B'
          msg='Cr:class will be in lab-4'
          lastSeen='yesterday'
        />
        <FriendChat
         link='/jawad'
          img='./img/jawad.png'
          heading='Muhammad Jawad'
          msg='Rasgyllay ko request send krdun😂😂😂'
          lastSeen='seen'
        />
        <FriendChat
         link='/asim'
          img='./img/Asim.jpg'
          heading='Muhammad Asim'
          msg='بہت دیر کر دی مہرباں آتے آتے💔💔'
          lastSeen='today'
        />
        <FriendChat
         link='/haseeb'
          img='./img/haseeb.png'
          heading='Muhammad Haseeb'
          msg='oye '
          lastSeen='friday'
        />
        <FriendChat
         link='/sodager'
          img='./img/sodager.png'
          heading='Sodager Ali'
          msg='Ek hafte me to nhe hoskta ye SB .par too kehta h to maan leta h😂'
          lastSeen='4-19-2022'
        />
        <FriendChat
         link='/ali'
          img='./img/ali.jpeg'
          heading='Ali Ismail'
          msg='Haan larkay kia report hy aj ki 😂😂'
          lastSeen='today'
        />
        <FriendChat
         link='/qadeer'
          img='./img/qadeer.png'
          heading='Abdull Qadeer'
          msg='haan chor hall dy'
          lastSeen='today'
        />
        <FriendChat
         link='/afaq'
          img='./img/afaq.png'
          heading='Afaq Bhai'
          msg='oye ya download krtay lana'
          lastSeen='today'
        />
        <FriendChat
         link='/ahmed'
          img='./img/ahmed.png'
          heading='Ahmed Ali'
          msg='oye kal uni ayo gy...?'
          lastSeen='today'
        />
        <div>
        <button>
        <Link to="/asim"> <BsChatLeftTextFill/></Link>
        
        </button>
        
        </div>
      </div>
    </>
  )
}

export default Chat
