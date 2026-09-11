---
schema: wang-person/v1
id: p_Rt6H55t2FQXh1Aqm2TJa2g
status: active
merged_into: null
display_name: 王鞏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sdf7qhL64Ce57GzUMwHgUQ
        subject_person_id: p_Rt6H55t2FQXh1Aqm2TJa2g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鞏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8QSX11aHRu2gnBCqMGTJXj
          claim_id: c_Sdf7qhL64Ce57GzUMwHgUQ
          source_id: s_JpFfoEdoGud3Dsx3NZAquo
          stance: supports
          locator: CBDB:98057
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98057）
          source: &a1
            id: s_JpFfoEdoGud3Dsx3NZAquo
            source_type: api_record
            title: 中国历代人物传记资料库：王鞏（CBDB 98057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98057&o=json
            external_identifier: CBDB:98057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iKzqV33D9jhyG5bBNxcdPk
        subject_person_id: p_Rt6H55t2FQXh1Aqm2TJa2g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鞏，宋人物。籍贯永嘉，入仕進士，曾任觀文殿學士、起居郎、三丞。（中国历代人物传记资料库 CBDB 98057）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QVfdo9vWAZXd4VMIoBZN2x
          claim_id: c_iKzqV33D9jhyG5bBNxcdPk
          source_id: s_JpFfoEdoGud3Dsx3NZAquo
          stance: supports
          locator: CBDB:98057
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

# 王鞏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鞏 | accepted |
| bio.summary | 王鞏，宋人物。籍贯永嘉，入仕進士，曾任觀文殿學士、起居郎、三丞。（中国历代人物传记资料库 CBDB 98057） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鞏（CBDB 98057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98057&o=json)
