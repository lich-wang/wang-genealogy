---
schema: wang-person/v1
id: p_nNCdrm1mnJ77Np28ADWXHR
status: active
merged_into: null
display_name: 王衡
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ItGx1YpU1AWYN3yUIx-HTm
        subject_person_id: p_nNCdrm1mnJ77Np28ADWXHR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡，史料所见人物。本项目依据《王锡爵》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_otg8MMSkv-dtaqbiotJoDQ
          claim_id: c_ItGx1YpU1AWYN3yUIx-HTm
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6rRMMp7NH2JAvNN81ZJUFx
        subject_person_id: p_nNCdrm1mnJ77Np28ADWXHR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7AAHwEFrwNYF77RmMM5twE
          claim_id: c_6rRMMp7NH2JAvNN81ZJUFx
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: Q16077684
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cfdLE6n3zNpfutjJhSwpyy
        subject_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_nNCdrm1mnJ77Np28ADWXHR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WE4e3CjCsJ67Gb5vKLd95B
          claim_id: c_cfdLE6n3zNpfutjJhSwpyy
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 娶朱氏。有子王衡，王錫爵為避浮議。
          interpretation_note: null
          source:
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_b5LB8i5ZzNqTwph5kCuvrG
        status: active
        display_name: 王锡爵
        merged_into_person_id: null
  children:
    - claim:
        id: c_eMdRSJb7pg1Mn2SfV4omCF
        subject_person_id: p_nNCdrm1mnJ77Np28ADWXHR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xs7SSNKR6whA118xZvjxN2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9sEQAH2aBcmRnAEhwbfYnM
          claim_id: c_eMdRSJb7pg1Mn2SfV4omCF
          source_id: s_JrZ38wtSfjchSjwE411t3z
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父王衡於万历二十九年（1601年）又中榜眼。
          interpretation_note: null
          source:
            id: s_JrZ38wtSfjchSjwE411t3z
            source_type: website
            title: 中文维基百科：王时敏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%B6%E6%95%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:57:09.351Z
            metadata_json: null
      object_person:
        id: p_Xs7SSNKR6whA118xZvjxN2
        status: active
        display_name: 王時敏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王衡，史料所见人物。本项目依据《王锡爵》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王衡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b5LB8i5ZzNqTwph5kCuvrG | 王锡爵 | accepted |
| children | p_Xs7SSNKR6whA118xZvjxN2 | 王時敏 | accepted |

## 外部来源

- [中文维基百科：王时敏](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%B6%E6%95%8F)
- [中文维基百科：王锡爵](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5)
