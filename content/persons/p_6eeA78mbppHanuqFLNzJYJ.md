---
schema: wang-person/v1
id: p_6eeA78mbppHanuqFLNzJYJ
status: active
merged_into: null
display_name: 王廷弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XigijnGLMCQUGJ8CVN6n3e
        subject_person_id: p_6eeA78mbppHanuqFLNzJYJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dP95nVaFEAcKMg2wK3a71V
          claim_id: c_XigijnGLMCQUGJ8CVN6n3e
          source_id: s_NgQP2eqHkME1NJtWCHj3K9
          stance: supports
          locator: CBDB:506005
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506005）
          source: &a1
            id: s_NgQP2eqHkME1NJtWCHj3K9
            source_type: api_record
            title: 中国历代人物传记资料库：王廷弼（CBDB 506005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506005&o=json
            external_identifier: CBDB:506005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cFpdESPgBMv1r4mxW7E1sv
        subject_person_id: p_6eeA78mbppHanuqFLNzJYJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷弼，明人物。入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 506005）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JisQ59Sz2fZ094Q6e556EX
          claim_id: c_cFpdESPgBMv1r4mxW7E1sv
          source_id: s_NgQP2eqHkME1NJtWCHj3K9
          stance: supports
          locator: CBDB:506005
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

# 王廷弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷弼 | accepted |
| bio.summary | 王廷弼，明人物。入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 506005） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷弼（CBDB 506005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506005&o=json)
