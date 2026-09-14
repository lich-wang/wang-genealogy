---
schema: wang-person/v1
id: p_UKmnBNaYcR6Y5ExUHqMqA5
status: active
merged_into: null
display_name: 王意
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AejQdC9dy373QYkXH2Qk5X
        subject_person_id: p_UKmnBNaYcR6Y5ExUHqMqA5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王意
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_onAeG4Np6dGEUYww74UTMP
          claim_id: c_AejQdC9dy373QYkXH2Qk5X
          source_id: s_RNHy1tsJ1hZ6pTxp1ZMtH1
          stance: supports
          locator: CBDB:239293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239293）
          source: &a1
            id: s_RNHy1tsJ1hZ6pTxp1ZMtH1
            source_type: api_record
            title: 中国历代人物传记资料库：王意（CBDB 239293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239293&o=json
            external_identifier: CBDB:239293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ld6THAVDZxocF5XoRQRSEf
        subject_person_id: p_UKmnBNaYcR6Y5ExUHqMqA5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王意，明人物。正统十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 239293）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U2Eq_PAP2ia9uJKguaeGUm
          claim_id: c_Ld6THAVDZxocF5XoRQRSEf
          source_id: s_RNHy1tsJ1hZ6pTxp1ZMtH1
          stance: supports
          locator: CBDB:239293
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HEyi5XBq1FqAVLHglO2eM5
        subject_person_id: p_UKmnBNaYcR6Y5ExUHqMqA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H841UufcMkWpzbemaqposM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GxdO02j--WpwyYaH13cwxW
          claim_id: c_HEyi5XBq1FqAVLHglO2eM5
          source_id: s_88e9mqJVWV2xoBh8UzFFtc
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第四十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_88e9mqJVWV2xoBh8UzFFtc
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 208015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208015&o=json
            external_identifier: CBDB:208015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H841UufcMkWpzbemaqposM
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_nciWHkLAGtFTxH9iAGhDHC
        subject_person_id: p_UKmnBNaYcR6Y5ExUHqMqA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CaeiLEBiuhVCx3CGJabrzc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4IQaYXXty2CpKeAZRkxv5d
          claim_id: c_nciWHkLAGtFTxH9iAGhDHC
          source_id: s_Gxj_xrbhPJCDUm3JsE2IGC
          stance: supports
          locator: CBDB：兄弟 王福（208015）之父／母 王意
          quotation: null
          interpretation_note: 由兄弟关系推断：王子讓 与 王福 为同胞（CBDB 记「兄」），王福 之父／母即 王子讓 之父／母。
          source:
            id: s_Gxj_xrbhPJCDUm3JsE2IGC
            source_type: api_record
            title: 中国历代人物传记资料库：王子讓（CBDB 239298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239298&o=json
            external_identifier: CBDB:239298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CaeiLEBiuhVCx3CGJabrzc
        status: active
        display_name: 王子讓
        merged_into_person_id: null
    - claim:
        id: c_SH_kx4VvBB9NnfdnE_b1ls
        subject_person_id: p_UKmnBNaYcR6Y5ExUHqMqA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DpriGiLpH9zMCxpSjK9uRY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oX5ThzrL7FFUP4i8d7Qm1q
          claim_id: c_SH_kx4VvBB9NnfdnE_b1ls
          source_id: s_au1SvCMhvwAeeAzDyX6xyx
          stance: supports
          locator: CBDB：兄弟 王福（208015）之父／母 王意
          quotation: null
          interpretation_note: 由兄弟关系推断：王子謙 与 王福 为同胞（CBDB 记「兄」），王福 之父／母即 王子謙 之父／母。
          source:
            id: s_au1SvCMhvwAeeAzDyX6xyx
            source_type: api_record
            title: 中国历代人物传记资料库：王子謙（CBDB 239296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239296&o=json
            external_identifier: CBDB:239296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpriGiLpH9zMCxpSjK9uRY
        status: active
        display_name: 王子謙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王意

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王意 | accepted |
| bio.summary | 王意，明人物。正统十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 239293） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_H841UufcMkWpzbemaqposM | 王福 | accepted |
| children | p_CaeiLEBiuhVCx3CGJabrzc | 王子讓 | accepted |
| children | p_DpriGiLpH9zMCxpSjK9uRY | 王子謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 208015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208015&o=json)
- [中国历代人物传记资料库：王意（CBDB 239293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239293&o=json)
- [中国历代人物传记资料库：王子謙（CBDB 239296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239296&o=json)
- [中国历代人物传记资料库：王子讓（CBDB 239298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239298&o=json)
