---
schema: wang-person/v1
id: p_cxZ5yzSg26M1kF7erww7KG
status: active
merged_into: null
display_name: 王紀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BWS52PeiMLLX3JSBz8MxSo
        subject_person_id: p_cxZ5yzSg26M1kF7erww7KG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LRu1Dyu8SQNNNadX9cWcSJ
          claim_id: c_BWS52PeiMLLX3JSBz8MxSo
          source_id: s_28t7HvLK65NjNF1HPcJjME
          stance: supports
          locator: CBDB:198371
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198371）
          source: &a1
            id: s_28t7HvLK65NjNF1HPcJjME
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 198371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198371&o=json
            external_identifier: CBDB:198371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_j7dZhJ2MtEn8pD5zngRsFk
        subject_person_id: p_cxZ5yzSg26M1kF7erww7KG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1420年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_awChDoDiivAUQ1bUFMWS2F
          claim_id: c_j7dZhJ2MtEn8pD5zngRsFk
          source_id: s_28t7HvLK65NjNF1HPcJjME
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HLUtN6mDDJnoRMLn3y8hPX
        subject_person_id: p_cxZ5yzSg26M1kF7erww7KG
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
        - id: cs_GBJYez7pf4i9hXRCLnc6KR
          claim_id: c_HLUtN6mDDJnoRMLn3y8hPX
          source_id: s_28t7HvLK65NjNF1HPcJjME
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8DThNDui_HRVwpbGhqg1x4
        subject_person_id: p_w3UbkEMdobeBRPKPUVJVKN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cxZ5yzSg26M1kF7erww7KG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_06ol8-xcYfl5zDn2AB67Bl
          claim_id: c_8DThNDui_HRVwpbGhqg1x4
          source_id: s_28t7HvLK65NjNF1HPcJjME
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w3UbkEMdobeBRPKPUVJVKN
        status: active
        display_name: 王聰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_q_1iF5XvUoFhRg68zaTpkQ
        subject_person_id: p_cxZ5yzSg26M1kF7erww7KG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HN267QgajCy8eXGGgQF8Y6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__qWIaWpJRgujvfTnEHu0Ef
          claim_id: c_q_1iF5XvUoFhRg68zaTpkQ
          source_id: s_CerDsxJkyYP1B4gUtJ0yM8
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CerDsxJkyYP1B4gUtJ0yM8
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王紀妻)（CBDB 263670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263670&o=json
            external_identifier: CBDB:263670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HN267QgajCy8eXGGgQF8Y6
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_JfBNcdV4aOQj4w9OcWgRzw
        subject_person_id: p_NomHvVzC7fLNhGChtsF25Y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cxZ5yzSg26M1kF7erww7KG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z8neGub1F8konsQGdgOGmA
          claim_id: c_JfBNcdV4aOQj4w9OcWgRzw
          source_id: s_28t7HvLK65NjNF1HPcJjME
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NomHvVzC7fLNhGChtsF25Y
        status: active
        display_name: 王宗原
        merged_into_person_id: null
    - claim:
        id: c_7F2Df5bjXx3A7kQ2ccga9j
        subject_person_id: p_aABLPY5fAx7Ku4jTXiyWX2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cxZ5yzSg26M1kF7erww7KG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cwqw14yv5_12Nh_e1WVyB2
          claim_id: c_7F2Df5bjXx3A7kQ2ccga9j
          source_id: s_28t7HvLK65NjNF1HPcJjME
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aABLPY5fAx7Ku4jTXiyWX2
        status: active
        display_name: 王敬輔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| birth.date | 1420年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w3UbkEMdobeBRPKPUVJVKN | 王聰 | accepted |
| spouses | p_HN267QgajCy8eXGGgQF8Y6 | 李氏 | accepted |
| ancestors | p_NomHvVzC7fLNhGChtsF25Y | 王宗原 | accepted |
| ancestors | p_aABLPY5fAx7Ku4jTXiyWX2 | 王敬輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王紀妻)（CBDB 263670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263670&o=json)
- [中国历代人物传记资料库：王紀（CBDB 198371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198371&o=json)
