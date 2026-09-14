---
schema: wang-person/v1
id: p_v2Fkat16mGPQiTSwTrQAp8
status: active
merged_into: null
display_name: 王宦
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dbVPsGyUmLadmk2LtHDA3F
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GGd36xumiL82YAQoNG4MEE
          claim_id: c_dbVPsGyUmLadmk2LtHDA3F
          source_id: s_CmEXBFKXmsb6MmUKf3utME
          stance: supports
          locator: CBDB:325295
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325295）
          source: &a1
            id: s_CmEXBFKXmsb6MmUKf3utME
            source_type: api_record
            title: 中国历代人物传记资料库：王宦（CBDB 325295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325295&o=json
            external_identifier: CBDB:325295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eYKgKkp877wCPASfUKQY1g
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宦，明人物。嘉靖三十八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 325295）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i0j1f4iIchi7IU7QpMBnq-
          claim_id: c_eYKgKkp877wCPASfUKQY1g
          source_id: s_CmEXBFKXmsb6MmUKf3utME
          stance: supports
          locator: CBDB:325295
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_d5yb9cpZUVdeZ7DNvVpJTN
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N1zXfVAzsHV9UYAEDLb5C7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tpzXIAXNVYCpX9T-KNmpIY
          claim_id: c_d5yb9cpZUVdeZ7DNvVpJTN
          source_id: s_CmEXBFKXmsb6MmUKf3utME
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N1zXfVAzsHV9UYAEDLb5C7
        status: active
        display_name: 王徽猷
        merged_into_person_id: null
    - claim:
        id: c_e0TV4JszV8Xm63TuWOKfbn
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DLWA6KWBazENASg8cbnra6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_al80k6ZDpkGMYZvZDh9O1Z
          claim_id: c_e0TV4JszV8Xm63TuWOKfbn
          source_id: s_6Ku9nWZjMtsmuII5894L_X
          stance: supports
          locator: CBDB：兄弟 王徽猷（204879）之父／母 王宦
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽謨 与 王徽猷 为同胞（CBDB 记「兄」），王徽猷 之父／母即 王徽謨 之父／母。
          source:
            id: s_6Ku9nWZjMtsmuII5894L_X
            source_type: api_record
            title: 中国历代人物传记资料库：王徽謨（CBDB 325300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325300&o=json
            external_identifier: CBDB:325300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DLWA6KWBazENASg8cbnra6
        status: active
        display_name: 王徽謨
        merged_into_person_id: null
    - claim:
        id: c__WuCWmCyItlCwKcqdhbIXt
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RB5jjWuze4xAiCmQ2mD8Z9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__bshT7aSkRMy5A6qyqlcuA
          claim_id: c__WuCWmCyItlCwKcqdhbIXt
          source_id: s_TBUTvX41_QDsheYQT0ISHR
          stance: supports
          locator: CBDB：兄弟 王徽猷（204879）之父／母 王宦
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽詔 与 王徽猷 为同胞（CBDB 记「兄」），王徽猷 之父／母即 王徽詔 之父／母。
          source:
            id: s_TBUTvX41_QDsheYQT0ISHR
            source_type: api_record
            title: 中国历代人物传记资料库：王徽詔（CBDB 325304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325304&o=json
            external_identifier: CBDB:325304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RB5jjWuze4xAiCmQ2mD8Z9
        status: active
        display_name: 王徽詔
        merged_into_person_id: null
    - claim:
        id: c_g7FPSjThHT_Ms4HA0cRqeT
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ayycRJwvXJ67FqzLiFbkse
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9gVYZ6FSRPU6965i3mST9O
          claim_id: c_g7FPSjThHT_Ms4HA0cRqeT
          source_id: s_DLQbWfkuYTJZLCu0ImFk4H
          stance: supports
          locator: CBDB：兄弟 王徽猷（204879）之父／母 王宦
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽音 与 王徽猷 为同胞（CBDB 记「兄」），王徽猷 之父／母即 王徽音 之父／母。
          source:
            id: s_DLQbWfkuYTJZLCu0ImFk4H
            source_type: api_record
            title: 中国历代人物传记资料库：王徽音（CBDB 325302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325302&o=json
            external_identifier: CBDB:325302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ayycRJwvXJ67FqzLiFbkse
        status: active
        display_name: 王徽音
        merged_into_person_id: null
    - claim:
        id: c_DoqSBkJJZ59LsOWD_Fq_84
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cuJXESrHNHNJnuEBq421dH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P9jeXSToIFENAsG_8w5ZHL
          claim_id: c_DoqSBkJJZ59LsOWD_Fq_84
          source_id: s_TNxpCLt2VhYe5lWZUgqrUS
          stance: supports
          locator: CBDB：兄弟 王徽猷（204879）之父／母 王宦
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽謙 与 王徽猷 为同胞（CBDB 记「兄」），王徽猷 之父／母即 王徽謙 之父／母。
          source:
            id: s_TNxpCLt2VhYe5lWZUgqrUS
            source_type: api_record
            title: 中国历代人物传记资料库：王徽謙（CBDB 325303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325303&o=json
            external_identifier: CBDB:325303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cuJXESrHNHNJnuEBq421dH
        status: active
        display_name: 王徽謙
        merged_into_person_id: null
    - claim:
        id: c_wKtjYdFA0xZgo-LfdO2QFM
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dUCJ9SoZn1KdAvaSuLiGkN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TZA9pftpan_6i6paQzEaOO
          claim_id: c_wKtjYdFA0xZgo-LfdO2QFM
          source_id: s_0jHWmhlhIBNyHfHrrSlMVI
          stance: supports
          locator: CBDB：兄弟 王徽猷（204879）之父／母 王宦
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽言 与 王徽猷 为同胞（CBDB 记「弟」），王徽猷 之父／母即 王徽言 之父／母。
          source:
            id: s_0jHWmhlhIBNyHfHrrSlMVI
            source_type: api_record
            title: 中国历代人物传记资料库：王徽言（CBDB 325299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325299&o=json
            external_identifier: CBDB:325299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dUCJ9SoZn1KdAvaSuLiGkN
        status: active
        display_name: 王徽言
        merged_into_person_id: null
    - claim:
        id: c_xlcLUec4QCRNI2DKgXtLmI
        subject_person_id: p_v2Fkat16mGPQiTSwTrQAp8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kbvpaoHr9vrPi8zX9FPCfJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SdhAbDCjKhI8nTlKxPYGBa
          claim_id: c_xlcLUec4QCRNI2DKgXtLmI
          source_id: s_VuUNUCZStW5ixDUw0reoO8
          stance: supports
          locator: CBDB：兄弟 王徽猷（204879）之父／母 王宦
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽典 与 王徽猷 为同胞（CBDB 记「兄」），王徽猷 之父／母即 王徽典 之父／母。
          source:
            id: s_VuUNUCZStW5ixDUw0reoO8
            source_type: api_record
            title: 中国历代人物传记资料库：王徽典（CBDB 325301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325301&o=json
            external_identifier: CBDB:325301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kbvpaoHr9vrPi8zX9FPCfJ
        status: active
        display_name: 王徽典
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宦 | accepted |
| bio.summary | 王宦，明人物。嘉靖三十八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 325295） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_N1zXfVAzsHV9UYAEDLb5C7 | 王徽猷 | accepted |
| children | p_DLWA6KWBazENASg8cbnra6 | 王徽謨 | accepted |
| children | p_RB5jjWuze4xAiCmQ2mD8Z9 | 王徽詔 | accepted |
| children | p_ayycRJwvXJ67FqzLiFbkse | 王徽音 | accepted |
| children | p_cuJXESrHNHNJnuEBq421dH | 王徽謙 | accepted |
| children | p_dUCJ9SoZn1KdAvaSuLiGkN | 王徽言 | accepted |
| children | p_kbvpaoHr9vrPi8zX9FPCfJ | 王徽典 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宦（CBDB 325295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325295&o=json)
- [中国历代人物传记资料库：王徽典（CBDB 325301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325301&o=json)
- [中国历代人物传记资料库：王徽謨（CBDB 325300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325300&o=json)
- [中国历代人物传记资料库：王徽謙（CBDB 325303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325303&o=json)
- [中国历代人物传记资料库：王徽言（CBDB 325299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325299&o=json)
- [中国历代人物传记资料库：王徽音（CBDB 325302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325302&o=json)
- [中国历代人物传记资料库：王徽詔（CBDB 325304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325304&o=json)
