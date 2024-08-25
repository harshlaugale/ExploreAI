import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faUsers, faDollarSign, faMoneyBillWave, faGem } from '@fortawesome/free-solid-svg-icons';

export const SelectTravelesList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole traveler in exploration',
        icon: faUser,
        people: '1',
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two travelers in tandem',
        icon: faHeart,
        people: '2',
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adventurers',
        icon: faUsers,
        people: '3 to 5 people',
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekers',
        icon: faUsers, // Changed to faUsers
        people: '5 to 10 people',
    },
];

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: faDollarSign,
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: faMoneyBillWave,
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Don’t worry about cost',
        icon: faGem,
    },
];

export const AI_PROMPT = 'Generate Travel Plan for location : {location}';
