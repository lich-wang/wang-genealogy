---
schema: wang-person/v1
id: p_5qpDQsr3v9pDYmimcziE1B
status: active
merged_into: null
display_name: 王望霖
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_apCPBNDP2jUueTfaC6JGxH
        subject_person_id: p_5qpDQsr3v9pDYmimcziE1B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王望霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gQZhVXpD2GFM8hgkQfRf2e
          claim_id: c_apCPBNDP2jUueTfaC6JGxH
          source_id: s_N1VYUSZxDBTRD2pX32aqHT
          stance: supports
          locator: CBDB:703723
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703723）
          source: &a1
            id: s_N1VYUSZxDBTRD2pX32aqHT
            source_type: api_record
            title: 中国历代人物传记资料库：王望霖（CBDB 703723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703723&o=json
            external_identifier: CBDB:703723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sCkkq93y8kHjWomWoLu364
        subject_person_id: p_5qpDQsr3v9pDYmimcziE1B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王望霖，清人物。籍贯上虞，身份为書法家、為善鄉里，入仕太學生，曾任中書。（中国历代人物传记资料库 CBDB 703723）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nwXgdxV3RAQwcVb-Aui1Ij
          claim_id: c_sCkkq93y8kHjWomWoLu364
          source_id: s_N1VYUSZxDBTRD2pX32aqHT
          stance: supports
          locator: CBDB:703723
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_AeYhYgymmjkQirvQXbw6Kg
        subject_person_id: p_5qpDQsr3v9pDYmimcziE1B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TwV2jWoYdHY9raE94CPDf4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N-BbdxTXHaEmyHUJPeZZb_
          claim_id: c_AeYhYgymmjkQirvQXbw6Kg
          source_id: s_g8uph21mQyMTHgRKSo53oS
          stance: supports
          locator: 上虞縣志，lgid=324970：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g8uph21mQyMTHgRKSo53oS
            source_type: api_record
            title: 中国历代人物传记资料库：王振綱（CBDB 703738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703738&o=json
            external_identifier: CBDB:703738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TwV2jWoYdHY9raE94CPDf4
        status: active
        display_name: 王振綱
        merged_into_person_id: null
    - claim:
        id: c_aGbGoHRurMX3xSXi01dCkg
        subject_person_id: p_5qpDQsr3v9pDYmimcziE1B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z7LjzJN5h63nhjLeuiEGsq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VL8lDpNKTwlldiJZoisU85
          claim_id: c_aGbGoHRurMX3xSXi01dCkg
          source_id: s_VnwS53eQnjwMp5ChB7MPNB
          stance: supports
          locator: 上虞縣志，lgid=324970：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VnwS53eQnjwMp5ChB7MPNB
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻謀（CBDB 703739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703739&o=json
            external_identifier: CBDB:703739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Z7LjzJN5h63nhjLeuiEGsq
        status: active
        display_name: 王鴻謀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_BUrXpRP768MyBRHn_ADSFt
        subject_person_id: p_5qpDQsr3v9pDYmimcziE1B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pw9FewzT2Wiir9pGhBVxJf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSQEuGRCV5u24G_TyHPNhm
          claim_id: c_BUrXpRP768MyBRHn_ADSFt
          source_id: s_N1VYUSZxDBTRD2pX32aqHT
          stance: supports
          locator: 上虞縣志，lgid=324970：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pw9FewzT2Wiir9pGhBVxJf
        status: active
        display_name: 王淦
        merged_into_person_id: null
  other: []
---

# 王望霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王望霖 | accepted |
| bio.summary | 王望霖，清人物。籍贯上虞，身份为書法家、為善鄉里，入仕太學生，曾任中書。（中国历代人物传记资料库 CBDB 703723） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TwV2jWoYdHY9raE94CPDf4 | 王振綱 | accepted |
| children | p_Z7LjzJN5h63nhjLeuiEGsq | 王鴻謀 | accepted |
| descendants | p_pw9FewzT2Wiir9pGhBVxJf | 王淦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鴻謀（CBDB 703739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703739&o=json)
- [中国历代人物传记资料库：王望霖（CBDB 703723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703723&o=json)
- [中国历代人物传记资料库：王振綱（CBDB 703738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703738&o=json)
