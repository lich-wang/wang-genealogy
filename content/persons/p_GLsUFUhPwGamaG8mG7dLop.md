---
schema: wang-person/v1
id: p_GLsUFUhPwGamaG8mG7dLop
status: active
merged_into: null
display_name: 王鉞
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_efJJFt3wS2NuReTno5wFuZ
        subject_person_id: p_GLsUFUhPwGamaG8mG7dLop
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9n5Lxd84HMb79oS8f5YDsT
          claim_id: c_efJJFt3wS2NuReTno5wFuZ
          source_id: s_vD4iK7oraKBeogyki3o93S
          stance: supports
          locator: CBDB:313572
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313572）
          source: &a1
            id: s_vD4iK7oraKBeogyki3o93S
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 313572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313572&o=json
            external_identifier: CBDB:313572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mNnPBkdn6XURoPpDcyEqND
        subject_person_id: p_GLsUFUhPwGamaG8mG7dLop
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞，明人物。嘉靖二十九年進士，籍贯長垣，曾任正千戶、武德將軍。（中国历代人物传记资料库 CBDB 313572）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b_sM46HXHA7QWNCxDMSbIB
          claim_id: c_mNnPBkdn6XURoPpDcyEqND
          source_id: s_vD4iK7oraKBeogyki3o93S
          stance: supports
          locator: CBDB:313572
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UHTHcjMBHImtTGrsKZv9Zd
        subject_person_id: p_GLsUFUhPwGamaG8mG7dLop
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C86M2AWo3FFh1j65XmxDtp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGyONeRVTFMvcisXf_buDM
          claim_id: c_UHTHcjMBHImtTGrsKZv9Zd
          source_id: s_vD4iK7oraKBeogyki3o93S
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_C86M2AWo3FFh1j65XmxDtp
        status: active
        display_name: 王潺
        merged_into_person_id: null
    - claim:
        id: c_2hHZPyd0VIjwNbHaz9-B0b
        subject_person_id: p_GLsUFUhPwGamaG8mG7dLop
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bsx74AhBPBHyKyjrDtHBaT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sXoKh4V7iAEKn8iP5qUqGE
          claim_id: c_2hHZPyd0VIjwNbHaz9-B0b
          source_id: s_bz_BAfZW_KAOs8e7ycDfOl
          stance: supports
          locator: CBDB：兄弟 王潺（204037）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王洋 与 王潺 为同胞（CBDB 记「兄」），王潺 之父／母即 王洋 之父／母。
          source:
            id: s_bz_BAfZW_KAOs8e7ycDfOl
            source_type: api_record
            title: 中国历代人物传记资料库：王洋（CBDB 313580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313580&o=json
            external_identifier: CBDB:313580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Bsx74AhBPBHyKyjrDtHBaT
        status: active
        display_name: 王洋
        merged_into_person_id: null
    - claim:
        id: c_rvZazRssbjIjgNimQjCtgh
        subject_person_id: p_GLsUFUhPwGamaG8mG7dLop
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GtVHdLeXdsgG2ZeeqGJmWi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BPw01hSy9wzZ4MVJnQFfMj
          claim_id: c_rvZazRssbjIjgNimQjCtgh
          source_id: s_Kxr9s9PLf8Jc38wlMYthSb
          stance: supports
          locator: CBDB：兄弟 王潺（204037）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王洧 与 王潺 为同胞（CBDB 记「弟」），王潺 之父／母即 王洧 之父／母。
          source:
            id: s_Kxr9s9PLf8Jc38wlMYthSb
            source_type: api_record
            title: 中国历代人物传记资料库：王洧（CBDB 313577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313577&o=json
            external_identifier: CBDB:313577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GtVHdLeXdsgG2ZeeqGJmWi
        status: active
        display_name: 王洧
        merged_into_person_id: null
    - claim:
        id: c_PvH9rkJxWrzKFsF3dzKYEA
        subject_person_id: p_GLsUFUhPwGamaG8mG7dLop
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NZbU5FY38Nkxc2th62UdLc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gx1bm7gLC8SrEPPz27GdDb
          claim_id: c_PvH9rkJxWrzKFsF3dzKYEA
          source_id: s_PEmKAPFKFACBxJF98_d2He
          stance: supports
          locator: CBDB：兄弟 王潺（204037）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤 与 王潺 为同胞（CBDB 记「弟」），王潺 之父／母即 王澤 之父／母。
          source:
            id: s_PEmKAPFKFACBxJF98_d2He
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 313579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313579&o=json
            external_identifier: CBDB:313579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NZbU5FY38Nkxc2th62UdLc
        status: active
        display_name: 王澤
        merged_into_person_id: null
    - claim:
        id: c_BQNPXBnIHZZUhcYva85iou
        subject_person_id: p_GLsUFUhPwGamaG8mG7dLop
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YC8d5nVU6JeTcq9TGB4vDX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0ewveIYodRfHQVdKrptwjM
          claim_id: c_BQNPXBnIHZZUhcYva85iou
          source_id: s_sHzuvkReT60aCXr8oEtTK9
          stance: supports
          locator: CBDB：兄弟 王潺（204037）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王沂 与 王潺 为同胞（CBDB 记「弟」），王潺 之父／母即 王沂 之父／母。
          source:
            id: s_sHzuvkReT60aCXr8oEtTK9
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 313578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313578&o=json
            external_identifier: CBDB:313578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YC8d5nVU6JeTcq9TGB4vDX
        status: active
        display_name: 王沂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | 王鉞，明人物。嘉靖二十九年進士，籍贯長垣，曾任正千戶、武德將軍。（中国历代人物传记资料库 CBDB 313572） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_C86M2AWo3FFh1j65XmxDtp | 王潺 | accepted |
| children | p_Bsx74AhBPBHyKyjrDtHBaT | 王洋 | accepted |
| children | p_GtVHdLeXdsgG2ZeeqGJmWi | 王洧 | accepted |
| children | p_NZbU5FY38Nkxc2th62UdLc | 王澤 | accepted |
| children | p_YC8d5nVU6JeTcq9TGB4vDX | 王沂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洧（CBDB 313577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313577&o=json)
- [中国历代人物传记资料库：王洋（CBDB 313580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313580&o=json)
- [中国历代人物传记资料库：王沂（CBDB 313578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313578&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 313572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313572&o=json)
- [中国历代人物传记资料库：王澤（CBDB 313579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313579&o=json)
