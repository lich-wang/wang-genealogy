---
schema: wang-person/v1
id: p_5j714BoeSUb9hXn4A1cAts
status: active
merged_into: null
display_name: 王守默
cbdb_id: 216142
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2jNgtC2xNyg5EnAsuv7Kqh
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守默，明人物。萬曆五年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 216142）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TD7fc-6ezeeNzl8Wy__XAr
          claim_id: c_2jNgtC2xNyg5EnAsuv7Kqh
          source_id: s_ziNSz8LLfeDvbS9cuJ2RtN
          stance: supports
          locator: CBDB:216142
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ziNSz8LLfeDvbS9cuJ2RtN
            source_type: api_record
            title: 中国历代人物传记资料库：王守默（CBDB 216142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216142&o=json
            external_identifier: CBDB:216142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rNjvRDtHLj49uaN16eVBS6
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守默
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_a4Fk6PXBJ8A43STFCiCFyU
          claim_id: c_rNjvRDtHLj49uaN16eVBS6
          source_id: s_ziNSz8LLfeDvbS9cuJ2RtN
          stance: supports
          locator: CBDB:216142
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-lqsjNrljWC41hMOLJ05M9
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QQuUCHcAyLfkuJKD8SYwNJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YrZMa3Yh_sul3vqld8FnFv
          claim_id: c_-lqsjNrljWC41hMOLJ05M9
          source_id: s_ziNSz8LLfeDvbS9cuJ2RtN
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ziNSz8LLfeDvbS9cuJ2RtN
            source_type: api_record
            title: 中国历代人物传记资料库：王守默（CBDB 216142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216142&o=json
            external_identifier: CBDB:216142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_QQuUCHcAyLfkuJKD8SYwNJ
        status: active
        display_name: 王繼光
        merged_into_person_id: null
    - claim:
        id: c_lP92oehDXnFD1LVUupKGX7
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7zRiJP33ULQAgv5FxEE6tQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sjQPisgaADJKSWtHBYzOgq
          claim_id: c_lP92oehDXnFD1LVUupKGX7
          source_id: s_oB-ewlPJyOF7ziPUDxl2iI
          stance: supports
          locator: CBDB：兄弟 王繼光（126878）之父／母 王守默
          quotation: null
          interpretation_note: 由兄弟关系推断：王啟光 与 王繼光 为同胞（CBDB 记「弟」），王繼光 之父／母即 王啟光 之父／母。
          source:
            id: s_oB-ewlPJyOF7ziPUDxl2iI
            source_type: api_record
            title: 中国历代人物传记资料库：王啟光（CBDB 216146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216146&o=json
            external_identifier: CBDB:216146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7zRiJP33ULQAgv5FxEE6tQ
        status: active
        display_name: 王啟光
        merged_into_person_id: null
    - claim:
        id: c_JmbR4q1WhSETADU44_rMOW
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8JkFNe2nzMeDg7thTkkyLK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aoH5JFTl6ap78hZN6o0Osz
          claim_id: c_JmbR4q1WhSETADU44_rMOW
          source_id: s_HPfn05k688APrUqOxCES1Q
          stance: supports
          locator: CBDB：兄弟 王繼光（126878）之父／母 王守默
          quotation: null
          interpretation_note: 由兄弟关系推断：王有光 与 王繼光 为同胞（CBDB 记「弟」），王繼光 之父／母即 王有光 之父／母。
          source:
            id: s_HPfn05k688APrUqOxCES1Q
            source_type: api_record
            title: 中国历代人物传记资料库：王有光（CBDB 216145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216145&o=json
            external_identifier: CBDB:216145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8JkFNe2nzMeDg7thTkkyLK
        status: active
        display_name: 王有光
        merged_into_person_id: null
    - claim:
        id: c_065j3sG5A2oVSqUSysCoDu
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ADQB6UfhwkDeNHDwJWLs5k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2D-dR_JWOFP17aJO89LTKq
          claim_id: c_065j3sG5A2oVSqUSysCoDu
          source_id: s_F1GaWAY0arXCkpU5HsqLDm
          stance: supports
          locator: CBDB：兄弟 王繼光（126878）之父／母 王守默
          quotation: null
          interpretation_note: 由兄弟关系推断：王四光 与 王繼光 为同胞（CBDB 记「兄」），王繼光 之父／母即 王四光 之父／母。
          source:
            id: s_F1GaWAY0arXCkpU5HsqLDm
            source_type: api_record
            title: 中国历代人物传记资料库：王四光（CBDB 216147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216147&o=json
            external_identifier: CBDB:216147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ADQB6UfhwkDeNHDwJWLs5k
        status: active
        display_name: 王四光
        merged_into_person_id: null
    - claim:
        id: c_KZcYOT3yyODWeMuBUBZqAW
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_De6ycMChEYkiyPKqZL9gGr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_isIZUc1NUsaptiSwsGugm5
          claim_id: c_KZcYOT3yyODWeMuBUBZqAW
          source_id: s_B7tm_xsiwbQtEUFclGglXj
          stance: supports
          locator: CBDB：兄弟 王繼光（126878）之父／母 王守默
          quotation: null
          interpretation_note: 由兄弟关系推断：王天光 与 王繼光 为同胞（CBDB 记「兄」），王繼光 之父／母即 王天光 之父／母。
          source:
            id: s_B7tm_xsiwbQtEUFclGglXj
            source_type: api_record
            title: 中国历代人物传记资料库：王天光（CBDB 216151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216151&o=json
            external_identifier: CBDB:216151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_De6ycMChEYkiyPKqZL9gGr
        status: active
        display_name: 王天光
        merged_into_person_id: null
    - claim:
        id: c_w8JdwSTjsc19dVD4qvp0DV
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QkLJq9StKfSmR67MDizXZg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__RiZwTBs6UhcvR8a8agStT
          claim_id: c_w8JdwSTjsc19dVD4qvp0DV
          source_id: s_HYEjf6kCUUB0gwyJBUChQK
          stance: supports
          locator: CBDB：兄弟 王繼光（126878）之父／母 王守默
          quotation: null
          interpretation_note: 由兄弟关系推断：王紹光 与 王繼光 为同胞（CBDB 记「兄」），王繼光 之父／母即 王紹光 之父／母。
          source:
            id: s_HYEjf6kCUUB0gwyJBUChQK
            source_type: api_record
            title: 中国历代人物传记资料库：王紹光（CBDB 216152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216152&o=json
            external_identifier: CBDB:216152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QkLJq9StKfSmR67MDizXZg
        status: active
        display_name: 王紹光
        merged_into_person_id: null
    - claim:
        id: c_p9uncQm9hZ5TBhQMqUdQRK
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tzp1hs3CZ8gsSsQLzx3NAN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I4ZJGUY-gLTtEnb_nrWrPk
          claim_id: c_p9uncQm9hZ5TBhQMqUdQRK
          source_id: s_coadWzpJoZLpapse0Xfl8q
          stance: supports
          locator: CBDB：兄弟 王繼光（126878）之父／母 王守默
          quotation: null
          interpretation_note: 由兄弟关系推断：王承光 与 王繼光 为同胞（CBDB 记「兄」），王繼光 之父／母即 王承光 之父／母。
          source:
            id: s_coadWzpJoZLpapse0Xfl8q
            source_type: api_record
            title: 中国历代人物传记资料库：王承光（CBDB 216149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216149&o=json
            external_identifier: CBDB:216149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tzp1hs3CZ8gsSsQLzx3NAN
        status: active
        display_name: 王承光
        merged_into_person_id: null
    - claim:
        id: c_WhauQVXKbBuCKGWCLFOZmI
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VK2d9GME8RrEDHBKEwKP51
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JH2_292lle9zwQ72puqLbg
          claim_id: c_WhauQVXKbBuCKGWCLFOZmI
          source_id: s_7OtoAgZWb7McQEn0cn96gx
          stance: supports
          locator: CBDB：兄弟 王繼光（126878）之父／母 王守默
          quotation: null
          interpretation_note: 由兄弟关系推断：王輝光 与 王繼光 为同胞（CBDB 记「兄」），王繼光 之父／母即 王輝光 之父／母。
          source:
            id: s_7OtoAgZWb7McQEn0cn96gx
            source_type: api_record
            title: 中国历代人物传记资料库：王輝光（CBDB 216150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216150&o=json
            external_identifier: CBDB:216150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VK2d9GME8RrEDHBKEwKP51
        status: active
        display_name: 王輝光
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守默

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守默，明人物。萬曆五年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 216142） | accepted |
| name.primary | 王守默 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QQuUCHcAyLfkuJKD8SYwNJ | 王繼光 | accepted |
| children | p_7zRiJP33ULQAgv5FxEE6tQ | 王啟光 | accepted |
| children | p_8JkFNe2nzMeDg7thTkkyLK | 王有光 | accepted |
| children | p_ADQB6UfhwkDeNHDwJWLs5k | 王四光 | accepted |
| children | p_De6ycMChEYkiyPKqZL9gGr | 王天光 | accepted |
| children | p_QkLJq9StKfSmR67MDizXZg | 王紹光 | accepted |
| children | p_Tzp1hs3CZ8gsSsQLzx3NAN | 王承光 | accepted |
| children | p_VK2d9GME8RrEDHBKEwKP51 | 王輝光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承光（CBDB 216149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216149&o=json)
- [中国历代人物传记资料库：王輝光（CBDB 216150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216150&o=json)
- [中国历代人物传记资料库：王啟光（CBDB 216146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216146&o=json)
- [中国历代人物传记资料库：王紹光（CBDB 216152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216152&o=json)
- [中国历代人物传记资料库：王守默（CBDB 216142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216142&o=json)
- [中国历代人物传记资料库：王四光（CBDB 216147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216147&o=json)
- [中国历代人物传记资料库：王天光（CBDB 216151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216151&o=json)
- [中国历代人物传记资料库：王有光（CBDB 216145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216145&o=json)
