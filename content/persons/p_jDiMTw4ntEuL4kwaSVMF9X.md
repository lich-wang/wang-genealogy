---
schema: wang-person/v1
id: p_jDiMTw4ntEuL4kwaSVMF9X
status: active
merged_into: null
display_name: 王昱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H7bAi5zc9Gc8aHcmq1cT43
        subject_person_id: p_jDiMTw4ntEuL4kwaSVMF9X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PkY8qnqr9JobcAbTgsg6wC
          claim_id: c_H7bAi5zc9Gc8aHcmq1cT43
          source_id: s_dDcevny3JLiYNBm6bxJTNM
          stance: supports
          locator: CBDB:337210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337210）
          source: &a1
            id: s_dDcevny3JLiYNBm6bxJTNM
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 337210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337210&o=json
            external_identifier: CBDB:337210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aNbNbsjfujRw6DhGJBvrST
        subject_person_id: p_jDiMTw4ntEuL4kwaSVMF9X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱，明人物。天順八年進士，籍贯蒲城。（中国历代人物传记资料库 CBDB 337210）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hfLEQXk8XFsXx5GmY2nIvu
          claim_id: c_aNbNbsjfujRw6DhGJBvrST
          source_id: s_dDcevny3JLiYNBm6bxJTNM
          stance: supports
          locator: CBDB:337210
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VCoA81MXH4aA-aC-dB6TR-
        subject_person_id: p_L1mTZr3NQ9UFGyoNN92bJE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jDiMTw4ntEuL4kwaSVMF9X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aWhK-Lv_8dkevnfkhPoG9d
          claim_id: c_VCoA81MXH4aA-aC-dB6TR-
          source_id: s_A8oz3fiFSDgm8FJ0G6xs2u
          stance: supports
          locator: CBDB：兄弟 王臣（126514）之父／母 王威
          quotation: null
          interpretation_note: 由兄弟关系推断：王昱 与 王臣 为同胞（CBDB 记「弟」），王臣 之父／母即 王昱 之父／母。
          source:
            id: s_A8oz3fiFSDgm8FJ0G6xs2u
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 337210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337210&o=json
            external_identifier: CBDB:337210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L1mTZr3NQ9UFGyoNN92bJE
        status: active
        display_name: 王威
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vuurto809qfJYGJUhdAU_i
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jDiMTw4ntEuL4kwaSVMF9X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mbuYmOCC7ml_AHGLaH-kCt
          claim_id: c_vuurto809qfJYGJUhdAU_i
          source_id: s_A8oz3fiFSDgm8FJ0G6xs2u
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126514 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A8oz3fiFSDgm8FJ0G6xs2u
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 337210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337210&o=json
            external_identifier: CBDB:337210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BMNf3Y1e3GX9M1tCr78uZv
        status: active
        display_name: 王臣
        merged_into_person_id: null
---

# 王昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昱 | accepted |
| bio.summary | 王昱，明人物。天順八年進士，籍贯蒲城。（中国历代人物传记资料库 CBDB 337210） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L1mTZr3NQ9UFGyoNN92bJE | 王威 | accepted |
| other | p_BMNf3Y1e3GX9M1tCr78uZv | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昱（CBDB 337210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337210&o=json)
