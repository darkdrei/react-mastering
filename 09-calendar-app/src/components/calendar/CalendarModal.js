import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';
import { uiCloseModal } from '../../actions/ui';
import { eventClearActiveEvent, eventStartAddNew, eventUpdated } from '../../actions/events';

const customStyles = {
content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
}
};

Modal.setAppElement('#root')

const now = moment().minutes(0).seconds(0).hours(0, 'hours');
const now_last = moment().minutes(30).seconds(0).hours(0, 'hours');

const initEvent = {
  start: now,
  end: now_last,
  title: '',
  notes: ''
}

export const CalendarModal = () => {
  const dispatch = useDispatch();/* Sirve para hacer dispact de aciones */
  const { modalOpen } = useSelector( state => state.ui );
  const { activeEvent } = useSelector( state => state.calendar );
  //const [isOpen, setIsOpen] = useState(true)
    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(now_last.toDate());
    const [titleValid, setTitleValid] = useState(true)


    const [formValues, setFormValues ] = useState(initEvent);

    const { notes, title, start, end } = formValues;

    useEffect( () => {
      if( activeEvent ){
        setFormValues(activeEvent);
      }
      console.log(activeEvent);
    },[activeEvent, setFormValues]);

    const handleChangeValue = ({ target }) => {
      setFormValues({
        ...formValues, 
        [target.name]:target.value}
      );
    }

    const closeModal = () => {
      dispatch( uiCloseModal())
      console.log('Closing...');
      //  setIsOpen( false );
      //TODO cerrar el modal
      dispatch( eventClearActiveEvent());
      setFormValues(initEvent);
    }

    const handleStartDateChange = (e) => {
      console.log(e);
      setDateStart( e );
      setFormValues({
        ...formValues,
        start:e
      })
    }

    const handleEndDateChange = (e) => {
      console.log(e);
      setDateEnd( e );
      setFormValues({
        ...formValues,
        end:e
      })
    }

    const handleSubmitForm = (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log(formValues);
      const momentoStart = moment(start);
      const momentoEnd = moment(end);
      if( momentoStart.isSameOrAfter(momentoEnd)){
        console.log('La fecha 2 debe ser mayor.');
        return Swal.fire('Error', 'La fecha de fin debe ser mayor a la fecha de inicio.', 'error');
        
      }

      if(title.trim().length < 2){
        return setTitleValid(false);
      }
      //Realizar guardado a la DB
      if( activeEvent ){
        dispatch( eventUpdated( formValues ));
      }else{
          dispatch( eventStartAddNew({
            ...formValues,
            start: momentoStart.toDate(),
            end: momentoEnd.toDate(),
          }));
      }
      setTitleValid( true );
      closeModal();
    }

    return (
        <Modal
          isOpen={ modalOpen }
        //  onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          closeTimeoutMS={ 200 }
          contentLabel="Example Modal"
          className="modal"
          overlayClassName="modal-fondo"
        >
          <h1> Nuevo evento </h1>
          <hr />
          <form className="container" onSubmit={ handleSubmitForm }>

              <div className="form-group">
                  <label>Fecha y hora inicio</label>
                  <DateTimePicker
                    onChange={ handleStartDateChange }
                    value={ dateStart }
                    className="form-control"
                  />
              </div>

              <div className="form-group">
                  <label>Fecha y hora fin</label>
                  <DateTimePicker
                    onChange={ handleEndDateChange }
                    value={ dateEnd }
                    minDate={ dateStart }
                    className="form-control "
                  />
              </div>

              <hr />
              <div className="form-group">
                  <label>Titulo y notas</label>
                  <input 
                      type="text" 
                      className={ `form-control ${ !titleValid && 'is-invalid' }` }
                      placeholder="Título del evento"
                      name="title"
                      onChange = { handleChangeValue }
                      value = { title }
                      autoComplete="off"
                  />
                  <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
              </div>

              <div className="form-group">
                  <textarea 
                      type="text" 
                      className="form-control"
                      placeholder="Notas"
                      rows="5"
                      name="notes"
                      onChange = { handleChangeValue }
                      value = { notes }
                  ></textarea>
                  <small id="emailHelp" className="form-text text-muted">Información adicional</small>
              </div>

              <button
                  type="submit"
                  className="btn btn-outline-primary btn-block"
              >
                  <i className="far fa-save"></i>
                  <span> Guardar</span>
              </button>

          </form>
        </Modal>
    )
}
