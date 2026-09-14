---
schema: wang-person/v1
id: p_aoocqwv9rrDDvPqTtq5ozW
status: active
merged_into: null
display_name: 王弁
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8DBvroReMuot8F4QfuF27L
        subject_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pWJGGpUEQacP6P6HT9wDcd
          claim_id: c_8DBvroReMuot8F4QfuF27L
          source_id: s_44ZRSw7JUzZCzrKFGDptvb
          stance: supports
          locator: CBDB:199608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199608）
          source: &a1
            id: s_44ZRSw7JUzZCzrKFGDptvb
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 199608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199608&o=json
            external_identifier: CBDB:199608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dmQBo3eC4muRPxsXLFnU2S
        subject_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1440年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DNCYo8RML7FynH11bdMrrN
          claim_id: c_dmQBo3eC4muRPxsXLFnU2S
          source_id: s_44ZRSw7JUzZCzrKFGDptvb
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
        id: c_FU29yKXZQJQFZmZBoPnsGw
        subject_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弁（生于1440年），明人物。明清進士進士，籍贯吉水，入仕進士。（中国历代人物传记资料库 CBDB 199608）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-WvLUE_x-q30C2JJFJmLIZ
          claim_id: c_FU29yKXZQJQFZmZBoPnsGw
          source_id: s_44ZRSw7JUzZCzrKFGDptvb
          stance: supports
          locator: CBDB:199608
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aOPTdJe1WBJi8giMHfMCCi
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tusdwtb3ytyb2RY3bSMNmt
          claim_id: c_aOPTdJe1WBJi8giMHfMCCi
          source_id: s_44ZRSw7JUzZCzrKFGDptvb
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PASiCHQs3ZcH2e9PXEScwH
        status: active
        display_name: 王效
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_R0SDWSa7AKvNfWH9hrClE6
        subject_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3ZBFnXj6nK21XoEDDtCLMn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wj-r0W34SU1G_DECz2uhEm
          claim_id: c_R0SDWSa7AKvNfWH9hrClE6
          source_id: s_1xZDuj4vcm8UuDZ5S8_jid
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1xZDuj4vcm8UuDZ5S8_jid
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王弁妻)（CBDB 247212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247212&o=json
            external_identifier: CBDB:247212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3ZBFnXj6nK21XoEDDtCLMn
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_G4dBwfLPJAh6VE3U0j1Gs4
        subject_person_id: p_1iLNF8d3FFcTQi9EKGEeud
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IxqDHn-3pmM9IGXXRQoB9Z
          claim_id: c_G4dBwfLPJAh6VE3U0j1Gs4
          source_id: s_44ZRSw7JUzZCzrKFGDptvb
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1iLNF8d3FFcTQi9EKGEeud
        status: active
        display_name: 王欽德
        merged_into_person_id: null
    - claim:
        id: c_7_7-6EWG4sDy3D1cwc0oQQ
        subject_person_id: p_QJAsRGog2h7dd3f8oMy7iV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lxGP4KbANG45HTnBWypEqK
          claim_id: c_7_7-6EWG4sDy3D1cwc0oQQ
          source_id: s_44ZRSw7JUzZCzrKFGDptvb
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QJAsRGog2h7dd3f8oMy7iV
        status: active
        display_name: 王孟彝
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_IefGqe6RcaL-cmIq1Vj4pc
        subject_person_id: p_1XAxD14ZFWcp4wGTVz9vV6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OSivANVNEL30RN1NxRn9y6
          claim_id: c_IefGqe6RcaL-cmIq1Vj4pc
          source_id: s_r2b-Dvrpg1n964Lbkw-RS9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r2b-Dvrpg1n964Lbkw-RS9
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 247213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247213&o=json
            external_identifier: CBDB:247213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1XAxD14ZFWcp4wGTVz9vV6
        status: active
        display_name: 王冕
        merged_into_person_id: null
    - claim:
        id: c_CW3Gx3TKwAj0vVEUtpkCdn
        subject_person_id: p_6QRXoU8XkLikTVxrEb5Vjz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6WtGFyVop5ic7OooAHw8sF
          claim_id: c_CW3Gx3TKwAj0vVEUtpkCdn
          source_id: s_iyDo-qpWL-uQpwHoeX76gb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iyDo-qpWL-uQpwHoeX76gb
            source_type: api_record
            title: 中国历代人物传记资料库：王收（CBDB 247215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247215&o=json
            external_identifier: CBDB:247215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6QRXoU8XkLikTVxrEb5Vjz
        status: active
        display_name: 王收
        merged_into_person_id: null
    - claim:
        id: c_yrCHI8zPdhMRbEstsAGrIy
        subject_person_id: p_6sGYC9YM3Ed7K2oVcFK24a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zvz6Gq-y9IxsU7dvKy3D1-
          claim_id: c_yrCHI8zPdhMRbEstsAGrIy
          source_id: s_gDH39AVgR26OPzLkEBudSo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gDH39AVgR26OPzLkEBudSo
            source_type: api_record
            title: 中国历代人物传记资料库：王冔（CBDB 247214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247214&o=json
            external_identifier: CBDB:247214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6sGYC9YM3Ed7K2oVcFK24a
        status: active
        display_name: 王冔
        merged_into_person_id: null
    - claim:
        id: c_cUG8Bhf48IloJ7VEMN2Dqp
        subject_person_id: p_Rcm69CNXPErg3zCYnPGd5T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TIj_GQ2_iHxyzhNSimIw1C
          claim_id: c_cUG8Bhf48IloJ7VEMN2Dqp
          source_id: s_lzduX5tb_3bD8olQywnIJv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lzduX5tb_3bD8olQywnIJv
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 247219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247219&o=json
            external_identifier: CBDB:247219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rcm69CNXPErg3zCYnPGd5T
        status: active
        display_name: 王訓
        merged_into_person_id: null
    - claim:
        id: c_QhZrZ4ogmwZAgUaTl-7H_V
        subject_person_id: p_Wv87baCYCEA9D2PeSaMvSP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nU5UwSw3IanAWApTWXk-rd
          claim_id: c_QhZrZ4ogmwZAgUaTl-7H_V
          source_id: s_m5A55ndnmbCS4nfkZsk4FL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_m5A55ndnmbCS4nfkZsk4FL
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 247216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247216&o=json
            external_identifier: CBDB:247216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wv87baCYCEA9D2PeSaMvSP
        status: active
        display_name: 王謨
        merged_into_person_id: null
    - claim:
        id: c_loQNsTjjkcZNFtqgdPNO2X
        subject_person_id: p_YxaQDdBpQXyHqwFmgoL9bd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZKWSiaTo7s9bZD-1r6V7v
          claim_id: c_loQNsTjjkcZNFtqgdPNO2X
          source_id: s_wO8vRwwyZXsIa8rjUtZRLJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wO8vRwwyZXsIa8rjUtZRLJ
            source_type: api_record
            title: 中国历代人物传记资料库：王證（CBDB 247218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247218&o=json
            external_identifier: CBDB:247218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YxaQDdBpQXyHqwFmgoL9bd
        status: active
        display_name: 王證
        merged_into_person_id: null
    - claim:
        id: c_r2N5Vf6x9SAd41Zq0N3FSa
        subject_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qhKhiu2sY8i5ENaBwRqNpc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VEKKfWIfY0Hg0AIx4b80iH
          claim_id: c_r2N5Vf6x9SAd41Zq0N3FSa
          source_id: s_U_Rslw1KeqpvK7ZITXGU1M
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_U_Rslw1KeqpvK7ZITXGU1M
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 247217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247217&o=json
            external_identifier: CBDB:247217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qhKhiu2sY8i5ENaBwRqNpc
        status: active
        display_name: 王詔
        merged_into_person_id: null
---

# 王弁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弁 | accepted |
| birth.date | 1440年 | accepted |
| bio.summary | 王弁（生于1440年），明人物。明清進士進士，籍贯吉水，入仕進士。（中国历代人物传记资料库 CBDB 199608） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PASiCHQs3ZcH2e9PXEScwH | 王效 | accepted |
| spouses | p_3ZBFnXj6nK21XoEDDtCLMn | 劉氏 | accepted |
| ancestors | p_1iLNF8d3FFcTQi9EKGEeud | 王欽德 | accepted |
| ancestors | p_QJAsRGog2h7dd3f8oMy7iV | 王孟彝 | accepted |
| other | p_1XAxD14ZFWcp4wGTVz9vV6 | 王冕 | accepted |
| other | p_6QRXoU8XkLikTVxrEb5Vjz | 王收 | accepted |
| other | p_6sGYC9YM3Ed7K2oVcFK24a | 王冔 | accepted |
| other | p_Rcm69CNXPErg3zCYnPGd5T | 王訓 | accepted |
| other | p_Wv87baCYCEA9D2PeSaMvSP | 王謨 | accepted |
| other | p_YxaQDdBpQXyHqwFmgoL9bd | 王證 | accepted |
| other | p_qhKhiu2sY8i5ENaBwRqNpc | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王弁妻)（CBDB 247212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247212&o=json)
- [中国历代人物传记资料库：王弁（CBDB 199608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199608&o=json)
- [中国历代人物传记资料库：王冕（CBDB 247213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247213&o=json)
- [中国历代人物传记资料库：王謨（CBDB 247216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247216&o=json)
- [中国历代人物传记资料库：王收（CBDB 247215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247215&o=json)
- [中国历代人物传记资料库：王冔（CBDB 247214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247214&o=json)
- [中国历代人物传记资料库：王訓（CBDB 247219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247219&o=json)
- [中国历代人物传记资料库：王詔（CBDB 247217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247217&o=json)
- [中国历代人物传记资料库：王證（CBDB 247218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247218&o=json)
