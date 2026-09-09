---
schema: wang-person/v1
id: p_P6vps7EktSPmKP4jr1VTV9
status: active
merged_into: null
display_name: 王積善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_21aVXVhg3n74pMrXSBmX73
        subject_person_id: p_P6vps7EktSPmKP4jr1VTV9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王積善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NW9WE7udiLEgjFGksS4DYn
          claim_id: c_21aVXVhg3n74pMrXSBmX73
          source_id: s_2DiQBERtqDt4wMQ6hRcW4h
          stance: supports
          locator: CBDB:265004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265004）
          source: &a1
            id: s_2DiQBERtqDt4wMQ6hRcW4h
            source_type: api_record
            title: 中国历代人物传记资料库：王積善（CBDB 265004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265004&o=json
            external_identifier: CBDB:265004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BkGb93VH72N6aUCFZHyhyH
        subject_person_id: p_P6vps7EktSPmKP4jr1VTV9
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
        - id: cs_MUss5KEPDAxdKFMAGJ3uc5
          claim_id: c_BkGb93VH72N6aUCFZHyhyH
          source_id: s_2DiQBERtqDt4wMQ6hRcW4h
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

# 王積善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王積善 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王積善（CBDB 265004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265004&o=json)
