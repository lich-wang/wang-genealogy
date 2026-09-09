---
schema: wang-person/v1
id: p_Ry8F6QwZkJ6yWyYuFdBLcT
status: active
merged_into: null
display_name: 王熙源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_871ndD7NSPsUBKLpmSqFb2
        subject_person_id: p_Ry8F6QwZkJ6yWyYuFdBLcT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8zfJmnE1R2jH3h8N1RAASx
          claim_id: c_871ndD7NSPsUBKLpmSqFb2
          source_id: s_ZLj2gAVzcSZtbQVcqNZuoy
          stance: supports
          locator: CBDB:639331
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639331）
          source: &a1
            id: s_ZLj2gAVzcSZtbQVcqNZuoy
            source_type: api_record
            title: 中国历代人物传记资料库：王熙源（CBDB 639331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639331&o=json
            external_identifier: CBDB:639331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dDz4okJ8dBKBoK48DfN1Y4
        subject_person_id: p_Ry8F6QwZkJ6yWyYuFdBLcT
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
        - id: cs_rd481y9sPnM5nNQBkNXvBk
          claim_id: c_dDz4okJ8dBKBoK48DfN1Y4
          source_id: s_ZLj2gAVzcSZtbQVcqNZuoy
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

# 王熙源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙源 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熙源（CBDB 639331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639331&o=json)
