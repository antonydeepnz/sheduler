import React from 'react';
import _ from 'lodash'
import './App.css'

import Calendar from './components/Calendar/Calendar.component'

import SchedulerBoard from './components/ScheduleBoard/SchedulerBoard.component'
import { avatar} from './utils/db'

import TableCell from './components/ScheduleBoard/ScheduleTable/TableCell.component'

import { Drag, Drop } from './drag'

const intervals = _.range(0,60,15)
const hours = _.range(10,20)

// const n = (hours , intervals) => {
//   const result = []
//   for(let i = 0; i < hours.length; i++){

//   }
// }

const avatars = [
  {name: 'Ann', src: 'https://picsum.photos/id/237/200/200', speciality: "Stylist"},
  {name: 'Cole', src: 'https://picsum.photos/id/214/200/200', speciality: "Admin"}
];

const a = Math.max(...avatar.map(elt => elt.workingHours.end))
console.log(a)

const App: React.FC = () => {

  return (
    <div className="App">
      {/* <Calendar showSelected/> */}
      <Drag />
      <Drop />
      <Drop />
      {/* <SchedulerBoard hours={hours} intervals={intervals} avatars={avatars}/> */}
      {/* <table>
        <tbody>
          <tr>
          {
            intervals.map(i => (
            <TableCell color="red" height={45}>fdgfdgdfgdfgdfgdfg</TableCell>
            ))
          }
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
