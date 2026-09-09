---
schema: wang-person/v1
id: p_XRf6vPKfp3272kRL5mDUNb
status: active
merged_into: null
display_name: 王裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RubeHQhh7eEJoMi368WA7o
        subject_person_id: p_XRf6vPKfp3272kRL5mDUNb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mRYdegHWab2Y6VKJixDG16
          claim_id: c_RubeHQhh7eEJoMi368WA7o
          source_id: s_GT4hFMYcb1N4MiEu3A5owT
          stance: supports
          locator: CBDB:510809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510809）
          source: &a1
            id: s_GT4hFMYcb1N4MiEu3A5owT
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 510809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510809&o=json
            external_identifier: CBDB:510809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hdgRDRGotA4NLZNe5h4kc7
        subject_person_id: p_XRf6vPKfp3272kRL5mDUNb
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
        - id: cs_RUandAQM6E8WmV9Tp2zuxt
          claim_id: c_hdgRDRGotA4NLZNe5h4kc7
          source_id: s_GT4hFMYcb1N4MiEu3A5owT
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

# 王裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裕（CBDB 510809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510809&o=json)
