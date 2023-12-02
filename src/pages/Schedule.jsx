import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Schedule = () => {
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView='dayGridMonth'
          events={[
            {title: 'Booked Session', date: '2023-12-12'},
            {title: 'Available Session', date: '2023-12-14'}
          ]}
        />
      </div>
    </section>
  )
}

export default Schedule