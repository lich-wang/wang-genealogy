---
schema: wang-person/v1
id: p_Xep6f7jSz7BTz4Gp4ejyM6
status: active
merged_into: null
display_name: 王亦會
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xmPMLoFdn2ppDc2Gd6GhQ7
        subject_person_id: p_Xep6f7jSz7BTz4Gp4ejyM6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亦會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cE3Axufit14wB1q6SjN46j
          claim_id: c_xmPMLoFdn2ppDc2Gd6GhQ7
          source_id: s_4jxMzjEL1pRVejRL4tmLLy
          stance: supports
          locator: CBDB:635852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635852）
          source: &a1
            id: s_4jxMzjEL1pRVejRL4tmLLy
            source_type: api_record
            title: 中国历代人物传记资料库：王亦會（CBDB 635852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635852&o=json
            external_identifier: CBDB:635852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PUWuQd1gADDJQGAvqf1E8B
        subject_person_id: p_Xep6f7jSz7BTz4Gp4ejyM6
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
        - id: cs_j5Nnhq6eN6X1FSkeuwpQEV
          claim_id: c_PUWuQd1gADDJQGAvqf1E8B
          source_id: s_4jxMzjEL1pRVejRL4tmLLy
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

# 王亦會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亦會 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亦會（CBDB 635852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635852&o=json)
