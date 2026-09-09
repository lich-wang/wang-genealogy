---
schema: wang-person/v1
id: p_pLswWqSBPoyLmU6amLYFt3
status: active
merged_into: null
display_name: 王漢忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zCNeKHj1QW9C7krHCNW5S4
        subject_person_id: p_pLswWqSBPoyLmU6amLYFt3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RoMaPnE6ADdGS2C35wv2Y7
          claim_id: c_zCNeKHj1QW9C7krHCNW5S4
          source_id: s_au5XPbQsEKbHz175HzA8GX
          stance: supports
          locator: CBDB:14839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（14839）
          source: &a1
            id: s_au5XPbQsEKbHz175HzA8GX
            source_type: api_record
            title: 中国历代人物传记资料库：王漢忠（CBDB 14839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14839&o=json
            external_identifier: CBDB:14839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MBXk6AKoZsyzDjoMKQMAe3
        subject_person_id: p_pLswWqSBPoyLmU6amLYFt3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1002年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eus7FPatUQ3j6CL6dyJ1hR
          claim_id: c_MBXk6AKoZsyzDjoMKQMAe3
          source_id: s_au5XPbQsEKbHz175HzA8GX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_42QYvSU9LNsQi3izfBvVz2
        subject_person_id: p_pLswWqSBPoyLmU6amLYFt3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xi6FQVjYNNj2ApnnXMZ46N
          claim_id: c_42QYvSU9LNsQi3izfBvVz2
          source_id: s_au5XPbQsEKbHz175HzA8GX
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

# 王漢忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢忠 | accepted |
| death.date | 1002年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漢忠（CBDB 14839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14839&o=json)
