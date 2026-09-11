---
schema: wang-person/v1
id: p_Vu5wPFU9etB1mZyT3n6avf
status: active
merged_into: null
display_name: 王永寧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RzGR74UVqx3EyFn6bW2bXq
        subject_person_id: p_Vu5wPFU9etB1mZyT3n6avf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WKyRkEsd7BsbFf7Wg2dKvY
          claim_id: c_RzGR74UVqx3EyFn6bW2bXq
          source_id: s_UzECerMbZg7nS1w59aM7CS
          stance: supports
          locator: CBDB:206689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206689）
          source: &a1
            id: s_UzECerMbZg7nS1w59aM7CS
            source_type: api_record
            title: 中国历代人物传记资料库：王永寧（CBDB 206689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206689&o=json
            external_identifier: CBDB:206689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9Q4WuUgBzf7J8UyEnghLk8
        subject_person_id: p_Vu5wPFU9etB1mZyT3n6avf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1555年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bmX8aWm9D6P8AANw4LwMoD
          claim_id: c_9Q4WuUgBzf7J8UyEnghLk8
          source_id: s_UzECerMbZg7nS1w59aM7CS
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
        id: c_xP8Ea3tAK5ADjCXHVvYbcB
        subject_person_id: p_Vu5wPFU9etB1mZyT3n6avf
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
        - id: cs_sU49WiqypQQ3Xm2xCFp9mY
          claim_id: c_xP8Ea3tAK5ADjCXHVvYbcB
          source_id: s_UzECerMbZg7nS1w59aM7CS
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
  ancestors:
    - claim:
        id: c_e5eqOE9ITAl58TLj4RjKd9
        subject_person_id: p_6w75fHefGfCCHw8rL8d7v7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Vu5wPFU9etB1mZyT3n6avf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nFw_L5ZLDqlkQx9MdgJpjf
          claim_id: c_e5eqOE9ITAl58TLj4RjKd9
          source_id: s_61UYBLUDk9y3gmkeRptPGt
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百零三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_61UYBLUDk9y3gmkeRptPGt
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 221611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221611&o=json
            external_identifier: CBDB:221611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6w75fHefGfCCHw8rL8d7v7
        status: active
        display_name: 王演
        merged_into_person_id: null
    - claim:
        id: c_1CLtxwtdf2NtiGBqSygK_w
        subject_person_id: p_hz4YncNPEpmW4kQv9hGJsL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Vu5wPFU9etB1mZyT3n6avf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NnN2ICu2fGaMgeT1j14znq
          claim_id: c_1CLtxwtdf2NtiGBqSygK_w
          source_id: s_qjzFFCngAr544QwPuszaZL
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百零三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qjzFFCngAr544QwPuszaZL
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 221610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221610&o=json
            external_identifier: CBDB:221610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hz4YncNPEpmW4kQv9hGJsL
        status: active
        display_name: 王銘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王永寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永寧 | accepted |
| birth.date | 1555年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6w75fHefGfCCHw8rL8d7v7 | 王演 | accepted |
| ancestors | p_hz4YncNPEpmW4kQv9hGJsL | 王銘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銘（CBDB 221610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221610&o=json)
- [中国历代人物传记资料库：王演（CBDB 221611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221611&o=json)
- [中国历代人物传记资料库：王永寧（CBDB 206689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206689&o=json)
