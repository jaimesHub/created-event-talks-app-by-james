const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// The schedule is 10:00 - 17:40 with 10 min transitions and 60 min lunch break.
const talks = [
  {
    id: 1,
    time: "10:00 - 11:00",
    title: "AI in Production: Scaling Beyond Prototypes",
    speakers: ["Alice Johnson", "Dr. Bob Miller"],
    category: ["AI", "MLOps", "Scale"],
    duration: "60 mins",
    description: "Learn how to transition from local models to scalable production environments, focusing on deployment strategies and model monitoring."
  },
  {
    id: 2,
    time: "11:10 - 12:10",
    title: "The Future of Web Components",
    speakers: ["Charlie Davis"],
    category: ["WebDev", "Frontend"],
    duration: "60 mins",
    description: "An exploration into native web technologies that allow for framework-agnostic component development and high-performance UIs."
  },
  {
    id: 3,
    time: "12:20 - 13:20",
    title: "Cloud Native Security in 2026",
    speakers: ["Emily White"],
    category: ["Cloud", "Security", "DevOps"],
    duration: "60 mins",
    description: "Deep dive into zero-trust architectures and automated vulnerability scanning in containerized environments."
  },
  {
    id: 4, // Lunch break is after Talk 3, from 13:20 to 14:20
    time: "13:20 - 14:20",
    title: "Lunch Break",
    speakers: [],
    category: ["Break"],
    duration: "60 mins",
    description: "Refuel and network with other attendees.",
    isBreak: true
  },
  {
    id: 5,
    time: "14:20 - 15:20",
    title: "Web3 and the Decentralized Internet",
    speakers: ["Frank Moore", "Grace Lee"],
    category: ["Blockchain", "Web3"],
    duration: "60 mins",
    description: "Analyzing the practical applications of decentralized protocols beyond the hype and cryptocurrency."
  },
  {
    id: 6,
    time: "15:30 - 16:30",
    title: "Rust for Systems Engineering",
    speakers: ["Harry Brown"],
    category: ["Rust", "Systems"],
    duration: "60 mins",
    description: "Why memory safety and performance make Rust the primary choice for modern systems development."
  },
  {
    id: 7,
    time: "16:40 - 17:40",
    title: "Edge Computing and Real-time Processing",
    speakers: ["Ivy Green"],
    category: ["Edge", "IoT", "Performance"],
    duration: "60 mins",
    description: "Strategies for reducing latency by moving computation closer to the source of data generation."
  }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/talks', (req, res) => {
  res.json(talks);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
