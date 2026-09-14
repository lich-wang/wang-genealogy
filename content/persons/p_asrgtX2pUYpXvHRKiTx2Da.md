---
schema: wang-person/v1
id: p_asrgtX2pUYpXvHRKiTx2Da
status: active
merged_into: null
display_name: 王聞凱
cbdb_id: 236741
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CiF6ZZ7wQGUgX8hLN5BsuP
        subject_person_id: p_asrgtX2pUYpXvHRKiTx2Da
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聞凱，明人物。正統四年進士，籍贯海陽。（中国历代人物传记资料库 CBDB 236741）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wa_KKgCoJWKLF8oHgwpZSI
          claim_id: c_CiF6ZZ7wQGUgX8hLN5BsuP
          source_id: s_PWyAj95pvfAFyAFGjqE9vf
          stance: supports
          locator: CBDB:236741
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PWyAj95pvfAFyAFGjqE9vf
            source_type: api_record
            title: 中国历代人物传记资料库：王聞凱（CBDB 236741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236741&o=json
            external_identifier: CBDB:236741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_h79ZNdCgr2jRTHDQsqsbm7
        subject_person_id: p_asrgtX2pUYpXvHRKiTx2Da
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聞凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B4vrQJZR62Za6a8qE3RFBh
          claim_id: c_h79ZNdCgr2jRTHDQsqsbm7
          source_id: s_PWyAj95pvfAFyAFGjqE9vf
          stance: supports
          locator: CBDB:236741
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_221Yq_WkBT272tI4JYR13X
        subject_person_id: p_asrgtX2pUYpXvHRKiTx2Da
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qYjnc5RrNDfp7xIySMh3-b
          claim_id: c_221Yq_WkBT272tI4JYR13X
          source_id: s_g2jrpdwRHB37XPK8y1Q56W
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g2jrpdwRHB37XPK8y1Q56W
            source_type: api_record
            title: 中国历代人物传记资料库：王彰（CBDB 207831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207831&o=json
            external_identifier: CBDB:207831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2iNYB7MMKmz6yPS4rjCAQD
        status: active
        display_name: 王彰
        merged_into_person_id: null
    - claim:
        id: c_NNtkEcu9RTjQsfyg1bpHGw
        subject_person_id: p_asrgtX2pUYpXvHRKiTx2Da
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_85wB9oyLmcqBv8o7RhR9Ac
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S7od2V-MqZtLGMKghlVfUQ
          claim_id: c_NNtkEcu9RTjQsfyg1bpHGw
          source_id: s_DsvcY-5IiwQUBJccGxwKKI
          stance: supports
          locator: CBDB：兄弟 王彰（207831）之父／母 王聞凱
          quotation: null
          interpretation_note: 由兄弟关系推断：王冬 与 王彰 为同胞（CBDB 记「弟」），王彰 之父／母即 王冬 之父／母。
          source:
            id: s_DsvcY-5IiwQUBJccGxwKKI
            source_type: api_record
            title: 中国历代人物传记资料库：王冬（CBDB 236746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236746&o=json
            external_identifier: CBDB:236746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_85wB9oyLmcqBv8o7RhR9Ac
        status: active
        display_name: 王冬
        merged_into_person_id: null
    - claim:
        id: c_P_J1NzC7evmVyjFV8H-P_S
        subject_person_id: p_asrgtX2pUYpXvHRKiTx2Da
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JP4dZ9Qgk2oGTc9mcdrUkB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9LKeq6kTXinZWObHC0XXj2
          claim_id: c_P_J1NzC7evmVyjFV8H-P_S
          source_id: s_Om-s_0o9jVb1ysqmo9T2Fa
          stance: supports
          locator: CBDB：兄弟 王彰（207831）之父／母 王聞凱
          quotation: null
          interpretation_note: 由兄弟关系推断：王彬 与 王彰 为同胞（CBDB 记「弟」），王彰 之父／母即 王彬 之父／母。
          source:
            id: s_Om-s_0o9jVb1ysqmo9T2Fa
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 236747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236747&o=json
            external_identifier: CBDB:236747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JP4dZ9Qgk2oGTc9mcdrUkB
        status: active
        display_name: 王彬
        merged_into_person_id: null
    - claim:
        id: c_42DREk_7LCKTgLFYN7IP44
        subject_person_id: p_asrgtX2pUYpXvHRKiTx2Da
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dDhkUYHKCRgJCyVvb8hQBc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xOjzTIQLHK4jjERylqA-7G
          claim_id: c_42DREk_7LCKTgLFYN7IP44
          source_id: s_H17e5AUELdd8PHnI8Vk5we
          stance: supports
          locator: CBDB：兄弟 王彰（207831）之父／母 王聞凱
          quotation: null
          interpretation_note: 由兄弟关系推断：王美 与 王彰 为同胞（CBDB 记「兄」），王彰 之父／母即 王美 之父／母。
          source:
            id: s_H17e5AUELdd8PHnI8Vk5we
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 236748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236748&o=json
            external_identifier: CBDB:236748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dDhkUYHKCRgJCyVvb8hQBc
        status: active
        display_name: 王美
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王聞凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王聞凱，明人物。正統四年進士，籍贯海陽。（中国历代人物传记资料库 CBDB 236741） | accepted |
| name.primary | 王聞凱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2iNYB7MMKmz6yPS4rjCAQD | 王彰 | accepted |
| children | p_85wB9oyLmcqBv8o7RhR9Ac | 王冬 | accepted |
| children | p_JP4dZ9Qgk2oGTc9mcdrUkB | 王彬 | accepted |
| children | p_dDhkUYHKCRgJCyVvb8hQBc | 王美 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 236747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236747&o=json)
- [中国历代人物传记资料库：王冬（CBDB 236746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236746&o=json)
- [中国历代人物传记资料库：王美（CBDB 236748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236748&o=json)
- [中国历代人物传记资料库：王聞凱（CBDB 236741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236741&o=json)
- [中国历代人物传记资料库：王彰（CBDB 207831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207831&o=json)
