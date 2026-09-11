---
schema: wang-person/v1
id: p_HN267QgajCy8eXGGgQF8Y6
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 263670
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dziNAtSmPuhKsEXji1kV4e
        subject_person_id: p_HN267QgajCy8eXGGgQF8Y6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 263670）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4u_DHt6f-1qs9BPiQtt7cJ
          claim_id: c_dziNAtSmPuhKsEXji1kV4e
          source_id: s_CerDsxJkyYP1B4gUtJ0yM8
          stance: supports
          locator: CBDB:263670
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CerDsxJkyYP1B4gUtJ0yM8
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王紀妻)（CBDB 263670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263670&o=json
            external_identifier: CBDB:263670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PLj9NWZ_UyaZ5TuQSTL0gf
        subject_person_id: p_HN267QgajCy8eXGGgQF8Y6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wwoEzaqtXNK9VITqsTyJZl
          claim_id: c_PLj9NWZ_UyaZ5TuQSTL0gf
          source_id: s_CerDsxJkyYP1B4gUtJ0yM8
          stance: supports
          locator: CBDB:263670
          quotation: null
          interpretation_note: CBDB 明确记录的王紀配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_q_1iF5XvUoFhRg68zaTpkQ
        subject_person_id: p_cxZ5yzSg26M1kF7erww7KG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HN267QgajCy8eXGGgQF8Y6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__qWIaWpJRgujvfTnEHu0Ef
          claim_id: c_q_1iF5XvUoFhRg68zaTpkQ
          source_id: s_CerDsxJkyYP1B4gUtJ0yM8
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cxZ5yzSg26M1kF7erww7KG
        status: active
        display_name: 王紀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 263670） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cxZ5yzSg26M1kF7erww7KG | 王紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王紀妻)（CBDB 263670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263670&o=json)
