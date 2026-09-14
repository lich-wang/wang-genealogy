---
schema: wang-person/v1
id: p_v17Ui16KgEGN3E8zs7M4y6
status: active
merged_into: null
display_name: 王義
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n6caNPvwXzKFo42CcMh2GV
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wVGMHiubqBN9AGFksgGfVM
          claim_id: c_n6caNPvwXzKFo42CcMh2GV
          source_id: s_ZQurn5eL9FPYsb1AvCTN5k
          stance: supports
          locator: CBDB:260398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260398）
          source: &a1
            id: s_ZQurn5eL9FPYsb1AvCTN5k
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 260398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260398&o=json
            external_identifier: CBDB:260398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_owVyn2UPrgWHN2Q4KrPiBU
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義，明人物。成化二十三年進士，籍贯臨川，曾任訓導。（中国历代人物传记资料库 CBDB 260398）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i3xOErqCwY1Lg8mYbzYo40
          claim_id: c_owVyn2UPrgWHN2Q4KrPiBU
          source_id: s_ZQurn5eL9FPYsb1AvCTN5k
          stance: supports
          locator: CBDB:260398
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_bkiJd7fMDoFB71EF4g2i5Z
        status: active
        display_name: 王約
        merged_into_person_id: null
    - claim:
        id: c_HPfVciehtfIq6upmS7QZs_
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4UYcL3HUTixEDeFTBA8Q41
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41CSOs9X_oZcQAuljV-HHf
          claim_id: c_HPfVciehtfIq6upmS7QZs_
          source_id: s_A6lYXjhkeWn6jnh8ZzKcXI
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王綸 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王綸 之父／母。
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
        id: c_OkeSNz2Y9EljzavD35VG3o
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AGeCbeEHCmeFxJunt4nB69
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r8C4Yu-1yUTNzYoW9oEOqM
          claim_id: c_OkeSNz2Y9EljzavD35VG3o
          source_id: s_jCDwt-_qJj4OzdRiGaRNTR
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王繹 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王繹 之父／母。
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
        id: c_y6z6LUxuEhRM1GQRd__vrj
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AHymqo2s7jUFB13BapLAmj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_24Cbxn8aBV5OOqyiHG0yZl
          claim_id: c_y6z6LUxuEhRM1GQRd__vrj
          source_id: s_XVT0VkOsOpnMQZv4Fjld0d
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王純 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王純 之父／母。
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
        id: c_NuRFcx-zQ_ImoGe6IZF4Re
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B4kBEyDG3ChThKvonsA5be
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dH_H_BnV9weS_QN_rRNUNu
          claim_id: c_NuRFcx-zQ_ImoGe6IZF4Re
          source_id: s_0W3vNFn1mD-gw-e-s08mLI
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王績 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王績 之父／母。
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
        id: c_Bysp3HcIDEeGry_ouRmXmT
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VncNM6z7UJqNtj2o8va6Dx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_202Pj-Lgav-4BWdlFLFowF
          claim_id: c_Bysp3HcIDEeGry_ouRmXmT
          source_id: s_PZqdm24cetuSB8T_vyvgTQ
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王緒 与 王約 为同胞（CBDB 记「弟」），王約 之父／母即 王緒 之父／母。
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
        id: c_bo3NzEH9NoPJ2qTxYX_eQX
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WCPixN7nTn8Gm4ABCTz9Uf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3X6aFMm61chvAyGIJIyKQS
          claim_id: c_bo3NzEH9NoPJ2qTxYX_eQX
          source_id: s_dRyrxo1yYESINwWxP_nCAt
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王經 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王經 之父／母。
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
        id: c_np8f9EHaIt4_S2oEzjlwBq
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gwbamXsh1EjbQoE6BCYJuK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_chn_lAgHmjWC5ETDWfMvJ3
          claim_id: c_np8f9EHaIt4_S2oEzjlwBq
          source_id: s_JOwlcsJrjy5njhtElipgeH
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王縝 与 王約 为同胞（CBDB 记「弟」），王約 之父／母即 王縝 之父／母。
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
        id: c_6C0lsyPRqsdiwglUBHL-hW
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zxJkBdw3CVNS2vAhFLXuF7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_flR6PEB0Z5FnY8zAddr_uW
          claim_id: c_6C0lsyPRqsdiwglUBHL-hW
          source_id: s_tCl1NGErlKN3VaByHlekDx
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王紘 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王紘 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | 王義，明人物。成化二十三年進士，籍贯臨川，曾任訓導。（中国历代人物传记资料库 CBDB 260398） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bkiJd7fMDoFB71EF4g2i5Z | 王約 | accepted |
| children | p_4UYcL3HUTixEDeFTBA8Q41 | 王綸 | accepted |
| children | p_AGeCbeEHCmeFxJunt4nB69 | 王繹 | accepted |
| children | p_AHymqo2s7jUFB13BapLAmj | 王純 | accepted |
| children | p_B4kBEyDG3ChThKvonsA5be | 王績 | accepted |
| children | p_VncNM6z7UJqNtj2o8va6Dx | 王緒 | accepted |
| children | p_WCPixN7nTn8Gm4ABCTz9Uf | 王經 | accepted |
| children | p_gwbamXsh1EjbQoE6BCYJuK | 王縝 | accepted |
| children | p_zxJkBdw3CVNS2vAhFLXuF7 | 王紘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縝（CBDB 260402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260402&o=json)
- [中国历代人物传记资料库：王純（CBDB 260406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260406&o=json)
- [中国历代人物传记资料库：王紘（CBDB 260405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260405&o=json)
- [中国历代人物传记资料库：王績（CBDB 260404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260404&o=json)
- [中国历代人物传记资料库：王經（CBDB 260407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260407&o=json)
- [中国历代人物传记资料库：王綸（CBDB 260409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260409&o=json)
- [中国历代人物传记资料库：王緒（CBDB 260401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260401&o=json)
- [中国历代人物传记资料库：王義（CBDB 260398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260398&o=json)
- [中国历代人物传记资料库：王繹（CBDB 260408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260408&o=json)
- [中国历代人物传记资料库：王約（CBDB 126619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126619&o=json)
