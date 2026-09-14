---
schema: wang-person/v1
id: p_Ws6vwZFsXZUpBYjSrkcdGJ
status: active
merged_into: null
display_name: 王言
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9teLf3QJGXy5N7dSEX2nRQ
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NQh2WKPpPRDAFTUATcQ4T3
          claim_id: c_9teLf3QJGXy5N7dSEX2nRQ
          source_id: s_15mCF5pxy37CCM49cEA2hD
          stance: supports
          locator: CBDB:282499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282499）
          source: &a1
            id: s_15mCF5pxy37CCM49cEA2hD
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 282499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282499&o=json
            external_identifier: CBDB:282499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zzv22s9DAW2AQ1JM2Sj6Wi
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言，明人物。正德十二年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 282499）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jB0Vq_2s0kFkUjHKFPOv2J
          claim_id: c_Zzv22s9DAW2AQ1JM2Sj6Wi
          source_id: s_15mCF5pxy37CCM49cEA2hD
          stance: supports
          locator: CBDB:282499
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__oyCQu0QcnbomUMzz6GJPD
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KEh4RHPQAaFC5WzQy7Qebi
          claim_id: c__oyCQu0QcnbomUMzz6GJPD
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Yy8BuZ9UTECH2SA99gjmDH
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 126752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126752&o=json
            external_identifier: CBDB:126752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CvexZGJpSfjjALu2joPK1N
        status: active
        display_name: 王瑄
        merged_into_person_id: null
    - claim:
        id: c_TSKc2xJegsG6kDet6WPuBG
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1N65LqTbYG3WVhuB7e8YV9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Q8rRRwnaXu2fi_LSe_0Gn
          claim_id: c_TSKc2xJegsG6kDet6WPuBG
          source_id: s_6nBgfoPFJvS6CDuPTQOHF0
          stance: supports
          locator: CBDB：兄弟 王瑄（126752）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王珣 与 王瑄 为同胞（CBDB 记「兄」），王瑄 之父／母即 王珣 之父／母。
          source:
            id: s_6nBgfoPFJvS6CDuPTQOHF0
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 282509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282509&o=json
            external_identifier: CBDB:282509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1N65LqTbYG3WVhuB7e8YV9
        status: active
        display_name: 王珣
        merged_into_person_id: null
    - claim:
        id: c_gEnoRNMpTdV4pQb_cFNjXV
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CgPbjE7HKGSRncuYiRMFkb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZAVh83ojLX5Dk_9jBUntTY
          claim_id: c_gEnoRNMpTdV4pQb_cFNjXV
          source_id: s_NRBL1dLOFQW_HWmPX4kPJN
          stance: supports
          locator: CBDB：兄弟 王瑄（126752）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王環 与 王瑄 为同胞（CBDB 记「兄」），王瑄 之父／母即 王環 之父／母。
          source:
            id: s_NRBL1dLOFQW_HWmPX4kPJN
            source_type: api_record
            title: 中国历代人物传记资料库：王環（CBDB 282505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282505&o=json
            external_identifier: CBDB:282505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CgPbjE7HKGSRncuYiRMFkb
        status: active
        display_name: 王環
        merged_into_person_id: null
    - claim:
        id: c_v5YR6ZGY20mMxyM08MGqD7
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JZWLLHiizKoJQGGfwvP2GQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eO5dJLyzZiSugYgO8ZosXV
          claim_id: c_v5YR6ZGY20mMxyM08MGqD7
          source_id: s_2pNDNJefUKCFv1YhcdMPmR
          stance: supports
          locator: CBDB：兄弟 王瑄（126752）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑜 与 王瑄 为同胞（CBDB 记「兄」），王瑄 之父／母即 王瑜 之父／母。
          source:
            id: s_2pNDNJefUKCFv1YhcdMPmR
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 282508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282508&o=json
            external_identifier: CBDB:282508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JZWLLHiizKoJQGGfwvP2GQ
        status: active
        display_name: 王瑜
        merged_into_person_id: null
    - claim:
        id: c_k-921cIqxsfmYBqB5yjlO_
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UbDnMmC6J6MoE9h83drrbB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2H8sxSS1MIOtfbafvHMlh
          claim_id: c_k-921cIqxsfmYBqB5yjlO_
          source_id: s_jb80SanRtbY4Eosw4h73cW
          stance: supports
          locator: CBDB：兄弟 王瑄（126752）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑨 与 王瑄 为同胞（CBDB 记「兄」），王瑄 之父／母即 王瑨 之父／母。
          source:
            id: s_jb80SanRtbY4Eosw4h73cW
            source_type: api_record
            title: 中国历代人物传记资料库：王瑨（CBDB 282506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282506&o=json
            external_identifier: CBDB:282506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UbDnMmC6J6MoE9h83drrbB
        status: active
        display_name: 王瑨
        merged_into_person_id: null
    - claim:
        id: c_NvNY4F3-CGSRj5oaP6a3Fs
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VmtHWW9HBMcRBoxoJTE23J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNkB5ShZOneMjP4DDew8nm
          claim_id: c_NvNY4F3-CGSRj5oaP6a3Fs
          source_id: s_Bm1r15S80BFM89pkE2SpG9
          stance: supports
          locator: CBDB：兄弟 王瑄（126752）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王璲 与 王瑄 为同胞（CBDB 记「兄」），王瑄 之父／母即 王璲 之父／母。
          source:
            id: s_Bm1r15S80BFM89pkE2SpG9
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 282502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282502&o=json
            external_identifier: CBDB:282502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VmtHWW9HBMcRBoxoJTE23J
        status: active
        display_name: 王璲
        merged_into_person_id: null
    - claim:
        id: c_Mo2HN7urOAA23ptGqN87er
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WmoLL6wPihQGgdJbeHcGDV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h57tk17_9dhLL4INVltEU0
          claim_id: c_Mo2HN7urOAA23ptGqN87er
          source_id: s_x2SX-ApP-QtBF-xanGOSzG
          stance: supports
          locator: CBDB：兄弟 王瑄（126752）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王琠 与 王瑄 为同胞（CBDB 记「兄」），王瑄 之父／母即 王琠 之父／母。
          source:
            id: s_x2SX-ApP-QtBF-xanGOSzG
            source_type: api_record
            title: 中国历代人物传记资料库：王琠（CBDB 282504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282504&o=json
            external_identifier: CBDB:282504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WmoLL6wPihQGgdJbeHcGDV
        status: active
        display_name: 王琠
        merged_into_person_id: null
    - claim:
        id: c_6ZVgeSPfkjfFFgQWftCLQY
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WyhiFhHAUths6uCohHVEMD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aeYjci3d_sEyuSsdr7D1e-
          claim_id: c_6ZVgeSPfkjfFFgQWftCLQY
          source_id: s_x8XencURFrlakyzPfLOaxj
          stance: supports
          locator: CBDB：兄弟 王瑄（126752）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑾 与 王瑄 为同胞（CBDB 记「兄」），王瑄 之父／母即 王瑾 之父／母。
          source:
            id: s_x8XencURFrlakyzPfLOaxj
            source_type: api_record
            title: 中国历代人物传记资料库：王瑾（CBDB 282503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282503&o=json
            external_identifier: CBDB:282503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WyhiFhHAUths6uCohHVEMD
        status: active
        display_name: 王瑾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | 王言，明人物。正德十二年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 282499） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CvexZGJpSfjjALu2joPK1N | 王瑄 | accepted |
| children | p_1N65LqTbYG3WVhuB7e8YV9 | 王珣 | accepted |
| children | p_CgPbjE7HKGSRncuYiRMFkb | 王環 | accepted |
| children | p_JZWLLHiizKoJQGGfwvP2GQ | 王瑜 | accepted |
| children | p_UbDnMmC6J6MoE9h83drrbB | 王瑨 | accepted |
| children | p_VmtHWW9HBMcRBoxoJTE23J | 王璲 | accepted |
| children | p_WmoLL6wPihQGgdJbeHcGDV | 王琠 | accepted |
| children | p_WyhiFhHAUths6uCohHVEMD | 王瑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王環（CBDB 282505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282505&o=json)
- [中国历代人物传记资料库：王瑾（CBDB 282503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282503&o=json)
- [中国历代人物传记资料库：王瑨（CBDB 282506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282506&o=json)
- [中国历代人物传记资料库：王璲（CBDB 282502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282502&o=json)
- [中国历代人物传记资料库：王琠（CBDB 282504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282504&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 126752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126752&o=json)
- [中国历代人物传记资料库：王珣（CBDB 282509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282509&o=json)
- [中国历代人物传记资料库：王言（CBDB 282499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282499&o=json)
- [中国历代人物传记资料库：王瑜（CBDB 282508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282508&o=json)
