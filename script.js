/* ============================================================
   THINK LIKE AN ENGINEER
   COMMAND CENTER ENGINE
   ============================================================

   IMPORTANT:
   This entire dashboard is a FRONT-END DEMO.

   No real APIs are connected.
   No Stripe data is retrieved.
   No social accounts are accessed.
   No Gmail data is retrieved.
   No real webhooks are received.

   Everything below is locally simulated.
   ============================================================ */


/* ============================================================
   CONFIGURATION
   ============================================================ */

const CONFIG = {

  eventInterval: 2300,

  visitorInterval: 1700,

  salesInterval: 3100,

  revenueInterval: 4200,

  maxEvents: 9,

  maxSales: 6

};


/* ============================================================
   STATE
   ============================================================ */

const state = {

  revenue: 8420,

  sales: 247,

  visitors: 64,

  subscribers: 3842,

  eventCount: 0,

  currentView: "OVERVIEW",

  topologyPulse: true

};


/* ============================================================
   DATA
   ============================================================ */

const customerNames = [

  "Alex M.",
  "Sofia R.",
  "Marcus T.",
  "Daniel K.",
  "Jayden P.",
  "Noah L.",
  "Mia C.",
  "Ethan W.",
  "Camila G.",
  "Liam B.",
  "Aiden S.",
  "Isabella R.",
  "Mateo D.",
  "Olivia H.",
  "Lucas F.",
  "Emma J.",
  "Julian P.",
  "Ava N.",
  "Ryan C.",
  "Maya V.",
  "Nathan Z.",
  "Elena M.",
  "Chris A.",
  "Valeria T.",
  "Jordan K.",
  "Adrian S.",
  "Layla P.",
  "Diego R.",
  "Nora W.",
  "Isaac G."

];


const courses = [

  "Take Control of Your Education",

  "Think Like an Engineer",

  "Engineering Mathematics Roadmap",

  "Learn Electronics by Building",

  "The Self-Education System",

  "Python for Engineers",

  "Circuit Analysis Foundations",

  "Embedded Systems Starter",

  "How to Build Your First PCB",

  "Engineering Study Workflow",

  "Data Science for Students",

  "AI as a Tutor",

  "Project-Based Learning",

  "Physics Through Projects",

  "Digital Logic Fundamentals",

  "Engineering Problem Solving",

  "Build Your First Embedded System",

  "Engineering Research Workflow",

  "Electronics From Zero",

  "The Student Engineer Roadmap"

];


const eventTypes = [

  {
    icon: "$",
    title: "Checkout completed",
    description: "New course purchase processed successfully.",
    tag: "stripe.checkout.completed"
  },

  {
    icon: "▶",
    title: "YouTube subscriber",
    description: "Channel subscriber count increased.",
    tag: "youtube.subscriber.created"
  },

  {
    icon: "◎",
    title: "Instagram engagement",
    description: "New interaction detected on published content.",
    tag: "instagram.engagement"
  },

  {
    icon: "✉",
    title: "Email event received",
    description: "Automated education sequence event processed.",
    tag: "gmail.message.received"
  },

  {
    icon: "♪",
    title: "TikTok traffic spike",
    description: "Short-form content generated additional visitors.",
    tag: "tiktok.analytics.updated"
  },

  {
    icon: "✦",
    title: "AI agent completed task",
    description: "Content Engine completed scheduled workflow.",
    tag: "agent.task.completed"
  },

  {
    icon: "▦",
    title: "Spreadsheet synchronized",
    description: "Business metrics synchronized successfully.",
    tag: "sheet.sync.completed"
  },

  {
    icon: "⌘",
    title: "Website visitor",
    description: "New active visitor entered the education hub.",
    tag: "website.visitor.created"
  },

  {
    icon: "C",
    title: "Claude workflow completed",
    description: "Research automation completed processing.",
    tag: "claude.workflow.completed"
  },

  {
    icon: "H",
    title: "Video render completed",
    description: "Higgsfield rendering queue completed a task.",
    tag: "higgsfield.render.completed"
  }

];


const nodeMessages = {

  "Think Like an Engineer":
    "Core orchestration layer responding normally.",

  "YouTube":
    "YouTube analytics stream synchronized.",

  "Instagram":
    "Instagram content pipeline is operational.",

  "Gmail":
    "Email automation queue is processing.",

  "TikTok":
    "TikTok analytics stream synchronized.",

  "Stripe":
    "Payment event simulation processed successfully.",

  "ChatGPT":
    "AI agent runtime is ready.",

  "Claude":
    "Claude research workflow is standing by.",

  "Higgsfield":
    "Video generation queue is healthy.",

  "Website":
    "Website visitor telemetry is active.",

  "Spreadsheet":
    "Business metrics spreadsheet synchronized."

};


/* ============================================================
   DOM
   ============================================================ */

const revenueElement =
  document.getElementById("revenueValue");

const salesElement =
  document.getElementById("salesValue");

const visitorElement =
  document.getElementById("visitorValue");

const subscriberElement =
  document.getElementById("subscriberValue");

const trafficTotal =
  document.getElementById("trafficTotal");

const eventList =
  document.getElementById("eventList");

const salesList =
  document.getElementById("salesList");

const terminal =
  document.getElementById("terminal");

const toast =
  document.getElementById("toast");

const toastTitle =
  document.getElementById("toastTitle");

const toastMessage =
  document.getElementById("toastMessage");

const modalBackdrop =
  document.getElementById("modalBackdrop");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalEvent =
  document.getElementById("modalEvent");

const modalLatency =
  document.getElementById("modalLatency");

const currentView =
  document.getElementById("currentView");


/* ============================================================
   UTILITIES
   ============================================================ */

function random(min, max) {

  return Math.floor(
    Math.random() * (max - min + 1)
  ) + min;

}


function choose(array) {

  return array[
    Math.floor(
      Math.random() * array.length
    )
  ];

}


function initials(name) {

  return name
    .split(" ")
    .map(part => part[0])
    .join("")
    .slice(0, 2);

}


function formatMoney(value) {

  return "$" + value.toLocaleString(
    "en-US"
  );

}


function currentTime() {

  return new Date().toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }
  );

}


/* ============================================================
   COUNTERS
   ============================================================ */

function renderCounters() {

  revenueElement.textContent =
    formatMoney(state.revenue);

  salesElement.textContent =
    state.sales.toLocaleString();

  visitorElement.textContent =
    state.visitors.toLocaleString();

  subscriberElement.textContent =
    state.subscribers.toLocaleString();

  trafficTotal.textContent =
    state.visitors.toLocaleString();

}


/* ============================================================
   REVENUE SIMULATION
   ============================================================ */

function simulateRevenue() {

  const increase =
    random(2, 12);

  state.revenue += increase;

  renderCounters();

}


/* ============================================================
   VISITOR SIMULATION
   ============================================================ */

function simulateVisitors() {

  const movement =
    random(-4, 5);

  state.visitors += movement;

  state.visitors =
    Math.max(
      31,
      Math.min(
        96,
        state.visitors
      )
    );

  renderCounters();

}


/* ============================================================
   SUBSCRIBER SIMULATION
   ============================================================ */

function simulateSubscribers() {

  if (Math.random() > .35) {

    state.subscribers +=
      random(0, 2);

  }

  renderCounters();

}


/* ============================================================
   SALES
   ============================================================ */

function createSale() {

  const name =
    choose(customerNames);

  const course =
    choose(courses);

  const price =
    choose([
      19,
      24,
      29,
      34,
      39
    ]);

  const sale = {

    name,

    course,

    price

  };

  addSaleToUI(sale);

  state.sales += 1;

  state.revenue += price;

  renderCounters();

}


function addSaleToUI(sale) {

  const row =
    document.createElement("div");

  row.className =
    "sale-row";

  row.innerHTML = `

    <div class="sale-avatar">
      ${initials(sale.name)}
    </div>

    <div class="sale-details">

      <strong>
        ${sale.name}
      </strong>

      <span>
        ${sale.course}
      </span>

    </div>

    <div class="sale-money">
      +${formatMoney(sale.price)}
    </div>

  `;

  salesList.prepend(row);

  while (
    salesList.children.length >
    CONFIG.maxSales
  ) {

    salesList.lastElementChild.remove();

  }

}


/* ============================================================
   EVENT STREAM
   ============================================================ */

function createEvent() {

  const event =
    choose(eventTypes);

  state.eventCount += 1;

  addEventToUI(event);

  writeTerminalEvent(event);

}


function addEventToUI(event) {

  const item =
    document.createElement("div");

  item.className =
    "event-item";

  const timestamp =
    currentTime();

  item.innerHTML = `

    <div class="event-icon">
      ${event.icon}
    </div>

    <div class="event-body">

      <div class="event-title">

        <span>
          ${event.title}
        </span>

        <span class="event-time">
          ${timestamp}
        </span>

      </div>

      <div class="event-description">
        ${event.description}
      </div>

      <span class="event-tag">
        ${event.tag}
      </span>

    </div>

  `;

  eventList.prepend(item);

  while (
    eventList.children.length >
    CONFIG.maxEvents
  ) {

    eventList.lastElementChild.remove();

  }

}


/* ============================================================
   TERMINAL
   ============================================================ */

function writeTerminalEvent(event) {

  const line =
    document.createElement("div");

  line.innerHTML = `

    <span class="terminal-time">
      ${currentTime()}
    </span>

    <span class="terminal-green">
      [EVENT]
    </span>

    ${event.tag}

  `;

  const cursor =
    terminal.querySelector(
      ".terminal-cursor"
    );

  terminal.insertBefore(
    line,
    cursor
  );

  while (
    terminal.children.length >
    14
  ) {

    const first =
      terminal.firstElementChild;

    if (
      first &&
      !first.classList.contains(
        "terminal-cursor"
      )
    ) {

      first.remove();

    } else {

      break;

    }

  }

}


/* ============================================================
   INITIAL EVENTS
   ============================================================ */

function seedEvents() {

  for (
    let i = 0;
    i < 7;
    i++
  ) {

    createEvent();

  }

}


function seedSales() {

  for (
    let i = 0;
    i < 5;
    i++
  ) {

    const sale = {

      name:
        customerNames[
          random(
            0,
            customerNames.length - 1
          )
        ],

      course:
        courses[
          random(
            0,
            courses.length - 1
          )
        ],

      price:
        choose([
          19,
          24,
          29,
          34,
          39
        ])

    };

    addSaleToUI(sale);

  }

}


/* ============================================================
   TOAST
   ============================================================ */

let toastTimeout;


function showToast(
  title,
  message
) {

  toastTitle.textContent =
    title;

  toastMessage.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    toastTimeout
  );

  toastTimeout =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2800
    );

}


/* ============================================================
   MODAL
   ============================================================ */

function openNodeModal(
  nodeName
) {

  modalTitle.textContent =
    nodeName;

  modalDescription.textContent =
    nodeMessages[nodeName] ||
    "Simulated service event.";

  modalEvent.textContent =
    generateEventName(
      nodeName
    );

  modalLatency.textContent =
    random(18, 86) + "ms";

  modalBackdrop.classList.add(
    "open"
  );

}


function closeModal() {

  modalBackdrop.classList.remove(
    "open"
  );

}


function generateEventName(
  nodeName
) {

  const clean =
    nodeName
      .toLowerCase()
      .replace(/\s+/g, ".");

  return clean +
    "." +
    choose([
      "sync.completed",
      "event.received",
      "workflow.completed",
      "telemetry.updated",
      "task.completed"
    ]);

}


/* ============================================================
   NETWORK TOPOLOGY
   ============================================================ */

function drawConnections() {

  const topology =
    document.querySelector(
      ".topology"
    );

  const svg =
    document.getElementById(
      "connectionSvg"
    );

  const core =
    document.querySelector(
      ".core-node"
    );

  if (
    !topology ||
    !svg ||
    !core
  ) {

    return;

  }

  svg.innerHTML = "";

  const topologyRect =
    topology.getBoundingClientRect();

  const coreRect =
    core.getBoundingClientRect();

  const start = {

    x:
      coreRect.left +
      coreRect.width / 2 -
      topologyRect.left,

    y:
      coreRect.top +
      coreRect.height / 2 -
      topologyRect.top

  };


  const nodes =
    document.querySelectorAll(
      ".network-node:not(.core-node)"
    );


  nodes.forEach(
    node => {

      const rect =
        node.getBoundingClientRect();

      const end = {

        x:
          rect.left +
          rect.width / 2 -
          topologyRect.left,

        y:
          rect.top +
          rect.height / 2 -
          topologyRect.top

      };


      const dx =
        end.x - start.x;

      const dy =
        end.y - start.y;

      const distance =
        Math.sqrt(
          dx * dx +
          dy * dy
        );

      const curve =
        Math.min(
          55,
          distance * .12
        );


      const midX =
        (start.x + end.x) / 2;

      const midY =
        (start.y + end.y) / 2;


      const path =
        document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );


      const pathData = `

        M ${start.x} ${start.y}

        Q
        ${midX}
        ${midY - curve}
        ${end.x}
        ${end.y}

      `;


      path.setAttribute(
        "d",
        pathData
      );

      path.classList.add(
        "connection-line"
      );

      svg.appendChild(
        path
      );


      const glow =
        document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );

      glow.setAttribute(
        "d",
        pathData
      );

      glow.classList.add(
        "connection-line",
        "glow"
      );

      svg.appendChild(
        glow
      );

    }
  );

}


/* ============================================================
   NODE INTERACTIONS
   ============================================================ */

function setupNodes() {

  document
    .querySelectorAll(
      ".network-node"
    )
    .forEach(
      node => {

        node.addEventListener(
          "click",
          () => {

            const nodeName =
              node.dataset.node;

            openNodeModal(
              nodeName
            );

          }
        );

      }
    );

}


/* ============================================================
   NAVIGATION
   ============================================================ */

function setupNavigation() {

  document
    .querySelectorAll(
      ".nav-item"
    )
    .forEach(
      item => {

        item.addEventListener(
          "click",
          () => {

            const view =
              item.dataset.view;

            setView(
              view
            );

          }
        );

      }
    );


  document
    .querySelectorAll(
      "[data-view]"
    )
    .forEach(
      button => {

        if (
          button.classList.contains(
            "nav-item"
          )
        ) {

          return;

        }

        button.addEventListener(
          "click",
          () => {

            setView(
              button.dataset.view
            );

          }
        );

      }
    );

}


function setView(
  view
) {

  state.currentView =
    view.toUpperCase();

  currentView.textContent =
    state.currentView;


  document
    .querySelectorAll(
      ".nav-item"
    )
    .forEach(
      item => {

        item.classList.toggle(
          "active",
          item.dataset.view === view
        );

      }
    );


  showToast(
    "View changed",
    `${state.currentView} workspace selected.`
  );

}


/* ============================================================
   REFRESH
   ============================================================ */

function refreshDashboard() {

  createEvent();

  simulateVisitors();

  simulateSubscribers();

  document.getElementById(
    "topologyTime"
  ).textContent =
    "just now";

  showToast(
    "System refreshed",
    "Telemetry synchronized successfully."
  );

}


/* ============================================================
   SIMULATE EVENT BUTTON
   ============================================================ */

function simulateManualEvent() {

  const event =
    choose(eventTypes);

  addEventToUI(event);

  writeTerminalEvent(event);

  if (
    event.title
      .toLowerCase()
      .includes("checkout")
  ) {

    createSale();

  }

  showToast(
    "Event simulated",
    event.tag
  );

}


/* ============================================================
   CLEAR EVENTS
   ============================================================ */

function clearEvents() {

  eventList.innerHTML = "";

  showToast(
    "Event stream cleared",
    "Waiting for new simulated events."
  );

}


/* ============================================================
   CLEAR TERMINAL
   ============================================================ */

function clearTerminal() {

  terminal.innerHTML = `

    <div class="terminal-cursor">

      <span>
        root@think-like-engineer
      </span>

      <b>~$</b>

      <i></i>

    </div>

  `;

  showToast(
    "Terminal cleared",
    "Diagnostic buffer reset."
  );

}


/* ============================================================
   NOTIFICATIONS
   ============================================================ */

function showNotification() {

  showToast(
    "3 notifications",
    "Sales, analytics and agent activity updated."
  );

}


/* ============================================================
   MODAL ACTION
   ============================================================ */

function processModalEvent() {

  const event =
    modalEvent.textContent;

  closeModal();

  writeTerminalEvent({

    tag: event

  });

  showToast(
    "Event processed",
    `${event} returned 200 OK`
  );

}


/* ============================================================
   PERIOD BUTTONS
   ============================================================ */

function setupPeriodButtons() {

  document
    .querySelectorAll(
      ".period"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(
                ".period"
              )
              .forEach(
                item =>
                  item.classList.remove(
                    "active"
                  )
              );

            button.classList.add(
              "active"
            );

            showToast(
              "Chart updated",
              `${button.textContent} performance selected.`
            );

          }
        );

      }
    );

}


/* ============================================================
   CLOCK / TOPOLOGY TIME
   ============================================================ */

function updateTopologyTime() {

  const element =
    document.getElementById(
      "topologyTime"
    );

  if (!element) {
    return;
  }

  element.textContent =
    "just now";

}


/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */

function setupKeyboard() {

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeModal();

      }


      if (
        event.key === "r" &&
        !event.ctrlKey &&
        !event.metaKey
      ) {

        refreshDashboard();

      }

    }
  );

}


/* ============================================================
   BUTTONS
   ============================================================ */

function setupButtons() {

  document
    .getElementById(
      "refreshButton"
    )
    .addEventListener(
      "click",
      refreshDashboard
    );


  document
    .getElementById(
      "simulateButton"
    )
    .addEventListener(
      "click",
      simulateManualEvent
    );


  document
    .getElementById(
      "clearEvents"
    )
    .addEventListener(
      "click",
      clearEvents
    );


  document
    .getElementById(
      "terminalClear"
    )
    .addEventListener(
      "click",
      clearTerminal
    );


  document
    .getElementById(
      "notificationButton"
    )
    .addEventListener(
      "click",
      showNotification
    );


  document
    .getElementById(
      "modalClose"
    )
    .addEventListener(
      "click",
      closeModal
    );


  document
    .getElementById(
      "modalAction"
    )
    .addEventListener(
      "click",
      processModalEvent
    );


  modalBackdrop.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        modalBackdrop
      ) {

        closeModal();

      }

    }
  );

}


/* ============================================================
   RANDOM TERMINAL ACTIVITY
   ============================================================ */

function backgroundDiagnostics() {

  const messages = [

    "Health check passed.",
    "Event bus heartbeat received.",
    "Telemetry buffer synchronized.",
    "Agent runtime heartbeat received.",
    "Analytics aggregation completed.",
    "Content pipeline heartbeat received.",
    "Traffic counters synchronized.",
    "Course catalog cache refreshed."

  ];

  const message =
    choose(messages);

  writeTerminalEvent({

    tag:
      message

  });

}


/* ============================================================
   AUTO EVENTS
   ============================================================ */

function startSimulation() {

  setInterval(
    () => {

      createEvent();

    },
    CONFIG.eventInterval
  );


  setInterval(
    () => {

      simulateVisitors();

    },
    CONFIG.visitorInterval
  );


  setInterval(
    () => {

      simulateSubscribers();

    },
    5000
  );


  setInterval(
    () => {

      simulateRevenue();

    },
    CONFIG.revenueInterval
  );


  setInterval(
    () => {

      if (
        Math.random() > .25
      ) {

        createSale();

      }

    },
    CONFIG.salesInterval
  );


  setInterval(
    () => {

      backgroundDiagnostics();

    },
    5600
  );


  setInterval(
    () => {

      updateTopologyTime();

    },
    3000
  );

}


/* ============================================================
   RESIZE
   ============================================================ */

window.addEventListener(
  "resize",
  () => {

    window.requestAnimationFrame(
      drawConnections
    );

  }
);


/* ============================================================
   INITIALIZATION
   ============================================================ */

function initialize() {

  renderCounters();

  seedEvents();

  seedSales();

  setupNodes();

  setupNavigation();

  setupButtons();

  setupPeriodButtons();

  setupKeyboard();

  startSimulation();

  setTimeout(
    drawConnections,
    150
  );

  setTimeout(
    () => {

      showToast(
        "Command center online",
        "All simulated systems operational."
      );

    },
    700
  );

}


/* ============================================================
   START
   ============================================================ */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initialize
  );

} else {

  initialize();

}
