---
schema: wang-person/v1
id: p_SHuk9Lfw4VDtH93mbkHP9q
status: active
merged_into: null
display_name: 王遴
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cwpJv352AtoHTmgNuaytgX
        subject_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pyov5CECMEsKEfsPjWHMwt
          claim_id: c_cwpJv352AtoHTmgNuaytgX
          source_id: s_nA3KLaKXQbcAT8Gg2W3TwR
          stance: supports
          locator: CBDB:124734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124734）
          source: &a1
            id: s_nA3KLaKXQbcAT8Gg2W3TwR
            source_type: api_record
            title: 中国历代人物传记资料库：王遴（CBDB 124734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124734&o=json
            external_identifier: CBDB:124734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BFo23155mVyCo5kDxLn6of
        subject_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jHwmusJtbKLsq2EvBg8YKf
          claim_id: c_BFo23155mVyCo5kDxLn6of
          source_id: s_nA3KLaKXQbcAT8Gg2W3TwR
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
        id: c_7XGNXBmudodiucHKXLoLKD
        subject_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1608年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_giNsBmTANQ2xiZZB98iT9i
          claim_id: c_7XGNXBmudodiucHKXLoLKD
          source_id: s_nA3KLaKXQbcAT8Gg2W3TwR
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
        id: c_8aYcGU2dApKKsHB58i4ZKj
        subject_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yGDAv3RAygAxop4ifCTbzp
          claim_id: c_8aYcGU2dApKKsHB58i4ZKj
          source_id: s_nA3KLaKXQbcAT8Gg2W3TwR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__C_tV-R3B9sj5mzEOyRLV3
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yP58sb64SDOo7CQk0FEUM3
          claim_id: c__C_tV-R3B9sj5mzEOyRLV3
          source_id: s_RMH3PJ7uHci9WNBA7i4Hjj
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RMH3PJ7uHci9WNBA7i4Hjj
            source_type: api_record
            title: 中国历代人物传记资料库：王宗義（CBDB 310364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310364&o=json
            external_identifier: CBDB:310364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BM46tZGN4EBcE7FUMvw1gL
        status: active
        display_name: 王宗義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_S_zewHZ94Ek8Gk1PXdbOVn
        subject_person_id: p_Lrg8CA8FD1SKX5BH3RgFHu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iKV4rNK4kp_oWXOe7IsgTX
          claim_id: c_S_zewHZ94Ek8Gk1PXdbOVn
          source_id: s_w2fwbha1mVo5mF9JEecFLa
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_w2fwbha1mVo5mF9JEecFLa
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 310362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310362&o=json
            external_identifier: CBDB:310362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Lrg8CA8FD1SKX5BH3RgFHu
        status: active
        display_name: 王聰
        merged_into_person_id: null
    - claim:
        id: c_hWntOkMYJpEtyE307PXU2H
        subject_person_id: p_QkZP95U7PRqUx5gJB8qTqT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Se6eS69DsHLwoIQJO72RKJ
          claim_id: c_hWntOkMYJpEtyE307PXU2H
          source_id: s_fjLUe49Nzx9dshBYqcMGn2
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第八十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fjLUe49Nzx9dshBYqcMGn2
            source_type: api_record
            title: 中国历代人物传记资料库：王富（CBDB 310361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310361&o=json
            external_identifier: CBDB:310361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QkZP95U7PRqUx5gJB8qTqT
        status: active
        display_name: 王富
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_vo5l_2EcjJAhReCy8ZUEoh
        subject_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2U3W4bGNNEsSzYgVqnfWvT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vhg_AdBUYa5IC2wO1PI0--
          claim_id: c_vo5l_2EcjJAhReCy8ZUEoh
          source_id: s_4bGZS4g67Mb6mCJPoBzma7
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14615：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4bGZS4g67Mb6mCJPoBzma7
            source_type: api_record
            title: 中国历代人物传记资料库：王仲鑰（CBDB 528778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528778&o=json
            external_identifier: CBDB:528778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2U3W4bGNNEsSzYgVqnfWvT
        status: active
        display_name: 王仲鑰
        merged_into_person_id: null
    - claim:
        id: c_IV2FHvgELxH25NSFnevfpp
        subject_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BV2Vrh1oBrA8Ayyc9NL2Ef
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bKpFtyjj8thyUQ49E99J8e
          claim_id: c_IV2FHvgELxH25NSFnevfpp
          source_id: s_1169MA1AzG5fzA88rfHkZm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14615：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1169MA1AzG5fzA88rfHkZm
            source_type: api_record
            title: 中国历代人物传记资料库：王伯鏞（CBDB 528779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528779&o=json
            external_identifier: CBDB:528779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BV2Vrh1oBrA8Ayyc9NL2Ef
        status: active
        display_name: 王伯鏞
        merged_into_person_id: null
  other: []
---

# 王遴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遴 | accepted |
| birth.date | 1525年 | accepted |
| death.date | 1608年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BM46tZGN4EBcE7FUMvw1gL | 王宗義 | accepted |
| ancestors | p_Lrg8CA8FD1SKX5BH3RgFHu | 王聰 | accepted |
| ancestors | p_QkZP95U7PRqUx5gJB8qTqT | 王富 | accepted |
| descendants | p_2U3W4bGNNEsSzYgVqnfWvT | 王仲鑰 | accepted |
| descendants | p_BV2Vrh1oBrA8Ayyc9NL2Ef | 王伯鏞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯鏞（CBDB 528779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528779&o=json)
- [中国历代人物传记资料库：王聰（CBDB 310362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310362&o=json)
- [中国历代人物传记资料库：王富（CBDB 310361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310361&o=json)
- [中国历代人物传记资料库：王遴（CBDB 124734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124734&o=json)
- [中国历代人物传记资料库：王仲鑰（CBDB 528778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528778&o=json)
- [中国历代人物传记资料库：王宗義（CBDB 310364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310364&o=json)
