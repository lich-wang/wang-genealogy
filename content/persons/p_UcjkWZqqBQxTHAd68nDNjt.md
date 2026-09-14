---
schema: wang-person/v1
id: p_UcjkWZqqBQxTHAd68nDNjt
status: active
merged_into: null
display_name: 王景象
cbdb_id: 203284
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FKx5D7qUpuJofaT5c9WKtf
        subject_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景象（生于1506年），明人物。明清進士進士，籍贯歙縣，入仕進士。（中国历代人物传记资料库 CBDB 203284）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_HM_NQn0U6kAw_vJxsKlCDO
          claim_id: c_FKx5D7qUpuJofaT5c9WKtf
          source_id: s_iCDwnPpyxd5MsVpexXpEgv
          stance: supports
          locator: CBDB:203284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iCDwnPpyxd5MsVpexXpEgv
            source_type: api_record
            title: 中国历代人物传记资料库：王景象（CBDB 203284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203284&o=json
            external_identifier: CBDB:203284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r93kRzWU5kyYMwFyfmgGrB
        subject_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1506-01-01
            latest: 1506-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aZLwB6aCjpTgCz33PPeKnP
          claim_id: c_r93kRzWU5kyYMwFyfmgGrB
          source_id: s_iCDwnPpyxd5MsVpexXpEgv
          stance: supports
          locator: CBDB:203284
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1506
          source:
            id: s_iCDwnPpyxd5MsVpexXpEgv
            source_type: api_record
            title: 中国历代人物传记资料库：王景象（CBDB 203284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203284&o=json
            external_identifier: CBDB:203284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EtZedn8J1jvQRcfhEEK8zw
        subject_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景象
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_27A9DEM3eM8CRLb91M9zQn
          claim_id: c_EtZedn8J1jvQRcfhEEK8zw
          source_id: s_iCDwnPpyxd5MsVpexXpEgv
          stance: supports
          locator: CBDB:203284
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1506
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aClSH80dU597Z5eZ0owGq4
        subject_person_id: p_oT96LPoCHtD2MEJwV4LGNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hm3jWiri2eeKk5y9k4oVv9
          claim_id: c_aClSH80dU597Z5eZ0owGq4
          source_id: s_CXNm6Mh1KPcG6GXMaEc2Cg
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第四十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CXNm6Mh1KPcG6GXMaEc2Cg
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 302523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302523&o=json
            external_identifier: CBDB:302523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oT96LPoCHtD2MEJwV4LGNZ
        status: active
        display_name: 王經
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_uw_GrkAdg764NaNosSl6Sk
        subject_person_id: p_ficbwRQBfA8oCc4SWX4S5Y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ca6zT6ChVyypZMUXEglqCe
          claim_id: c_uw_GrkAdg764NaNosSl6Sk
          source_id: s_8L6C1u8aVxS2jLQhjB3Pj8
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8L6C1u8aVxS2jLQhjB3Pj8
            source_type: api_record
            title: 中国历代人物传记资料库：王祜（CBDB 302521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302521&o=json
            external_identifier: CBDB:302521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ficbwRQBfA8oCc4SWX4S5Y
        status: active
        display_name: 王祜
        merged_into_person_id: null
    - claim:
        id: c_i4-fQPO_6ezIUSPsHsab48
        subject_person_id: p_iownahwhyVTvRCab3jvgcE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zREyZZtFKSHtjkhDkCuJJb
          claim_id: c_i4-fQPO_6ezIUSPsHsab48
          source_id: s_KJxWuhzG8r1XECK5Yac3UX
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KJxWuhzG8r1XECK5Yac3UX
            source_type: api_record
            title: 中国历代人物传记资料库：王文脩（CBDB 302522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302522&o=json
            external_identifier: CBDB:302522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_iownahwhyVTvRCab3jvgcE
        status: active
        display_name: 王文脩
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_NkbOm6OgkbWfC4mYl52jka
        subject_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fEtf1uN3mcyCGr4x4sSdNU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SOkrCuWjcHcFgevPDi6EHT
          claim_id: c_NkbOm6OgkbWfC4mYl52jka
          source_id: s_IJZ_se3lhyxL1Do-uYcL7n
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203284 王景象）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IJZ_se3lhyxL1Do-uYcL7n
            source_type: api_record
            title: 中国历代人物传记资料库：王景雲（CBDB 302528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302528&o=json
            external_identifier: CBDB:302528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fEtf1uN3mcyCGr4x4sSdNU
        status: active
        display_name: 王景雲
        merged_into_person_id: null
    - claim:
        id: c_okCizLu_feU87evyL2Rlev
        subject_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jqzuZAPtni6rHoKFGxPDWX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J2LAP68csqcsQyTUI1wgGe
          claim_id: c_okCizLu_feU87evyL2Rlev
          source_id: s_kX-UkKzYhjWXKcOHgONt4W
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203284 王景象）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kX-UkKzYhjWXKcOHgONt4W
            source_type: api_record
            title: 中国历代人物传记资料库：王景陽（CBDB 302529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302529&o=json
            external_identifier: CBDB:302529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jqzuZAPtni6rHoKFGxPDWX
        status: active
        display_name: 王景陽
        merged_into_person_id: null
    - claim:
        id: c_H7962GdMyHqNinaY7X2QbS
        subject_person_id: p_UcjkWZqqBQxTHAd68nDNjt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wCi78YioVHt7oatwsxnqMs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WIIFJsE03aF16gl2Xguo4r
          claim_id: c_H7962GdMyHqNinaY7X2QbS
          source_id: s_RwqYgFIntD34BFA2ML-ZDr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203284 王景象）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RwqYgFIntD34BFA2ML-ZDr
            source_type: api_record
            title: 中国历代人物传记资料库：王景星（CBDB 302527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302527&o=json
            external_identifier: CBDB:302527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wCi78YioVHt7oatwsxnqMs
        status: active
        display_name: 王景星
        merged_into_person_id: null
---

# 王景象

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景象（生于1506年），明人物。明清進士進士，籍贯歙縣，入仕進士。（中国历代人物传记资料库 CBDB 203284） | accepted |
| birth.date | 1506年 | accepted |
| name.primary | 王景象 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oT96LPoCHtD2MEJwV4LGNZ | 王經 | accepted |
| ancestors | p_ficbwRQBfA8oCc4SWX4S5Y | 王祜 | accepted |
| ancestors | p_iownahwhyVTvRCab3jvgcE | 王文脩 | accepted |
| other | p_fEtf1uN3mcyCGr4x4sSdNU | 王景雲 | accepted |
| other | p_jqzuZAPtni6rHoKFGxPDWX | 王景陽 | accepted |
| other | p_wCi78YioVHt7oatwsxnqMs | 王景星 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祜（CBDB 302521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302521&o=json)
- [中国历代人物传记资料库：王經（CBDB 302523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302523&o=json)
- [中国历代人物传记资料库：王景象（CBDB 203284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203284&o=json)
- [中国历代人物传记资料库：王景星（CBDB 302527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302527&o=json)
- [中国历代人物传记资料库：王景陽（CBDB 302529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302529&o=json)
- [中国历代人物传记资料库：王景雲（CBDB 302528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302528&o=json)
- [中国历代人物传记资料库：王文脩（CBDB 302522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302522&o=json)
