---
schema: wang-person/v1
id: p_4APHAkfxphUBchHMpLcHUx
status: active
merged_into: null
display_name: 王勣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kWryDFxKDxp71ZfZrHvFNn
        subject_person_id: p_4APHAkfxphUBchHMpLcHUx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9QjK9aqReBTPaEYDCTDLeN
          claim_id: c_kWryDFxKDxp71ZfZrHvFNn
          source_id: s_4WBy56iMQbtKiuNCdXvkJD
          stance: supports
          locator: CBDB:148854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148854）
          source: &a1
            id: s_4WBy56iMQbtKiuNCdXvkJD
            source_type: api_record
            title: 中国历代人物传记资料库：王勣（CBDB 148854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148854&o=json
            external_identifier: CBDB:148854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z4nr4VzTDAFYHVWP8EUoKp
        subject_person_id: p_4APHAkfxphUBchHMpLcHUx
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
        - id: cs_erQ15zhxA4qKDYYLk32Dn6
          claim_id: c_z4nr4VzTDAFYHVWP8EUoKp
          source_id: s_4WBy56iMQbtKiuNCdXvkJD
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

# 王勣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勣 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勣（CBDB 148854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148854&o=json)
