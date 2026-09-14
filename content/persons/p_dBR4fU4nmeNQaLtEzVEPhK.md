---
schema: wang-person/v1
id: p_dBR4fU4nmeNQaLtEzVEPhK
status: active
merged_into: null
display_name: 王宗續
cbdb_id: 307072
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2L4y7R9411drCrJ2h5Hd2E
        subject_person_id: p_dBR4fU4nmeNQaLtEzVEPhK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗續，明人物。嘉靖二十三年進士，籍贯沂州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 307072）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Ut3mN_4hy607r1oeXH4TNo
          claim_id: c_2L4y7R9411drCrJ2h5Hd2E
          source_id: s_V4qDts9LzF6BGvDTUm9YkF
          stance: supports
          locator: CBDB:307072
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_V4qDts9LzF6BGvDTUm9YkF
            source_type: api_record
            title: 中国历代人物传记资料库：王宗續（CBDB 307072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307072&o=json
            external_identifier: CBDB:307072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BdcLtzZBv58k2aUJ7S1xMS
        subject_person_id: p_dBR4fU4nmeNQaLtEzVEPhK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗續
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Rj2io1HCL5FESqUfg5NutK
          claim_id: c_BdcLtzZBv58k2aUJ7S1xMS
          source_id: s_V4qDts9LzF6BGvDTUm9YkF
          stance: supports
          locator: CBDB:307072
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Xvn_fRd2_TpltyxvK6N0qX
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dBR4fU4nmeNQaLtEzVEPhK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ym9Sme9ePQjji4zoASPiZ8
          claim_id: c_Xvn_fRd2_TpltyxvK6N0qX
          source_id: s_JOO6tyT5ySWNJxT54AdB7A
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗續 与 王宗性 为同胞（CBDB 记「弟」），王宗性 之父／母即 王宗續 之父／母。
          source:
            id: s_JOO6tyT5ySWNJxT54AdB7A
            source_type: api_record
            title: 中国历代人物传记资料库：王宗續（CBDB 307072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307072&o=json
            external_identifier: CBDB:307072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jgqvj6yRuFScRYzYpcimRZ
        status: active
        display_name: 王士彦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oYT7GA57RKIluihMh8fatH
        subject_person_id: p_ABHWjEscFjoCVEgF2qr4dX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dBR4fU4nmeNQaLtEzVEPhK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E0_0nCuvjKO0IWKSYM9Lih
          claim_id: c_oYT7GA57RKIluihMh8fatH
          source_id: s_JOO6tyT5ySWNJxT54AdB7A
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203595 王宗性）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JOO6tyT5ySWNJxT54AdB7A
            source_type: api_record
            title: 中国历代人物传记资料库：王宗續（CBDB 307072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307072&o=json
            external_identifier: CBDB:307072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ABHWjEscFjoCVEgF2qr4dX
        status: active
        display_name: 王宗性
        merged_into_person_id: null
---

# 王宗續

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗續，明人物。嘉靖二十三年進士，籍贯沂州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 307072） | accepted |
| name.primary | 王宗續 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jgqvj6yRuFScRYzYpcimRZ | 王士彦 | accepted |
| other | p_ABHWjEscFjoCVEgF2qr4dX | 王宗性 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗續（CBDB 307072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307072&o=json)
