---
schema: wang-person/v1
id: p_KQQbkA9tXwvNw47yGBx6Jg
status: active
merged_into: null
display_name: 王縝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_an9ZDowf9x7EVnNNmFRyj1
        subject_person_id: p_KQQbkA9tXwvNw47yGBx6Jg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N4MJXknby9cfGPkCgPk7ei
          claim_id: c_an9ZDowf9x7EVnNNmFRyj1
          source_id: s_88J4TMvKutEdhjnBArPy6G
          stance: supports
          locator: CBDB:253035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253035）
          source: &a1
            id: s_88J4TMvKutEdhjnBArPy6G
            source_type: api_record
            title: 中国历代人物传记资料库：王縝（CBDB 253035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253035&o=json
            external_identifier: CBDB:253035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5dHZSeeBEhHr2PHonmjThK
        subject_person_id: p_KQQbkA9tXwvNw47yGBx6Jg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縝，明人物。景泰五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 253035）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_snPeNElOql1-Rlw4EWHLfm
          claim_id: c_5dHZSeeBEhHr2PHonmjThK
          source_id: s_88J4TMvKutEdhjnBArPy6G
          stance: supports
          locator: CBDB:253035
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

# 王縝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縝 | accepted |
| bio.summary | 王縝，明人物。景泰五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 253035） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縝（CBDB 253035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253035&o=json)
