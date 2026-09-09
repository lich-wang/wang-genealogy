---
schema: wang-person/v1
id: p_ausVk2oHKHbvJ2JzkigEra
status: active
merged_into: null
display_name: 王行
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_81S3hwqfUxUCS3SDU2eF41
        subject_person_id: p_ausVk2oHKHbvJ2JzkigEra
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DNg4oBJhJzQ3x3AwUn8JXJ
          claim_id: c_81S3hwqfUxUCS3SDU2eF41
          source_id: s_ZwDMmi4LJ3zPrSMXLHsZAw
          stance: supports
          locator: CBDB:142298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142298）
          source: &a1
            id: s_ZwDMmi4LJ3zPrSMXLHsZAw
            source_type: api_record
            title: 中国历代人物传记资料库：王行（CBDB 142298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142298&o=json
            external_identifier: CBDB:142298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FFwJFEoUNxKKdQsnoK1wrx
        subject_person_id: p_ausVk2oHKHbvJ2JzkigEra
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
        - id: cs_v7fhi1AyhoDDiFPHftJoyX
          claim_id: c_FFwJFEoUNxKKdQsnoK1wrx
          source_id: s_ZwDMmi4LJ3zPrSMXLHsZAw
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

# 王行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行（CBDB 142298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142298&o=json)
