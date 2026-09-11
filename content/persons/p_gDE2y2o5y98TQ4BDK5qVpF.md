---
schema: wang-person/v1
id: p_gDE2y2o5y98TQ4BDK5qVpF
status: active
merged_into: null
display_name: 王祚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LiN9Gjrn39GNG7XetgP9H9
        subject_person_id: p_gDE2y2o5y98TQ4BDK5qVpF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xMep7Cuy79X5LmCeJ7xYNg
          claim_id: c_LiN9Gjrn39GNG7XetgP9H9
          source_id: s_sYS35UsWr3mwJVrB2GDUc5
          stance: supports
          locator: CBDB:499745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499745）
          source: &a1
            id: s_sYS35UsWr3mwJVrB2GDUc5
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 499745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499745&o=json
            external_identifier: CBDB:499745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2eBhpWsGe5k3cu6r7R4nUH
        subject_person_id: p_gDE2y2o5y98TQ4BDK5qVpF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 499745）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KH5Sw0yW7zzHx91_cmnUMP
          claim_id: c_2eBhpWsGe5k3cu6r7R4nUH
          source_id: s_sYS35UsWr3mwJVrB2GDUc5
          stance: supports
          locator: CBDB:499745
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

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| bio.summary | 王祚，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 499745） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祚（CBDB 499745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499745&o=json)
