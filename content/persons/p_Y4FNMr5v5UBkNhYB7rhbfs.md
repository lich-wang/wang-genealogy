---
schema: wang-person/v1
id: p_Y4FNMr5v5UBkNhYB7rhbfs
status: active
merged_into: null
display_name: 王國賜
cbdb_id: 306736
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DUx7EKP615G9nbXkZ6Rggu
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國賜，明人物。嘉靖二十三年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 306736）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fMWwMCUmBYfInE2TLL4Gxi
          claim_id: c_DUx7EKP615G9nbXkZ6Rggu
          source_id: s_L11YpaunVbHBMExBfVN7EZ
          stance: supports
          locator: CBDB:306736
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L11YpaunVbHBMExBfVN7EZ
            source_type: api_record
            title: 中国历代人物传记资料库：王國賜（CBDB 306736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306736&o=json
            external_identifier: CBDB:306736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qMpnSK985NvX3zjygbUMbf
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國賜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_b2X8i11o5rgoFXPnVAcFh3
          claim_id: c_qMpnSK985NvX3zjygbUMbf
          source_id: s_L11YpaunVbHBMExBfVN7EZ
          stance: supports
          locator: CBDB:306736
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2ufrxAVQUefS4Cz7h_5gML
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eVqMdErx3zBCXoDb6u05XU
          claim_id: c_2ufrxAVQUefS4Cz7h_5gML
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R8B9GAYbPdCC45L2JGg8q6
            source_type: api_record
            title: 中国历代人物传记资料库：王鳴臣（CBDB 126785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126785&o=json
            external_identifier: CBDB:126785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_gYn21nxF9d7iJNFwbu2Rnf
        status: active
        display_name: 王鳴臣
        merged_into_person_id: null
    - claim:
        id: c_m-SDx7_rannJPAKUYZssGg
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bc3FF8PWVP5Zd5sPJuac7F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_udWNKX5gRqDnfo3phsr_xB
          claim_id: c_m-SDx7_rannJPAKUYZssGg
          source_id: s_E-aazornoru8zVCkt8hb1-
          stance: supports
          locator: CBDB：兄弟 王鳴臣（126785）之父／母 王國賜
          quotation: null
          interpretation_note: 由兄弟关系推断：王禮臣 与 王鳴臣 为同胞（CBDB 记「兄」），王鳴臣 之父／母即 王禮臣 之父／母。
          source:
            id: s_E-aazornoru8zVCkt8hb1-
            source_type: api_record
            title: 中国历代人物传记资料库：王禮臣（CBDB 306743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306743&o=json
            external_identifier: CBDB:306743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Bc3FF8PWVP5Zd5sPJuac7F
        status: active
        display_name: 王禮臣
        merged_into_person_id: null
    - claim:
        id: c_klf_JfR62DOBxQh7zv0kfi
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S1EMyvXCMC7PsLCi556BTC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BbJHqm3JGwjS8sHsJlrxnN
          claim_id: c_klf_JfR62DOBxQh7zv0kfi
          source_id: s_aOwxDjhJt6hcjCzMXU5rRb
          stance: supports
          locator: CBDB：兄弟 王鳴臣（126785）之父／母 王國賜
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥臣 与 王鳴臣 为同胞（CBDB 记「弟」），王鳴臣 之父／母即 王彥臣 之父／母。
          source:
            id: s_aOwxDjhJt6hcjCzMXU5rRb
            source_type: api_record
            title: 中国历代人物传记资料库：王彥臣（CBDB 306741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306741&o=json
            external_identifier: CBDB:306741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S1EMyvXCMC7PsLCi556BTC
        status: active
        display_name: 王彥臣
        merged_into_person_id: null
    - claim:
        id: c_omcXTuPCRVS2LkyjRdUCjV
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_huPEqEzBvZUrbErdFWSCp9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_raNAfuD0ZBIPmVodsUv7eS
          claim_id: c_omcXTuPCRVS2LkyjRdUCjV
          source_id: s_bHx2xoriMhmAQly_R66udn
          stance: supports
          locator: CBDB：兄弟 王鳴臣（126785）之父／母 王國賜
          quotation: null
          interpretation_note: 由兄弟关系推断：王舉臣 与 王鳴臣 为同胞（CBDB 记「弟」），王鳴臣 之父／母即 王舉臣 之父／母。
          source:
            id: s_bHx2xoriMhmAQly_R66udn
            source_type: api_record
            title: 中国历代人物传记资料库：王舉臣（CBDB 306740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306740&o=json
            external_identifier: CBDB:306740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_huPEqEzBvZUrbErdFWSCp9
        status: active
        display_name: 王舉臣
        merged_into_person_id: null
    - claim:
        id: c_janAjJPfV7WhZGSORIZyBY
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_imbXfF7EjbTbj6gRr6wP6c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SW597f1mRF7gatSJwh-iZX
          claim_id: c_janAjJPfV7WhZGSORIZyBY
          source_id: s_c4F4iieRcSiAvtScmp7LHk
          stance: supports
          locator: CBDB：兄弟 王鳴臣（126785）之父／母 王國賜
          quotation: null
          interpretation_note: 由兄弟关系推断：王元臣 与 王鳴臣 为同胞（CBDB 记「兄」），王鳴臣 之父／母即 王元臣 之父／母。
          source:
            id: s_c4F4iieRcSiAvtScmp7LHk
            source_type: api_record
            title: 中国历代人物传记资料库：王元臣（CBDB 306744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306744&o=json
            external_identifier: CBDB:306744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_imbXfF7EjbTbj6gRr6wP6c
        status: active
        display_name: 王元臣
        merged_into_person_id: null
    - claim:
        id: c_R8MTZDH1R9jAIfKJYi3v2g
        subject_person_id: p_Y4FNMr5v5UBkNhYB7rhbfs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sVe4x3j9SMBPqZrBsoB3RG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oKiH1S7GGhND4YXDKZH-RP
          claim_id: c_R8MTZDH1R9jAIfKJYi3v2g
          source_id: s_wcOawq7OMV0PlqLnfN5uig
          stance: supports
          locator: CBDB：兄弟 王鳴臣（126785）之父／母 王國賜
          quotation: null
          interpretation_note: 由兄弟关系推断：王哲臣 与 王鳴臣 为同胞（CBDB 记「兄」），王鳴臣 之父／母即 王哲臣 之父／母。
          source:
            id: s_wcOawq7OMV0PlqLnfN5uig
            source_type: api_record
            title: 中国历代人物传记资料库：王哲臣（CBDB 306742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306742&o=json
            external_identifier: CBDB:306742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sVe4x3j9SMBPqZrBsoB3RG
        status: active
        display_name: 王哲臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國賜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國賜，明人物。嘉靖二十三年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 306736） | accepted |
| name.primary | 王國賜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gYn21nxF9d7iJNFwbu2Rnf | 王鳴臣 | accepted |
| children | p_Bc3FF8PWVP5Zd5sPJuac7F | 王禮臣 | accepted |
| children | p_S1EMyvXCMC7PsLCi556BTC | 王彥臣 | accepted |
| children | p_huPEqEzBvZUrbErdFWSCp9 | 王舉臣 | accepted |
| children | p_imbXfF7EjbTbj6gRr6wP6c | 王元臣 | accepted |
| children | p_sVe4x3j9SMBPqZrBsoB3RG | 王哲臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國賜（CBDB 306736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306736&o=json)
- [中国历代人物传记资料库：王舉臣（CBDB 306740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306740&o=json)
- [中国历代人物传记资料库：王禮臣（CBDB 306743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306743&o=json)
- [中国历代人物传记资料库：王鳴臣（CBDB 126785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126785&o=json)
- [中国历代人物传记资料库：王彥臣（CBDB 306741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306741&o=json)
- [中国历代人物传记资料库：王元臣（CBDB 306744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306744&o=json)
- [中国历代人物传记资料库：王哲臣（CBDB 306742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306742&o=json)
