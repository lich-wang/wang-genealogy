---
schema: wang-person/v1
id: p_BjoRXtUwQPXmHxxx93anvf
status: active
merged_into: null
display_name: 王慧增
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7sCsHULFdgZQBSFSrgr8eW
        subject_person_id: p_BjoRXtUwQPXmHxxx93anvf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慧增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ms2P8rL9MMtT3VBAyETTD9
          claim_id: c_7sCsHULFdgZQBSFSrgr8eW
          source_id: s_Ts5TxoyCmBHRwPn92S92Wn
          stance: supports
          locator: CBDB:568811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568811）
          source: &a1
            id: s_Ts5TxoyCmBHRwPn92S92Wn
            source_type: api_record
            title: 中国历代人物传记资料库：王慧增（CBDB 568811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568811&o=json
            external_identifier: CBDB:568811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JvCwovYynAc71vzeiyEJ8o
        subject_person_id: p_BjoRXtUwQPXmHxxx93anvf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F9yHMMLGKu7JaWrQ9Vtwo6
          claim_id: c_JvCwovYynAc71vzeiyEJ8o
          source_id: s_Ts5TxoyCmBHRwPn92S92Wn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王慧增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慧增 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慧增（CBDB 568811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568811&o=json)
