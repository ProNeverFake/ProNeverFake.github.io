---
title: "SMART: Zero-Shot Sim-to-Real Articulated Object Manipulation via Large-Scale Synthetic Pretraining"
collection: publications
category: technical_reports
permalink: /publication/smart-zero-shot-sim-to-real-articulated-object-manipulation-via-large-scale-synthetic-pretraining
excerpt: "SMART is a scalable system for synthesizing high-quality demonstrations for articulated-object manipulation. It builds on TeleSim, an articulation-aware simulation platform, and combines agentic task generation with distributed data synthesis to create SMART-Data, containing over 1 million demonstrations across 44 tasks, five robot setups, and 2,507 articulated objects. A VLA model pretrained on this dataset achieves competitive simulation performance and zero-shot sim-to-real transfer on real-world articulated-object tasks."
abstract: >-
  Interacting with articulated objects is essential for intelligent embodiments, but real-world large-scale demonstration collection for this remains challenging due to the precise contact and constraint-following motions involved. Although simulation provides a promising alternative, existing synthetic data efforts cover limited articulated-object categories, while general-purpose synthesis pipelines lack explicit designs for part-level semantics and articulation constraints, limiting the adoption of agentic task generation and scalable synthesis of high-quality articulated-manipulation demonstrations. To bridge this gap, we introduce SMART, a scalable system for synthesizing high-quality demonstrations for articulated-object manipulation. At its core, we develop TeleSim, a simulation platform with articulation-aware design that enables effective task generation and efficient demonstration collection. Building on TeleSim, we apply agentic task generation and design a scalable distributed synthesis system, using them to synthesize SMART-Data, comprising over 1M demonstrations across 44 tasks, 5 robot setups, and 2,507 articulated objects. The VLA model pretrained on SMART-Data shows competitive performance on simulation benchmarks and achieves zero-shot sim-to-real transfer and scalable performance in real-world articulated-object manipulation tasks. This highlights the potential of synthetic demonstrations in providing effective and scalable supervision for improving VLA model performance in contact-rich articulated-object manipulation.
year: 2026
venue: "Technical Report"
sort_order: 1
arxivurl: "https://arxiv.org/abs/2610.07652"
dataseturl: "https://huggingface.co/datasets/TeleEmbodied/SMART-Data"
projecturl: "https://teamillusion-smart.github.io/"
authors: "Jicong Ao, Shuhan Jiang, Yuling Zhong, Yanwen Liu, Yuhan Gao, Jiangyuan Zhao, Yang Zhang, Shiqiang Zhu, Chenjia Bai, Xuelong Li"
---
