---
schema: wang-person/v1
id: p_P2rRPZK8XmusLs67CcHEp4
status: active
merged_into: null
display_name: 王杞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nGjAy2CHzyk1VXfWg4p3uC
        subject_person_id: p_P2rRPZK8XmusLs67CcHEp4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wHS1dXQeWg4L6QTWG8uUz7
          claim_id: c_nGjAy2CHzyk1VXfWg4p3uC
          source_id: s_yo9TnUYbhxue9B9uGVTG2A
          stance: supports
          locator: CBDB:224052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（224052）
          source: &a1
            id: s_yo9TnUYbhxue9B9uGVTG2A
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 224052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224052&o=json
            external_identifier: CBDB:224052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qh2b7A5dSGmovcATD8fC6N
        subject_person_id: p_P2rRPZK8XmusLs67CcHEp4
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
        - id: cs_oPVBif37A5Bw1285A1SUnF
          claim_id: c_qh2b7A5dSGmovcATD8fC6N
          source_id: s_yo9TnUYbhxue9B9uGVTG2A
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

# 王杞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王杞（CBDB 224052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224052&o=json)
