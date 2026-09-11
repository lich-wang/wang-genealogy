---
schema: wang-person/v1
id: p_nckLjnQoDmUmZQZupSo1rG
status: active
merged_into: null
display_name: 王祐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UtdDvncctjuEQKTGLhvaL6
        subject_person_id: p_nckLjnQoDmUmZQZupSo1rG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lod5ATmQcZkXzKDzNrnzes
          claim_id: c_UtdDvncctjuEQKTGLhvaL6
          source_id: s_J6dJbd2P76d7Rt83wry8Hy
          stance: supports
          locator: CBDB:67864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67864）
          source: &a1
            id: s_J6dJbd2P76d7Rt83wry8Hy
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 67864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67864&o=json
            external_identifier: CBDB:67864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q3HYHWBMk8EspCXV8cEXbD
        subject_person_id: p_nckLjnQoDmUmZQZupSo1rG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 67864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i2Sz-HYAQAC68bfWV9TN6k
          claim_id: c_q3HYHWBMk8EspCXV8cEXbD
          source_id: s_J6dJbd2P76d7Rt83wry8Hy
          stance: supports
          locator: CBDB:67864
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

# 王祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祐 | accepted |
| bio.summary | 王祐，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 67864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祐（CBDB 67864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67864&o=json)
