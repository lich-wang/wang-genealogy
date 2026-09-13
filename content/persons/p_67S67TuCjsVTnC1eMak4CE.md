---
schema: wang-person/v1
id: p_67S67TuCjsVTnC1eMak4CE
status: active
merged_into: null
display_name: 王思敏
cbdb_id: 101275
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iR16kW3ZgbEMYRXsAAC8Lr
        subject_person_id: p_67S67TuCjsVTnC1eMak4CE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思敏，元人物。曾任諸路總管府治中。（中国历代人物传记资料库 CBDB 101275）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uHHV_ERstmRps3_0iXorOR
          claim_id: c_iR16kW3ZgbEMYRXsAAC8Lr
          source_id: s_Pi6J4ntowN34qZJFVu2S9B
          stance: supports
          locator: CBDB:101275
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Pi6J4ntowN34qZJFVu2S9B
            source_type: api_record
            title: 中国历代人物传记资料库：王思敏（CBDB 101275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101275&o=json
            external_identifier: CBDB:101275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sPgroWKicURDDqr13NoEUC
        subject_person_id: p_67S67TuCjsVTnC1eMak4CE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WaDiycAJhu7sn8keMqXVwS
          claim_id: c_sPgroWKicURDDqr13NoEUC
          source_id: s_Pi6J4ntowN34qZJFVu2S9B
          stance: supports
          locator: CBDB:101275
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
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

# 王思敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思敏，元人物。曾任諸路總管府治中。（中国历代人物传记资料库 CBDB 101275） | accepted |
| name.primary | 王思敏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思敏（CBDB 101275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101275&o=json)
