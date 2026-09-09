---
schema: wang-person/v1
id: p_sZK987rc4zH8nNhMHHWHrg
status: active
merged_into: null
display_name: 王達
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F9AA99QXMwa3jQAPBa5V2s
        subject_person_id: p_sZK987rc4zH8nNhMHHWHrg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CM5zNi2rfmZ4n2CtGKhjp6
          claim_id: c_F9AA99QXMwa3jQAPBa5V2s
          source_id: s_zUkXbkhU4WgnugqANp5vUi
          stance: supports
          locator: CBDB:149477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149477）
          source: &a1
            id: s_zUkXbkhU4WgnugqANp5vUi
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 149477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149477&o=json
            external_identifier: CBDB:149477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YNtsKme3TPcN8xRQ6kS3DG
        subject_person_id: p_sZK987rc4zH8nNhMHHWHrg
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
        - id: cs_wS2YH7NzmpVWf2mVdU6nPp
          claim_id: c_YNtsKme3TPcN8xRQ6kS3DG
          source_id: s_zUkXbkhU4WgnugqANp5vUi
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

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 149477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149477&o=json)
