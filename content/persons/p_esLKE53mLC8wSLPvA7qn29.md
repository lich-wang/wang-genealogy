---
schema: wang-person/v1
id: p_esLKE53mLC8wSLPvA7qn29
status: active
merged_into: null
display_name: 王立猷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_At2BeDCmA1o76kRYRhEfq1
        subject_person_id: p_esLKE53mLC8wSLPvA7qn29
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HK355g39U7ThhNjYnXm2bx
          claim_id: c_At2BeDCmA1o76kRYRhEfq1
          source_id: s_ycDL5NfiuFPUnE3TA4sPnP
          stance: supports
          locator: CBDB:639697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639697）
          source: &a1
            id: s_ycDL5NfiuFPUnE3TA4sPnP
            source_type: api_record
            title: 中国历代人物传记资料库：王立猷（CBDB 639697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639697&o=json
            external_identifier: CBDB:639697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VTcRz8WCaDCrKYyTp4UKZg
        subject_person_id: p_esLKE53mLC8wSLPvA7qn29
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
        - id: cs_a3pZYfCfhFeKu6Vp2zrHrE
          claim_id: c_VTcRz8WCaDCrKYyTp4UKZg
          source_id: s_ycDL5NfiuFPUnE3TA4sPnP
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

# 王立猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立猷 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立猷（CBDB 639697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639697&o=json)
