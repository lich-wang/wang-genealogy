---
schema: wang-person/v1
id: p_2WSCdoV1y2t3YvB6CF17p4
status: active
merged_into: null
display_name: 王七
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LFiAKnmW7HzE1dFGDGMeJs
        subject_person_id: p_2WSCdoV1y2t3YvB6CF17p4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王七
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sLB31EKvExm3mxCE3rB7Ds
          claim_id: c_LFiAKnmW7HzE1dFGDGMeJs
          source_id: s_NjDwUxFGZ3DwAh3JPm2dLB
          stance: supports
          locator: CBDB:520210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（520210）
          source: &a1
            id: s_NjDwUxFGZ3DwAh3JPm2dLB
            source_type: api_record
            title: 中国历代人物传记资料库：王七（CBDB 520210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520210&o=json
            external_identifier: CBDB:520210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ACHDTK6H9DZmpq75V2Rchh
        subject_person_id: p_2WSCdoV1y2t3YvB6CF17p4
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
        - id: cs_VACcxAd8rUnvPoEC7Wzxne
          claim_id: c_ACHDTK6H9DZmpq75V2Rchh
          source_id: s_NjDwUxFGZ3DwAh3JPm2dLB
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

# 王七

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王七 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王七（CBDB 520210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520210&o=json)
