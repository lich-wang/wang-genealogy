---
schema: wang-person/v1
id: p_fYsU7A3SFMfzEtkjj2jnfk
status: active
merged_into: null
display_name: 王之臣
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z6hJC3rjY2w8rcHxNYFXud
        subject_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4497JSRURwXLF9T86VJWnH
          claim_id: c_Z6hJC3rjY2w8rcHxNYFXud
          source_id: s_cxZfHxf1QGPWYkPeVKEwXn
          stance: supports
          locator: CBDB:203124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203124）
          source: &a1
            id: s_cxZfHxf1QGPWYkPeVKEwXn
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 203124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203124&o=json
            external_identifier: CBDB:203124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_46Ps8L9He7KwnQN7d5mojk
        subject_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1509年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XisZ3GAZ25K3SBwYFiNySr
          claim_id: c_46Ps8L9He7KwnQN7d5mojk
          source_id: s_cxZfHxf1QGPWYkPeVKEwXn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KmXSffiYmz2DcS1b4811Aj
        subject_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之臣（生于1509年），明人物。明清進士進士，籍贯南充，入仕進士。（中国历代人物传记资料库 CBDB 203124）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TWFSLy80BwcQrCV5aF4FzR
          claim_id: c_KmXSffiYmz2DcS1b4811Aj
          source_id: s_cxZfHxf1QGPWYkPeVKEwXn
          stance: supports
          locator: CBDB:203124
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_t5Pa7BDdJtGhQZXGCYrN2e
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_dyV3qm9NWYvrh2gi75y40I
        subject_person_id: p_97kSyM8YLYzB5cHKtZsf2Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_20xi0Ufr0UM92HC1nf6n6f
          claim_id: c_dyV3qm9NWYvrh2gi75y40I
          source_id: s_AuBWZA8VrTP5KHHkmR5L2C
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AuBWZA8VrTP5KHHkmR5L2C
            source_type: api_record
            title: 中国历代人物传记资料库：王充（CBDB 300165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300165&o=json
            external_identifier: CBDB:300165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_97kSyM8YLYzB5cHKtZsf2Q
        status: active
        display_name: 王充
        merged_into_person_id: null
    - claim:
        id: c_TNGLi0OK1WHTrd0iJETc6x
        subject_person_id: p_FF5NEoKt6BCvbiCkrfJPv5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8wUINuMcWBJXPJvxHRSlGY
          claim_id: c_TNGLi0OK1WHTrd0iJETc6x
          source_id: s_wyYMzBGD6hQTHBVCDvJjvj
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wyYMzBGD6hQTHBVCDvJjvj
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 300164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300164&o=json
            external_identifier: CBDB:300164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FF5NEoKt6BCvbiCkrfJPv5
        status: active
        display_name: 王能
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_wfAcF7_kjFhnyQ3219mdcu
        subject_person_id: p_LXKRXaEE74nGyP81XJFnZ4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C2ayUqdk5HvUo0pWLSlouP
          claim_id: c_wfAcF7_kjFhnyQ3219mdcu
          source_id: s_K5tjB8rqPGWQiAPJyALLH8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203124 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_HoOn04V_TG0_6lQO3M7Mnj
        subject_person_id: p_N79qb8WTuLZEBLK774uBg5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jH4ffyT2ZFLLyONJjg0j9k
          claim_id: c_HoOn04V_TG0_6lQO3M7Mnj
          source_id: s_XESvs6Wl3LFrPK7w3l8Pgt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203124 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_bXANlErZWzItOMg5_-d5Hd
        subject_person_id: p_U3dDeEVosMkcqEjZFgVJat
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Op8vcXg-Cy36W7S0uT2poj
          claim_id: c_bXANlErZWzItOMg5_-d5Hd
          source_id: s_tSdr_YeukJ17zcyVvLZxXK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203124 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_KRhl3ixKcIDJkmRE3hoYy3
        subject_person_id: p_a4G2a7ZnQXTNMbTwZB2nty
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2-aeZ14Mfz4hwanqxgWWl_
          claim_id: c_KRhl3ixKcIDJkmRE3hoYy3
          source_id: s_qqMut5IqMH_4IzC3Muq5i1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203124 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_bowBxa_7_ofrlxZB064w7g
        subject_person_id: p_eTrfGNjgERr263ocMJZiw9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X0VBfqh6LAcMp_GqWBdpoz
          claim_id: c_bowBxa_7_ofrlxZB064w7g
          source_id: s_6C3f8WwkhF-TVLWf8qCJsL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203124 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_Vh4dJc1WIk6k_1y3BVDIL5
        subject_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hjGPuzvt26PHeWuKNeCk5i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DJ64R90krg7s3NscH4XDpk
          claim_id: c_Vh4dJc1WIk6k_1y3BVDIL5
          source_id: s_3VW0TdTY33ec-EOxLYO0eU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203124 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_a4BPakxSqYagYaSeA9KwEp
        subject_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mMTEo578qCaKdmYrujLVe6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0_CQavf8uw9wOC4ZxCnyph
          claim_id: c_a4BPakxSqYagYaSeA9KwEp
          source_id: s_bhdWTfeGmpgPbmaLDN2v4A
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203124 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_dH-v9njEE91DPdQAJpgsvv
        subject_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tHXyX7bVwixD2cTucF7Mfh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2RLtKi3qTLAGoCLoHblMr
          claim_id: c_dH-v9njEE91DPdQAJpgsvv
          source_id: s_tueNMhywM6AW316_5FYHGR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203124 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王之臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之臣 | accepted |
| birth.date | 1509年 | accepted |
| bio.summary | 王之臣（生于1509年），明人物。明清進士進士，籍贯南充，入仕進士。（中国历代人物传记资料库 CBDB 203124） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t5Pa7BDdJtGhQZXGCYrN2e | 王棟 | accepted |
| ancestors | p_97kSyM8YLYzB5cHKtZsf2Q | 王充 | accepted |
| ancestors | p_FF5NEoKt6BCvbiCkrfJPv5 | 王能 | accepted |
| other | p_LXKRXaEE74nGyP81XJFnZ4 | 王之賓 | accepted |
| other | p_N79qb8WTuLZEBLK774uBg5 | 王之卿 | accepted |
| other | p_U3dDeEVosMkcqEjZFgVJat | 王學 | accepted |
| other | p_a4G2a7ZnQXTNMbTwZB2nty | 王儒 | accepted |
| other | p_eTrfGNjgERr263ocMJZiw9 | 王舒 | accepted |
| other | p_hjGPuzvt26PHeWuKNeCk5i | 王文勤 | accepted |
| other | p_mMTEo578qCaKdmYrujLVe6 | 王之祜 | accepted |
| other | p_tHXyX7bVwixD2cTucF7Mfh | 王之民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王充（CBDB 300165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300165&o=json)
- [中国历代人物传记资料库：王棟（CBDB 300166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300166&o=json)
- [中国历代人物传记资料库：王能（CBDB 300164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300164&o=json)
- [中国历代人物传记资料库：王儒（CBDB 300175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300175&o=json)
- [中国历代人物传记资料库：王舒（CBDB 300177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300177&o=json)
- [中国历代人物传记资料库：王文勤（CBDB 300172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300172&o=json)
- [中国历代人物传记资料库：王學（CBDB 300171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300171&o=json)
- [中国历代人物传记资料库：王之賓（CBDB 300178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300178&o=json)
- [中国历代人物传记资料库：王之臣（CBDB 203124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203124&o=json)
- [中国历代人物传记资料库：王之祜（CBDB 300179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300179&o=json)
- [中国历代人物传记资料库：王之民（CBDB 300173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300173&o=json)
- [中国历代人物传记资料库：王之卿（CBDB 300176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300176&o=json)
