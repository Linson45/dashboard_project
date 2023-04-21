import React from 'react';
import "./../dashboard.css";

const Dashboard = props => {
  return (
    <div className="tickets">
      <img className="bg-icon" alt="" src="/bg.svg" />
      <div className="all-tickets">
        <div className="cards-default">
          <div className="sheet" />
        </div>
        <div className="table-ticket-priority-high">
          <div className="content">
            <img
              className="icon-more-vertical"
              alt=""
              src="/icon--more--vertical.svg"
            />
            <div className="chip-priority-high">
              <div className="sheet1" />
              <b className="title">High</b>
            </div>
            <div className="time-label">6:30 PM</div>
            <div className="date-label">May 26, 2019</div>
            <div className="date-customer">on 24.05.2019</div>
            <div className="customer-name">Tom Cruise</div>
            <div className="ticket-information">Updated 1 day ago</div>
            <div className="ticket-name">Contact Email not Linked</div>
            <img className="avatar-man-5" alt="" src="/avatar--man--5@2x.png" />
          </div>
          <img
            className="divider-line-horizontal"
            alt=""
            src="/divider--line--horizontal.svg"
          />
          <img
            className="divider-line-horizontal1"
            alt=""
            src="/divider--line--horizontal.svg"
          />
        </div>
        <div className="filter">
          <div className="filter1">Filter</div>
          <img className="icon-filter" alt="" src="/icon--filter.svg" />
        </div>
        <div className="sort">
          <div className="filter1">Sort</div>
          <img className="icon-sort" alt="" src="/icon--sort.svg" />
        </div>
        <div className="table-bottom">
          <div className="rows-per-page">
            <div className="rows-per-page1">Rows per page:</div>
            <div className="div">8</div>
            <img className="icon-dropdown" alt="" src="/icon--dropdown.svg" />
          </div>
          <div className="pagination">
            <div className="of-1240">1-8 of 1240</div>
            <img
              className="icon-arrow-left"
              alt=""
              src="/icon--arrow--left.svg"
            />
            <img
              className="icon-arrow-right"
              alt=""
              src="/icon--arrow--right.svg"
            />
          </div>
        </div>
        <b className="all-tickets1">All tickets</b>
        <div className="table-top">
          <b className="ticket-details">Ticket details</b>
          <b className="customer-name1">Customer name</b>
          <b className="priority">Priority</b>
          <b className="date">Date</b>
          <img
            className="divider-line-horizontal2"
            alt=""
            src="/divider--line--horizontal1.svg"
          />
        </div>
      </div>
      <div className="header-default">
        <b className="title1">Tickets</b>
      </div>
      <div className="sidebar-desktop">
        <b className="dashboard-kit">Dashboard Kit</b>
        <button className="sidebar-list-inactive">
          <div className="title2">Overview</div>
          <img
            className="icon-sidebar-inactive-1"
            alt=""
            src="/icon--sidebar--inactive--1-overview.svg"
          />
        </button>
        <div className="sidebar-list-active">
          <img className="sheet-icon" alt="" src="/sheet.svg" />
          <div className="selected" />
          <div className="title3">Tickets</div>
          <img
            className="icon-sidebar-active-2-t"
            alt=""
            src="/icon--sidebar--active--2-tickets.svg"
          />
        </div>
        <img
          className="divider-line-horizontal3"
          alt=""
          src="/divider--line--horizontal2.svg"
        />
        <img className="logo-icon" alt="" src="/logo.svg" />
      </div>
    </div>
  );
}

export default Dashboard;