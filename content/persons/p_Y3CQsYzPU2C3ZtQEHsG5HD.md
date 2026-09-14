---
schema: wang-person/v1
id: p_Y3CQsYzPU2C3ZtQEHsG5HD
status: active
merged_into: null
display_name: 王正方
cbdb_id: 313127
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SUYTf7U1TF5xP6T2x3MDBm
        subject_person_id: p_Y3CQsYzPU2C3ZtQEHsG5HD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正方，明人物。嘉靖二十九年進士，籍贯宜陽。（中国历代人物传记资料库 CBDB 313127）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jGtQapkeSVynQN_1LKILFF
          claim_id: c_SUYTf7U1TF5xP6T2x3MDBm
          source_id: s_tqNUrrvMuTYB8HD3s48Exv
          stance: supports
          locator: CBDB:313127
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tqNUrrvMuTYB8HD3s48Exv
            source_type: api_record
            title: 中国历代人物传记资料库：王正方（CBDB 313127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313127&o=json
            external_identifier: CBDB:313127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VyMLrxuhBnZ4Rbs4ff9uxU
        subject_person_id: p_Y3CQsYzPU2C3ZtQEHsG5HD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_thxVhgdEkD7yxrnqJMfynt
          claim_id: c_VyMLrxuhBnZ4Rbs4ff9uxU
          source_id: s_tqNUrrvMuTYB8HD3s48Exv
          stance: supports
          locator: CBDB:313127
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Nt9Zz5k35THv2nXXRO8voA
        subject_person_id: p_Uu3urkECTiPumEtH6sBydY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Y3CQsYzPU2C3ZtQEHsG5HD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U3tp-TE6pLhwqNQbAMmok_
          claim_id: c_Nt9Zz5k35THv2nXXRO8voA
          source_id: s_xfgAyxQFj9CEgx3HZOcyQA
          stance: supports
          locator: CBDB：兄弟 王正国（68263）之父／母 王邦瑞
          quotation: null
          interpretation_note: 由兄弟关系推断：王正方 与 王正国 为同胞（CBDB 记「兄」），王正国 之父／母即 王正方 之父／母。
          source:
            id: s_xfgAyxQFj9CEgx3HZOcyQA
            source_type: api_record
            title: 中国历代人物传记资料库：王正方（CBDB 313127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313127&o=json
            external_identifier: CBDB:313127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Uu3urkECTiPumEtH6sBydY
        status: active
        display_name: 王邦瑞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NS8hwNF8QXeX7PW5yPJ74d
        subject_person_id: p_KbE3VYwBQk3rLuTGnVB2me
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y3CQsYzPU2C3ZtQEHsG5HD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vbZgMxMXwr6PTRHWyotJbw
          claim_id: c_NS8hwNF8QXeX7PW5yPJ74d
          source_id: s_xfgAyxQFj9CEgx3HZOcyQA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68263 王正國）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xfgAyxQFj9CEgx3HZOcyQA
            source_type: api_record
            title: 中国历代人物传记资料库：王正方（CBDB 313127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313127&o=json
            external_identifier: CBDB:313127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KbE3VYwBQk3rLuTGnVB2me
        status: active
        display_name: 王正国
        merged_into_person_id: null
---

# 王正方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正方，明人物。嘉靖二十九年進士，籍贯宜陽。（中国历代人物传记资料库 CBDB 313127） | accepted |
| name.primary | 王正方 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Uu3urkECTiPumEtH6sBydY | 王邦瑞 | accepted |
| other | p_KbE3VYwBQk3rLuTGnVB2me | 王正国 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正方（CBDB 313127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313127&o=json)
