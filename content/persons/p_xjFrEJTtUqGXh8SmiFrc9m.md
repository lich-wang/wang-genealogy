---
schema: wang-person/v1
id: p_xjFrEJTtUqGXh8SmiFrc9m
status: active
merged_into: null
display_name: 王光濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NP3893UYLAGW2esoSR2yih
        subject_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rwo5fm3dwhS3ywjfMERCJg
          claim_id: c_NP3893UYLAGW2esoSR2yih
          source_id: s_3AiAh9dMZr8E6K9ysLgji6
          stance: supports
          locator: CBDB:202037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202037）
          source: &a1
            id: s_3AiAh9dMZr8E6K9ysLgji6
            source_type: api_record
            title: 中国历代人物传记资料库：王光濟（CBDB 202037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202037&o=json
            external_identifier: CBDB:202037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9DPEK23aNurJUQEEDwizMK
        subject_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1491年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4YhAS63LpHn5UL3r862V5d
          claim_id: c_9DPEK23aNurJUQEEDwizMK
          source_id: s_3AiAh9dMZr8E6K9ysLgji6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UQB7RDj4PcWRZM1MyNjZCi
        subject_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qbyLFGUfFKpZkC9t6sJnjv
          claim_id: c_UQB7RDj4PcWRZM1MyNjZCi
          source_id: s_3AiAh9dMZr8E6K9ysLgji6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王光濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光濟 | accepted |
| birth.date | 1491年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光濟（CBDB 202037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202037&o=json)
