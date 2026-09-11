---
schema: wang-person/v1
id: p_Tc8QNzAuGXa5y32t3B3zYJ
status: active
merged_into: null
display_name: 王偃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yj221JwD8aYMbSNh7hr814
        subject_person_id: p_Tc8QNzAuGXa5y32t3B3zYJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bHLan5iAUYMXGLePW31X7W
          claim_id: c_yj221JwD8aYMbSNh7hr814
          source_id: s_rd2ZFQAFGxnjTnqkFDuKJd
          stance: supports
          locator: CBDB:322386
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322386）
          source: &a1
            id: s_rd2ZFQAFGxnjTnqkFDuKJd
            source_type: api_record
            title: 中国历代人物传记资料库：王偃（CBDB 322386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322386&o=json
            external_identifier: CBDB:322386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kLh9iPGUycFBBCg34nbjxK
        subject_person_id: p_Tc8QNzAuGXa5y32t3B3zYJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偃，明人物。宣德五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 322386）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FSh8ss_IALZV4vwS--xQvi
          claim_id: c_kLh9iPGUycFBBCg34nbjxK
          source_id: s_rd2ZFQAFGxnjTnqkFDuKJd
          stance: supports
          locator: CBDB:322386
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

# 王偃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偃 | accepted |
| bio.summary | 王偃，明人物。宣德五年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 322386） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偃（CBDB 322386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322386&o=json)
