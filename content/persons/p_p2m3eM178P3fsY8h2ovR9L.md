---
schema: wang-person/v1
id: p_p2m3eM178P3fsY8h2ovR9L
status: active
merged_into: null
display_name: 王錟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jA4WxLMbrJVV7oe7bVf6yK
        subject_person_id: p_p2m3eM178P3fsY8h2ovR9L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RiK9WGJdgVDZbKE8Efbd9u
          claim_id: c_jA4WxLMbrJVV7oe7bVf6yK
          source_id: s_7Kx1sA8pG6pv6WmGJM3TFe
          stance: supports
          locator: CBDB:124743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124743）
          source: &a1
            id: s_7Kx1sA8pG6pv6WmGJM3TFe
            source_type: api_record
            title: 中国历代人物传记资料库：王錟（CBDB 124743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124743&o=json
            external_identifier: CBDB:124743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rA41P2CG9sHTujT3jCq9uV
        subject_person_id: p_p2m3eM178P3fsY8h2ovR9L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錟，明人物。籍贯柘城，曾任知縣。（中国历代人物传记资料库 CBDB 124743）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NozScBi0gUYV6hnvuihtPG
          claim_id: c_rA41P2CG9sHTujT3jCq9uV
          source_id: s_7Kx1sA8pG6pv6WmGJM3TFe
          stance: supports
          locator: CBDB:124743
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

# 王錟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錟 | accepted |
| bio.summary | 王錟，明人物。籍贯柘城，曾任知縣。（中国历代人物传记资料库 CBDB 124743） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錟（CBDB 124743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124743&o=json)
