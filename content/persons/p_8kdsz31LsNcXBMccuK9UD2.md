---
schema: wang-person/v1
id: p_8kdsz31LsNcXBMccuK9UD2
status: active
merged_into: null
display_name: 王恩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oKmJWdbhbb7xojBWazDKwv
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C5P9vuBQKAn9VTBRYwGG4D
          claim_id: c_oKmJWdbhbb7xojBWazDKwv
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: CBDB:200520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200520）
          source: &a1
            id: s_rinjSKxkPZ6GXhj8MmBj5D
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 200520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200520&o=json
            external_identifier: CBDB:200520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u5TSLSCaAFPPHD4j3B5cjf
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1452年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9SMwQ4G614iuUTidyyGrud
          claim_id: c_u5TSLSCaAFPPHD4j3B5cjf
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
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
        id: c_GvpFcusePWdowR3KForu4b
        subject_person_id: p_8kdsz31LsNcXBMccuK9UD2
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
        - id: cs_YS9dFNrbrzhPZ7sfuX4F2E
          claim_id: c_GvpFcusePWdowR3KForu4b
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
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
        id: c_rchdbHQ9KbvBye89WAOg_R
        subject_person_id: p_o8zvgJXd9bgohC9oUj28Xv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E6Xybh93MzzAVSCSF8JHxX
          claim_id: c_rchdbHQ9KbvBye89WAOg_R
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第六十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_o8zvgJXd9bgohC9oUj28Xv
        status: active
        display_name: 王敏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6V_d6Rypa1XTx2phgVbpEB
        subject_person_id: p_DSEvyAUUU5jVKEwuv4MsEy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_akh0pVWv53a3k9w0CW-tgy
          claim_id: c_6V_d6Rypa1XTx2phgVbpEB
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第六十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DSEvyAUUU5jVKEwuv4MsEy
        status: active
        display_name: 王貴學
        merged_into_person_id: null
    - claim:
        id: c_Yy2JdziJzMonbX3oiYWDiJ
        subject_person_id: p_mMyJdAuQKEqWr5tm5De2Fi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J5qkpVfSlWwFxHk4HzZCvR
          claim_id: c_Yy2JdziJzMonbX3oiYWDiJ
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第六十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mMyJdAuQKEqWr5tm5De2Fi
        status: active
        display_name: 王士怡
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩 | accepted |
| birth.date | 1452年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_o8zvgJXd9bgohC9oUj28Xv | 王敏 | accepted |
| ancestors | p_DSEvyAUUU5jVKEwuv4MsEy | 王貴學 | accepted |
| ancestors | p_mMyJdAuQKEqWr5tm5De2Fi | 王士怡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 200520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200520&o=json)
