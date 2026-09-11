---
schema: wang-person/v1
id: p_F5qGaSSUQkLomwauVEAjSJ
status: active
merged_into: null
display_name: 王士傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sinaJ1VTVw3m1X3WL3jxJ7
        subject_person_id: p_F5qGaSSUQkLomwauVEAjSJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZcnyBg6t9EPrZhxAmE4UtH
          claim_id: c_sinaJ1VTVw3m1X3WL3jxJ7
          source_id: s_NKTff4zQG57uTHNhbwe9d8
          stance: supports
          locator: CBDB:474106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474106）
          source: &a1
            id: s_NKTff4zQG57uTHNhbwe9d8
            source_type: api_record
            title: 中国历代人物传记资料库：王士傑（CBDB 474106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474106&o=json
            external_identifier: CBDB:474106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dtJJQ5EMeMqFvGWD2dgug9
        subject_person_id: p_F5qGaSSUQkLomwauVEAjSJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士傑，元人物。曾任訓導。（中国历代人物传记资料库 CBDB 474106）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bB6xo8mA1JRXwv3F2VhEcV
          claim_id: c_dtJJQ5EMeMqFvGWD2dgug9
          source_id: s_NKTff4zQG57uTHNhbwe9d8
          stance: supports
          locator: CBDB:474106
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王士傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士傑 | accepted |
| bio.summary | 王士傑，元人物。曾任訓導。（中国历代人物传记资料库 CBDB 474106） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士傑（CBDB 474106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474106&o=json)
