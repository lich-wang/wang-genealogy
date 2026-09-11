---
schema: wang-person/v1
id: p_SJntZfaM22H3Dnyeg6Xz2j
status: active
merged_into: null
display_name: 王瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bMuBeZFFiWEJAHDVZP5azX
        subject_person_id: p_SJntZfaM22H3Dnyeg6Xz2j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YDNMJBkuSxmAr9XPKdp29u
          claim_id: c_bMuBeZFFiWEJAHDVZP5azX
          source_id: s_Ph9U9EuvuodG3ntoZ4yAff
          stance: supports
          locator: CBDB:639424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639424）
          source: &a1
            id: s_Ph9U9EuvuodG3ntoZ4yAff
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 639424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639424&o=json
            external_identifier: CBDB:639424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xWJFMs2mn2vF647tRrgt1m
        subject_person_id: p_SJntZfaM22H3Dnyeg6Xz2j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜，清人物。籍贯南寧，曾任訓導。（中国历代人物传记资料库 CBDB 639424）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cnH3W_LpwPwmuvWYNM-RDT
          claim_id: c_xWJFMs2mn2vF647tRrgt1m
          source_id: s_Ph9U9EuvuodG3ntoZ4yAff
          stance: supports
          locator: CBDB:639424
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

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| bio.summary | 王瑜，清人物。籍贯南寧，曾任訓導。（中国历代人物传记资料库 CBDB 639424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 639424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639424&o=json)
