---
schema: wang-person/v1
id: p_x81DgwZM1tc16Nf4JHsvsx
status: active
merged_into: null
display_name: 王淑曾
cbdb_id: 331193
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ck6JFf3qbCJSKjDfs69Fi8
        subject_person_id: p_x81DgwZM1tc16Nf4JHsvsx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑曾，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331193）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_l3riq9-CMvoZZDs35IbHPc
          claim_id: c_Ck6JFf3qbCJSKjDfs69Fi8
          source_id: s_DSnCnqrKfrfvoyaU94D9ek
          stance: supports
          locator: CBDB:331193
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DSnCnqrKfrfvoyaU94D9ek
            source_type: api_record
            title: 中国历代人物传记资料库：王淑曾（CBDB 331193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331193&o=json
            external_identifier: CBDB:331193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CSAMKAt3dYkiRtLTzJyNDk
        subject_person_id: p_x81DgwZM1tc16Nf4JHsvsx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_obqCQmBUTVZ9tQNyadBbo2
          claim_id: c_CSAMKAt3dYkiRtLTzJyNDk
          source_id: s_DSnCnqrKfrfvoyaU94D9ek
          stance: supports
          locator: CBDB:331193
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_a4A8_XiLwFEInufeTvtINY
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x81DgwZM1tc16Nf4JHsvsx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yjBiLRElrwpL5lOitU_OYI
          claim_id: c_a4A8_XiLwFEInufeTvtINY
          source_id: s_es_Q_U-eRbaZaQy1rwPTAw
          stance: supports
          locator: CBDB：兄弟 王淑陵（205297）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王淑曾 与 王淑陵 为同胞（CBDB 记「兄」），王淑陵 之父／母即 王淑曾 之父／母。
          source:
            id: s_es_Q_U-eRbaZaQy1rwPTAw
            source_type: api_record
            title: 中国历代人物传记资料库：王淑曾（CBDB 331193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331193&o=json
            external_identifier: CBDB:331193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vQ7CxFfVeDD5gVP5SnofRA
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WGKuFDzZBSEBO62WA9J3Fc
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x81DgwZM1tc16Nf4JHsvsx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ilJV-NrDPkatNmqOL_7KEs
          claim_id: c_WGKuFDzZBSEBO62WA9J3Fc
          source_id: s_es_Q_U-eRbaZaQy1rwPTAw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_es_Q_U-eRbaZaQy1rwPTAw
            source_type: api_record
            title: 中国历代人物传记资料库：王淑曾（CBDB 331193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331193&o=json
            external_identifier: CBDB:331193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tffvt8PaRx7qSEiYdDgfFH
        status: active
        display_name: 王淑陵
        merged_into_person_id: null
---

# 王淑曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑曾，明人物。嘉靖四十四年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 331193） | accepted |
| name.primary | 王淑曾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vQ7CxFfVeDD5gVP5SnofRA | 王言 | accepted |
| other | p_Tffvt8PaRx7qSEiYdDgfFH | 王淑陵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑曾（CBDB 331193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331193&o=json)
