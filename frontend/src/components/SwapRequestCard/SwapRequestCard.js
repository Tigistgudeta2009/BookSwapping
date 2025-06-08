import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './SwapRequestCard.css';

const SwapRequestCard = ({ swap, onRespond }) => {
  const { user } = useAuth();
  const isRequester = swap.requester._id === user._id;

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'status-pending';
      case 'approved':
        return 'status-accepted';
      case 'rejected':
        return 'status-rejected';
      case 'completed':
        return 'status-completed';
      default:
        return '';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="swap-request-card">
      <div className="swap-header">
        <span className={`swap-status ${getStatusColor(swap.status)}`}>
          {swap.status.charAt(0).toUpperCase() + swap.status.slice(1)}
        </span>
        <span className="swap-date">{formatDate(swap.createdAt)}</span>
      </div>

      <div className="swap-books">
        <div className="book-details">
          <h3>Requested Book</h3>
          <div className="book-info">
            <img
              src={`http://localhost:5000/${swap.requestedBook.image}`}
              alt={swap.requestedBook.title}
            />
            <div>
              <h4>{swap.requestedBook.title}</h4>
              <p>by {swap.requestedBook.author}</p>
              <Link to={`/books/${swap.requestedBook._id}`}>View Details</Link>
            </div>
          </div>
        </div>

        <div className="swap-arrow">↔</div>

        <div className="book-details">
          <h3>Offered Book</h3>
          <div className="book-info">
            <img
              src={`http://localhost:5000/${swap.offeredBook.image}`}
              alt={swap.offeredBook.title}
            />
            <div>
              <h4>{swap.offeredBook.title}</h4>
              <p>by {swap.offeredBook.author}</p>
              <Link to={`/books/${swap.offeredBook._id}`}>View Details</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="swap-users">
        <p>
          <strong>From:</strong> {swap.requester.name}
        </p>
        <p>
          <strong>To:</strong> {swap.owner.name}
        </p>
      </div>

      {swap.message && (
        <div className="swap-message">
          <p><strong>Message:</strong> {swap.message}</p>
        </div>
      )}

      {!isRequester && swap.status === 'pending' && (
        <div className="swap-actions">
          <button
            className="accept-button"
            onClick={() => onRespond(swap._id, 'approved')}
          >
            Accept
          </button>
          <button
            className="reject-button"
            onClick={() => onRespond(swap._id, 'rejected')}
          >
            Reject
          </button>
        </div>
      )}

      {swap.status === 'approved' && (
        <div className="swap-contact">
          <p>
            <strong>Contact Info:</strong>
            <br />
            Email: {isRequester ? swap.owner.email : swap.requester.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default SwapRequestCard;
