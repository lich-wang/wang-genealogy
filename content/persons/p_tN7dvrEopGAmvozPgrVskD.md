---
schema: wang-person/v1
id: p_tN7dvrEopGAmvozPgrVskD
status: active
merged_into: null
display_name: 王之朝
cbdb_id: 413750
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_136XHjgESvP3fHypWu4oPk
        subject_person_id: p_tN7dvrEopGAmvozPgrVskD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之朝，明人物。曾任指揮僉事。（中国历代人物传记资料库 CBDB 413750）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Z01w76SQqRMw91KucFiF8l
          claim_id: c_136XHjgESvP3fHypWu4oPk
          source_id: s_6x9ZrH14ADNdvipmHUsVq6
          stance: supports
          locator: CBDB:413750
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6x9ZrH14ADNdvipmHUsVq6
            source_type: api_record
            title: 中国历代人物传记资料库：王之朝（CBDB 413750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413750&o=json
            external_identifier: CBDB:413750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:23.724Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TMRQeQqkqGrmVQD6CJK767
        subject_person_id: p_tN7dvrEopGAmvozPgrVskD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之朝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ALA4o5tWL2ciwY74Uj1Jib
          claim_id: c_TMRQeQqkqGrmVQD6CJK767
          source_id: s_6x9ZrH14ADNdvipmHUsVq6
          stance: supports
          locator: CBDB:413750
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4901-5000）｜历史性依据：CBDB 朝代 = 明
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

# 王之朝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之朝，明人物。曾任指揮僉事。（中国历代人物传记资料库 CBDB 413750） | accepted |
| name.primary | 王之朝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之朝（CBDB 413750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413750&o=json)
