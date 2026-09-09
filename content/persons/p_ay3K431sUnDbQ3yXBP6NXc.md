---
schema: wang-person/v1
id: p_ay3K431sUnDbQ3yXBP6NXc
status: active
merged_into: null
display_name: 王心
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xShTi772PE1GbtckTacMoR
        subject_person_id: p_ay3K431sUnDbQ3yXBP6NXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aRNLcgKfdNNEqQE5JbNeKZ
          claim_id: c_xShTi772PE1GbtckTacMoR
          source_id: s_M4zg3cDGLtAcf1mnVYGFvv
          stance: supports
          locator: CBDB:467257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467257）
          source: &a1
            id: s_M4zg3cDGLtAcf1mnVYGFvv
            source_type: api_record
            title: 中国历代人物传记资料库：王心（CBDB 467257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467257&o=json
            external_identifier: CBDB:467257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aaLZxX6qFH5xKnNs8M2Thf
        subject_person_id: p_ay3K431sUnDbQ3yXBP6NXc
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
        - id: cs_YVoLB9e7F8G5US9jCf1ddo
          claim_id: c_aaLZxX6qFH5xKnNs8M2Thf
          source_id: s_M4zg3cDGLtAcf1mnVYGFvv
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

# 王心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王心（CBDB 467257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467257&o=json)
