---
schema: wang-person/v1
id: p_FP9bG7Rb16gUDZhJUHUAKs
status: active
merged_into: null
display_name: 王玉田
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QEsGSDa7qGZK4xyYZJzy9j
        subject_person_id: p_FP9bG7Rb16gUDZhJUHUAKs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6bbLCz8D9KMxmep66ftQ64
          claim_id: c_QEsGSDa7qGZK4xyYZJzy9j
          source_id: s_Qm7xZDYUgt8g6WSYhsDcy5
          stance: supports
          locator: CBDB:639381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639381）
          source: &a1
            id: s_Qm7xZDYUgt8g6WSYhsDcy5
            source_type: api_record
            title: 中国历代人物传记资料库：王玉田（CBDB 639381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639381&o=json
            external_identifier: CBDB:639381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LdX1KwpFwL3HJCCkxZsDWE
        subject_person_id: p_FP9bG7Rb16gUDZhJUHUAKs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AktHuSRghHvtfwSi92ANcE
          claim_id: c_LdX1KwpFwL3HJCCkxZsDWE
          source_id: s_Qm7xZDYUgt8g6WSYhsDcy5
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

# 王玉田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉田 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉田（CBDB 639381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639381&o=json)
