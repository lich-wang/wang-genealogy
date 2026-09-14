---
schema: wang-person/v1
id: p_gYn21nxF9d7iJNFwbu2Rnf
status: active
merged_into: null
display_name: 王鳴臣
cbdb_id: 126785
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dvaHeiMa3oFRh3V8FA6nTc
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴臣（生于1513年），明人物。明清進士進士，籍贯泰和，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 126785）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QWivp5hpqtlfNRY3iHskxx
          claim_id: c_dvaHeiMa3oFRh3V8FA6nTc
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: CBDB:126785
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DdkZAj9JdXWf93sC22t1Hs
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1513年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1513-01-01
            latest: 1513-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o9eJBXHW7XEoYYergzv1k1
          claim_id: c_DdkZAj9JdXWf93sC22t1Hs
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: CBDB:126785
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1513
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_z3ArLcX6U9VdAxpEFYh5X6
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳴臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FP33Xe7JT4QU8M6EbF21MF
          claim_id: c_z3ArLcX6U9VdAxpEFYh5X6
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: CBDB:126785
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1513
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: &a2
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
        id: p_Y4FNMr5v5UBkNhYB7rhbfs
        status: active
        display_name: 王國賜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vjfPj-e7D_6O-uYI6IeOSW
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1oeS3ozES1xNf6Ww7VNcgB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q8aRUZLn-WhtdEYTfCHjJM
          claim_id: c_vjfPj-e7D_6O-uYI6IeOSW
          source_id: s_KBqF5TGVsWibwKkW8Cetxg
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KBqF5TGVsWibwKkW8Cetxg
            source_type: api_record
            title: 中国历代人物传记资料库：蕭氏(王鳴臣妻)（CBDB 306738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306738&o=json
            external_identifier: CBDB:306738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1oeS3ozES1xNf6Ww7VNcgB
        status: active
        display_name: 蕭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_HV8SthSQ8N1p06T-QTKTuU
        subject_person_id: p_qS7NvXbMFNn76qPYrgmG6D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yW3B2Yluu9Mmew0hzHF-h1
          claim_id: c_HV8SthSQ8N1p06T-QTKTuU
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_qS7NvXbMFNn76qPYrgmG6D
        status: active
        display_name: 王大溪
        merged_into_person_id: null
    - claim:
        id: c_rDVTQnxi9vbobZV7Xwr9j6
        subject_person_id: p_k34ZxihPVrsTG6XCDpNhfP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HFCb74oSvLM1mhZ1NLIar5
          claim_id: c_rDVTQnxi9vbobZV7Xwr9j6
          source_id: s_R8B9GAYbPdCC45L2JGg8q6
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_k34ZxihPVrsTG6XCDpNhfP
        status: active
        display_name: 王學漁
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_3BigG8lSjGJXlJDdIsKVkm
        subject_person_id: p_Bc3FF8PWVP5Zd5sPJuac7F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_apU1JRZFm5oRf1gQKLOvor
          claim_id: c_3BigG8lSjGJXlJDdIsKVkm
          source_id: s_E-aazornoru8zVCkt8hb1-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126785 王鳴臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_oXyyAl5inp1k3cGXLyzy5F
        subject_person_id: p_S1EMyvXCMC7PsLCi556BTC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_58rDTo_y76mbfATPG4gBRi
          claim_id: c_oXyyAl5inp1k3cGXLyzy5F
          source_id: s_aOwxDjhJt6hcjCzMXU5rRb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126785 王鳴臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_zfnul-Z-s0B1oWKHeTDcDb
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_huPEqEzBvZUrbErdFWSCp9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hBFqbAygjGwIt6Eu8-mYz2
          claim_id: c_zfnul-Z-s0B1oWKHeTDcDb
          source_id: s_bHx2xoriMhmAQly_R66udn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126785 王鳴臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_8eErGjcj5k8sv1iCD0au3H
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_imbXfF7EjbTbj6gRr6wP6c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0SS06j4gxBFYY3HAA573Sg
          claim_id: c_8eErGjcj5k8sv1iCD0au3H
          source_id: s_c4F4iieRcSiAvtScmp7LHk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126785 王鳴臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_R4tNZa9dp4HoTG3GrTbz41
        subject_person_id: p_gYn21nxF9d7iJNFwbu2Rnf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVe4x3j9SMBPqZrBsoB3RG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bXZzbvQo0eJwTWATm4zC5o
          claim_id: c_R4tNZa9dp4HoTG3GrTbz41
          source_id: s_wcOawq7OMV0PlqLnfN5uig
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126785 王鳴臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王鳴臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鳴臣（生于1513年），明人物。明清進士進士，籍贯泰和，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 126785） | accepted |
| birth.date | 1513年 | accepted |
| name.primary | 王鳴臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y4FNMr5v5UBkNhYB7rhbfs | 王國賜 | accepted |
| spouses | p_1oeS3ozES1xNf6Ww7VNcgB | 蕭氏 | accepted |
| ancestors | p_qS7NvXbMFNn76qPYrgmG6D | 王大溪 | accepted |
| ancestors | p_k34ZxihPVrsTG6XCDpNhfP | 王學漁 | accepted |
| other | p_Bc3FF8PWVP5Zd5sPJuac7F | 王禮臣 | accepted |
| other | p_S1EMyvXCMC7PsLCi556BTC | 王彥臣 | accepted |
| other | p_huPEqEzBvZUrbErdFWSCp9 | 王舉臣 | accepted |
| other | p_imbXfF7EjbTbj6gRr6wP6c | 王元臣 | accepted |
| other | p_sVe4x3j9SMBPqZrBsoB3RG | 王哲臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舉臣（CBDB 306740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306740&o=json)
- [中国历代人物传记资料库：王禮臣（CBDB 306743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306743&o=json)
- [中国历代人物传记资料库：王鳴臣（CBDB 126785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126785&o=json)
- [中国历代人物传记资料库：王彥臣（CBDB 306741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306741&o=json)
- [中国历代人物传记资料库：王元臣（CBDB 306744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306744&o=json)
- [中国历代人物传记资料库：王哲臣（CBDB 306742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306742&o=json)
- [中国历代人物传记资料库：蕭氏(王鳴臣妻)（CBDB 306738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306738&o=json)
