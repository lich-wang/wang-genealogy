---
schema: wang-person/v1
id: p_ah83T7RHuy7G5DRHcgFfnY
status: active
merged_into: null
display_name: 王嵩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Udnpi8QC17oT9omYMwUU7T
        subject_person_id: p_ah83T7RHuy7G5DRHcgFfnY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_viCCSMBCWm4QHnDo3FXaaH
          claim_id: c_Udnpi8QC17oT9omYMwUU7T
          source_id: s_tXwMEpHTjokirdNF1D8YF7
          stance: supports
          locator: CBDB:467571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467571）
          source: &a1
            id: s_tXwMEpHTjokirdNF1D8YF7
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 467571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467571&o=json
            external_identifier: CBDB:467571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KjXaDypJnZ2xo7hbVWR89N
        subject_person_id: p_ah83T7RHuy7G5DRHcgFfnY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 467571）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2NPJ5LjaZ43-gvBPAzmGIW
          claim_id: c_KjXaDypJnZ2xo7hbVWR89N
          source_id: s_tXwMEpHTjokirdNF1D8YF7
          stance: supports
          locator: CBDB:467571
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

# 王嵩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩 | accepted |
| bio.summary | 王嵩，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 467571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵩（CBDB 467571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467571&o=json)
