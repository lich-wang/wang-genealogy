---
schema: wang-person/v1
id: p_CcaV3WiP4dyCMLjLkKqZ5S
status: active
merged_into: null
display_name: 王世良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NLrB2jBpY7PWXey2aBFeVb
        subject_person_id: p_CcaV3WiP4dyCMLjLkKqZ5S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XU1bpK3ZCGTRwsMRHKUgC2
          claim_id: c_NLrB2jBpY7PWXey2aBFeVb
          source_id: s_eJFnQdBjzKEEKMd3n7H45c
          stance: supports
          locator: CBDB:635713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635713）
          source: &a1
            id: s_eJFnQdBjzKEEKMd3n7H45c
            source_type: api_record
            title: 中国历代人物传记资料库：王世良（CBDB 635713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635713&o=json
            external_identifier: CBDB:635713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aisMmLTtJDt6L59Nn2s3f8
        subject_person_id: p_CcaV3WiP4dyCMLjLkKqZ5S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王世良，清人物。籍贯龍安府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635713）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qhUQc5OSlVANwfQgt2b2in
          claim_id: c_aisMmLTtJDt6L59Nn2s3f8
          source_id: s_eJFnQdBjzKEEKMd3n7H45c
          stance: supports
          locator: CBDB:635713
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

# 王世良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世良 | accepted |
| bio.summary | 王世良，清人物。籍贯龍安府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635713） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世良（CBDB 635713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635713&o=json)
