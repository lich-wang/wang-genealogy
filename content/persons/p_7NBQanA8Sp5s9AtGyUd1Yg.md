---
schema: wang-person/v1
id: p_7NBQanA8Sp5s9AtGyUd1Yg
status: active
merged_into: null
display_name: 王祐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mueqQNwZzvhi4S81AXxVMb
        subject_person_id: p_7NBQanA8Sp5s9AtGyUd1Yg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MfEEK4Es1DKe5q2PHx8e2w
          claim_id: c_mueqQNwZzvhi4S81AXxVMb
          source_id: s_H3LKFEPwhb3aRpU979R8C1
          stance: supports
          locator: CBDB:480109
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480109）
          source: &a1
            id: s_H3LKFEPwhb3aRpU979R8C1
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 480109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480109&o=json
            external_identifier: CBDB:480109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Da5LLipPfdffPE1D2rWtim
        subject_person_id: p_7NBQanA8Sp5s9AtGyUd1Yg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为東晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4j1uAZKQdc4MMcX53WRLnG
          claim_id: c_Da5LLipPfdffPE1D2rWtim
          source_id: s_H3LKFEPwhb3aRpU979R8C1
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

# 王祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祐 | accepted |
| bio.summary | CBDB 记载为東晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祐（CBDB 480109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480109&o=json)
