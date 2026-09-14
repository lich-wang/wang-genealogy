---
schema: wang-person/v1
id: p_Q1HXQkSMAFHi7fYuKS8duv
status: active
merged_into: null
display_name: 王蕙
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P21j4whb9cekSRwa9Np8NV
        subject_person_id: p_Q1HXQkSMAFHi7fYuKS8duv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VrpX1Y16jebPUgKJFmRxPP
          claim_id: c_P21j4whb9cekSRwa9Np8NV
          source_id: s_cTeZV932iKduvMEe2aNegi
          stance: supports
          locator: CBDB:386691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386691）
          source: &a1
            id: s_cTeZV932iKduvMEe2aNegi
            source_type: api_record
            title: 中国历代人物传记资料库：王蕙（CBDB 386691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386691&o=json
            external_identifier: CBDB:386691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E9CBzpSbgQPiuY5VBbjUwg
        subject_person_id: p_Q1HXQkSMAFHi7fYuKS8duv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1289年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMPNbpcPHk4HGBh2prQbRp
          claim_id: c_E9CBzpSbgQPiuY5VBbjUwg
          source_id: s_cTeZV932iKduvMEe2aNegi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MGTZV5XhqBHgZwTqX13axo
        subject_person_id: p_Q1HXQkSMAFHi7fYuKS8duv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1344年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m1HWGNeP4RPReF8GTEG343
          claim_id: c_MGTZV5XhqBHgZwTqX13axo
          source_id: s_cTeZV932iKduvMEe2aNegi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PQhXQdkQYTF1xi5TDQjkAy
        subject_person_id: p_Q1HXQkSMAFHi7fYuKS8duv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕙（1289年—1344年），元人物。籍贯金華，身份为儒學、不求仕。（中国历代人物传记资料库 CBDB 386691）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MWP5SemkwbrxVsHBIuc-eV
          claim_id: c_PQhXQdkQYTF1xi5TDQjkAy
          source_id: s_cTeZV932iKduvMEe2aNegi
          stance: supports
          locator: CBDB:386691
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OEsIXaEVYjVmtrMTwaSPdn
        subject_person_id: p_Q1HXQkSMAFHi7fYuKS8duv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4H3CFz5B9C5wCxTWKJ4ugX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs__geuIrBYmZ_7nET70PliEn
          claim_id: c_OEsIXaEVYjVmtrMTwaSPdn
          source_id: s_kKCa3DaaOJLau9Amff2nAJ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 386691）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kKCa3DaaOJLau9Amff2nAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王元功（CBDB 386697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386697&o=json
            external_identifier: CBDB:386697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4H3CFz5B9C5wCxTWKJ4ugX
        status: active
        display_name: 王元功
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_cDMjy9poTutGW-K8eCJrL6
        subject_person_id: p_Q1HXQkSMAFHi7fYuKS8duv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sn42C8p7CP4y7NuAFEWEFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OnZkGiE8HAn1uIYYCL_Go0
          claim_id: c_cDMjy9poTutGW-K8eCJrL6
          source_id: s_dwasf0PYMVgEHvcRwj05yZ
          stance: supports
          locator: CBDB 双向互证（妻子 戴氏(王蕙妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dwasf0PYMVgEHvcRwj05yZ
            source_type: api_record
            title: 中国历代人物传记资料库：戴氏(王蕙妻)（CBDB 386695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386695&o=json
            external_identifier: CBDB:386695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sn42C8p7CP4y7NuAFEWEFM
        status: active
        display_name: 戴氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_nvqs8_cIY5Rl0EQFo6rmic
        subject_person_id: p_26BJbufiHdX8oiM4dJs1K3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q1HXQkSMAFHi7fYuKS8duv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4iGIWWrIXhxCvlKFQyZH2u
          claim_id: c_nvqs8_cIY5Rl0EQFo6rmic
          source_id: s_MuLyWsZibwer1EjgcGYF4p
          stance: supports
          locator: CBDB 双向互证（孫 王蕙 ⇄ 祖父 王琰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_MuLyWsZibwer1EjgcGYF4p
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 386693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386693&o=json
            external_identifier: CBDB:386693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26BJbufiHdX8oiM4dJs1K3
        status: active
        display_name: 王琰
        merged_into_person_id: null
    - claim:
        id: c_NS3LUm3miyxJeUa4Was56r
        subject_person_id: p_TA3EM7RAXDxn6hGbgBVmnw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q1HXQkSMAFHi7fYuKS8duv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WB-5WnXBVtz37t1zoXAc4U
          claim_id: c_NS3LUm3miyxJeUa4Was56r
          source_id: s_cTeZV932iKduvMEe2aNegi
          stance: supports
          locator: CBDB 双向互证（曾祖 王僑 ⇄ 曾孫; 重孫 王蕙）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TA3EM7RAXDxn6hGbgBVmnw
        status: active
        display_name: 王僑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王蕙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕙 | accepted |
| birth.date | 1289年 | accepted |
| death.date | 1344年 | accepted |
| bio.summary | 王蕙（1289年—1344年），元人物。籍贯金華，身份为儒學、不求仕。（中国历代人物传记资料库 CBDB 386691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4H3CFz5B9C5wCxTWKJ4ugX | 王元功 | accepted |
| spouses | p_sn42C8p7CP4y7NuAFEWEFM | 戴氏 | accepted |
| ancestors | p_26BJbufiHdX8oiM4dJs1K3 | 王琰 | accepted |
| ancestors | p_TA3EM7RAXDxn6hGbgBVmnw | 王僑 | accepted |

## 外部来源

- [中国历代人物传记资料库：戴氏(王蕙妻)（CBDB 386695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386695&o=json)
- [中国历代人物传记资料库：王蕙（CBDB 386691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386691&o=json)
- [中国历代人物传记资料库：王琰（CBDB 386693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386693&o=json)
- [中国历代人物传记资料库：王元功（CBDB 386697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386697&o=json)
