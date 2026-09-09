---
schema: wang-person/v1
id: p_fUrkW6ozGrAosrVsTorpqL
status: active
merged_into: null
display_name: 王乾明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eoRstRu3qNM5xMrSo8VEgQ
        subject_person_id: p_fUrkW6ozGrAosrVsTorpqL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dXfa6nbDbUyiNsu5K7FoRf
          claim_id: c_eoRstRu3qNM5xMrSo8VEgQ
          source_id: s_JHhmqNMAL3cz2t6ShErLh5
          stance: supports
          locator: CBDB:555106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555106）
          source: &a1
            id: s_JHhmqNMAL3cz2t6ShErLh5
            source_type: api_record
            title: 中国历代人物传记资料库：王乾明（CBDB 555106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555106&o=json
            external_identifier: CBDB:555106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BaFVzS4zm1w913L52C6YDg
        subject_person_id: p_fUrkW6ozGrAosrVsTorpqL
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
        - id: cs_6bjDtVVucc4G5T5y9QcN4J
          claim_id: c_BaFVzS4zm1w913L52C6YDg
          source_id: s_JHhmqNMAL3cz2t6ShErLh5
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

# 王乾明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乾明 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王乾明（CBDB 555106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555106&o=json)
