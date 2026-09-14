---
schema: wang-person/v1
id: p_L1mTZr3NQ9UFGyoNN92bJE
status: active
merged_into: null
display_name: 王威
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HD4qjaBLJrsiVaT4t6D1EX
        subject_person_id: p_L1mTZr3NQ9UFGyoNN92bJE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EvCKERkz7vhwcPgtijKCSD
          claim_id: c_HD4qjaBLJrsiVaT4t6D1EX
          source_id: s_9UeGtsRLMnJhFzdwtg9eJQ
          stance: supports
          locator: CBDB:337166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337166）
          source: &a1
            id: s_9UeGtsRLMnJhFzdwtg9eJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 337166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337166&o=json
            external_identifier: CBDB:337166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GE7er3x2u3er44uRJDPTfm
        subject_person_id: p_L1mTZr3NQ9UFGyoNN92bJE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威，明人物。天順八年進士，籍贯蒲城。（中国历代人物传记资料库 CBDB 337166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ObYQsdqKgfTlXtAXtoPnCn
          claim_id: c_GE7er3x2u3er44uRJDPTfm
          source_id: s_9UeGtsRLMnJhFzdwtg9eJQ
          stance: supports
          locator: CBDB:337166
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FXRwuXV2Z73JnrSUvVKvwZ
        subject_person_id: p_L1mTZr3NQ9UFGyoNN92bJE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p6TIv7-rn0xpcykH044ylj
          claim_id: c_FXRwuXV2Z73JnrSUvVKvwZ
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第五十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zmrfFWfwmHqZxrRkgGutK1
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 126514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126514&o=json
            external_identifier: CBDB:126514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BMNf3Y1e3GX9M1tCr78uZv
        status: active
        display_name: 王臣
        merged_into_person_id: null
    - claim:
        id: c_S-MjWV_sGLPDr_BVB5nHtM
        subject_person_id: p_L1mTZr3NQ9UFGyoNN92bJE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GqsmKMNTn1jVdDtxhMkkuz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZHD-iTH8HfU8K5qpl90CB_
          claim_id: c_S-MjWV_sGLPDr_BVB5nHtM
          source_id: s_8Y3uiVZeklcOovuRL9JNeP
          stance: supports
          locator: CBDB：兄弟 王臣（126514）之父／母 王威
          quotation: null
          interpretation_note: 由兄弟关系推断：王志 与 王臣 为同胞（CBDB 记「弟」），王臣 之父／母即 王志 之父／母。
          source:
            id: s_8Y3uiVZeklcOovuRL9JNeP
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 337222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337222&o=json
            external_identifier: CBDB:337222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GqsmKMNTn1jVdDtxhMkkuz
        status: active
        display_name: 王志
        merged_into_person_id: null
    - claim:
        id: c_JOxBBXP7aMDgFLuobCN9Rw
        subject_person_id: p_L1mTZr3NQ9UFGyoNN92bJE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NHJKz3mSnRKkPm7sc9fmFE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1YyFZedSI6diI8ottnysfO
          claim_id: c_JOxBBXP7aMDgFLuobCN9Rw
          source_id: s_g6JvpgqelkchXzbH2edng_
          stance: supports
          locator: CBDB：兄弟 王臣（126514）之父／母 王威
          quotation: null
          interpretation_note: 由兄弟关系推断：王玘 与 王臣 为同胞（CBDB 记「弟」），王臣 之父／母即 王玘 之父／母。
          source:
            id: s_g6JvpgqelkchXzbH2edng_
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 337233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337233&o=json
            external_identifier: CBDB:337233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NHJKz3mSnRKkPm7sc9fmFE
        status: active
        display_name: 王玘
        merged_into_person_id: null
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
        id: p_jDiMTw4ntEuL4kwaSVMF9X
        status: active
        display_name: 王昱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王威 | accepted |
| bio.summary | 王威，明人物。天順八年進士，籍贯蒲城。（中国历代人物传记资料库 CBDB 337166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BMNf3Y1e3GX9M1tCr78uZv | 王臣 | accepted |
| children | p_GqsmKMNTn1jVdDtxhMkkuz | 王志 | accepted |
| children | p_NHJKz3mSnRKkPm7sc9fmFE | 王玘 | accepted |
| children | p_jDiMTw4ntEuL4kwaSVMF9X | 王昱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 126514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126514&o=json)
- [中国历代人物传记资料库：王玘（CBDB 337233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337233&o=json)
- [中国历代人物传记资料库：王威（CBDB 337166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337166&o=json)
- [中国历代人物传记资料库：王昱（CBDB 337210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337210&o=json)
- [中国历代人物传记资料库：王志（CBDB 337222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337222&o=json)
