---
schema: wang-person/v1
id: p_bH39Sz1LLsB1i9b74kMffg
status: active
merged_into: null
display_name: 王家齊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZKMDox5zf77QP3fV4cfCmN
        subject_person_id: p_bH39Sz1LLsB1i9b74kMffg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家齊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZTkGXHaJHvNDCThVPRmtaj
          claim_id: c_ZKMDox5zf77QP3fV4cfCmN
          source_id: s_cqNV8EGCXGLfow2p3y4ZXt
          stance: supports
          locator: CBDB:637228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637228）
          source: &a1
            id: s_cqNV8EGCXGLfow2p3y4ZXt
            source_type: api_record
            title: 中国历代人物传记资料库：王家齊（CBDB 637228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637228&o=json
            external_identifier: CBDB:637228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GjMYHn3QZoZg8eg1t4HtN5
        subject_person_id: p_bH39Sz1LLsB1i9b74kMffg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家齊，清人物。籍贯開泰，曾任知縣。（中国历代人物传记资料库 CBDB 637228）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O2P-WWK1M63uV2XeAFi-7J
          claim_id: c_GjMYHn3QZoZg8eg1t4HtN5
          source_id: s_cqNV8EGCXGLfow2p3y4ZXt
          stance: supports
          locator: CBDB:637228
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

# 王家齊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家齊 | accepted |
| bio.summary | 王家齊，清人物。籍贯開泰，曾任知縣。（中国历代人物传记资料库 CBDB 637228） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家齊（CBDB 637228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637228&o=json)
