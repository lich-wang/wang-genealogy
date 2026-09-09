---
schema: wang-person/v1
id: p_MbbCH9rJM4KUYtnoLJ8vev
status: active
merged_into: null
display_name: 王震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QmM52FLQtHgBJomHqrhJG8
        subject_person_id: p_MbbCH9rJM4KUYtnoLJ8vev
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8DEBhaAkzTBfEF757R6QPE
          claim_id: c_QmM52FLQtHgBJomHqrhJG8
          source_id: s_Zen18zQjd3UgZDFCZcTh1Q
          stance: supports
          locator: CBDB:445447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445447）
          source: &a1
            id: s_Zen18zQjd3UgZDFCZcTh1Q
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 445447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445447&o=json
            external_identifier: CBDB:445447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LpCtUYQS4FSnaDa8wvz8PN
        subject_person_id: p_MbbCH9rJM4KUYtnoLJ8vev
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3g8xBb2s3R1Es23UMi1G4B
          claim_id: c_LpCtUYQS4FSnaDa8wvz8PN
          source_id: s_Zen18zQjd3UgZDFCZcTh1Q
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

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震（CBDB 445447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445447&o=json)
