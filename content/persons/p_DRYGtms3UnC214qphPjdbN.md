---
schema: wang-person/v1
id: p_DRYGtms3UnC214qphPjdbN
status: active
merged_into: null
display_name: 王景義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3MjwoqQJLSPKe7EoRdvSoc
        subject_person_id: p_DRYGtms3UnC214qphPjdbN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1bmjZ9GAKa287P8Rfe95Xu
          claim_id: c_3MjwoqQJLSPKe7EoRdvSoc
          source_id: s_dZpdpiE9zHKh9y9jZTXKzF
          stance: supports
          locator: CBDB:638505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638505）
          source: &a1
            id: s_dZpdpiE9zHKh9y9jZTXKzF
            source_type: api_record
            title: 中国历代人物传记资料库：王景義（CBDB 638505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638505&o=json
            external_identifier: CBDB:638505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nMcHkk1qEpyQzGgf59754g
        subject_person_id: p_DRYGtms3UnC214qphPjdbN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景義，清人物。籍贯迪化州，曾任復設訓導。（中国历代人物传记资料库 CBDB 638505）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fSQFAT_0nBBiL6UIPDcwW8
          claim_id: c_nMcHkk1qEpyQzGgf59754g
          source_id: s_dZpdpiE9zHKh9y9jZTXKzF
          stance: supports
          locator: CBDB:638505
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

# 王景義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景義 | accepted |
| bio.summary | 王景義，清人物。籍贯迪化州，曾任復設訓導。（中国历代人物传记资料库 CBDB 638505） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景義（CBDB 638505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638505&o=json)
