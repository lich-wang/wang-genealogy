---
schema: wang-person/v1
id: p_bkiJd7fMDoFB71EF4g2i5Z
status: active
merged_into: null
display_name: 王約
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HLUEybK93HKWofULpoCMGD
        subject_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NjHLXt71Tg82nzfP8riveM
          claim_id: c_HLUEybK93HKWofULpoCMGD
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: CBDB:126619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126619）
          source: &a1
            id: s_9tEBUreHpbdKWNi5b9umHP
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 126619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126619&o=json
            external_identifier: CBDB:126619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FPAL89DaYVEB1acGiU6iNa
        subject_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約，明人物。明清進士進士，籍贯臨川，入仕進士，曾任御史、知縣。（中国历代人物传记资料库 CBDB 126619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rgIEd-PCXLA3VioWCC2hhx
          claim_id: c_FPAL89DaYVEB1acGiU6iNa
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: CBDB:126619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PlZzcDWQcUpSLE-2IsgBGY
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eTBc_UtH6mG-vlR9PdFoAB
          claim_id: c_PlZzcDWQcUpSLE-2IsgBGY
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v17Ui16KgEGN3E8zs7M4y6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NAgrt5V-kcmd16pm67JW5s
        subject_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4BLRQ9LHjoFaJpu5GxQtwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fUou7OAEFKGh-rhMpfsW9e
          claim_id: c_NAgrt5V-kcmd16pm67JW5s
          source_id: s_1Qe8ZC998bo8HZBoY9CdTx
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1Qe8ZC998bo8HZBoY9CdTx
            source_type: api_record
            title: 中国历代人物传记资料库：牛氏(王約妻)（CBDB 260400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260400&o=json
            external_identifier: CBDB:260400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4BLRQ9LHjoFaJpu5GxQtwy
        status: active
        display_name: 牛氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_7de8uBDudAHOJvRVPQfwfP
        subject_person_id: p_ygv1KiyZJv28kaqA4sHG53
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w-GHATj1ELRluB7tQ7qzBr
          claim_id: c_7de8uBDudAHOJvRVPQfwfP
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ygv1KiyZJv28kaqA4sHG53
        status: active
        display_name: 王榮壽
        merged_into_person_id: null
    - claim:
        id: c_pSm4m_AYrZs1suQZCyTAHT
        subject_person_id: p_t7ZwKSF3BtuwRK4ev8TkAP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YgHcfnfWD8olqMLDiNs5NO
          claim_id: c_pSm4m_AYrZs1suQZCyTAHT
          source_id: s_9tEBUreHpbdKWNi5b9umHP
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t7ZwKSF3BtuwRK4ev8TkAP
        status: active
        display_name: 王學敏
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_BFQVEDhv1-EKcYLoOuxCZK
        subject_person_id: p_4UYcL3HUTixEDeFTBA8Q41
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FXedX4suc8bWE0UmGqDQ8E
          claim_id: c_BFQVEDhv1-EKcYLoOuxCZK
          source_id: s_A6lYXjhkeWn6jnh8ZzKcXI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A6lYXjhkeWn6jnh8ZzKcXI
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 260409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260409&o=json
            external_identifier: CBDB:260409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4UYcL3HUTixEDeFTBA8Q41
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_mA60vzYhHHXqy3eYpNDiGi
        subject_person_id: p_AGeCbeEHCmeFxJunt4nB69
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gSLAQY8DAkrsLO-b0_k399
          claim_id: c_mA60vzYhHHXqy3eYpNDiGi
          source_id: s_jCDwt-_qJj4OzdRiGaRNTR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jCDwt-_qJj4OzdRiGaRNTR
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 260408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260408&o=json
            external_identifier: CBDB:260408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AGeCbeEHCmeFxJunt4nB69
        status: active
        display_name: 王繹
        merged_into_person_id: null
    - claim:
        id: c_vxpNU-S94lKfMqjIoc6EzW
        subject_person_id: p_AHymqo2s7jUFB13BapLAmj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YvvYX9dseG4NEfJae5FAxB
          claim_id: c_vxpNU-S94lKfMqjIoc6EzW
          source_id: s_XVT0VkOsOpnMQZv4Fjld0d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XVT0VkOsOpnMQZv4Fjld0d
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 260406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260406&o=json
            external_identifier: CBDB:260406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AHymqo2s7jUFB13BapLAmj
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_PsvKbbB3cC6x0oqSNzMQbX
        subject_person_id: p_B4kBEyDG3ChThKvonsA5be
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rH1VkL7e0BaMOax_XfOgam
          claim_id: c_PsvKbbB3cC6x0oqSNzMQbX
          source_id: s_0W3vNFn1mD-gw-e-s08mLI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0W3vNFn1mD-gw-e-s08mLI
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 260404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260404&o=json
            external_identifier: CBDB:260404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B4kBEyDG3ChThKvonsA5be
        status: active
        display_name: 王績
        merged_into_person_id: null
    - claim:
        id: c_ppAKDKHM3_zPnvXKmcPxO7
        subject_person_id: p_VncNM6z7UJqNtj2o8va6Dx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AU0Lj1-uIr3ZZmotBeZh5z
          claim_id: c_ppAKDKHM3_zPnvXKmcPxO7
          source_id: s_PZqdm24cetuSB8T_vyvgTQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PZqdm24cetuSB8T_vyvgTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 260401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260401&o=json
            external_identifier: CBDB:260401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VncNM6z7UJqNtj2o8va6Dx
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_AQ9akpIMW-fNkyi-x2mrW4
        subject_person_id: p_WCPixN7nTn8Gm4ABCTz9Uf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YYz4Bt8RyCm-z7JlARvCcB
          claim_id: c_AQ9akpIMW-fNkyi-x2mrW4
          source_id: s_dRyrxo1yYESINwWxP_nCAt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dRyrxo1yYESINwWxP_nCAt
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 260407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260407&o=json
            external_identifier: CBDB:260407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WCPixN7nTn8Gm4ABCTz9Uf
        status: active
        display_name: 王經
        merged_into_person_id: null
    - claim:
        id: c_A1_AYKpNkUjy7lyq1-gdY1
        subject_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gwbamXsh1EjbQoE6BCYJuK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_08OfMD7VTyi5dm1IYxavlz
          claim_id: c_A1_AYKpNkUjy7lyq1-gdY1
          source_id: s_JOwlcsJrjy5njhtElipgeH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JOwlcsJrjy5njhtElipgeH
            source_type: api_record
            title: 中国历代人物传记资料库：王縝（CBDB 260402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260402&o=json
            external_identifier: CBDB:260402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gwbamXsh1EjbQoE6BCYJuK
        status: active
        display_name: 王縝
        merged_into_person_id: null
    - claim:
        id: c_2_NC7m7gWMxkEYi2to3Or4
        subject_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zxJkBdw3CVNS2vAhFLXuF7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c9lGMOEuf7MksZMV7SRb8f
          claim_id: c_2_NC7m7gWMxkEYi2to3Or4
          source_id: s_tCl1NGErlKN3VaByHlekDx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tCl1NGErlKN3VaByHlekDx
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 260405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260405&o=json
            external_identifier: CBDB:260405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zxJkBdw3CVNS2vAhFLXuF7
        status: active
        display_name: 王紘
        merged_into_person_id: null
---

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| bio.summary | 王約，明人物。明清進士進士，籍贯臨川，入仕進士，曾任御史、知縣。（中国历代人物传记资料库 CBDB 126619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v17Ui16KgEGN3E8zs7M4y6 | 王義 | accepted |
| spouses | p_4BLRQ9LHjoFaJpu5GxQtwy | 牛氏 | accepted |
| ancestors | p_ygv1KiyZJv28kaqA4sHG53 | 王榮壽 | accepted |
| ancestors | p_t7ZwKSF3BtuwRK4ev8TkAP | 王學敏 | accepted |
| other | p_4UYcL3HUTixEDeFTBA8Q41 | 王綸 | accepted |
| other | p_AGeCbeEHCmeFxJunt4nB69 | 王繹 | accepted |
| other | p_AHymqo2s7jUFB13BapLAmj | 王純 | accepted |
| other | p_B4kBEyDG3ChThKvonsA5be | 王績 | accepted |
| other | p_VncNM6z7UJqNtj2o8va6Dx | 王緒 | accepted |
| other | p_WCPixN7nTn8Gm4ABCTz9Uf | 王經 | accepted |
| other | p_gwbamXsh1EjbQoE6BCYJuK | 王縝 | accepted |
| other | p_zxJkBdw3CVNS2vAhFLXuF7 | 王紘 | accepted |

## 外部来源

- [中国历代人物传记资料库：牛氏(王約妻)（CBDB 260400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260400&o=json)
- [中国历代人物传记资料库：王縝（CBDB 260402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260402&o=json)
- [中国历代人物传记资料库：王純（CBDB 260406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260406&o=json)
- [中国历代人物传记资料库：王紘（CBDB 260405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260405&o=json)
- [中国历代人物传记资料库：王績（CBDB 260404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260404&o=json)
- [中国历代人物传记资料库：王經（CBDB 260407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260407&o=json)
- [中国历代人物传记资料库：王綸（CBDB 260409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260409&o=json)
- [中国历代人物传记资料库：王緒（CBDB 260401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260401&o=json)
- [中国历代人物传记资料库：王繹（CBDB 260408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260408&o=json)
- [中国历代人物传记资料库：王約（CBDB 126619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126619&o=json)
