---
schema: wang-person/v1
id: p_EPWZZZ9U8porfk84fLjYZ5
status: active
merged_into: null
display_name: 王福某
cbdb_id: 231748
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wXjzaufsfcBaRSVX6KoZKb
        subject_person_id: p_EPWZZZ9U8porfk84fLjYZ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福某，明人物。宣德八年進士，籍贯棲霞。（中国历代人物传记资料库 CBDB 231748）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jMNaVxRDfhyon5wyy2w6Hb
          claim_id: c_wXjzaufsfcBaRSVX6KoZKb
          source_id: s_no4Ltx6GvB3MMpcwHpvvMJ
          stance: supports
          locator: CBDB:231748
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_no4Ltx6GvB3MMpcwHpvvMJ
            source_type: api_record
            title: 中国历代人物传记资料库：王福某（CBDB 231748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231748&o=json
            external_identifier: CBDB:231748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QrPrCFju8T95Dnq2b1GmhJ
        subject_person_id: p_EPWZZZ9U8porfk84fLjYZ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JkJAnHj1umEU3Dj8YJh9PU
          claim_id: c_QrPrCFju8T95Dnq2b1GmhJ
          source_id: s_no4Ltx6GvB3MMpcwHpvvMJ
          stance: supports
          locator: CBDB:231748
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
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

# 王福某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王福某，明人物。宣德八年進士，籍贯棲霞。（中国历代人物传记资料库 CBDB 231748） | accepted |
| name.primary | 王福某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福某（CBDB 231748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231748&o=json)
