---
schema: wang-person/v1
id: p_F3pzTKipyV5P634aLLbz89
status: active
merged_into: null
display_name: 王堵
cbdb_id: 225731
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9oCWm2KXeeVVevbqv71xcS
        subject_person_id: p_F3pzTKipyV5P634aLLbz89
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堵，明人物。萬曆十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 225731）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7u4_Xo79rS2d9Qgw7n8ePM
          claim_id: c_9oCWm2KXeeVVevbqv71xcS
          source_id: s_8knuLN7AbkeK2iFVeQw58P
          stance: supports
          locator: CBDB:225731
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8knuLN7AbkeK2iFVeQw58P
            source_type: api_record
            title: 中国历代人物传记资料库：王堵（CBDB 225731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225731&o=json
            external_identifier: CBDB:225731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fvgRDsBoWLCBm3rJziKQrg
        subject_person_id: p_F3pzTKipyV5P634aLLbz89
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AUZrkhKNPuykjDJs4e4JzV
          claim_id: c_fvgRDsBoWLCBm3rJziKQrg
          source_id: s_8knuLN7AbkeK2iFVeQw58P
          stance: supports
          locator: CBDB:225731
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qdcDwxnc2SeUO3xqeWlM-A
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F3pzTKipyV5P634aLLbz89
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z3LICn5-PWAoX39e9VxzPs
          claim_id: c_qdcDwxnc2SeUO3xqeWlM-A
          source_id: s_bnvoemgYukXuM7a11sljhZ
          stance: supports
          locator: CBDB：兄弟 王堦（206978）之父／母 王宗靖
          quotation: null
          interpretation_note: 由兄弟关系推断：王堵 与 王堦 为同胞（CBDB 记「兄」），王堦 之父／母即 王堵 之父／母。
          source:
            id: s_bnvoemgYukXuM7a11sljhZ
            source_type: api_record
            title: 中国历代人物传记资料库：王堵（CBDB 225731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225731&o=json
            external_identifier: CBDB:225731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7mmFEyZWywonqa5VSZtBkH
        status: active
        display_name: 王宗靖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0_dqHF7HS4bga1WTKde-7h
        subject_person_id: p_F3pzTKipyV5P634aLLbz89
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A79aLQt8b02P9P_At9dWQo
          claim_id: c_0_dqHF7HS4bga1WTKde-7h
          source_id: s_bnvoemgYukXuM7a11sljhZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206978 王堦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bnvoemgYukXuM7a11sljhZ
            source_type: api_record
            title: 中国历代人物传记资料库：王堵（CBDB 225731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225731&o=json
            external_identifier: CBDB:225731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oKtgLK3Hc3EvgppJQNGw5k
        status: active
        display_name: 王堦
        merged_into_person_id: null
---

# 王堵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堵，明人物。萬曆十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 225731） | accepted |
| name.primary | 王堵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7mmFEyZWywonqa5VSZtBkH | 王宗靖 | accepted |
| other | p_oKtgLK3Hc3EvgppJQNGw5k | 王堦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堵（CBDB 225731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225731&o=json)
