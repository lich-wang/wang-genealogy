---
schema: wang-person/v1
id: p_XbDwQBXX2ZppVNK9GQUEXN
status: active
merged_into: null
display_name: 王鎬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9yEZCz5fdT5TKSJXdJ7yJG
        subject_person_id: p_XbDwQBXX2ZppVNK9GQUEXN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jAreJb8mR4ktVHC6wBbnfc
          claim_id: c_9yEZCz5fdT5TKSJXdJ7yJG
          source_id: s_vppaFFxfwK1DKFT4tw8ZLV
          stance: supports
          locator: CBDB:460294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460294）
          source: &a1
            id: s_vppaFFxfwK1DKFT4tw8ZLV
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 460294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460294&o=json
            external_identifier: CBDB:460294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d3MNubyjhrwT9pRKGtcUbJ
        subject_person_id: p_XbDwQBXX2ZppVNK9GQUEXN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 460294）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5z4PtTOOTKk2j1fSLJA4jD
          claim_id: c_d3MNubyjhrwT9pRKGtcUbJ
          source_id: s_vppaFFxfwK1DKFT4tw8ZLV
          stance: supports
          locator: CBDB:460294
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

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | 王鎬，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 460294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 460294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460294&o=json)
