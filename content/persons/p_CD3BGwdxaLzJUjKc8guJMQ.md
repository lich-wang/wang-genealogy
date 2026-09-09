---
schema: wang-person/v1
id: p_CD3BGwdxaLzJUjKc8guJMQ
status: active
merged_into: null
display_name: 王昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tH7G51PJnetG8FT8pNSEL2
        subject_person_id: p_CD3BGwdxaLzJUjKc8guJMQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kon8UKVoJJd2tGcLb6bAah
          claim_id: c_tH7G51PJnetG8FT8pNSEL2
          source_id: s_4d4xsTGkv8KDUC5KgXaczV
          stance: supports
          locator: CBDB:462446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462446）
          source: &a1
            id: s_4d4xsTGkv8KDUC5KgXaczV
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 462446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462446&o=json
            external_identifier: CBDB:462446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HonVdxzr7oG2F1j72ZKAvw
        subject_person_id: p_CD3BGwdxaLzJUjKc8guJMQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为西漢人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DVnN7hdQPBug8J4GqViEju
          claim_id: c_HonVdxzr7oG2F1j72ZKAvw
          source_id: s_4d4xsTGkv8KDUC5KgXaczV
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

# 王昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌 | accepted |
| bio.summary | CBDB 记载为西漢人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 462446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462446&o=json)
