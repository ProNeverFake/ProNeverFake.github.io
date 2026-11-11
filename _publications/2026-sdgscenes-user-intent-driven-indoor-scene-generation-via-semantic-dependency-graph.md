---
title: "SDGScenes: User-Intent-Driven Indoor Scene Generation via Semantic Dependency Graph"
collection: publications
category: manuscripts
permalink: /publication/sdgscenes-user-intent-driven-indoor-scene-generation-via-semantic-dependency-graph
excerpt: "SDGScenes generates physically plausible indoor scenes that follow user intent. It encodes scene requirements as a Semantic Dependency Graph to capture module and commonsense relationships, then uses a vision-language model and an optimization solver to infer spatial constraints and place objects. Quantitative and qualitative results show improvements over prior scene-generation methods."
abstract: >-
  3D indoor scene generation aims to generate scenes that are physically plausible, consistent with common sense, and well-aligned with user intent. However, existing methods struggle to effectively capture user intent, as coarse-grained instruction methods yield plausible but intent-missing layouts, while fine-grained instruction methods reflect user intent but rely on manually defined relationships that burden users and compromise physical plausibility in complex scenes. To address this challenge, we propose SDGScenes, a novel framework that automatically infers and synthesizes complete indoor scenes from user intent and commonsense knowledge. Our approach firstly encodes scene requirements using a Semantic Dependency Graph (SDG), a representation that captures both user-intent and module relationships. Sequentially, guided by the SDG, a Vision-Language Model (VLM) infers spatial constraints through commonsense reasoning. Finally, an optimization solver is applied to optimize object placement based on SDG-guided spatial constraints, including collision avoidance, boundary compliance, and reachability. Both quantitative and qualitative experimental results demonstrate that SDGScenes outperforms state-of-the-art methods in satisfying user intent.
year: 2026
venue: "Pattern Recognition"
sort_order: 3
authors: "Yuhan Gao, Xueying Li, Jicong Ao, Chao Yu, Peng Liu, Chenjia Bai"
doiurl: "https://doi.org/10.1016/j.patcog.2026.113674"
---
