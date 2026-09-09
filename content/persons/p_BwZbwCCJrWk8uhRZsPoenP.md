---
schema: wang-person/v1
id: p_BwZbwCCJrWk8uhRZsPoenP
status: active
merged_into: null
display_name: 王護
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tNA8dy2Lterroo3y8RRTNx
        subject_person_id: p_BwZbwCCJrWk8uhRZsPoenP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王護
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mTSWgQGw64poCB4LTBFfw4
          claim_id: c_tNA8dy2Lterroo3y8RRTNx
          source_id: s_Cj5kQJB3wrGBDo5Ej1XQt3
          stance: supports
          locator: CBDB:264764
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264764）
          source: &a1
            id: s_Cj5kQJB3wrGBDo5Ej1XQt3
            source_type: api_record
            title: 中国历代人物传记资料库：王護（CBDB 264764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264764&o=json
            external_identifier: CBDB:264764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h4R1SFKNkWztcXFyZL1QCw
        subject_person_id: p_BwZbwCCJrWk8uhRZsPoenP
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
        - id: cs_5wQA751ETB4ahaGgH5KLfy
          claim_id: c_h4R1SFKNkWztcXFyZL1QCw
          source_id: s_Cj5kQJB3wrGBDo5Ej1XQt3
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

# 王護

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王護 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王護（CBDB 264764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264764&o=json)
