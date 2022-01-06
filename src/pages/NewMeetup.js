import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

const MEETUPS_URL = process.env.REACT_APP_MEETUPS_URL;

export default function NewMeetup() {
    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch(
            MEETUPS_URL + '/meetups.json',
            {
                method : 'POST',
                body : JSON.stringify(meetupData),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }
    
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}
