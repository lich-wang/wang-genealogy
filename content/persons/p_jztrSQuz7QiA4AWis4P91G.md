---
schema: wang-person/v1
id: p_jztrSQuz7QiA4AWis4P91G
status: active
merged_into: null
display_name: 王象復
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DCx6dBmoKEmiuohAFpD978
        subject_person_id: p_jztrSQuz7QiA4AWis4P91G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1UqCetoADkjPkpFhU8Atms
          claim_id: c_DCx6dBmoKEmiuohAFpD978
          source_id: s_uYMH6KqjGHubRYyxkveHXx
          stance: supports
          locator: CBDB:126733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126733）
          source: &a1
            id: s_uYMH6KqjGHubRYyxkveHXx
            source_type: api_record
            title: 中国历代人物传记资料库：王象復（CBDB 126733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126733&o=json
            external_identifier: CBDB:126733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xFDV3vPX9M8kStC2mLkLQC
        subject_person_id: p_jztrSQuz7QiA4AWis4P91G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象復，明人物。籍贯新城，身份为死國難，曾任知府。（中国历代人物传记资料库 CBDB 126733）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YeQqh-lEWWx7YiTjHNc0UU
          claim_id: c_xFDV3vPX9M8kStC2mLkLQC
          source_id: s_uYMH6KqjGHubRYyxkveHXx
          stance: supports
          locator: CBDB:126733
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

# 王象復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象復 | accepted |
| bio.summary | 王象復，明人物。籍贯新城，身份为死國難，曾任知府。（中国历代人物传记资料库 CBDB 126733） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王象復（CBDB 126733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126733&o=json)
