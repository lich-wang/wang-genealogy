---
schema: wang-person/v1
id: p_xspHGTMTrdySUKmYASS629
status: active
merged_into: null
display_name: 王用賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VCDDfDF2HVqFY39284MdHg
        subject_person_id: p_xspHGTMTrdySUKmYASS629
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2H75DyApR4APsx1bee9Bpa
          claim_id: c_VCDDfDF2HVqFY39284MdHg
          source_id: s_KTg2sdh3CME38CPMvnwM9N
          stance: supports
          locator: CBDB:292748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292748）
          source: &a1
            id: s_KTg2sdh3CME38CPMvnwM9N
            source_type: api_record
            title: 中国历代人物传记资料库：王用賢（CBDB 292748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292748&o=json
            external_identifier: CBDB:292748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vMFZzCVVekWBNrDjwS9oUV
        subject_person_id: p_xspHGTMTrdySUKmYASS629
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
        - id: cs_HUT9rNhjENZyVAmnVfSQDP
          claim_id: c_vMFZzCVVekWBNrDjwS9oUV
          source_id: s_KTg2sdh3CME38CPMvnwM9N
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

# 王用賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用賢（CBDB 292748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292748&o=json)
