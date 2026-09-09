---
schema: wang-person/v1
id: p_eoTG4MVzCTP4FyEhPDeESb
status: active
merged_into: null
display_name: 王言昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oGRjGXxURhmpomfCZdFgi7
        subject_person_id: p_eoTG4MVzCTP4FyEhPDeESb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yerNVqjp6jUjztnkaFGRu7
          claim_id: c_oGRjGXxURhmpomfCZdFgi7
          source_id: s_ruzBF2bZd4C5YZiMDTDcMf
          stance: supports
          locator: CBDB:640260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640260）
          source: &a1
            id: s_ruzBF2bZd4C5YZiMDTDcMf
            source_type: api_record
            title: 中国历代人物传记资料库：王言昌（CBDB 640260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640260&o=json
            external_identifier: CBDB:640260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HDt8CbnGCZ6KNYkq5Me8hj
        subject_person_id: p_eoTG4MVzCTP4FyEhPDeESb
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
        - id: cs_H3Eh3J3UTS9U276bJhkA9c
          claim_id: c_HDt8CbnGCZ6KNYkq5Me8hj
          source_id: s_ruzBF2bZd4C5YZiMDTDcMf
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

# 王言昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言昌 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言昌（CBDB 640260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640260&o=json)
