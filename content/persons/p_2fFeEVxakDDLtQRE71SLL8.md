---
schema: wang-person/v1
id: p_2fFeEVxakDDLtQRE71SLL8
status: active
merged_into: null
display_name: 王暹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ymsEj5mEWJKiJNw2rSMfA
        subject_person_id: p_2fFeEVxakDDLtQRE71SLL8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aq8Qpm31X3U8k97uKsPdak
          claim_id: c_6ymsEj5mEWJKiJNw2rSMfA
          source_id: s_cuyJ3EYL8ecXosr6Kpv1BF
          stance: supports
          locator: CBDB:453416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453416）
          source: &a1
            id: s_cuyJ3EYL8ecXosr6Kpv1BF
            source_type: api_record
            title: 中国历代人物传记资料库：王暹（CBDB 453416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453416&o=json
            external_identifier: CBDB:453416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n6YQUAQEGNpNfMmcRuKCb8
        subject_person_id: p_2fFeEVxakDDLtQRE71SLL8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王暹，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任知縣。（中国历代人物传记资料库 CBDB 453416）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C2Zse7q0EN4IRLQlGkHm6N
          claim_id: c_n6YQUAQEGNpNfMmcRuKCb8
          source_id: s_cuyJ3EYL8ecXosr6Kpv1BF
          stance: supports
          locator: CBDB:453416
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

# 王暹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暹 | accepted |
| bio.summary | 王暹，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任知縣。（中国历代人物传记资料库 CBDB 453416） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暹（CBDB 453416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453416&o=json)
