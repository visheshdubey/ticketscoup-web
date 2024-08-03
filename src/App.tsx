import { Route, Routes } from "react-router-dom";

import OverviewPage from "./pages/overview/overview-page";
import RootLayout from "./pages/root-layout";
import Chat from "./pages/tickets/ticket-chat";
import TicketLayout from "./pages/tickets/ticket-layout";
import TicketTable from "./pages/tickets/ticket-table";

function App() {
  return (
    <Routes>
      {/* {
        isSignedIn ?
          <Route path="/" element={<Layout />}>

            <Route index element={<Dashboard />} />
            <Route path="Profile" element={<Profile />} />

            <Route path="Ticket" >
              <Route index element={<Tickets />} />
              <Route path=":id" element={<SidebarLayout />} >
                <Route index element={<Ticket />} />
                <Route path=":tab" element={<Ticket />} />
              </Route>
              <Route path="create" element={<CreateTicket />} />
            </Route>

            <Route path="Notification" >
              <Route index element={<Notifications />} />
            </Route>

            <Route path="Staff" >
              <Route index element={<Staffs />} />
              <Route path=":id" element={<Staff />} />
              <Route path="create" element={<CreateStaff />} />
            </Route>

            <Route path="Organization" >
              <Route index element={<Organizations />} />
              <Route path=":id" element={<Organization />} />
              <Route path="create" element={<CreateOrganization />} />
            </Route>

          </Route>
          : */}
      <Route path="/" element={<RootLayout />}>
        <Route path="tickets">
          <Route index element={<TicketTable />} />
          <Route path=":id" element={<TicketLayout />}>
            <Route index element={<Chat />} />
            <Route path=":tab" element={<Chat />} />
          </Route>
        </Route>
        <Route path="/">
          <Route index element={<OverviewPage />} />
        </Route>
      </Route>
      {/* } */}
    </Routes>
  );
}

export default App;
