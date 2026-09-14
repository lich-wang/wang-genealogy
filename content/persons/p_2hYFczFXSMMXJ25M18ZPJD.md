---
schema: wang-person/v1
id: p_2hYFczFXSMMXJ25M18ZPJD
status: active
merged_into: null
display_name: 王乂衡
cbdb_id: 264447
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UF4HVLkejiTxZFhbmbMae4
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乂衡，明人物。弘治六年進士，籍贯上海。（中国历代人物传记资料库 CBDB 264447）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LrWIliWSVGCphoZITulwZw
          claim_id: c_UF4HVLkejiTxZFhbmbMae4
          source_id: s_H8haDxmhkZnrpPHJ6M7d2i
          stance: supports
          locator: CBDB:264447
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_H8haDxmhkZnrpPHJ6M7d2i
            source_type: api_record
            title: 中国历代人物传记资料库：王乂衡（CBDB 264447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264447&o=json
            external_identifier: CBDB:264447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QmsnvTJpAc3DSHYJ7FGDHK
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乂衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oSU1M2zuJV2GrKwc38nSpp
          claim_id: c_QmsnvTJpAc3DSHYJ7FGDHK
          source_id: s_H8haDxmhkZnrpPHJ6M7d2i
          stance: supports
          locator: CBDB:264447
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uDkGDF4HH4xoypvFieCHEJ
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tcnRstaNUF5RMY944rGoMz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gXPoaC1DPdGnjaeB_NLQI-
          claim_id: c_uDkGDF4HH4xoypvFieCHEJ
          source_id: s_H8haDxmhkZnrpPHJ6M7d2i
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H8haDxmhkZnrpPHJ6M7d2i
            source_type: api_record
            title: 中国历代人物传记资料库：王乂衡（CBDB 264447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264447&o=json
            external_identifier: CBDB:264447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tcnRstaNUF5RMY944rGoMz
        status: active
        display_name: 王大用
        merged_into_person_id: null
    - claim:
        id: c_O1k2zxqmBxZmgPNdz2sNZT
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G17Kp1hMkZF9rJVDMwWvjj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oqKDByt12KHPXRmBsbMw13
          claim_id: c_O1k2zxqmBxZmgPNdz2sNZT
          source_id: s_5gmEqHcBnXJipskuDZ5zMU
          stance: supports
          locator: CBDB：兄弟 王大用（200906）之父／母 王乂衡
          quotation: null
          interpretation_note: 由兄弟关系推断：王大啟 与 王大用 为同胞（CBDB 记「兄」），王大用 之父／母即 王大啟 之父／母。
          source:
            id: s_5gmEqHcBnXJipskuDZ5zMU
            source_type: api_record
            title: 中国历代人物传记资料库：王大啟（CBDB 264454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264454&o=json
            external_identifier: CBDB:264454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G17Kp1hMkZF9rJVDMwWvjj
        status: active
        display_name: 王大啟
        merged_into_person_id: null
    - claim:
        id: c_WAJPYbEeuqXY0Z8t19YueJ
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GA2xZvgDBrqeMUNxLWiD1m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c40kFvz4QQxST251ebC5Ug
          claim_id: c_WAJPYbEeuqXY0Z8t19YueJ
          source_id: s_a09GoAl402wFBeh6GJR7MV
          stance: supports
          locator: CBDB：兄弟 王大用（200906）之父／母 王乂衡
          quotation: null
          interpretation_note: 由兄弟关系推断：王大信 与 王大用 为同胞（CBDB 记「弟」），王大用 之父／母即 王大信 之父／母。
          source:
            id: s_a09GoAl402wFBeh6GJR7MV
            source_type: api_record
            title: 中国历代人物传记资料库：王大信（CBDB 264453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264453&o=json
            external_identifier: CBDB:264453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GA2xZvgDBrqeMUNxLWiD1m
        status: active
        display_name: 王大信
        merged_into_person_id: null
    - claim:
        id: c_8U9pJHmEFBfehi2xFVg5Fo
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KNSywyVP8aqXeaxi93du7e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dWMxV_C8odfwaE_dE4CQfq
          claim_id: c_8U9pJHmEFBfehi2xFVg5Fo
          source_id: s_Slzw9h9O6HuXmww2VEzYFR
          stance: supports
          locator: CBDB：兄弟 王大用（200906）之父／母 王乂衡
          quotation: null
          interpretation_note: 由兄弟关系推断：王大忠 与 王大用 为同胞（CBDB 记「弟」），王大用 之父／母即 王大忠 之父／母。
          source:
            id: s_Slzw9h9O6HuXmww2VEzYFR
            source_type: api_record
            title: 中国历代人物传记资料库：王大忠（CBDB 264452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264452&o=json
            external_identifier: CBDB:264452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KNSywyVP8aqXeaxi93du7e
        status: active
        display_name: 王大忠
        merged_into_person_id: null
    - claim:
        id: c_QKLyp1gdLK5ouO8bFiAVMg
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hJoEAYPFFprqrri2zWwHQx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xj-uyw1l6YQDFUXwNNTMff
          claim_id: c_QKLyp1gdLK5ouO8bFiAVMg
          source_id: s_kn8h0dhcm-KGWOw2cQjnyl
          stance: supports
          locator: CBDB：兄弟 王大用（200906）之父／母 王乂衡
          quotation: null
          interpretation_note: 由兄弟关系推断：王大本 与 王大用 为同胞（CBDB 记「弟」），王大用 之父／母即 王大本 之父／母。
          source:
            id: s_kn8h0dhcm-KGWOw2cQjnyl
            source_type: api_record
            title: 中国历代人物传记资料库：王大本（CBDB 264451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264451&o=json
            external_identifier: CBDB:264451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hJoEAYPFFprqrri2zWwHQx
        status: active
        display_name: 王大本
        merged_into_person_id: null
    - claim:
        id: c_4GKICXKDOuW1-fjltganJD
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jRuJqTaPb4mYrd3ywcQ2po
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XAm6NjPVtOYoFNVsChwar8
          claim_id: c_4GKICXKDOuW1-fjltganJD
          source_id: s_A_dZJoEvFsYOvLNfZdO49H
          stance: supports
          locator: CBDB：兄弟 王大用（200906）之父／母 王乂衡
          quotation: null
          interpretation_note: 由兄弟关系推断：王大猷 与 王大用 为同胞（CBDB 记「兄」），王大用 之父／母即 王大猷 之父／母。
          source:
            id: s_A_dZJoEvFsYOvLNfZdO49H
            source_type: api_record
            title: 中国历代人物传记资料库：王大猷（CBDB 264455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264455&o=json
            external_identifier: CBDB:264455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jRuJqTaPb4mYrd3ywcQ2po
        status: active
        display_name: 王大猷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王乂衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王乂衡，明人物。弘治六年進士，籍贯上海。（中国历代人物传记资料库 CBDB 264447） | accepted |
| name.primary | 王乂衡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tcnRstaNUF5RMY944rGoMz | 王大用 | accepted |
| children | p_G17Kp1hMkZF9rJVDMwWvjj | 王大啟 | accepted |
| children | p_GA2xZvgDBrqeMUNxLWiD1m | 王大信 | accepted |
| children | p_KNSywyVP8aqXeaxi93du7e | 王大忠 | accepted |
| children | p_hJoEAYPFFprqrri2zWwHQx | 王大本 | accepted |
| children | p_jRuJqTaPb4mYrd3ywcQ2po | 王大猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大本（CBDB 264451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264451&o=json)
- [中国历代人物传记资料库：王大啟（CBDB 264454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264454&o=json)
- [中国历代人物传记资料库：王大信（CBDB 264453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264453&o=json)
- [中国历代人物传记资料库：王大猷（CBDB 264455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264455&o=json)
- [中国历代人物传记资料库：王大忠（CBDB 264452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264452&o=json)
- [中国历代人物传记资料库：王乂衡（CBDB 264447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264447&o=json)
