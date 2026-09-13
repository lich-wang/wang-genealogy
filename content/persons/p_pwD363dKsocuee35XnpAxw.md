---
schema: wang-person/v1
id: p_pwD363dKsocuee35XnpAxw
status: active
merged_into: null
display_name: 王继严
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QSjE1h5tZgBurEcYMUJ75G
        subject_person_id: p_pwD363dKsocuee35XnpAxw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王继严（？—941年），五代十国時期光州固始（今河南固始）人，閩國惠宗王延钧之子。母亲劉華。 王继严官至检校尚书、户部员外郎。康宗王继鹏封他为建王，判六军诸卫事。深得士卒之心，康宗猜忌，罢除他的兵权。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fuBwhwAfFPmopJT5cY-2-_
          claim_id: c_QSjE1h5tZgBurEcYMUJ75G
          source_id: s_Z36_sAzP8l0KuYsvX9yf86
          stance: supports
          locator: 导言
          quotation: 王继严（？—941年），五代十国時期光州固始（今河南固始）人，閩
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_Z36_sAzP8l0KuYsvX9yf86
            source_type: website
            title: 中文维基百科：王继严
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A7%E4%B8%A5
            external_identifier: Q16077290
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T09:29:27.764Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UjbWnBAKih3QAkXM25HPfH
        subject_person_id: p_pwD363dKsocuee35XnpAxw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王继严
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tUcyL8nf9zUZTJCPegtxnM
          claim_id: c_UjbWnBAKih3QAkXM25HPfH
          source_id: s_tmY55Xifxk8PU3d94KpPxg
          stance: supports
          locator: Q16077290
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_tmY55Xifxk8PU3d94KpPxg
            source_type: api_record
            title: 维基数据：王继严（Q16077290）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077290
            external_identifier: Q16077290
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A7%E4%B8%A5
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_96trMuDX7GZmZ5S7nDTh9P
        subject_person_id: p_BXK4dNohPJQTYjtEjv756p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pwD363dKsocuee35XnpAxw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fEUM6uFDhqYXKfuaQwL9Mb
          claim_id: c_96trMuDX7GZmZ5S7nDTh9P
          source_id: s_jXmk1TLmajvZF3VibGyjd5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jXmk1TLmajvZF3VibGyjd5
            source_type: api_record
            title: 维基数据：王延钧（Q2109927）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2109927
            external_identifier: Q2109927
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:00.764Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E9%88%9E
        - id: cs_1dtKyBqestV427mm6cKJB6
          claim_id: c_96trMuDX7GZmZ5S7nDTh9P
          source_id: s_tmY55Xifxk8PU3d94KpPxg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_BXK4dNohPJQTYjtEjv756p
        status: active
        display_name: 王延钧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王继严

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王继严（？—941年），五代十国時期光州固始（今河南固始）人，閩國惠宗王延钧之子。母亲劉華。 王继严官至检校尚书、户部员外郎。康宗王继鹏封他为建王，判六军诸卫事。深得士卒之心，康宗猜忌，罢除他的兵权。 | accepted |
| name.primary | 王继严 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BXK4dNohPJQTYjtEjv756p | 王延钧 | accepted |

## 外部来源

- [维基数据：王继严（Q16077290）](https://www.wikidata.org/wiki/Q16077290)
- [维基数据：王延钧（Q2109927）](https://www.wikidata.org/wiki/Q2109927)
- [中文维基百科：王继严](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%A7%E4%B8%A5)
