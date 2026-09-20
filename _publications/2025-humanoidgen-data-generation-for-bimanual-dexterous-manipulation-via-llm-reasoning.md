---
title: "HumanoidGen: Data generation for bimanual dexterous manipulation via LLM reasoning"
collection: publications
category: conferences
permalink: /publication/humanoidgen-data-generation-for-bimanual-dexterous-manipulation-via-llm-reasoning
excerpt: "HumanoidGen automates task creation and demonstration collection for dual-arm humanoids with dexterous hands. It combines atomic operations, spatial annotations, and LLM planning with a Monte Carlo tree search variant to generate long-horizon action constraints. Experiments show that the collected dataset supports scaling 2D and 3D diffusion policies."
abstract: >-
  For robotic manipulation, existing robotics datasets and simulation benchmarks predominantly cater to robot-arm platforms. However, for humanoid robots equipped with dual arms and dexterous hands, simulation tasks and high-quality demonstrations are notably lacking. Bimanual dexterous manipulation is inherently more complex, as it requires coordinated arm movements and hand operations, making autonomous data collection challenging. This paper presents HumanoidGen, an automated task creation and demonstration collection framework that leverages atomic dexterous operations and LLM reasoning to generate relational constraints. Specifically, we provide spatial annotations for both assets and dexterous hands based on the atomic operations, and perform an LLM planner to generate a chain of actionable spatial constraints for arm movements based on object affordances and scenes. To further improve planning ability, we employ a variant of Monte Carlo tree search to enhance LLM reasoning for long-horizon tasks and insufficient annotation. In experiments, we create a novel benchmark with augmented scenarios to evaluate the quality of the collected data. The results show that the performance of the 2D and 3D diffusion policies can scale with the generated dataset.
year: 2025
venue: "NeurIPS"
sort_order: 4
authors: "Zhi Jing, Siyuan Yang, Jicong Ao, Ting Xiao, Yu-Gang Jiang, Chenjia Bai"
arxivurl: "https://arxiv.org/abs/2507.00833"
doiurl: "https://doi.org/10.52202/085713-5220"
projecturl: "https://openhumanoidgen.github.io"
codeurl: "https://github.com/TeleHuman/HumanoidGen"
---
