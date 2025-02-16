function calculateDates() {
  let inputDate = document.getElementById("appointmentDate").value;
  if (!inputDate) {
    document.getElementById("result").innerText = "Please select a date.";
    return;
  }

  let appointmentDate = new Date(inputDate);
  let ticketDate = new Date(appointmentDate);
  ticketDate.setDate(ticketDate.getDate() - 3);

  let reachDelhiDate = new Date(ticketDate);
  reachDelhiDate.setDate(reachDelhiDate.getDate() + 1);

  let classStartDate = new Date(appointmentDate);
  classStartDate.setDate(classStartDate.getDate() - 5);

  let classEndDate = new Date(appointmentDate);
  classEndDate.setDate(classEndDate.getDate() - 4);

  // Adjust class start date if it falls on a Saturday
  if (classStartDate.getDay() === 6 || classEndDate.getDay() === 6) {
    // Saturday Check
    classStartDate.setDate(classStartDate.getDate() - 1);
  }

  let resultText = `
  <table class="table">
        <th colspan="2">This appointment is scheduled with these other Appointments</th>
        <tr>
            <td>
                Interview Date
            </td>
            <td>
                ${appointmentDate.toDateString()}
            </td>
        </tr>
        <tr>
            <td>
                Class Start Date
            </td>
            <td>
                ${classStartDate.toDateString()}
            </td>
        </tr>
        <tr>
            <td>
                Deprature to India
            </td>
            <td>
                ${ticketDate.toDateString()}
            </td>
        </tr>
        <tr>
            <td>
                Arrival on India
            </td>
            <td>
                ${reachDelhiDate.toDateString()}  
            </td>
        </tr>
    </table>
    `;
  document.getElementById("result").innerHTML = resultText;
}
