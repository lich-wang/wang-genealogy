---
schema: wang-person/v1
id: p_KhmS5kyzCCCFTjqjDJhXt2
status: active
merged_into: null
display_name: 王用康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TaEYA4YrMgwbLCQAQMq6J5
        subject_person_id: p_KhmS5kyzCCCFTjqjDJhXt2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UL8FRPVZPGpwmHnWRw4eTT
          claim_id: c_TaEYA4YrMgwbLCQAQMq6J5
          source_id: s_4MxK9r6yC71DtSC85QaiQz
          stance: supports
          locator: CBDB:204031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204031）
          source: &a1
            id: s_4MxK9r6yC71DtSC85QaiQz
            source_type: api_record
            title: 中国历代人物传记资料库：王用康（CBDB 204031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204031&o=json
            external_identifier: CBDB:204031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4VotTr17Vjd28HyQMR9qQ6
        subject_person_id: p_KhmS5kyzCCCFTjqjDJhXt2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1521年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EjVFqfL5rcJ3YGJjcJ5MDB
          claim_id: c_4VotTr17Vjd28HyQMR9qQ6
          source_id: s_4MxK9r6yC71DtSC85QaiQz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7J4RU6GhBEB8SdcTsHZDA9
        subject_person_id: p_KhmS5kyzCCCFTjqjDJhXt2
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
        - id: cs_z1fcLb2qd3CisfAe9oQEUc
          claim_id: c_7J4RU6GhBEB8SdcTsHZDA9
          source_id: s_4MxK9r6yC71DtSC85QaiQz
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

# 王用康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用康 | accepted |
| birth.date | 1521年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用康（CBDB 204031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204031&o=json)
