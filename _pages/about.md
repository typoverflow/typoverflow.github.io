---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a Ph.D. student at Georgia Institute of Technology, advised by [Prof. Bo Dai](https://bo-dai.github.io/). Before starting my Ph.D., I received my M.Sc. and B.Sc. degree from Nanjing University. 

My research focus lies at the intersection of **reinforcement learning (RL)**, **representation learning** and **generative models**. A large proportion of my research is about leveraging the power of generative models to transform the RL pipeline, by using modern architectures and training techniques to improve the efficiency and scalability of RL algorithms. Apart from that, I had industrial experience of using RL to solve real-world problems, such as Game AI design @ [Bytedance](https://www.bytedance.com/) and agentic training for LLMs @ [Moonshot.AI](https://www.moonshot.ai/).

Feel free to contact me if you are interested in my research!


# 🔥 News
- *2025.05*: &nbsp;🎉🎉 BDPO is accepted by ICML 2025!
- *2025.05*: &nbsp;🎉🎉 RIBBO is accepted by IJCAI 2025!
- *2024.09*: &nbsp;🎉🎉 DiffSR is accepted by NeurIPS 2024!
- *2024.03*: &nbsp;🎉🎉 ReDM is accepted by ICLR 2024!

# 📝 Publications 

<!------------------->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2025</div><img src='images/BDPO/bdpo.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Behavior-Regularized Diffusion Policy Optimization for Offline Reinforcement Learning](https://arxiv.org/abs/2502.04778)

**Chen-Xiao Gao**, Chenyang Wu, Mingjun Cao, Chenjun Xiao, Yang Yu, Zongzhang Zhang

[**Code**](https://github.com/typoverflow/flow-rl) | [**Project Page**](https://ai.gaocx.io/bdpo)<strong><span class='show_paper_citations' data='1rG07lQAAAAJ:eQOLeE2rZwMC'></span></strong>
- We Introduce pathwise KL to estimate and control the divergences between two diffusion policies;
- Leveraging pathwise KL, we propose an actor-critic framework with two-time-scale temporal difference learning to efficiently optimize diffusion policies with behavior regularization.
</div>
</div>

<!------------------->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2025</div><img src='images/RIBBO/workflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Reinforced In-Context Black-Box Optimization](https://arxiv.org/abs/2402.17423)

Lei Song*, **Chen-Xiao Gao\***, Ke Xue, Chenyang Wu, Dong Li, Jianye Hao, Zongzhang Zhang, Chao Qian

[**Code**](https://github.com/songlei00/RIBBO) <strong><span class='show_paper_citations' data='1rG07lQAAAAJ:_FxGoFyzp5QC'></span></strong>
- RIBBO distills and reinforces existing black-box optimization algorithms by fitting regret augmented learning histories of the behavior algorithms.
- By specifying a suitable regret-to-go, RIBBO generate better query decisions by auto-regressively predicting the next points.
</div>
</div>

<!------------------->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/Diff-SR/diffusion.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Diffusion Spectral Representation for Reinforcement Learning
](https://arxiv.org/abs/2406.16121)

**Chen-Xiao Gao\***, Dmitry Shribak*, Yitong Li, Chenjun Xiao, Bo Dai

[**Code**](https://github.com/haotiansun14/rl-rep) | [**Project**](https://haotiansun14.github.io/rl-rep-page/)<strong><span class='show_paper_citations' data='1rG07lQAAAAJ:eQOLeE2rZwMC'></span></strong>
- We leverages the flexibility of diffusion models and extract spectral representations (Diff-SR) that capture the dynamics structure.
- Diff-SR is able to represent the value function of any policy sufficiently, paving the way for efficient planning and exploration for downstream RL optimization. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">preprint</div><img src='images/HPL/workflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Hindsight Preference Learning for Offline Preference-based Reinforcement Learning](https://arxiv.org/abs/2407.04451)

**Chen-Xiao Gao**, Shengjun Fang, Chenjun Xiao, Yang Yu, Zongzhang Zhang

[**Code**](https://github.com/typoverflow/WiseRL) <strong><span class='show_paper_citations' data='1rG07lQAAAAJ:Y0pCki6q_DkC'></span></strong>
- We identified shortages of the widely used preference modeling method in existing PbRL settings.
- HPL leverages the vast unlabeled dataset to facilitate credit assignment, providing robust and advantageous rewards for downsteam RL optimization.
</div>
</div>

<!------------------->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2024</div><img src='images/CPR/workflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Efficient and Stable Offline-to-online Reinforcement Learning via Continual Policy Revitalization](https://www.ijcai.org/proceedings/2024/477)

Rui Kong, Chenyang Wu, **Chen-Xiao Gao**, Yang Yu, Zongzhang Zhang

[**Code**](https://github.com/LyndonKong/CPR) <strong><span class='show_paper_citations' data='1rG07lQAAAAJ:W7OEmFMy1HYC'></span></strong>
- We identify two pain points in offline-to-online reinforcement learning: 1) value overestimation causes fluctuations during learning, and 2) the primacy bias hinders the policy from further improvement.
- With the proposed Continual Policy Revitalization, we can fine-tune pret-rained policies efficiently and stably.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2024</div><img src='images/ReDM/workflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Policy Rehearsing: Training Generalizable Policies for Reinforcement Learning](https://openreview.net/pdf?id=m3xVPaZp6Z)

Chengxing Jia*, **Chen-Xiao Gao\***, Hao Yin, Fuxiang Zhang, Xiong-Hui Chen, Tian Xu, Lei Yuan, Zongzhang Zhang, Yang Yu, Zhi-Hua Zhou

<!-- [**Code**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- We explore the idea of *rehearsal* for offline reinforcement learning, which generates diverse while eligible dynamics models using extremely limited amount of data and optimizes an contextual policy with the generated models. 
- By recognizing the context, the policy is able to generalize to the environment at hand during the online stage. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAMAS 2024</div><img src='images/ReDA/workflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


[Disentangling Policy from Offline Task Rpresentation Learning via Adversarial Data Augmentation](https://arxiv.org/abs/2403.07261)

Chengxing Jia, Fuxiang Zhang, Yi-Chen Li, **Chen-Xiao Gao**, Xu-Hui Liu, Lei Yuan, Zongzhang Zhang, Yang Yu.

[**Code**](https://github.com/LAMDA-RL/ReDA) <strong><span class='show_paper_citations' data='1rG07lQAAAAJ:zYLM7Y9cAGgC'></span></strong>
- Learned task representations from previous OMRL methods tend to correlate spuriously with the behavior policy instead of the task. 
- We disentangle the effect of behavior policies from representation learning by adversarial data augmentation.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='images/ACT/arch.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ACT: Empowering Decision Transformer with Dynamic Programming via Advantage Conditioning](https://ojs.aaai.org/index.php/AAAI/article/view/29101/30081)

**Chen-Xiao Gao**, Chenyang Wu, Mingjun Cao, Rui Kong, Zongzhang Zhang, Yang Yu

[**Code**](https://github.com/LAMDA-RL/ACT) <strong><span class='show_paper_citations' data='1rG07lQAAAAJ:2osOgNQ5qMEC'></span></strong>
- We identify failure modes of existing return-conditioned decision-making systems, and suggest to use advantages as the property token for conditional generation.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='images/GENTLE/workflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Generalizable Task Representation Learning for Offline Meta-Reinforcement Learning with Data Limitations](https://ojs.aaai.org/index.php/AAAI/article/view/29658/31121)

Renzhe Zhou, **Chen-Xiao Gao**, Zongzhang Zhang, Yang Yu

[**Code**](https://github.com/ZRZ-Unknow/GENTLE) <strong><span class='show_paper_citations' data='1rG07lQAAAAJ:zYLM7Y9cAGgC'></span></strong>
- Real-world RL applications are with data limitations, such as limited tasks and limited behavior diversity. 
- We develop GENTLE, a simple yet effective task representation learning method to extract generalizable and accurate task representations from offline contextual datasets. 
</div>
</div>

# 📝 Academic Services
- Reviewer for conferences: ICML 2025-2026, NeurIPS 2025, ICLR 2025-2026 IJCAI 2025, AAAI 2025-2026, UAI 2025
- Reviewer for journals: TMLR
- Teaching Assistant: [CX4240 - Computing for Data Analysis](https://bo-dai.github.io/CX4240-spring2026/)

# 🎖 Honors and Awards
- *2021.12* National Scholarship
- *2020.10* Chow Tai Fook Scholarship
- *2020.10* People's Scholarship of Nanjing University

# 📖 Educations
- *2022.09 - now*, Computer Science, Nanjing University
- *2018.09 - 2022.06*, Computer Science, Nanjing University

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

<!-- # 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->