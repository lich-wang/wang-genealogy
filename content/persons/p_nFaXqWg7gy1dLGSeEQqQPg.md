---
schema: wang-person/v1
id: p_nFaXqWg7gy1dLGSeEQqQPg
status: active
merged_into: null
display_name: 王約
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VRafy5qktwUp9sKJZKCQeH
        subject_person_id: p_nFaXqWg7gy1dLGSeEQqQPg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uqFgAEVp9XPLVrAerv91qi
          claim_id: c_VRafy5qktwUp9sKJZKCQeH
          source_id: s_oLZBHndHsLrcPTwT2if9bm
          stance: supports
          locator: CBDB:272835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272835）
          source: &a1
            id: s_oLZBHndHsLrcPTwT2if9bm
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 272835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272835&o=json
            external_identifier: CBDB:272835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_piLr8MJXmqEP9jNGToiM1k
        subject_person_id: p_nFaXqWg7gy1dLGSeEQqQPg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w1ZZf7N7JD2Ji44G7VYvet
          claim_id: c_piLr8MJXmqEP9jNGToiM1k
          source_id: s_oLZBHndHsLrcPTwT2if9bm
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

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王約（CBDB 272835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272835&o=json)
