import React from 'react'
import BodyHeader from '../components/BodyHeader'
import BodyTable from '../components/BodyTable'
import BodyButton from '../components/BodyButton'
import BodyPaging from '../components/BodyPaging'

const Body = () => {
  return (
    <div>
      <BodyHeader />
      <BodyTable />
      <BodyButton />
      <BodyPaging />
    </div>
  )
}

export default Body