---
schema: wang-person/v1
id: p_uZ1ZApthT6Psuog58jJmMP
status: active
merged_into: null
display_name: 王傑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_78ohH434AigXuBoXzbGyb5
        subject_person_id: p_uZ1ZApthT6Psuog58jJmMP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cSywZzVFgQ4T9imzXc2Qz3
          claim_id: c_78ohH434AigXuBoXzbGyb5
          source_id: s_HSNV81PRrTYTPW6pZQAoMd
          stance: supports
          locator: CBDB:253499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253499）
          source: &a1
            id: s_HSNV81PRrTYTPW6pZQAoMd
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 253499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253499&o=json
            external_identifier: CBDB:253499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LrK7v3MWRHKNyDYk7wDUwm
        subject_person_id: p_uZ1ZApthT6Psuog58jJmMP
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
        - id: cs_BhNsRAAUFhVpfV8YsLnE4t
          claim_id: c_LrK7v3MWRHKNyDYk7wDUwm
          source_id: s_HSNV81PRrTYTPW6pZQAoMd
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
        id: c_qEWD_2B_ged0zrd7ouIqYw
        subject_person_id: p_uZ1ZApthT6Psuog58jJmMP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CbNek4JAS5hDtg3Feu9pPB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PyoKTHLhPGygC4g4RQYYWn
          claim_id: c_qEWD_2B_ged0zrd7ouIqYw
          source_id: s_3itLLULtgBSCa7TEVBMxNa
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3itLLULtgBSCa7TEVBMxNa
            source_type: api_record
            title: 中国历代人物传记资料库：王溫（CBDB 200081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200081&o=json
            external_identifier: CBDB:200081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CbNek4JAS5hDtg3Feu9pPB
        status: active
        display_name: 王溫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CbNek4JAS5hDtg3Feu9pPB | 王溫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 253499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253499&o=json)
- [中国历代人物传记资料库：王溫（CBDB 200081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200081&o=json)
