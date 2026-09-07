---
schema: wang-person/v1
id: p_UKCPmXtCJMiV3Cvg9Yu32M
status: active
merged_into: null
display_name: 王猷
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FWTeGhYKZSTiFUaqrfn8XM
        subject_person_id: p_UKCPmXtCJMiV3Cvg9Yu32M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猷（？—？），字世伦，琅邪郡临沂县（今山东省临沂市）人，东晋卫将军、都督琅邪水陆军事、散骑常侍、东亭献穆侯王珣的孙子，刘宋光禄大夫、东亭侯王抑的儿子。 王猷在刘宋官至侍中、光禄大夫、廷尉卿，他的儿子王瞻六岁时跟随老师学习，有歌舞伎经过课堂门前，王瞻的同学都出去观看，只有王瞻不去看，学习诵读和之前一样。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ybrK_lVzm8Jl-bIxSyU4Wo
          claim_id: c_FWTeGhYKZSTiFUaqrfn8XM
          source_id: s_JKND23tJiCYDsGZvSfPm88
          stance: supports
          locator: 导言
          quotation: 王猷（？—？），字世伦，琅邪郡临沂县（今山东省临沂市）人，东晋卫
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_JKND23tJiCYDsGZvSfPm88
            source_type: website
            title: 中文维基百科：王猷 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%B7_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.310Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ds2CqcLTx1B7Aq98EMRjMm
        subject_person_id: p_UKCPmXtCJMiV3Cvg9Yu32M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猷
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rkZt6H4EzjBk5zGFAxjys2
          claim_id: c_Ds2CqcLTx1B7Aq98EMRjMm
          source_id: s_JKND23tJiCYDsGZvSfPm88
          stance: supports
          locator: Q18118175
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UAWG5nFc22fWx3RBt6c4bZ
        subject_person_id: p_JmPKYX8ToTfGjrcSpJqqum
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_UKCPmXtCJMiV3Cvg9Yu32M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K8Ex7H9s81NoeA8fo81KqF
          claim_id: c_UAWG5nFc22fWx3RBt6c4bZ
          source_id: s_JKND23tJiCYDsGZvSfPm88
          stance: supports
          locator: 条文：之子/之女
          quotation: 王猷，字世伦，琅邪郡临沂县（今山东省临沂市）人，东晋卫将军、都督琅邪水陆军事、散骑常侍、东亭献穆侯王珣的孙子，刘宋光禄大夫、东亭侯王抑的儿子
          interpretation_note: null
          source:
            id: s_JKND23tJiCYDsGZvSfPm88
            source_type: website
            title: 中文维基百科：王猷 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%B7_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.310Z
            metadata_json: null
      object_person:
        id: p_JmPKYX8ToTfGjrcSpJqqum
        status: active
        display_name: 王抑
        merged_into_person_id: null
  children:
    - claim:
        id: c_MhtNTMbHMNPiSZ7cu1d5dB
        subject_person_id: p_UKCPmXtCJMiV3Cvg9Yu32M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rvrPx4SBmB7G663buP8VfK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XB7L26eGsBLyD9jgDZHJrR
          claim_id: c_MhtNTMbHMNPiSZ7cu1d5dB
          source_id: s_N6pCeEd3CvKnXMwyJREMNJ
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父親王猷曾擔任廷尉卿、侍中、光祿大夫
          interpretation_note: null
          source:
            id: s_N6pCeEd3CvKnXMwyJREMNJ
            source_type: website
            title: 中文维基百科：王瞻
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:52.699Z
            metadata_json: null
        - id: cs_owMeahFiuFRx9y5Vem2pL8
          claim_id: c_MhtNTMbHMNPiSZ7cu1d5dB
          source_id: s_JKND23tJiCYDsGZvSfPm88
          stance: supports
          locator: 条文：子
          quotation: 王猷在刘宋官至侍中、光禄大夫、廷尉卿，他的儿子王瞻六岁时跟随老师学习，有歌舞伎经过课堂门前，王瞻的同学都出去观看，只有王瞻不去看，学习诵读和之前一样
          interpretation_note: null
          source:
            id: s_JKND23tJiCYDsGZvSfPm88
            source_type: website
            title: 中文维基百科：王猷 (刘宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%B7_(%E5%88%98%E5%AE%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:47.310Z
            metadata_json: null
      object_person:
        id: p_rvrPx4SBmB7G663buP8VfK
        status: active
        display_name: 王瞻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王猷（？—？），字世伦，琅邪郡临沂县（今山东省临沂市）人，东晋卫将军、都督琅邪水陆军事、散骑常侍、东亭献穆侯王珣的孙子，刘宋光禄大夫、东亭侯王抑的儿子。 王猷在刘宋官至侍中、光禄大夫、廷尉卿，他的儿子王瞻六岁时跟随老师学习，有歌舞伎经过课堂门前，王瞻的同学都出去观看，只有王瞻不去看，学习诵读和之前一样。 | accepted |
| name.primary | 王猷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JmPKYX8ToTfGjrcSpJqqum | 王抑 | accepted |
| children | p_rvrPx4SBmB7G663buP8VfK | 王瞻 | accepted |

## 外部来源

- [中文维基百科：王猷 (刘宋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%B7_(%E5%88%98%E5%AE%8B))
- [中文维基百科：王瞻](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9E%BB)
