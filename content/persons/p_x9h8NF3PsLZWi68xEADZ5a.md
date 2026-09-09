---
schema: wang-person/v1
id: p_x9h8NF3PsLZWi68xEADZ5a
status: active
merged_into: null
display_name: 王鑑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kwEDgb2gQX8wsgE9TSK2Q5
        subject_person_id: p_x9h8NF3PsLZWi68xEADZ5a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m1gREPeJ2p97sbpiG2QvQo
          claim_id: c_kwEDgb2gQX8wsgE9TSK2Q5
          source_id: s_NZkxwqXCiU5DvACLy74LYa
          stance: supports
          locator: CBDB:508439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508439）
          source: &a1
            id: s_NZkxwqXCiU5DvACLy74LYa
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 508439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508439&o=json
            external_identifier: CBDB:508439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.084Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t1v7KFMb3S84V1P73N2N9D
        subject_person_id: p_x9h8NF3PsLZWi68xEADZ5a
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
        - id: cs_UXKLzJ33rSdvkMHB7FfCD6
          claim_id: c_t1v7KFMb3S84V1P73N2N9D
          source_id: s_NZkxwqXCiU5DvACLy74LYa
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

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 508439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508439&o=json)
