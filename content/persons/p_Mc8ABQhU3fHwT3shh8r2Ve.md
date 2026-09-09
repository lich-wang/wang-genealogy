---
schema: wang-person/v1
id: p_Mc8ABQhU3fHwT3shh8r2Ve
status: active
merged_into: null
display_name: 王拱已
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LdTP94aWVAu7s3Pph1LfS9
        subject_person_id: p_Mc8ABQhU3fHwT3shh8r2Ve
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱已
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VfJu7SfevwhQu1rasszc3d
          claim_id: c_LdTP94aWVAu7s3Pph1LfS9
          source_id: s_pXZ22qqXafa8jHSEmMBx1Z
          stance: supports
          locator: CBDB:540565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（540565）
          source: &a1
            id: s_pXZ22qqXafa8jHSEmMBx1Z
            source_type: api_record
            title: 中国历代人物传记资料库：王拱已（CBDB 540565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540565&o=json
            external_identifier: CBDB:540565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aVzSH6u2tpNW9ZotWKEAMg
        subject_person_id: p_Mc8ABQhU3fHwT3shh8r2Ve
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q4dYqzpGPEzEAHJnBmsWHK
          claim_id: c_aVzSH6u2tpNW9ZotWKEAMg
          source_id: s_pXZ22qqXafa8jHSEmMBx1Z
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

# 王拱已

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱已 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拱已（CBDB 540565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540565&o=json)
