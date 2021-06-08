import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/caledar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

moment.locale('es');
const localizer = momentLocalizer(moment);
/*
const events = [{
    title:'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor:'#fafafa',
    notes:'Comprar torta',
    user: {
        _id: '123',
        name: 'Eugenio'
    }
}]*/

export const CalendarScreen = () => {
    /**Element redux */
    const dispatch = useDispatch();/* Sirve para hacer dispact de aciones */
    const { events } = useSelector( state => state.calendar );
    /*****************/
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        console.log(e);
        console.log('Abrir modal');
        dispatch( uiOpenModal());
    }

    const onSelectEvent = (e) => {
        console.log(e);
        dispatch( eventSetActive(e));
    }

    const onViewChange = (e) => {
        console.log(e);
        setLastView(e);
        localStorage.setItem('lastView', e);

    }

    const eventStylGetter = (event, start, end, isSelected ) => {

        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white',
        }
        return {style}
    }
    return (
        <div className="calendar-screen">
            <Navbar/>
            <Calendar
                localizer={localizer}
                events={ events }
                startAccessor="start"
                endAccessor="end"
                //style={{ height: 500 }}
                messages={ messages }
                eventPropGetter ={ eventStylGetter }
                onDoubleClickEvent = { onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView= { onViewChange }
                view={ lastView }
                components={ { event: CalendarEvent } }
            />

            <CalendarModal />
            <AddNewFab />
        </div>
    )
}
