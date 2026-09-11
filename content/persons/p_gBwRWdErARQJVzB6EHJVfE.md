---
schema: wang-person/v1
id: p_gBwRWdErARQJVzB6EHJVfE
status: active
merged_into: null
display_name: 王朝棟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3GAFSFJ2SAJ82kwFNvpuvi
        subject_person_id: p_gBwRWdErARQJVzB6EHJVfE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pAtiuWLvjBiJYtX2t1WCJ7
          claim_id: c_3GAFSFJ2SAJ82kwFNvpuvi
          source_id: s_jJDnwRUEvNWCDgr8y4RrVL
          stance: supports
          locator: CBDB:212086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212086）
          source: &a1
            id: s_jJDnwRUEvNWCDgr8y4RrVL
            source_type: api_record
            title: 中国历代人物传记资料库：王朝棟（CBDB 212086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212086&o=json
            external_identifier: CBDB:212086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8xK3MWa8A466yD9F4QgMxU
        subject_person_id: p_gBwRWdErARQJVzB6EHJVfE
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
        - id: cs_JLTNBtGmBNpHpDtiAEGLqL
          claim_id: c_8xK3MWa8A466yD9F4QgMxU
          source_id: s_jJDnwRUEvNWCDgr8y4RrVL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_esYuCObzkoLGQbY4pVD2UY
        subject_person_id: p_gBwRWdErARQJVzB6EHJVfE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_feVTPN7HCaS1BxqehN6dAD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KUWdG6365fFceLqaCGEIL1
          claim_id: c_esYuCObzkoLGQbY4pVD2UY
          source_id: s_4BCKDC9vCQZBt84PMj5mSb
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4BCKDC9vCQZBt84PMj5mSb
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 206012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206012&o=json
            external_identifier: CBDB:206012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_feVTPN7HCaS1BxqehN6dAD
        status: active
        display_name: 王度
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝棟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_feVTPN7HCaS1BxqehN6dAD | 王度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝棟（CBDB 212086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212086&o=json)
- [中国历代人物传记资料库：王度（CBDB 206012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206012&o=json)
