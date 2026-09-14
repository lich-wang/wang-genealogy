---
schema: wang-person/v1
id: p_LdrAUpv6xQEub6YGNkASRW
status: active
merged_into: null
display_name: 王良史
cbdb_id: 309430
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xEeE84zXUV6FbbYif929fa
        subject_person_id: p_LdrAUpv6xQEub6YGNkASRW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良史，明人物。嘉靖二十六年進士，籍贯寧津。（中国历代人物传记资料库 CBDB 309430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xWKzs04kpnVxviTEYyoal4
          claim_id: c_xEeE84zXUV6FbbYif929fa
          source_id: s_14sGszXJJ1cBM1pW3BAezo
          stance: supports
          locator: CBDB:309430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_14sGszXJJ1cBM1pW3BAezo
            source_type: api_record
            title: 中国历代人物传记资料库：王良史（CBDB 309430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309430&o=json
            external_identifier: CBDB:309430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_m84mBift37wBJYCW98v8ES
        subject_person_id: p_LdrAUpv6xQEub6YGNkASRW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良史
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gPh1AVaVJtpXk2vHTmmRJQ
          claim_id: c_m84mBift37wBJYCW98v8ES
          source_id: s_14sGszXJJ1cBM1pW3BAezo
          stance: supports
          locator: CBDB:309430
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QBtCafGYFobigEVXrL2Uw8
        subject_person_id: p_BzRS9JFfmbPcLsHDaoLQcY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LdrAUpv6xQEub6YGNkASRW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yc-_P958ZFpPTEYQCWs9QV
          claim_id: c_QBtCafGYFobigEVXrL2Uw8
          source_id: s_TBfe6oZ23zxzJCoExFnneJ
          stance: supports
          locator: CBDB：兄弟 王良貴（126530）之父／母 王玶
          quotation: null
          interpretation_note: 由兄弟关系推断：王良史 与 王良貴 为同胞（CBDB 记「兄」），王良貴 之父／母即 王良史 之父／母。
          source:
            id: s_TBfe6oZ23zxzJCoExFnneJ
            source_type: api_record
            title: 中国历代人物传记资料库：王良史（CBDB 309430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309430&o=json
            external_identifier: CBDB:309430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BzRS9JFfmbPcLsHDaoLQcY
        status: active
        display_name: 王玶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rXVlbyNjF_96FSuXQ0K9j9
        subject_person_id: p_2i8i45vd3ioWAFSmwmfK42
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LdrAUpv6xQEub6YGNkASRW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kBwWI3_nyJYvFRb0BvVr-y
          claim_id: c_rXVlbyNjF_96FSuXQ0K9j9
          source_id: s_TBfe6oZ23zxzJCoExFnneJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126530 王良貴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TBfe6oZ23zxzJCoExFnneJ
            source_type: api_record
            title: 中国历代人物传记资料库：王良史（CBDB 309430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309430&o=json
            external_identifier: CBDB:309430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2i8i45vd3ioWAFSmwmfK42
        status: active
        display_name: 王良貴
        merged_into_person_id: null
---

# 王良史

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良史，明人物。嘉靖二十六年進士，籍贯寧津。（中国历代人物传记资料库 CBDB 309430） | accepted |
| name.primary | 王良史 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BzRS9JFfmbPcLsHDaoLQcY | 王玶 | accepted |
| other | p_2i8i45vd3ioWAFSmwmfK42 | 王良貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良史（CBDB 309430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309430&o=json)
