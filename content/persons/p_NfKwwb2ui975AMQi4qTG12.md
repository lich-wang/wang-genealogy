---
schema: wang-person/v1
id: p_NfKwwb2ui975AMQi4qTG12
status: active
merged_into: null
display_name: 王言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BJHRPyMjz758NNL1UETfx8
        subject_person_id: p_NfKwwb2ui975AMQi4qTG12
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_98L8g5nLQAGhP5rf2o4omR
          claim_id: c_BJHRPyMjz758NNL1UETfx8
          source_id: s_q7zVgSmsEJMvp2DsAs2YJ4
          stance: supports
          locator: CBDB:274394
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274394）
          source: &a1
            id: s_q7zVgSmsEJMvp2DsAs2YJ4
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 274394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274394&o=json
            external_identifier: CBDB:274394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8KDW7dC9q5CYxj5DdukAjR
        subject_person_id: p_NfKwwb2ui975AMQi4qTG12
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
        - id: cs_3soKgEE7FAtRYDmPPam8PL
          claim_id: c_8KDW7dC9q5CYxj5DdukAjR
          source_id: s_q7zVgSmsEJMvp2DsAs2YJ4
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
        id: c_PHxcFaWqUQBJ_TZLg_ff2C
        subject_person_id: p_NfKwwb2ui975AMQi4qTG12
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3VTZoWGHQLyQ9mnF79uy7J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0b7iJwFF5dc7PJLckF9tnY
          claim_id: c_PHxcFaWqUQBJ_TZLg_ff2C
          source_id: s_hBdRe6QomwSAn3Scu61c6H
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第七十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hBdRe6QomwSAn3Scu61c6H
            source_type: api_record
            title: 中国历代人物传记资料库：王敎（CBDB 201563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201563&o=json
            external_identifier: CBDB:201563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3VTZoWGHQLyQ9mnF79uy7J
        status: active
        display_name: 王敎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3VTZoWGHQLyQ9mnF79uy7J | 王敎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敎（CBDB 201563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201563&o=json)
- [中国历代人物传记资料库：王言（CBDB 274394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274394&o=json)
