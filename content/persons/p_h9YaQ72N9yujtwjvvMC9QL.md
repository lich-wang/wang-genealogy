---
schema: wang-person/v1
id: p_h9YaQ72N9yujtwjvvMC9QL
status: active
merged_into: null
display_name: 王晏
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7wZfQd68dokW6W9ITKEPOg
        subject_person_id: p_h9YaQ72N9yujtwjvvMC9QL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏（5世纪—497年3月17日），字休默，一字士彦，南朝齐琅邪郡临沂县（今山东省临沂市北）人，南北朝文学家、书法家，齐明帝时尚书令。王弘之的孙子。 刘宋末年为建安国左常侍，转任车骑，王晏後为郢州主簿，渐受长史萧赜亲待。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fL_Ms8eRzk3eGp_th_2K1y
          claim_id: c_7wZfQd68dokW6W9ITKEPOg
          source_id: s_z0L9OCfAiMqfMPgGi_CVrX
          stance: supports
          locator: 导言
          quotation: 王晏（5世纪—497年3月17日），字休默，一字士彦，南朝齐琅邪
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_z0L9OCfAiMqfMPgGi_CVrX
            source_type: website
            title: 中文维基百科：王晏 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%8F_(%E5%8D%97%E6%9C%9D)
            external_identifier: Q22814799
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JzBsf9GzQzWNLBYdsCE4pm
        subject_person_id: p_h9YaQ72N9yujtwjvvMC9QL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 5世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 0401-01-01
            latest: 0500-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8D2eWVfP3eJ8gNT6yzqot4
          claim_id: c_JzBsf9GzQzWNLBYdsCE4pm
          source_id: s_A8SJ9LK95X4vL8nsSN8jsd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_A8SJ9LK95X4vL8nsSN8jsd
            source_type: api_record
            title: 维基数据：王晏（Q22814799）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814799
            external_identifier: Q22814799
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:27.414Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%8F_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eu82Y8LiMC9Qnn1qzhjaAV
        subject_person_id: p_h9YaQ72N9yujtwjvvMC9QL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JyG9LxvEiGNnzSmqunCnXP
          claim_id: c_eu82Y8LiMC9Qnn1qzhjaAV
          source_id: s_A8SJ9LK95X4vL8nsSN8jsd
          stance: supports
          locator: Q22814799
          quotation: null
          interpretation_note: null
          source:
            id: s_A8SJ9LK95X4vL8nsSN8jsd
            source_type: api_record
            title: 维基数据：王晏（Q22814799）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814799
            external_identifier: Q22814799
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:27.414Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%8F_(%E5%8D%97%E6%9C%9D)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FbR2kHrcXPiiFpLoEfVHQp
        subject_person_id: p_QZLmSYXLBR1wbbF4B1gNW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h9YaQ72N9yujtwjvvMC9QL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M1Z1zh2GP3mktnMaMM8nYD
          claim_id: c_FbR2kHrcXPiiFpLoEfVHQp
          source_id: s_hUNsCkQ1oziNReRQfjbfTi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hUNsCkQ1oziNReRQfjbfTi
            source_type: api_record
            title: 维基数据：王普曜（Q22814798）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814798
            external_identifier: Q22814798
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.493Z
            metadata_json: null
        - id: cs_HmXZam6b87DDw43Ek1EwpD
          claim_id: c_FbR2kHrcXPiiFpLoEfVHQp
          source_id: s_z0L9OCfAiMqfMPgGi_CVrX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_QZLmSYXLBR1wbbF4B1gNW2
        status: active
        display_name: 王普曜
        merged_into_person_id: null
  children:
    - claim:
        id: c_QcBsZvKVmD4XaASk5z21xH
        subject_person_id: p_h9YaQ72N9yujtwjvvMC9QL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KKBzweDCPdq54DQsoWxSDd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A65BtQDCLbtLoDgFGNUMAx
          claim_id: c_QcBsZvKVmD4XaASk5z21xH
          source_id: s_z0L9OCfAiMqfMPgGi_CVrX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_7yxNHQoo83eCRCqWtBRoHK
          claim_id: c_QcBsZvKVmD4XaASk5z21xH
          source_id: s_Qk1iy3BVMMETd9xrFgZ5qs
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Qk1iy3BVMMETd9xrFgZ5qs
            source_type: api_record
            title: 维基数据：王德和（Q16906025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906025
            external_identifier: Q16906025
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%B7%E5%92%8C
      object_person:
        id: p_KKBzweDCPdq54DQsoWxSDd
        status: active
        display_name: 王德和
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晏（5世纪—497年3月17日），字休默，一字士彦，南朝齐琅邪郡临沂县（今山东省临沂市北）人，南北朝文学家、书法家，齐明帝时尚书令。王弘之的孙子。 刘宋末年为建安国左常侍，转任车骑，王晏後为郢州主簿，渐受长史萧赜亲待。 | accepted |
| birth.date | 5世纪 | accepted |
| name.primary | 王晏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QZLmSYXLBR1wbbF4B1gNW2 | 王普曜 | accepted |
| children | p_KKBzweDCPdq54DQsoWxSDd | 王德和 | accepted |

## 外部来源

- [维基数据：王德和（Q16906025）](https://www.wikidata.org/wiki/Q16906025)
- [维基数据：王普曜（Q22814798）](https://www.wikidata.org/wiki/Q22814798)
- [维基数据：王晏（Q22814799）](https://www.wikidata.org/wiki/Q22814799)
- [中文维基百科：王晏 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%8F_(%E5%8D%97%E6%9C%9D))
