 Part 1: Architecture Blueprint

## Background

BVEP2 is a research platform used to run browser-based experiments. A participant may, for example, open the collage experiment website and complete a series of tasks.

Participants are anonymous. The research team does not know their real-world identity, but each active experiment session has an internal anonymous participant/session identifier.

While a participant is completing an experiment, a researcher may need to communicate with them in real time. Messages from the researcher should appear inside the experiment page without requiring the participant to leave or refresh it. The participant should also be able to reply from the page. Researchers communicate through a separate researcher dashboard.

## Task

Design and present an architecture blueprint for adding this interactive chat capability to BVEP2.

Your blueprint should show the main system components, the data exchanged between them, and how the system connects the correct researcher to the correct anonymous experiment session. WebSocket communication must be part of the design.

You do not need to write code.

👇👇👇👇👇👇👇👇👇👇👇

## Scenarios Your Design Must Support - Part 1

1. A participant starts the collage experiment. Their browser establishes an anonymous experiment session and becomes available for live messaging.


2. A researcher sees that active session in the researcher dashboard and sends a message. The message appears on the participant's current experiment page in real time.
3. The participant replies, and the reply appears in the correct conversation in the researcher dashboard.


4. Several participants run the experiment at the same time. Messages must never be delivered to the wrong participant or researcher.


5. The participant temporarily loses their connection or refreshes the page, then reconnects and continues the same experiment session without losing relevant messages.


6. A participant is no longer active when a researcher sends a message. Explain whether the message is stored, expires, or is shown if the participant returns.

## Blueprint Requirements

Include the following:

- Experiment website with an embedded chat component
- Researcher dashboard
- Backend/API layer
- WebSocket layer and connection lifecycle
- Anonymous participant/session identification
- Researcher authentication and authorization
- Database/storage and the main records you would store
- Message routing, delivery acknowledgement, and basic message states
- Reconnect, refresh, offline, expired-session, and failed-message behavior
- How the design would work across multiple backend/WebSocket server instances

For the main message flow, show what data is sent when:

- The experiment page connects
- The researcher opens a participant conversation
- Either side sends a message
- The server confirms or rejects delivery
- A disconnected client reconnects



👇👇👇👇👇👇👇👇👇👇👇

## Security - Part 2 

Add a security section to your blueprint that explains:

- How anonymous experiment-session tokens are created, validated, scoped, and expired
- How researchers are authenticated and restricted to experiments they are allowed to access
- How you prevent one participant from reading or sending messages for another session
- What the backend is allowed to know and store about anonymous participants and message content
- How you would protect the system from impersonation, token theft, spam, and unauthorized WebSocket connections
- Whether message encryption is needed in transit, at rest, or end to end, and why



## Presentation Notes

You may use one or more diagrams with short supporting notes.

Focus on a clear, practical architecture and data flow. State reasonable assumptions where product details are not provided.
