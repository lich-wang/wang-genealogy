---
schema: wang-person/v1
id: p_vBZf8XcAfN7YLCu434S6Mn
status: active
merged_into: null
display_name: 王瓖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AXRMkEygYfHjkBogvyfeE4
        subject_person_id: p_vBZf8XcAfN7YLCu434S6Mn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HBDUn9uFo3543SB1Ae4z5S
          claim_id: c_AXRMkEygYfHjkBogvyfeE4
          source_id: s_Jf83McwehKc65yc8E3wmxL
          stance: supports
          locator: CBDB:244355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244355）
          source: &a1
            id: s_Jf83McwehKc65yc8E3wmxL
            source_type: api_record
            title: 中国历代人物传记资料库：王瓖（CBDB 244355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244355&o=json
            external_identifier: CBDB:244355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e2Wkd3TBbdDeeQGF5TAQxJ
        subject_person_id: p_vBZf8XcAfN7YLCu434S6Mn
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
        - id: cs_LZrrxVdnmfrBSdzEjpUjJR
          claim_id: c_e2Wkd3TBbdDeeQGF5TAQxJ
          source_id: s_Jf83McwehKc65yc8E3wmxL
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
        id: c_K50JMpBjWwm6PRe485kSAB
        subject_person_id: p_vBZf8XcAfN7YLCu434S6Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_epxa1325d3t8zGBhqaGATe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KC2cW68VmTqve4XMRyI5P3
          claim_id: c_K50JMpBjWwm6PRe485kSAB
          source_id: s_tsLSMzErps2tPShGmMQFWS
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tsLSMzErps2tPShGmMQFWS
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 199393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199393&o=json
            external_identifier: CBDB:199393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_epxa1325d3t8zGBhqaGATe
        status: active
        display_name: 王錦
        merged_into_person_id: null
    - claim:
        id: c_9UunCVKGP8GuyqKg1tYkaf
        subject_person_id: p_vBZf8XcAfN7YLCu434S6Mn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vMrsFyx3mJ3d7E7imZc3LS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W4-EPdlkm-jCKgasD3_VK_
          claim_id: c_9UunCVKGP8GuyqKg1tYkaf
          source_id: s_Jf83McwehKc65yc8E3wmxL
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vMrsFyx3mJ3d7E7imZc3LS
        status: active
        display_name: 王鑾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_epxa1325d3t8zGBhqaGATe | 王錦 | accepted |
| children | p_vMrsFyx3mJ3d7E7imZc3LS | 王鑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 199393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199393&o=json)
- [中国历代人物传记资料库：王瓖（CBDB 244355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244355&o=json)
