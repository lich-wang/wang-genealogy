---
schema: wang-person/v1
id: p_t5Pa7BDdJtGhQZXGCYrN2e
status: active
merged_into: null
display_name: 王棟
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AaKNTCB82GngtXAfP4GNVB
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Di4mLghmRfxwCy1iRF35Z
          claim_id: c_AaKNTCB82GngtXAfP4GNVB
          source_id: s_F9LEADxaDdt4eUbEyoye7c
          stance: supports
          locator: CBDB:300166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300166）
          source: &a1
            id: s_F9LEADxaDdt4eUbEyoye7c
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 300166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300166&o=json
            external_identifier: CBDB:300166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c56R5Bya4rkMd8msZhumLQ
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棟，明人物。嘉靖十七年進士，籍贯南充，曾任布政使司右參議、朝列大夫。（中国历代人物传记资料库 CBDB 300166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hpkyttaneJ-tZxbVLNOLu5
          claim_id: c_c56R5Bya4rkMd8msZhumLQ
          source_id: s_F9LEADxaDdt4eUbEyoye7c
          stance: supports
          locator: CBDB:300166
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__pY15RzL4Oq2dCd2W8-FE1
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sZWOZB3uFminwpDO43S7fi
          claim_id: c__pY15RzL4Oq2dCd2W8-FE1
          source_id: s_F9LEADxaDdt4eUbEyoye7c
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第四十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fYsU7A3SFMfzEtkjj2jnfk
        status: active
        display_name: 王之臣
        merged_into_person_id: null
    - claim:
        id: c_DSKFRxk6KiqI2roMjUJGTj
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LXKRXaEE74nGyP81XJFnZ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uo9_yuDFgRf9ushGa5R2yN
          claim_id: c_DSKFRxk6KiqI2roMjUJGTj
          source_id: s_K5tjB8rqPGWQiAPJyALLH8
          stance: supports
          locator: CBDB：兄弟 王之臣（203124）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王之賓 与 王之臣 为同胞（CBDB 记「兄」），王之臣 之父／母即 王之賓 之父／母。
          source:
            id: s_K5tjB8rqPGWQiAPJyALLH8
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 300178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300178&o=json
            external_identifier: CBDB:300178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LXKRXaEE74nGyP81XJFnZ4
        status: active
        display_name: 王之賓
        merged_into_person_id: null
    - claim:
        id: c_7c_3tuAJ9qB2n9EL_KOqlM
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N79qb8WTuLZEBLK774uBg5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7VWPGvjPGRvpM_-WQpr0Lo
          claim_id: c_7c_3tuAJ9qB2n9EL_KOqlM
          source_id: s_XESvs6Wl3LFrPK7w3l8Pgt
          stance: supports
          locator: CBDB：兄弟 王之臣（203124）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王之卿 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王之卿 之父／母。
          source:
            id: s_XESvs6Wl3LFrPK7w3l8Pgt
            source_type: api_record
            title: 中国历代人物传记资料库：王之卿（CBDB 300176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300176&o=json
            external_identifier: CBDB:300176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N79qb8WTuLZEBLK774uBg5
        status: active
        display_name: 王之卿
        merged_into_person_id: null
    - claim:
        id: c_o-WMfo3He4lVwfz3lNs_5I
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U3dDeEVosMkcqEjZFgVJat
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bmV84ErKx0wl0jAAmWpMSi
          claim_id: c_o-WMfo3He4lVwfz3lNs_5I
          source_id: s_tSdr_YeukJ17zcyVvLZxXK
          stance: supports
          locator: CBDB：兄弟 王之臣（203124）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王學 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王學 之父／母。
          source:
            id: s_tSdr_YeukJ17zcyVvLZxXK
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 300171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300171&o=json
            external_identifier: CBDB:300171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U3dDeEVosMkcqEjZFgVJat
        status: active
        display_name: 王學
        merged_into_person_id: null
    - claim:
        id: c_6-N7KC1dr_0-JExyNA4aEZ
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a4G2a7ZnQXTNMbTwZB2nty
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LOS8HEoXAGmtoNmeoPRX6K
          claim_id: c_6-N7KC1dr_0-JExyNA4aEZ
          source_id: s_qqMut5IqMH_4IzC3Muq5i1
          stance: supports
          locator: CBDB：兄弟 王之臣（203124）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王儒 之父／母。
          source:
            id: s_qqMut5IqMH_4IzC3Muq5i1
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 300175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300175&o=json
            external_identifier: CBDB:300175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a4G2a7ZnQXTNMbTwZB2nty
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_XvhyUgsyH8xasTgBG6nZca
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eTrfGNjgERr263ocMJZiw9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5OehmuylEkJka785TCzr5T
          claim_id: c_XvhyUgsyH8xasTgBG6nZca
          source_id: s_6C3f8WwkhF-TVLWf8qCJsL
          stance: supports
          locator: CBDB：兄弟 王之臣（203124）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王舒 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王舒 之父／母。
          source:
            id: s_6C3f8WwkhF-TVLWf8qCJsL
            source_type: api_record
            title: 中国历代人物传记资料库：王舒（CBDB 300177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300177&o=json
            external_identifier: CBDB:300177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eTrfGNjgERr263ocMJZiw9
        status: active
        display_name: 王舒
        merged_into_person_id: null
    - claim:
        id: c_Fs_LeoaSVuJfnbPzp9SG5n
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hjGPuzvt26PHeWuKNeCk5i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1K4y32cD9SOSsDNZw0SACS
          claim_id: c_Fs_LeoaSVuJfnbPzp9SG5n
          source_id: s_3VW0TdTY33ec-EOxLYO0eU
          stance: supports
          locator: CBDB：兄弟 王之臣（203124）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王文勤 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王文勤 之父／母。
          source:
            id: s_3VW0TdTY33ec-EOxLYO0eU
            source_type: api_record
            title: 中国历代人物传记资料库：王文勤（CBDB 300172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300172&o=json
            external_identifier: CBDB:300172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hjGPuzvt26PHeWuKNeCk5i
        status: active
        display_name: 王文勤
        merged_into_person_id: null
    - claim:
        id: c_apWr14MyMLCIBS3ltpO23a
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mMTEo578qCaKdmYrujLVe6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kF-8yRN3jbWa6s_OZyFJ2w
          claim_id: c_apWr14MyMLCIBS3ltpO23a
          source_id: s_bhdWTfeGmpgPbmaLDN2v4A
          stance: supports
          locator: CBDB：兄弟 王之臣（203124）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王之祜 与 王之臣 为同胞（CBDB 记「兄」），王之臣 之父／母即 王之祜 之父／母。
          source:
            id: s_bhdWTfeGmpgPbmaLDN2v4A
            source_type: api_record
            title: 中国历代人物传记资料库：王之祜（CBDB 300179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300179&o=json
            external_identifier: CBDB:300179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mMTEo578qCaKdmYrujLVe6
        status: active
        display_name: 王之祜
        merged_into_person_id: null
    - claim:
        id: c_m3EH5B9xu9F9nMWk_pu3pK
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tHXyX7bVwixD2cTucF7Mfh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l_fYM9RxCp1n9CyGs80wFR
          claim_id: c_m3EH5B9xu9F9nMWk_pu3pK
          source_id: s_tueNMhywM6AW316_5FYHGR
          stance: supports
          locator: CBDB：兄弟 王之臣（203124）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王之民 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王之民 之父／母。
          source:
            id: s_tueNMhywM6AW316_5FYHGR
            source_type: api_record
            title: 中国历代人物传记资料库：王之民（CBDB 300173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300173&o=json
            external_identifier: CBDB:300173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tHXyX7bVwixD2cTucF7Mfh
        status: active
        display_name: 王之民
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棟 | accepted |
| bio.summary | 王棟，明人物。嘉靖十七年進士，籍贯南充，曾任布政使司右參議、朝列大夫。（中国历代人物传记资料库 CBDB 300166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fYsU7A3SFMfzEtkjj2jnfk | 王之臣 | accepted |
| children | p_LXKRXaEE74nGyP81XJFnZ4 | 王之賓 | accepted |
| children | p_N79qb8WTuLZEBLK774uBg5 | 王之卿 | accepted |
| children | p_U3dDeEVosMkcqEjZFgVJat | 王學 | accepted |
| children | p_a4G2a7ZnQXTNMbTwZB2nty | 王儒 | accepted |
| children | p_eTrfGNjgERr263ocMJZiw9 | 王舒 | accepted |
| children | p_hjGPuzvt26PHeWuKNeCk5i | 王文勤 | accepted |
| children | p_mMTEo578qCaKdmYrujLVe6 | 王之祜 | accepted |
| children | p_tHXyX7bVwixD2cTucF7Mfh | 王之民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棟（CBDB 300166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300166&o=json)
- [中国历代人物传记资料库：王儒（CBDB 300175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300175&o=json)
- [中国历代人物传记资料库：王舒（CBDB 300177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300177&o=json)
- [中国历代人物传记资料库：王文勤（CBDB 300172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300172&o=json)
- [中国历代人物传记资料库：王學（CBDB 300171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300171&o=json)
- [中国历代人物传记资料库：王之賓（CBDB 300178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300178&o=json)
- [中国历代人物传记资料库：王之祜（CBDB 300179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300179&o=json)
- [中国历代人物传记资料库：王之民（CBDB 300173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300173&o=json)
- [中国历代人物传记资料库：王之卿（CBDB 300176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300176&o=json)
