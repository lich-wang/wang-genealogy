---
schema: wang-person/v1
id: p_aH4temuN1GwxFqxF8DG3DP
status: active
merged_into: null
display_name: 王汝翼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_13P5f62rR1QkDV1k3eE4y1
        subject_person_id: p_aH4temuN1GwxFqxF8DG3DP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝翼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2oG7UxngYwP9PKouevzb8k
          claim_id: c_13P5f62rR1QkDV1k3eE4y1
          source_id: s_6pNuHEuQbTWCPEB7Eb5pxs
          stance: supports
          locator: CBDB:290260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290260）
          source: &a1
            id: s_6pNuHEuQbTWCPEB7Eb5pxs
            source_type: api_record
            title: 中国历代人物传记资料库：王汝翼（CBDB 290260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290260&o=json
            external_identifier: CBDB:290260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.327Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y7B1NwHdXBCy5gvi8UNou9
        subject_person_id: p_aH4temuN1GwxFqxF8DG3DP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝翼，明人物。嘉靖八年進士，籍贯德州，入仕鄉貢舉人，曾任百戶、府學訓導、知縣。（中国历代人物传记资料库 CBDB 290260）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g1525mFZAaE_PEsEGvgPL2
          claim_id: c_Y7B1NwHdXBCy5gvi8UNou9
          source_id: s_6pNuHEuQbTWCPEB7Eb5pxs
          stance: supports
          locator: CBDB:290260
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

# 王汝翼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝翼 | accepted |
| bio.summary | 王汝翼，明人物。嘉靖八年進士，籍贯德州，入仕鄉貢舉人，曾任百戶、府學訓導、知縣。（中国历代人物传记资料库 CBDB 290260） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝翼（CBDB 290260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290260&o=json)
