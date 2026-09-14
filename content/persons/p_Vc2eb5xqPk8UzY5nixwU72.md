---
schema: wang-person/v1
id: p_Vc2eb5xqPk8UzY5nixwU72
status: active
merged_into: null
display_name: 王好學
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V4mzfcAYH7w3QbdD9cm49x
        subject_person_id: p_Vc2eb5xqPk8UzY5nixwU72
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dTLSqXVqXG5aFVVotMQbZ4
          claim_id: c_V4mzfcAYH7w3QbdD9cm49x
          source_id: s_G5r7xW9gadmyT2GP3bNUAs
          stance: supports
          locator: CBDB:314780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314780）
          source: &a1
            id: s_G5r7xW9gadmyT2GP3bNUAs
            source_type: api_record
            title: 中国历代人物传记资料库：王好學（CBDB 314780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314780&o=json
            external_identifier: CBDB:314780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1BFeFWTkdn1LNovz26D6GZ
        subject_person_id: p_Vc2eb5xqPk8UzY5nixwU72
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好學，明人物。嘉靖二十九年進士，籍贯樂亭，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 314780）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nqdnagAVomA5w_ELgp_Ta1
          claim_id: c_1BFeFWTkdn1LNovz26D6GZ
          source_id: s_G5r7xW9gadmyT2GP3bNUAs
          stance: supports
          locator: CBDB:314780
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f23QLkO4l-SZcmBwGnoFak
        subject_person_id: p_EYN9zgKtLzMkS4hMCxe1K9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Vc2eb5xqPk8UzY5nixwU72
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5xePt-Keu4o3BZj63_jJBy
          claim_id: c_f23QLkO4l-SZcmBwGnoFak
          source_id: s_5oicEE8wXqNfk76Az3AtPY
          stance: supports
          locator: CBDB：兄弟 王好問（126519）之父／母 王臣
          quotation: null
          interpretation_note: 由兄弟关系推断：王好學 与 王好問 为同胞（CBDB 记「弟」），王好問 之父／母即 王好學 之父／母。
          source:
            id: s_5oicEE8wXqNfk76Az3AtPY
            source_type: api_record
            title: 中国历代人物传记资料库：王好學（CBDB 314780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314780&o=json
            external_identifier: CBDB:314780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EYN9zgKtLzMkS4hMCxe1K9
        status: active
        display_name: 王臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XhmesRtB0T9QSrT0ufl4rL
        subject_person_id: p_9qD8oY8HFNMMPkFU7baFfu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Vc2eb5xqPk8UzY5nixwU72
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dSmlB_cQN3_AXg9RVyeXc8
          claim_id: c_XhmesRtB0T9QSrT0ufl4rL
          source_id: s_5oicEE8wXqNfk76Az3AtPY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126519 王好問）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5oicEE8wXqNfk76Az3AtPY
            source_type: api_record
            title: 中国历代人物传记资料库：王好學（CBDB 314780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314780&o=json
            external_identifier: CBDB:314780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9qD8oY8HFNMMPkFU7baFfu
        status: active
        display_name: 王好問
        merged_into_person_id: null
---

# 王好學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王好學 | accepted |
| bio.summary | 王好學，明人物。嘉靖二十九年進士，籍贯樂亭，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 314780） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EYN9zgKtLzMkS4hMCxe1K9 | 王臣 | accepted |
| other | p_9qD8oY8HFNMMPkFU7baFfu | 王好問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王好學（CBDB 314780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314780&o=json)
