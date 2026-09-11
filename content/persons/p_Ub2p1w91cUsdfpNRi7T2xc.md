---
schema: wang-person/v1
id: p_Ub2p1w91cUsdfpNRi7T2xc
status: active
merged_into: null
display_name: 王孟常
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hAY9sZwuvHpBP4WbmrQn9Q
        subject_person_id: p_Ub2p1w91cUsdfpNRi7T2xc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_73PFsnCAZJ7SDj2AJc54V8
          claim_id: c_hAY9sZwuvHpBP4WbmrQn9Q
          source_id: s_seoc89WHYFWmw8yDv7A8FV
          stance: supports
          locator: CBDB:242722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242722）
          source: &a1
            id: s_seoc89WHYFWmw8yDv7A8FV
            source_type: api_record
            title: 中国历代人物传记资料库：王孟常（CBDB 242722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242722&o=json
            external_identifier: CBDB:242722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KyBtKLrBDWtZxQr3ZgAEMC
        subject_person_id: p_Ub2p1w91cUsdfpNRi7T2xc
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
        - id: cs_2DFaxnnoyJDgG1P5Kf3rXc
          claim_id: c_KyBtKLrBDWtZxQr3ZgAEMC
          source_id: s_seoc89WHYFWmw8yDv7A8FV
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
  descendants:
    - claim:
        id: c_NcIOHXQmMaD6ncefBSaN0P
        subject_person_id: p_Ub2p1w91cUsdfpNRi7T2xc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_peHrYdss4DG3Q61Kgik3ci
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vDVA_FpSHqkO35ZaLJzFCA
          claim_id: c_NcIOHXQmMaD6ncefBSaN0P
          source_id: s_seoc89WHYFWmw8yDv7A8FV
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_peHrYdss4DG3Q61Kgik3ci
        status: active
        display_name: 王纓
        merged_into_person_id: null
  other: []
---

# 王孟常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟常 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_peHrYdss4DG3Q61Kgik3ci | 王纓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟常（CBDB 242722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242722&o=json)
