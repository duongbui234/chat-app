import React from 'react';
import { Link } from 'react-router-dom';
import ViewTitle from '../components/shared/ViewTitle';

const AvailableChats = ({ chats }) => {
  return (
    <>
      <ViewTitle text={'Choose your channel'}>
        <Link className='btn btn-outline-primary' to='/chat-create'>
          New
        </Link>
      </ViewTitle>
      <div className='container-fluid'>
        <div className='row mt-3'>
          {false && (
            <div className='container-fluid'>
              <div className='alert alert-warning'>No chats to join :</div>
            </div>
          )}
          {chats.map((chat) => (
            <div className='col-lg-3 col-md-6 mb-3' key={chat.id}>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>{chat.name}</h5>
                  <p className='card-text'>{chat.description}</p>
                  <button
                    onClick={() => {}}
                    className='btn btn-outline-primary'
                  >
                    Join Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AvailableChats;
