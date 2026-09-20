---
title: "AssemLM: A Spatial Reasoning Multimodal Large Language Model for Robotic Assembly"
collection: publications
category: conferences
permalink: /publication/assemlm-a-spatial-reasoning-multimodal-large-language-model-for-robotic-assembly
excerpt: "AssemLM is a spatial multimodal large language model for fine-grained robotic assembly that combines assembly manuals, point clouds, and instructions to predict task-critical 6D poses. It uses a specialized point-cloud encoder for geometric and rotational reasoning and introduces AssemBench, a benchmark with over 900K multimodal samples and precise pose annotations. Experiments and real-robot evaluations demonstrate state-of-the-art 6D pose reasoning and support for multi-step assembly."
abstract: >-
  Spatial reasoning is a fundamental capability for embodied intelligence, especially for fine-grained manipulation tasks such as robotic assembly. Recent methods based on vision-language models (VLMs) largely rely on coarse 2D perception and struggle to perform accurate reasoning over complex 3D geometry. To address this limitation, we propose AssemLM, a spatial multimodal large language model for robotic assembly that integrates assembly manuals, point clouds, and textual instructions to predict task-critical 6D assembly poses with explicit geometric understanding. To bridge raw 3D perception and high-level linguistic reasoning, AssemLM employs a specialized point cloud encoder to extract fine-grained geometric and rotational features for accurate 3D spatial reasoning in assembly tasks. In addition, we introduce AssemBench, a large-scale benchmark for assembly-oriented spatial reasoning with over 900K multimodal samples and precise 6D pose annotations, extending evaluation from 2D grounding to full 3D geometric inference. Extensive experiments and real-robot evaluations demonstrate that AssemLM achieves state-of-the-art 6D pose reasoning performance and effectively supports fine-grained, multi-step assembly tasks in real-world settings. Code, models, and the AssemBench dataset will be made publicly available.
year: 2026
venue: "CoRL"
sort_order: 2
authors: "Zhi Jing, Jinbin Qiao, Ouyang Lu, Jicong Ao, Shuang Qiu, Huazhe Xu, Yu-Gang Jiang, Chenjia Bai"
arxivurl: "https://arxiv.org/abs/2604.08983"
projecturl: "https://assemlmhome.github.io"
codeurl: "https://github.com/TeleHuman/AssemLM"
---
