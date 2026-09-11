---
schema: wang-person/v1
id: p_A9o9vgHGB7XQbcDeKEUFjP
status: active
merged_into: null
display_name: 王玠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KczQMJfXpdCxGLHJWyt4RC
        subject_person_id: p_A9o9vgHGB7XQbcDeKEUFjP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qz77S1Vg8gJt8K1fvPPi2d
          claim_id: c_KczQMJfXpdCxGLHJWyt4RC
          source_id: s_p6pN4ebYXXc3iHhSWjwYBc
          stance: supports
          locator: CBDB:100701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100701）
          source: &a1
            id: s_p6pN4ebYXXc3iHhSWjwYBc
            source_type: api_record
            title: 中国历代人物传记资料库：王玠（CBDB 100701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100701&o=json
            external_identifier: CBDB:100701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w34NmbUXs5ABrNox4K8EWP
        subject_person_id: p_A9o9vgHGB7XQbcDeKEUFjP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玠，元人物。籍贯太原路，曾任縣尹。（中国历代人物传记资料库 CBDB 100701）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PrEMFtyBc7S2FtyzIPF1D8
          claim_id: c_w34NmbUXs5ABrNox4K8EWP
          source_id: s_p6pN4ebYXXc3iHhSWjwYBc
          stance: supports
          locator: CBDB:100701
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

# 王玠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玠 | accepted |
| bio.summary | 王玠，元人物。籍贯太原路，曾任縣尹。（中国历代人物传记资料库 CBDB 100701） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玠（CBDB 100701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100701&o=json)
