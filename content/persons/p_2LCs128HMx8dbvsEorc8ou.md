---
schema: wang-person/v1
id: p_2LCs128HMx8dbvsEorc8ou
status: active
merged_into: null
display_name: 王鉉
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E8NPyAVW8VvmaHzZLD5v63
        subject_person_id: p_2LCs128HMx8dbvsEorc8ou
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5YBaY1eVS2gbHvD5v8cpuv
          claim_id: c_E8NPyAVW8VvmaHzZLD5v63
          source_id: s_dKnFiskbarp17JvcEgAkrM
          stance: supports
          locator: CBDB:200018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200018）
          source: &a1
            id: s_dKnFiskbarp17JvcEgAkrM
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 200018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200018&o=json
            external_identifier: CBDB:200018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_S3yJGHWs2TfBje24knDFCa
        subject_person_id: p_2LCs128HMx8dbvsEorc8ou
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1446年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s9zEgBpN7dS1wKZkfm92PJ
          claim_id: c_S3yJGHWs2TfBje24knDFCa
          source_id: s_dKnFiskbarp17JvcEgAkrM
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
        id: c_j8reG6ssQMj5qPXGQ2J2mZ
        subject_person_id: p_2LCs128HMx8dbvsEorc8ou
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉（生于1446年），明人物。成化十四年進士，籍贯大寧中衛，入仕進士。（中国历代人物传记资料库 CBDB 200018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rROK1Nip1yA8yjl1C9YvPy
          claim_id: c_j8reG6ssQMj5qPXGQ2J2mZ
          source_id: s_dKnFiskbarp17JvcEgAkrM
          stance: supports
          locator: CBDB:200018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MwtqiZ7HwyqtRRdGyjxapY
        subject_person_id: p_jrr2Fwz4x5hKA8iAkHGgin
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2LCs128HMx8dbvsEorc8ou
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BxEpKwkd0djT2pIC53mIE0
          claim_id: c_MwtqiZ7HwyqtRRdGyjxapY
          source_id: s_dKnFiskbarp17JvcEgAkrM
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jrr2Fwz4x5hKA8iAkHGgin
        status: active
        display_name: 王文信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_M30bgJaZ8L4E5lkg7aqxNq
        subject_person_id: p_2LCs128HMx8dbvsEorc8ou
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Ymm6VKEEDKEWM49YbDHkRk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FStj57CDBAzUh8IxaupESo
          claim_id: c_M30bgJaZ8L4E5lkg7aqxNq
          source_id: s_q7Js1JzSwLmdZn9e5iXDX5
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_q7Js1JzSwLmdZn9e5iXDX5
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王鉉妻)（CBDB 252701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252701&o=json
            external_identifier: CBDB:252701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ymm6VKEEDKEWM49YbDHkRk
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_s0i4YF6kDeI76QKXrZwZoY
        subject_person_id: p_oah28dQUDq5UZaWYYoXHf3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LCs128HMx8dbvsEorc8ou
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gzjpyMOxj22Y27mbJAGnVQ
          claim_id: c_s0i4YF6kDeI76QKXrZwZoY
          source_id: s_dKnFiskbarp17JvcEgAkrM
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oah28dQUDq5UZaWYYoXHf3
        status: active
        display_name: 王公甫
        merged_into_person_id: null
    - claim:
        id: c_FUS-c1avtyO4aSFy5AeWC2
        subject_person_id: p_UvzJ7WQGN5c8DdXDK67BNS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LCs128HMx8dbvsEorc8ou
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hywm7ekK8Cz3nr8t2qB8YF
          claim_id: c_FUS-c1avtyO4aSFy5AeWC2
          source_id: s_dKnFiskbarp17JvcEgAkrM
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UvzJ7WQGN5c8DdXDK67BNS
        status: active
        display_name: 王克名
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_n9NMaGmc6sry6DID2DFPyi
        subject_person_id: p_2LCs128HMx8dbvsEorc8ou
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6xoDhEeUc4DrFbTWjXFWRL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WP_lhsqG8gOvaot1iE_sR0
          claim_id: c_n9NMaGmc6sry6DID2DFPyi
          source_id: s_bJbkAbs9qdhi3Ju8JQ2fYk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200018 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bJbkAbs9qdhi3Ju8JQ2fYk
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 252704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252704&o=json
            external_identifier: CBDB:252704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6xoDhEeUc4DrFbTWjXFWRL
        status: active
        display_name: 王鍈
        merged_into_person_id: null
---

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| birth.date | 1446年 | accepted |
| bio.summary | 王鉉（生于1446年），明人物。成化十四年進士，籍贯大寧中衛，入仕進士。（中国历代人物传记资料库 CBDB 200018） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jrr2Fwz4x5hKA8iAkHGgin | 王文信 | accepted |
| spouses | p_Ymm6VKEEDKEWM49YbDHkRk | 李氏 | accepted |
| ancestors | p_oah28dQUDq5UZaWYYoXHf3 | 王公甫 | accepted |
| ancestors | p_UvzJ7WQGN5c8DdXDK67BNS | 王克名 | accepted |
| other | p_6xoDhEeUc4DrFbTWjXFWRL | 王鍈 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王鉉妻)（CBDB 252701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252701&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 200018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200018&o=json)
- [中国历代人物传记资料库：王鍈（CBDB 252704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252704&o=json)
