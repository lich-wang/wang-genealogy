---
schema: wang-person/v1
id: p_1bPHwAJjJo76tEDuJLshkB
status: active
merged_into: null
display_name: 王剛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cu1LvRvqrdmELWkaYB151U
        subject_person_id: p_1bPHwAJjJo76tEDuJLshkB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ToGczc6aJdMK17DfYEkzoX
          claim_id: c_cu1LvRvqrdmELWkaYB151U
          source_id: s_aQCfJUx6Uk2dT9ArA9GdE8
          stance: supports
          locator: CBDB:483321
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483321）
          source: &a1
            id: s_aQCfJUx6Uk2dT9ArA9GdE8
            source_type: api_record
            title: 中国历代人物传记资料库：王剛（CBDB 483321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483321&o=json
            external_identifier: CBDB:483321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ng4rTPSqLABjb9ewF332t3
        subject_person_id: p_1bPHwAJjJo76tEDuJLshkB
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
        - id: cs_GexpF13kiXCTtfFANCBCDX
          claim_id: c_Ng4rTPSqLABjb9ewF332t3
          source_id: s_aQCfJUx6Uk2dT9ArA9GdE8
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

# 王剛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王剛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王剛（CBDB 483321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483321&o=json)
