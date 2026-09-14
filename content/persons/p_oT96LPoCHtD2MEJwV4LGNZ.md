---
schema: wang-person/v1
id: p_oT96LPoCHtD2MEJwV4LGNZ
status: active
merged_into: null
display_name: 王經
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FqBsbMU2gbga6txY655STq
        subject_person_id: p_oT96LPoCHtD2MEJwV4LGNZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oSEDyMAfKsJfH8uhctPS3d
          claim_id: c_FqBsbMU2gbga6txY655STq
          source_id: s_CXNm6Mh1KPcG6GXMaEc2Cg
          stance: supports
          locator: CBDB:302523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302523）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b9QvjVKYgRF8ekEhhV6VEV
        subject_person_id: p_oT96LPoCHtD2MEJwV4LGNZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經，明人物。嘉靖二十年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 302523）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QPg0o1sgxkYFQhoBSED3vp
          claim_id: c_b9QvjVKYgRF8ekEhhV6VEV
          source_id: s_CXNm6Mh1KPcG6GXMaEc2Cg
          stance: supports
          locator: CBDB:302523
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_UcjkWZqqBQxTHAd68nDNjt
        status: active
        display_name: 王景象
        merged_into_person_id: null
    - claim:
        id: c_vxzCkKqqfbUQcHI4AKoMod
        subject_person_id: p_oT96LPoCHtD2MEJwV4LGNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fEtf1uN3mcyCGr4x4sSdNU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__mNy3ghl-taRQwdUoKAWlv
          claim_id: c_vxzCkKqqfbUQcHI4AKoMod
          source_id: s_IJZ_se3lhyxL1Do-uYcL7n
          stance: supports
          locator: CBDB：兄弟 王景象（203284）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王景雲 与 王景象 为同胞（CBDB 记「兄」），王景象 之父／母即 王景雲 之父／母。
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
        id: c_S-t-8_B0ioFsaLwOERejYc
        subject_person_id: p_oT96LPoCHtD2MEJwV4LGNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jqzuZAPtni6rHoKFGxPDWX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NP9cyzC7s_2Ji2fbEqOEAI
          claim_id: c_S-t-8_B0ioFsaLwOERejYc
          source_id: s_kX-UkKzYhjWXKcOHgONt4W
          stance: supports
          locator: CBDB：兄弟 王景象（203284）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王景陽 与 王景象 为同胞（CBDB 记「兄」），王景象 之父／母即 王景陽 之父／母。
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
        id: c_PhZXTezAB2QRqzOzlgEDDw
        subject_person_id: p_oT96LPoCHtD2MEJwV4LGNZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wCi78YioVHt7oatwsxnqMs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJD9NNYpIVP9E65apX_aJa
          claim_id: c_PhZXTezAB2QRqzOzlgEDDw
          source_id: s_RwqYgFIntD34BFA2ML-ZDr
          stance: supports
          locator: CBDB：兄弟 王景象（203284）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王景星 与 王景象 为同胞（CBDB 记「兄」），王景象 之父／母即 王景星 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | 王經，明人物。嘉靖二十年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 302523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UcjkWZqqBQxTHAd68nDNjt | 王景象 | accepted |
| children | p_fEtf1uN3mcyCGr4x4sSdNU | 王景雲 | accepted |
| children | p_jqzuZAPtni6rHoKFGxPDWX | 王景陽 | accepted |
| children | p_wCi78YioVHt7oatwsxnqMs | 王景星 | accepted |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 302523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302523&o=json)
- [中国历代人物传记资料库：王景星（CBDB 302527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302527&o=json)
- [中国历代人物传记资料库：王景陽（CBDB 302529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302529&o=json)
- [中国历代人物传记资料库：王景雲（CBDB 302528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302528&o=json)
