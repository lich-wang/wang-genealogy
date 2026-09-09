---
schema: wang-person/v1
id: p_DPytSeoCR7h5dQn2VAQYTy
status: active
merged_into: null
display_name: 王宗顔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZJhFuC1VhZA3W9HaEgoM9z
        subject_person_id: p_DPytSeoCR7h5dQn2VAQYTy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗顔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vgMm1pt4oDiTMsaF8UpYP5
          claim_id: c_ZJhFuC1VhZA3W9HaEgoM9z
          source_id: s_nWGymyGvWhN5Hw4aLQLF4b
          stance: supports
          locator: CBDB:540545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（540545）
          source: &a1
            id: s_nWGymyGvWhN5Hw4aLQLF4b
            source_type: api_record
            title: 中国历代人物传记资料库：王宗顔（CBDB 540545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540545&o=json
            external_identifier: CBDB:540545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Cjd1RU4nqMuWzZ6dxPFhE
        subject_person_id: p_DPytSeoCR7h5dQn2VAQYTy
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
        - id: cs_wsqJ5i67fMGR6UdHoxpFPm
          claim_id: c_4Cjd1RU4nqMuWzZ6dxPFhE
          source_id: s_nWGymyGvWhN5Hw4aLQLF4b
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

# 王宗顔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗顔 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗顔（CBDB 540545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540545&o=json)
