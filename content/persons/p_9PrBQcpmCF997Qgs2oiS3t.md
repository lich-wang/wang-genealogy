---
schema: wang-person/v1
id: p_9PrBQcpmCF997Qgs2oiS3t
status: active
merged_into: null
display_name: 王本儉
cbdb_id: 199945
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KQCd1GErTfv1RL7BXbwoxp
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本儉（生于1438年），明人物。明清進士進士，籍贯麻城，入仕進士。（中国历代人物传记资料库 CBDB 199945）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Yh2K8VEQAqOWX_WQHR66R3
          claim_id: c_KQCd1GErTfv1RL7BXbwoxp
          source_id: s_vb8ea5p8MfCfT3J3NRZdGP
          stance: supports
          locator: CBDB:199945
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vb8ea5p8MfCfT3J3NRZdGP
            source_type: api_record
            title: 中国历代人物传记资料库：王本儉（CBDB 199945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199945&o=json
            external_identifier: CBDB:199945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PPp51TSYHGDARRPNFzb55c
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1438年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1438-01-01
            latest: 1438-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7fWT4szxoHTHHNfm6eRDJJ
          claim_id: c_PPp51TSYHGDARRPNFzb55c
          source_id: s_vb8ea5p8MfCfT3J3NRZdGP
          stance: supports
          locator: CBDB:199945
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1438
          source:
            id: s_vb8ea5p8MfCfT3J3NRZdGP
            source_type: api_record
            title: 中国历代人物传记资料库：王本儉（CBDB 199945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199945&o=json
            external_identifier: CBDB:199945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gaJyv3fD6gp33XAvC5TGKw
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MC3CkZhTKMJ3393rte5F3F
          claim_id: c_gaJyv3fD6gp33XAvC5TGKw
          source_id: s_vb8ea5p8MfCfT3J3NRZdGP
          stance: supports
          locator: CBDB:199945
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1438
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aVkYEFWIQYM8Fr4ygkECpF
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NyYs75tiy6TeiLPrp_VQL1
          claim_id: c_aVkYEFWIQYM8Fr4ygkECpF
          source_id: s_V9JaY25oCXbWANDrnJmb8P
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_V9JaY25oCXbWANDrnJmb8P
            source_type: api_record
            title: 中国历代人物传记资料库：王孟良（CBDB 251771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251771&o=json
            external_identifier: CBDB:251771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6jw2H1KWkaDQExePFFB6Yj
        status: active
        display_name: 王孟良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lC5qZwDjbVGqfvXRYSpG-r
        subject_person_id: p_aL6sNwbpjQDM2taGx8TTha
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h0_wTgAzYt7y7bjdrxj9Ff
          claim_id: c_lC5qZwDjbVGqfvXRYSpG-r
          source_id: s_H2tqr6sUxKV8LudJs7wC5p
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H2tqr6sUxKV8LudJs7wC5p
            source_type: api_record
            title: 中国历代人物传记资料库：王舜舉（CBDB 251769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251769&o=json
            external_identifier: CBDB:251769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aL6sNwbpjQDM2taGx8TTha
        status: active
        display_name: 王舜舉
        merged_into_person_id: null
    - claim:
        id: c_L04tQhhpUMMZy3bt5ldzjD
        subject_person_id: p_NRa6XXtWh7zQSNUG1c3Q66
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G_tCE3EFXiMQnG_t1Bn99d
          claim_id: c_L04tQhhpUMMZy3bt5ldzjD
          source_id: s_UJwrmM59KWPqJpCKhziRSH
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UJwrmM59KWPqJpCKhziRSH
            source_type: api_record
            title: 中国历代人物传记资料库：王友誠（CBDB 251770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251770&o=json
            external_identifier: CBDB:251770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_NRa6XXtWh7zQSNUG1c3Q66
        status: active
        display_name: 王友誠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_CZPsEZIeSTnTDOroJW4_2-
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DYey2g1wYQhjGuqsaWu3KR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0iyZaE7BzSJ9IVeyYgdFlF
          claim_id: c_CZPsEZIeSTnTDOroJW4_2-
          source_id: s_bUtaBofzw2bpRP6q4ylRVe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199945 王本儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bUtaBofzw2bpRP6q4ylRVe
            source_type: api_record
            title: 中国历代人物传记资料库：王邵（CBDB 251777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251777&o=json
            external_identifier: CBDB:251777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DYey2g1wYQhjGuqsaWu3KR
        status: active
        display_name: 王邵
        merged_into_person_id: null
    - claim:
        id: c_iVp3jup2i4_FLk6ylb0b6o
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_G1Ug4TzjKE3SJeEyp3nW9G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_biDpl4Tvc3cU8Py52VyLDU
          claim_id: c_iVp3jup2i4_FLk6ylb0b6o
          source_id: s_GPOlhq3cEXtNbfJ0VPGUfa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199945 王本儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GPOlhq3cEXtNbfJ0VPGUfa
            source_type: api_record
            title: 中国历代人物传记资料库：王郇（CBDB 251778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251778&o=json
            external_identifier: CBDB:251778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G1Ug4TzjKE3SJeEyp3nW9G
        status: active
        display_name: 王郇
        merged_into_person_id: null
    - claim:
        id: c_hDUBLcuxMICytuuJs8URZR
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JCfHD6mvyXrG1eXFjXNwRa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZOhGrn2h1R60V7D70tBh6u
          claim_id: c_hDUBLcuxMICytuuJs8URZR
          source_id: s_xbiJ9G0_aZ-h4xJy4GYt8X
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199945 王本儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xbiJ9G0_aZ-h4xJy4GYt8X
            source_type: api_record
            title: 中国历代人物传记资料库：王郭（CBDB 251776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251776&o=json
            external_identifier: CBDB:251776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JCfHD6mvyXrG1eXFjXNwRa
        status: active
        display_name: 王郭
        merged_into_person_id: null
    - claim:
        id: c_vCe79CBSy0t1BOW1pKurRf
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UBGHnQm4ZWY7CHDozUhv2E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kcieGGNT9W-XWPIRM6sKfM
          claim_id: c_vCe79CBSy0t1BOW1pKurRf
          source_id: s_qGKU15tsapk8ueDuxqpIpH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199945 王本儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qGKU15tsapk8ueDuxqpIpH
            source_type: api_record
            title: 中国历代人物传记资料库：王鄖（CBDB 251780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251780&o=json
            external_identifier: CBDB:251780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UBGHnQm4ZWY7CHDozUhv2E
        status: active
        display_name: 王鄖
        merged_into_person_id: null
    - claim:
        id: c_nw3ZaOts8SnMWJwGevairE
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ouqs9QXbb97G4sutE4DonZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3gmQA8IMWmNoxE-jUT4SC
          claim_id: c_nw3ZaOts8SnMWJwGevairE
          source_id: s_edmD9wc0v6ECS54oMqv6UI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199945 王本儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_edmD9wc0v6ECS54oMqv6UI
            source_type: api_record
            title: 中国历代人物传记资料库：王邦（CBDB 251775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251775&o=json
            external_identifier: CBDB:251775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ouqs9QXbb97G4sutE4DonZ
        status: active
        display_name: 王邦
        merged_into_person_id: null
---

# 王本儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王本儉（生于1438年），明人物。明清進士進士，籍贯麻城，入仕進士。（中国历代人物传记资料库 CBDB 199945） | accepted |
| birth.date | 1438年 | accepted |
| name.primary | 王本儉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6jw2H1KWkaDQExePFFB6Yj | 王孟良 | accepted |
| ancestors | p_aL6sNwbpjQDM2taGx8TTha | 王舜舉 | accepted |
| ancestors | p_NRa6XXtWh7zQSNUG1c3Q66 | 王友誠 | accepted |
| other | p_DYey2g1wYQhjGuqsaWu3KR | 王邵 | accepted |
| other | p_G1Ug4TzjKE3SJeEyp3nW9G | 王郇 | accepted |
| other | p_JCfHD6mvyXrG1eXFjXNwRa | 王郭 | accepted |
| other | p_UBGHnQm4ZWY7CHDozUhv2E | 王鄖 | accepted |
| other | p_ouqs9QXbb97G4sutE4DonZ | 王邦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦（CBDB 251775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251775&o=json)
- [中国历代人物传记资料库：王本儉（CBDB 199945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199945&o=json)
- [中国历代人物传记资料库：王郭（CBDB 251776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251776&o=json)
- [中国历代人物传记资料库：王郇（CBDB 251778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251778&o=json)
- [中国历代人物传记资料库：王孟良（CBDB 251771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251771&o=json)
- [中国历代人物传记资料库：王邵（CBDB 251777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251777&o=json)
- [中国历代人物传记资料库：王舜舉（CBDB 251769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251769&o=json)
- [中国历代人物传记资料库：王友誠（CBDB 251770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251770&o=json)
- [中国历代人物传记资料库：王鄖（CBDB 251780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251780&o=json)
