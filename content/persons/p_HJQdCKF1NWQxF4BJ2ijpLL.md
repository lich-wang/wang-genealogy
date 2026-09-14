---
schema: wang-person/v1
id: p_HJQdCKF1NWQxF4BJ2ijpLL
status: active
merged_into: null
display_name: 王珪
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JE6uoQafR4f9VdTyCoD2A8
        subject_person_id: p_HJQdCKF1NWQxF4BJ2ijpLL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t2NGvWAgxaSvhC76bDEjk2
          claim_id: c_JE6uoQafR4f9VdTyCoD2A8
          source_id: s_7qtDC6A3rHT3TNaBnpurLs
          stance: supports
          locator: CBDB:241084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241084）
          source: &a1
            id: s_7qtDC6A3rHT3TNaBnpurLs
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 241084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241084&o=json
            external_identifier: CBDB:241084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mBKNyeMLj5EZkH4Pn7nXth
        subject_person_id: p_HJQdCKF1NWQxF4BJ2ijpLL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪，明人物。正統十三年進士，籍贯安州，曾任教諭。（中国历代人物传记资料库 CBDB 241084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CTCfBElZHswu1V7r3o92CO
          claim_id: c_mBKNyeMLj5EZkH4Pn7nXth
          source_id: s_7qtDC6A3rHT3TNaBnpurLs
          stance: supports
          locator: CBDB:241084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_W-c_cB7LzTx3bhVwTQiws_
        subject_person_id: p_HJQdCKF1NWQxF4BJ2ijpLL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y20TUeKhEzR94muwmwf6oz
          claim_id: c_W-c_cB7LzTx3bhVwTQiws_
          source_id: s_7qtDC6A3rHT3TNaBnpurLs
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HYHpKaJa17iu8Upo6wdU7W
        status: active
        display_name: 王育
        merged_into_person_id: null
    - claim:
        id: c_6xNbh47lkGj3T4xRgIc27g
        subject_person_id: p_HJQdCKF1NWQxF4BJ2ijpLL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1dZvkuZQM68RGosi7sKQG6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_URNRvPrCQCNRdUriXfdGAR
          claim_id: c_6xNbh47lkGj3T4xRgIc27g
          source_id: s_LKFt_1TXE4GrCPXinbPnM-
          stance: supports
          locator: CBDB：兄弟 王育（208149）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王牧 与 王育 为同胞（CBDB 记「弟」），王育 之父／母即 王牧 之父／母。
          source:
            id: s_LKFt_1TXE4GrCPXinbPnM-
            source_type: api_record
            title: 中国历代人物传记资料库：王牧（CBDB 241088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241088&o=json
            external_identifier: CBDB:241088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1dZvkuZQM68RGosi7sKQG6
        status: active
        display_name: 王牧
        merged_into_person_id: null
    - claim:
        id: c_QqrKydLG5b9wi_DSnDsNZ0
        subject_person_id: p_HJQdCKF1NWQxF4BJ2ijpLL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KVHgBFAQcpdJaxzNb8HXZD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I_-G4FdlDOSRm1oBm1Zk_A
          claim_id: c_QqrKydLG5b9wi_DSnDsNZ0
          source_id: s_AmvPMv3DquA1C6A9LVmYW6
          stance: supports
          locator: CBDB：兄弟 王育（208149）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王孜 与 王育 为同胞（CBDB 记「弟」），王育 之父／母即 王孜 之父／母。
          source:
            id: s_AmvPMv3DquA1C6A9LVmYW6
            source_type: api_record
            title: 中国历代人物传记资料库：王孜（CBDB 241089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241089&o=json
            external_identifier: CBDB:241089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KVHgBFAQcpdJaxzNb8HXZD
        status: active
        display_name: 王孜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | 王珪，明人物。正統十三年進士，籍贯安州，曾任教諭。（中国历代人物传记资料库 CBDB 241084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HYHpKaJa17iu8Upo6wdU7W | 王育 | accepted |
| children | p_1dZvkuZQM68RGosi7sKQG6 | 王牧 | accepted |
| children | p_KVHgBFAQcpdJaxzNb8HXZD | 王孜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 241084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241084&o=json)
- [中国历代人物传记资料库：王牧（CBDB 241088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241088&o=json)
- [中国历代人物传记资料库：王孜（CBDB 241089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241089&o=json)
