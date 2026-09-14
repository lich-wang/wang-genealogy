---
schema: wang-person/v1
id: p_XH3iLdDfjN4Sa3ep2zHA6A
status: active
merged_into: null
display_name: 王釬
cbdb_id: 260527
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pdwm1kBx4jV1GxdEBRT31B
        subject_person_id: p_XH3iLdDfjN4Sa3ep2zHA6A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釬，明人物。成化二十三年進士，籍贯天台。（中国历代人物传记资料库 CBDB 260527）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6MhLfJECOMXZ5f3EuRGnec
          claim_id: c_Pdwm1kBx4jV1GxdEBRT31B
          source_id: s_sHbM4US9mRdo2khoJRM63t
          stance: supports
          locator: CBDB:260527
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sHbM4US9mRdo2khoJRM63t
            source_type: api_record
            title: 中国历代人物传记资料库：王釬（CBDB 260527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260527&o=json
            external_identifier: CBDB:260527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wjh2QXyQ8DE3ULSLCcLHF5
        subject_person_id: p_XH3iLdDfjN4Sa3ep2zHA6A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oMtXjUgfN5s6xR1JFSAJLK
          claim_id: c_Wjh2QXyQ8DE3ULSLCcLHF5
          source_id: s_sHbM4US9mRdo2khoJRM63t
          stance: supports
          locator: CBDB:260527
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2YB2mMBNjIQgaEA8dmrHF7
        subject_person_id: p_rFTZAq6ze35imaHPVmA96A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XH3iLdDfjN4Sa3ep2zHA6A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bNEQSSPopbe2AuiLEtfYst
          claim_id: c_2YB2mMBNjIQgaEA8dmrHF7
          source_id: s_D4h4a8Y1-BsZWRL77SLnNo
          stance: supports
          locator: CBDB：兄弟 王鐶（200621）之父／母 王公權
          quotation: null
          interpretation_note: 由兄弟关系推断：王釬 与 王鐶 为同胞（CBDB 记「兄」），王鐶 之父／母即 王釬 之父／母。
          source:
            id: s_D4h4a8Y1-BsZWRL77SLnNo
            source_type: api_record
            title: 中国历代人物传记资料库：王釬（CBDB 260527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260527&o=json
            external_identifier: CBDB:260527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rFTZAq6ze35imaHPVmA96A
        status: active
        display_name: 王公權
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PUv-hYDYzQnLHYpIq45NGZ
        subject_person_id: p_XH3iLdDfjN4Sa3ep2zHA6A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uxPkZUqsvSYKoUuB2wuXGH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x3Ys5tKq_98XmyEH1POKf4
          claim_id: c_PUv-hYDYzQnLHYpIq45NGZ
          source_id: s_D4h4a8Y1-BsZWRL77SLnNo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200621 王鐶）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_D4h4a8Y1-BsZWRL77SLnNo
            source_type: api_record
            title: 中国历代人物传记资料库：王釬（CBDB 260527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260527&o=json
            external_identifier: CBDB:260527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uxPkZUqsvSYKoUuB2wuXGH
        status: active
        display_name: 王鐶
        merged_into_person_id: null
---

# 王釬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王釬，明人物。成化二十三年進士，籍贯天台。（中国历代人物传记资料库 CBDB 260527） | accepted |
| name.primary | 王釬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rFTZAq6ze35imaHPVmA96A | 王公權 | accepted |
| other | p_uxPkZUqsvSYKoUuB2wuXGH | 王鐶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王釬（CBDB 260527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260527&o=json)
