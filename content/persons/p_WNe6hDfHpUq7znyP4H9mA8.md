---
schema: wang-person/v1
id: p_WNe6hDfHpUq7znyP4H9mA8
status: active
merged_into: null
display_name: 王師伋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XtT5K5d1u2n4qHLc7L4gHp
        subject_person_id: p_WNe6hDfHpUq7znyP4H9mA8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師伋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u5DrDAzdzx6R6FkBj1FKQT
          claim_id: c_XtT5K5d1u2n4qHLc7L4gHp
          source_id: s_3thB48cK6JVgBoEkCBgPhr
          stance: supports
          locator: CBDB:17666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17666）
          source: &a1
            id: s_3thB48cK6JVgBoEkCBgPhr
            source_type: api_record
            title: 中国历代人物传记资料库：王師伋（CBDB 17666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17666&o=json
            external_identifier: CBDB:17666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.667Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PvhWQ1CuMEGph4KEiBksnJ
        subject_person_id: p_WNe6hDfHpUq7znyP4H9mA8
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
        - id: cs_DReNqijQ3w3NkDZQd81xqV
          claim_id: c_PvhWQ1CuMEGph4KEiBksnJ
          source_id: s_3thB48cK6JVgBoEkCBgPhr
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

# 王師伋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師伋 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師伋（CBDB 17666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17666&o=json)
