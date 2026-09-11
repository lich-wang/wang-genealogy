---
schema: wang-person/v1
id: p_voLqFAXjP5Y1Tg7nWgLw3N
status: active
merged_into: null
display_name: 王會
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oFQ2nCkTR2BkwXgFK6nCwy
        subject_person_id: p_voLqFAXjP5Y1Tg7nWgLw3N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JSdkko4UBizFEe2x4Cbizi
          claim_id: c_oFQ2nCkTR2BkwXgFK6nCwy
          source_id: s_WVEELTd5x7LEXdawYdPgYH
          stance: supports
          locator: CBDB:638565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638565）
          source: &a1
            id: s_WVEELTd5x7LEXdawYdPgYH
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 638565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638565&o=json
            external_identifier: CBDB:638565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E3cQMPF8AGcBLg9z7dyaRC
        subject_person_id: p_voLqFAXjP5Y1Tg7nWgLw3N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會，清人物。籍贯山陰，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 638565）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bws5DZdxP7ZhjLErgSQlV3
          claim_id: c_E3cQMPF8AGcBLg9z7dyaRC
          source_id: s_WVEELTd5x7LEXdawYdPgYH
          stance: supports
          locator: CBDB:638565
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

# 王會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會 | accepted |
| bio.summary | 王會，清人物。籍贯山陰，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 638565） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會（CBDB 638565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638565&o=json)
