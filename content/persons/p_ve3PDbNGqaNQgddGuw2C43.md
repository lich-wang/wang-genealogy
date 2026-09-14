---
schema: wang-person/v1
id: p_ve3PDbNGqaNQgddGuw2C43
status: active
merged_into: null
display_name: 王燁
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_muHrG8MZ3VdqB5BpjRGW9N
        subject_person_id: p_ve3PDbNGqaNQgddGuw2C43
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KPQyGKe8vwn19vDqp1EQF6
          claim_id: c_muHrG8MZ3VdqB5BpjRGW9N
          source_id: s_eMfJH2tsZJRFU4Bz3R1GC3
          stance: supports
          locator: CBDB:126822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126822）
          source: &a1
            id: s_eMfJH2tsZJRFU4Bz3R1GC3
            source_type: api_record
            title: 中国历代人物传记资料库：王燁（CBDB 126822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126822&o=json
            external_identifier: CBDB:126822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1iEDM1zpJCjXYFJKzq5vXa
        subject_person_id: p_ve3PDbNGqaNQgddGuw2C43
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燁，明人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 126822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3blNR58zGz4ZvjYLWPtWnW
          claim_id: c_1iEDM1zpJCjXYFJKzq5vXa
          source_id: s_eMfJH2tsZJRFU4Bz3R1GC3
          stance: supports
          locator: CBDB:126822
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p12Q0ANeZh4jDNFEGzu4uy
        subject_person_id: p_wVWD91i8nHFULhDK68aKM7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OQC_CVpGir-y1oqepycvLU
          claim_id: c_p12Q0ANeZh4jDNFEGzu4uy
          source_id: s_b8xwN94GvqbDpnKDRZDaVD
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b8xwN94GvqbDpnKDRZDaVD
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 296931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296931&o=json
            external_identifier: CBDB:296931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wVWD91i8nHFULhDK68aKM7
        status: active
        display_name: 王材
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_zh-ojBupqgN1Dvx6DYv-_X
        subject_person_id: p_75n4ono3HYazm2Qe1pxMfA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZerQxkteLPp24BzhRBanVF
          claim_id: c_zh-ojBupqgN1Dvx6DYv-_X
          source_id: s_Ric6MnHmh2hRXCVaVbcptK
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第八十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ric6MnHmh2hRXCVaVbcptK
            source_type: api_record
            title: 中国历代人物传记资料库：王衷（CBDB 296929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296929&o=json
            external_identifier: CBDB:296929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_75n4ono3HYazm2Qe1pxMfA
        status: active
        display_name: 王衷
        merged_into_person_id: null
    - claim:
        id: c_Zx7iHnU8nGyTc5SJVPucMe
        subject_person_id: p_nT1UNCZyvDbXe3ZzPGhbdz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rvELy-tOO73QX1MYcovX_Z
          claim_id: c_Zx7iHnU8nGyTc5SJVPucMe
          source_id: s_z5H7mnAfz3wRDELLh5djkn
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z5H7mnAfz3wRDELLh5djkn
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 296930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296930&o=json
            external_identifier: CBDB:296930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nT1UNCZyvDbXe3ZzPGhbdz
        status: active
        display_name: 王宏
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_cC03Jycb1wk37FlUq2NN_3
        subject_person_id: p_9F1U1TtkiNCB1RPHGmqk7s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cHSSLuCITOcB25nXkJkCLX
          claim_id: c_cC03Jycb1wk37FlUq2NN_3
          source_id: s_ZR92g4ZQhv66Dh7EjIqxdm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126822 王燁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZR92g4ZQhv66Dh7EjIqxdm
            source_type: api_record
            title: 中国历代人物传记资料库：王爟（CBDB 296938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296938&o=json
            external_identifier: CBDB:296938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9F1U1TtkiNCB1RPHGmqk7s
        status: active
        display_name: 王爟
        merged_into_person_id: null
    - claim:
        id: c_tVrClx7-e-dsqiyebipt-T
        subject_person_id: p_NLudwPcQpnWrGCaimVEJoL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pIbpJzcDRonrgNQePwhyXg
          claim_id: c_tVrClx7-e-dsqiyebipt-T
          source_id: s_pZzX2L4-7UwKeQ18i9SBqq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126822 王燁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pZzX2L4-7UwKeQ18i9SBqq
            source_type: api_record
            title: 中国历代人物传记资料库：王煉（CBDB 296940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296940&o=json
            external_identifier: CBDB:296940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NLudwPcQpnWrGCaimVEJoL
        status: active
        display_name: 王煉
        merged_into_person_id: null
    - claim:
        id: c_dzhFQlFHZHVS2N1cvEJ-I2
        subject_person_id: p_eHAHNbgbwnk9WePGUZ8Dg2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D0e8CoSc1GqAmaCWhgJwmd
          claim_id: c_dzhFQlFHZHVS2N1cvEJ-I2
          source_id: s_6FnZwQt1HOxq77NkxcIGMa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126822 王燁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6FnZwQt1HOxq77NkxcIGMa
            source_type: api_record
            title: 中国历代人物传记资料库：王焞（CBDB 296937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296937&o=json
            external_identifier: CBDB:296937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eHAHNbgbwnk9WePGUZ8Dg2
        status: active
        display_name: 王焞
        merged_into_person_id: null
    - claim:
        id: c_-7C93NS5Trsg-8qpRJ0K_R
        subject_person_id: p_ew7R1N5L2QnrU7947sAJ3g
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eN0CIKgYm2GWfD2H89-GR5
          claim_id: c_-7C93NS5Trsg-8qpRJ0K_R
          source_id: s_ZMHT66m4OFPiKxN2XHUXgm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126822 王燁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZMHT66m4OFPiKxN2XHUXgm
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 296935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296935&o=json
            external_identifier: CBDB:296935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ew7R1N5L2QnrU7947sAJ3g
        status: active
        display_name: 王炳
        merged_into_person_id: null
    - claim:
        id: c_nPpr30fDAsqpXSAs2d3CM5
        subject_person_id: p_ve3PDbNGqaNQgddGuw2C43
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y8MQ67fu3R1r2NAA5mSnpR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kfXCLUQuEObAC-nRjY6haD
          claim_id: c_nPpr30fDAsqpXSAs2d3CM5
          source_id: s_cAOKR8c3rq4BjCAdvy9h-6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126822 王燁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cAOKR8c3rq4BjCAdvy9h-6
            source_type: api_record
            title: 中国历代人物传记资料库：王燦（CBDB 296936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296936&o=json
            external_identifier: CBDB:296936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y8MQ67fu3R1r2NAA5mSnpR
        status: active
        display_name: 王燦
        merged_into_person_id: null
---

# 王燁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燁 | accepted |
| bio.summary | 王燁，明人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 126822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wVWD91i8nHFULhDK68aKM7 | 王材 | accepted |
| ancestors | p_75n4ono3HYazm2Qe1pxMfA | 王衷 | accepted |
| ancestors | p_nT1UNCZyvDbXe3ZzPGhbdz | 王宏 | accepted |
| other | p_9F1U1TtkiNCB1RPHGmqk7s | 王爟 | accepted |
| other | p_NLudwPcQpnWrGCaimVEJoL | 王煉 | accepted |
| other | p_eHAHNbgbwnk9WePGUZ8Dg2 | 王焞 | accepted |
| other | p_ew7R1N5L2QnrU7947sAJ3g | 王炳 | accepted |
| other | p_y8MQ67fu3R1r2NAA5mSnpR | 王燦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 296935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296935&o=json)
- [中国历代人物传记资料库：王材（CBDB 296931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296931&o=json)
- [中国历代人物传记资料库：王燦（CBDB 296936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296936&o=json)
- [中国历代人物传记资料库：王爟（CBDB 296938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296938&o=json)
- [中国历代人物传记资料库：王宏（CBDB 296930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296930&o=json)
- [中国历代人物传记资料库：王煉（CBDB 296940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296940&o=json)
- [中国历代人物传记资料库：王焞（CBDB 296937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296937&o=json)
- [中国历代人物传记资料库：王燁（CBDB 126822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126822&o=json)
- [中国历代人物传记资料库：王衷（CBDB 296929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296929&o=json)
