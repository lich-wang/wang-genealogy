---
schema: wang-person/v1
id: p_GEAVyzN2uKwAmjqEW3hvoJ
status: active
merged_into: null
display_name: 王國相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mAnzz5gbEYDH4tdFvQHLdB
        subject_person_id: p_GEAVyzN2uKwAmjqEW3hvoJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HF57J9FYjpXCe5Fzoa8pMv
          claim_id: c_mAnzz5gbEYDH4tdFvQHLdB
          source_id: s_61D2K4NJg5ETENeJq6E5y4
          stance: supports
          locator: CBDB:343440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343440）
          source: &a1
            id: s_61D2K4NJg5ETENeJq6E5y4
            source_type: api_record
            title: 中国历代人物传记资料库：王國相（CBDB 343440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343440&o=json
            external_identifier: CBDB:343440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GjKXYJ4btFhZSyZJSEg536
        subject_person_id: p_GEAVyzN2uKwAmjqEW3hvoJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國相，明人物。明清進士進士，籍贯高陵，入仕進士，曾任縣丞、遊擊將軍。（中国历代人物传记资料库 CBDB 343440）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1Oyov1eo8Fg92fxHMdcbYe
          claim_id: c_GjKXYJ4btFhZSyZJSEg536
          source_id: s_61D2K4NJg5ETENeJq6E5y4
          stance: supports
          locator: CBDB:343440
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

# 王國相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國相 | accepted |
| bio.summary | 王國相，明人物。明清進士進士，籍贯高陵，入仕進士，曾任縣丞、遊擊將軍。（中国历代人物传记资料库 CBDB 343440） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國相（CBDB 343440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343440&o=json)
