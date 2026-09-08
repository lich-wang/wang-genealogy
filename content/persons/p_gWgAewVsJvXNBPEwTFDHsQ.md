---
schema: wang-person/v1
id: p_gWgAewVsJvXNBPEwTFDHsQ
status: active
merged_into: null
display_name: 张皇后 (王延政)
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9BS6KUqiah72J6uDwgPU9A
        subject_person_id: p_gWgAewVsJvXNBPEwTFDHsQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张皇后 (王延政)
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cMPT7h9Xy3PmXN5tyY1eGt
          claim_id: c_9BS6KUqiah72J6uDwgPU9A
          source_id: s_nGBezavVCghu6LKvX7yXjR
          stance: supports
          locator: Q8256407
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_nGBezavVCghu6LKvX7yXjR
            source_type: api_record
            title: 维基数据：张皇后 (王延政)（Q8256407）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8256407
            external_identifier: Q8256407
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%BC%A0%E7%9A%87%E5%90%8E_(%E6%AE%B7)
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_n34Dex4wL7RHLWYVh9cxBT
        subject_person_id: p_2BLYj53xGBLVXEoVxHh8Ws
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gWgAewVsJvXNBPEwTFDHsQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_trfAvvJGroyLTgQ6U72cjg
          claim_id: c_n34Dex4wL7RHLWYVh9cxBT
          source_id: s_nGBezavVCghu6LKvX7yXjR
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hKYSwPd2jiE2gm696rQSnJ
          claim_id: c_n34Dex4wL7RHLWYVh9cxBT
          source_id: s_gZ4uY8cJU9Kz276s8a6nyy
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_gZ4uY8cJU9Kz276s8a6nyy
            source_type: api_record
            title: 维基数据：王延政（Q8012995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8012995
            external_identifier: Q8012995
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:03.014Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E6%94%BF
      object_person:
        id: p_2BLYj53xGBLVXEoVxHh8Ws
        status: active
        display_name: 王延政
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 张皇后 (王延政)

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 张皇后 (王延政) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2BLYj53xGBLVXEoVxHh8Ws | 王延政 | accepted |

## 外部来源

- [维基数据：王延政（Q8012995）](https://www.wikidata.org/wiki/Q8012995)
- [维基数据：张皇后 (王延政)（Q8256407）](https://www.wikidata.org/wiki/Q8256407)
