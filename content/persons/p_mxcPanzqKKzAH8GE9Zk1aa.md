---
schema: wang-person/v1
id: p_mxcPanzqKKzAH8GE9Zk1aa
status: active
merged_into: null
display_name: 王絹
cbdb_id: 326384
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_skHyRUMghHrCKtRKPfimjH
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絹，明人物。嘉靖四十一年進士，籍贯莆田，曾任知縣。（中国历代人物传记资料库 CBDB 326384）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_U5duHwYezHmZUsT79ZmbN-
          claim_id: c_skHyRUMghHrCKtRKPfimjH
          source_id: s_nTiYTngDLihHnV22tBv72F
          stance: supports
          locator: CBDB:326384
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nTiYTngDLihHnV22tBv72F
            source_type: api_record
            title: 中国历代人物传记资料库：王絹（CBDB 326384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326384&o=json
            external_identifier: CBDB:326384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_m3pxEZ7YmnFxnqvWuAUiXN
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fPL53g9KPcM2akZ9wgoB5J
          claim_id: c_m3pxEZ7YmnFxnqvWuAUiXN
          source_id: s_nTiYTngDLihHnV22tBv72F
          stance: supports
          locator: CBDB:326384
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CSMT1j_v7bvgK_amNFF85p
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ig7hMt2svPC3_kBOkv46J9
          claim_id: c_CSMT1j_v7bvgK_amNFF85p
          source_id: s_f2q9x9g9GZZTgBnVm6ZD6i
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_f2q9x9g9GZZTgBnVm6ZD6i
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 204956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204956&o=json
            external_identifier: CBDB:204956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zRoaCHSKLmhLA6JAg13u3d
        status: active
        display_name: 王宜
        merged_into_person_id: null
    - claim:
        id: c_Tb7aNj6iwUgfIzm907pXEF
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3UugPKR4qkP7tqsMV1ftbp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4XiDVONWabEZvOO_No8z_w
          claim_id: c_Tb7aNj6iwUgfIzm907pXEF
          source_id: s_1iqRB4E8VQDSlrc0YbqjLp
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王傑 之父／母。
          source:
            id: s_1iqRB4E8VQDSlrc0YbqjLp
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 326391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326391&o=json
            external_identifier: CBDB:326391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3UugPKR4qkP7tqsMV1ftbp
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_wVwF7Lo_vYh8ytddOtWIIa
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JHqi6d1vvqiQLspWHkbHn9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YX0fkh2RilFE54CNQrx8_9
          claim_id: c_wVwF7Lo_vYh8ytddOtWIIa
          source_id: s_0uvJNNoKAgcT7aUcutAPjl
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王宷 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王宷 之父／母。
          source:
            id: s_0uvJNNoKAgcT7aUcutAPjl
            source_type: api_record
            title: 中国历代人物传记资料库：王宷（CBDB 326394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326394&o=json
            external_identifier: CBDB:326394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JHqi6d1vvqiQLspWHkbHn9
        status: active
        display_name: 王宷
        merged_into_person_id: null
    - claim:
        id: c_fBEPKbPeqQAjROEL3NrVuT
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LR2VsjyEnVTGhLG3Px6n2u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSymwCMpNUUhPbED0AUK41
          claim_id: c_fBEPKbPeqQAjROEL3NrVuT
          source_id: s_-V9Njx-W9ibWD7AbGMTgim
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王俊 之父／母。
          source:
            id: s_-V9Njx-W9ibWD7AbGMTgim
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 326390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326390&o=json
            external_identifier: CBDB:326390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LR2VsjyEnVTGhLG3Px6n2u
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_2z6_HKJRUPsbcPHAYqzsM0
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MzSbgo14YeqMM4tZwAP8Aq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ax5-GAVxFbPRchlQBoY6WJ
          claim_id: c_2z6_HKJRUPsbcPHAYqzsM0
          source_id: s_ynHteAzS_Owz_B5G5xZdcR
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王宜 为同胞（CBDB 记「弟」），王宜 之父／母即 王佐 之父／母。
          source:
            id: s_ynHteAzS_Owz_B5G5xZdcR
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 326388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326388&o=json
            external_identifier: CBDB:326388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MzSbgo14YeqMM4tZwAP8Aq
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c__6xCOuxOUtBxh6YusVTgOt
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bcJaLUuD7X98BjFLYVSC7z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZeWj5HILU2T9xpDyDDsL8F
          claim_id: c__6xCOuxOUtBxh6YusVTgOt
          source_id: s_to5yyoNBkqnHvikI6ouPwc
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王賓 之父／母。
          source:
            id: s_to5yyoNBkqnHvikI6ouPwc
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 326392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326392&o=json
            external_identifier: CBDB:326392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bcJaLUuD7X98BjFLYVSC7z
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c__MhHEywu4aM02hUMBSe5KU
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pksiLPwU3XYkyq2LfCNarB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nsv5z75fCDqONwWx9pPNSp
          claim_id: c__MhHEywu4aM02hUMBSe5KU
          source_id: s_Wxq38HDd9rq7GiZA4AbQHE
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王宦 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王宦 之父／母。
          source:
            id: s_Wxq38HDd9rq7GiZA4AbQHE
            source_type: api_record
            title: 中国历代人物传记资料库：王宦（CBDB 326393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326393&o=json
            external_identifier: CBDB:326393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pksiLPwU3XYkyq2LfCNarB
        status: active
        display_name: 王宦
        merged_into_person_id: null
    - claim:
        id: c_hubW3PHsgC24ICMulUOy0p
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_shuHSaNNsguNpdy2QD7HqN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o9eGQGe3wcKIyFN9OdEej8
          claim_id: c_hubW3PHsgC24ICMulUOy0p
          source_id: s_Ridue2edjq9BPiKvFD7MMS
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王偉 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王偉 之父／母。
          source:
            id: s_Ridue2edjq9BPiKvFD7MMS
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 326389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326389&o=json
            external_identifier: CBDB:326389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_shuHSaNNsguNpdy2QD7HqN
        status: active
        display_name: 王偉
        merged_into_person_id: null
    - claim:
        id: c_3X7xW5lg4MKqAATKjW5Ijn
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_voaERgFpYZcT53AsDFjBgS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vDTXXlCAX_MHF93HPGsxKM
          claim_id: c_3X7xW5lg4MKqAATKjW5Ijn
          source_id: s_Ng8paQdwrIr38AM5ooxozb
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王宇 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王宇 之父／母。
          source:
            id: s_Ng8paQdwrIr38AM5ooxozb
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 326395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326395&o=json
            external_identifier: CBDB:326395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_voaERgFpYZcT53AsDFjBgS
        status: active
        display_name: 王宇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王絹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王絹，明人物。嘉靖四十一年進士，籍贯莆田，曾任知縣。（中国历代人物传记资料库 CBDB 326384） | accepted |
| name.primary | 王絹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zRoaCHSKLmhLA6JAg13u3d | 王宜 | accepted |
| children | p_3UugPKR4qkP7tqsMV1ftbp | 王傑 | accepted |
| children | p_JHqi6d1vvqiQLspWHkbHn9 | 王宷 | accepted |
| children | p_LR2VsjyEnVTGhLG3Px6n2u | 王俊 | accepted |
| children | p_MzSbgo14YeqMM4tZwAP8Aq | 王佐 | accepted |
| children | p_bcJaLUuD7X98BjFLYVSC7z | 王賓 | accepted |
| children | p_pksiLPwU3XYkyq2LfCNarB | 王宦 | accepted |
| children | p_shuHSaNNsguNpdy2QD7HqN | 王偉 | accepted |
| children | p_voaERgFpYZcT53AsDFjBgS | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 326392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326392&o=json)
- [中国历代人物传记资料库：王宦（CBDB 326393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326393&o=json)
- [中国历代人物传记资料库：王傑（CBDB 326391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326391&o=json)
- [中国历代人物传记资料库：王絹（CBDB 326384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326384&o=json)
- [中国历代人物传记资料库：王俊（CBDB 326390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326390&o=json)
- [中国历代人物传记资料库：王宷（CBDB 326394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326394&o=json)
- [中国历代人物传记资料库：王偉（CBDB 326389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326389&o=json)
- [中国历代人物传记资料库：王宜（CBDB 204956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204956&o=json)
- [中国历代人物传记资料库：王宇（CBDB 326395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326395&o=json)
- [中国历代人物传记资料库：王佐（CBDB 326388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326388&o=json)
