---
schema: wang-person/v1
id: p_GikpBfnZtBzAmt6mvRBQ1h
status: active
merged_into: null
display_name: 王縉
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5AYJV31fEdEJXGDEyJeXqM
        subject_person_id: p_GikpBfnZtBzAmt6mvRBQ1h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ePsq5jyD8Wq7oNHUXkSENV
          claim_id: c_5AYJV31fEdEJXGDEyJeXqM
          source_id: s_Ag5FprcK1HJNcW6JCLpLyk
          stance: supports
          locator: CBDB:249470
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249470）
          source: &a1
            id: s_Ag5FprcK1HJNcW6JCLpLyk
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 249470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249470&o=json
            external_identifier: CBDB:249470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.171Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tJnG7qJNtQjfRcsS3uf8VL
        subject_person_id: p_GikpBfnZtBzAmt6mvRBQ1h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉，明人物。成化十一年進士，籍贯寶坻，曾任聽選官。（中国历代人物传记资料库 CBDB 249470）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TmbYqPHEXrYTV8nJT8rSCc
          claim_id: c_tJnG7qJNtQjfRcsS3uf8VL
          source_id: s_Ag5FprcK1HJNcW6JCLpLyk
          stance: supports
          locator: CBDB:249470
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2b2w5_5mEroZacLj3d83HT
        subject_person_id: p_GikpBfnZtBzAmt6mvRBQ1h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fCdwQrvNQJRLgVMdijjiRw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i4Ijyq8DMijMiF_eROPWn7
          claim_id: c_2b2w5_5mEroZacLj3d83HT
          source_id: s_Ag5FprcK1HJNcW6JCLpLyk
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fCdwQrvNQJRLgVMdijjiRw
        status: active
        display_name: 王傅
        merged_into_person_id: null
    - claim:
        id: c_orol-O3CTCc6p9WGQNtdU9
        subject_person_id: p_GikpBfnZtBzAmt6mvRBQ1h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6ZMVahHHd3VaDMbwRtj8HN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OWnA-IN3hZAnOw7OXFcWaG
          claim_id: c_orol-O3CTCc6p9WGQNtdU9
          source_id: s_7D2f8lbF6ZfYwOazTf2SZc
          stance: supports
          locator: CBDB：兄弟 王傅（199770）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王保 与 王傅 为同胞（CBDB 记「兄」），王傅 之父／母即 王保 之父／母。
          source:
            id: s_7D2f8lbF6ZfYwOazTf2SZc
            source_type: api_record
            title: 中国历代人物传记资料库：王保（CBDB 249475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249475&o=json
            external_identifier: CBDB:249475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ZMVahHHd3VaDMbwRtj8HN
        status: active
        display_name: 王保
        merged_into_person_id: null
    - claim:
        id: c_4a91UQHjp41o5aG_p7RNqG
        subject_person_id: p_GikpBfnZtBzAmt6mvRBQ1h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8QxoHFLjvw25A95DLLjapm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPNPdxy2ZUuUtdQmH_AS-A
          claim_id: c_4a91UQHjp41o5aG_p7RNqG
          source_id: s_yKHijnZaIeyBObJXEFkK9l
          stance: supports
          locator: CBDB：兄弟 王傅（199770）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王修 与 王傅 为同胞（CBDB 记「兄」），王傅 之父／母即 王修 之父／母。
          source:
            id: s_yKHijnZaIeyBObJXEFkK9l
            source_type: api_record
            title: 中国历代人物传记资料库：王修（CBDB 249476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249476&o=json
            external_identifier: CBDB:249476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8QxoHFLjvw25A95DLLjapm
        status: active
        display_name: 王修
        merged_into_person_id: null
    - claim:
        id: c_GDUDHlJsDViq1OAy0wjNgf
        subject_person_id: p_GikpBfnZtBzAmt6mvRBQ1h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9sLgdReiqGukP8nVWgfPHC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Vkcen-kI-Kpo7qjl7gnVc
          claim_id: c_GDUDHlJsDViq1OAy0wjNgf
          source_id: s_PBcvU4VZRR7MGhRjsgNMeR
          stance: supports
          locator: CBDB：兄弟 王傅（199770）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王侃 与 王傅 为同胞（CBDB 记「兄」），王傅 之父／母即 王侃 之父／母。
          source:
            id: s_PBcvU4VZRR7MGhRjsgNMeR
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 249474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249474&o=json
            external_identifier: CBDB:249474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9sLgdReiqGukP8nVWgfPHC
        status: active
        display_name: 王侃
        merged_into_person_id: null
    - claim:
        id: c_B_mg7ixK_3yeaXu1y2hfR1
        subject_person_id: p_GikpBfnZtBzAmt6mvRBQ1h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K74VGiLxrBxwsYuvbZmkM3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UgSq1xs5mh_Ni9HZC9Rf1S
          claim_id: c_B_mg7ixK_3yeaXu1y2hfR1
          source_id: s_MrlR-zkY-4S9qvQBlAeIY8
          stance: supports
          locator: CBDB：兄弟 王傅（199770）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王僴 与 王傅 为同胞（CBDB 记「兄」），王傅 之父／母即 王僴 之父／母。
          source:
            id: s_MrlR-zkY-4S9qvQBlAeIY8
            source_type: api_record
            title: 中国历代人物传记资料库：王僴（CBDB 249478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249478&o=json
            external_identifier: CBDB:249478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K74VGiLxrBxwsYuvbZmkM3
        status: active
        display_name: 王僴
        merged_into_person_id: null
    - claim:
        id: c_kEfTonaZbWr298MocfvA8x
        subject_person_id: p_GikpBfnZtBzAmt6mvRBQ1h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mkf5jAFevuATNB8pTxs6a9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_06kPELoDwa1ELXpKkUz8Jz
          claim_id: c_kEfTonaZbWr298MocfvA8x
          source_id: s_rJHNp8KssqFQbD_mfnove5
          stance: supports
          locator: CBDB：兄弟 王傅（199770）之父／母 王縉
          quotation: null
          interpretation_note: 由兄弟关系推断：王倫 与 王傅 为同胞（CBDB 记「兄」），王傅 之父／母即 王倫 之父／母。
          source:
            id: s_rJHNp8KssqFQbD_mfnove5
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 249473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249473&o=json
            external_identifier: CBDB:249473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mkf5jAFevuATNB8pTxs6a9
        status: active
        display_name: 王倫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| bio.summary | 王縉，明人物。成化十一年進士，籍贯寶坻，曾任聽選官。（中国历代人物传记资料库 CBDB 249470） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fCdwQrvNQJRLgVMdijjiRw | 王傅 | accepted |
| children | p_6ZMVahHHd3VaDMbwRtj8HN | 王保 | accepted |
| children | p_8QxoHFLjvw25A95DLLjapm | 王修 | accepted |
| children | p_9sLgdReiqGukP8nVWgfPHC | 王侃 | accepted |
| children | p_K74VGiLxrBxwsYuvbZmkM3 | 王僴 | accepted |
| children | p_mkf5jAFevuATNB8pTxs6a9 | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保（CBDB 249475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249475&o=json)
- [中国历代人物传记资料库：王縉（CBDB 249470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249470&o=json)
- [中国历代人物传记资料库：王侃（CBDB 249474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249474&o=json)
- [中国历代人物传记资料库：王倫（CBDB 249473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249473&o=json)
- [中国历代人物传记资料库：王僴（CBDB 249478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249478&o=json)
- [中国历代人物传记资料库：王修（CBDB 249476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249476&o=json)
