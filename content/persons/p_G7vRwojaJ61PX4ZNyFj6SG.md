---
schema: wang-person/v1
id: p_G7vRwojaJ61PX4ZNyFj6SG
status: active
merged_into: null
display_name: 王正民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T8Vv8cC4PxLzo1maCQw7Hr
        subject_person_id: p_G7vRwojaJ61PX4ZNyFj6SG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7QtZTPBpB3QBmyUjRVd43R
          claim_id: c_T8Vv8cC4PxLzo1maCQw7Hr
          source_id: s_giuudoJ4AdCqxL1yjZtjYt
          stance: supports
          locator: CBDB:336589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336589）
          source: &a1
            id: s_giuudoJ4AdCqxL1yjZtjYt
            source_type: api_record
            title: 中国历代人物传记资料库：王正民（CBDB 336589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336589&o=json
            external_identifier: CBDB:336589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CTf96kdiKEA5aiQFW8dVCN
        subject_person_id: p_G7vRwojaJ61PX4ZNyFj6SG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336589）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-AS2-iLXCNQBVde0IbCYk9
          claim_id: c_CTf96kdiKEA5aiQFW8dVCN
          source_id: s_giuudoJ4AdCqxL1yjZtjYt
          stance: supports
          locator: CBDB:336589
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0cFlbZvwK1jh_HZzdGghyB
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G7vRwojaJ61PX4ZNyFj6SG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tf2MxCGm63qKTDVsg5yk5m
          claim_id: c_0cFlbZvwK1jh_HZzdGghyB
          source_id: s_Q_-memrdUcrlEGUYiuvc6m
          stance: supports
          locator: CBDB：兄弟 王恩民（205656）之父／母 王世學
          quotation: null
          interpretation_note: 由兄弟关系推断：王正民 与 王恩民 为同胞（CBDB 记「兄」），王恩民 之父／母即 王正民 之父／母。
          source:
            id: s_Q_-memrdUcrlEGUYiuvc6m
            source_type: api_record
            title: 中国历代人物传记资料库：王正民（CBDB 336589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336589&o=json
            external_identifier: CBDB:336589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rzdGCJdbAnivH2NuEMbZHX
        status: active
        display_name: 王世學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JxsneOmepd13LoHUB9xaYJ
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_G7vRwojaJ61PX4ZNyFj6SG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sVqikXoxVsAvB2fNtVbFmM
          claim_id: c_JxsneOmepd13LoHUB9xaYJ
          source_id: s_Q_-memrdUcrlEGUYiuvc6m
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Q_-memrdUcrlEGUYiuvc6m
            source_type: api_record
            title: 中国历代人物传记资料库：王正民（CBDB 336589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336589&o=json
            external_identifier: CBDB:336589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3iyxEBFwgRpJCsXBwB3FWC
        status: active
        display_name: 王恩民
        merged_into_person_id: null
---

# 王正民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正民 | accepted |
| bio.summary | 王正民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rzdGCJdbAnivH2NuEMbZHX | 王世學 | accepted |
| other | p_3iyxEBFwgRpJCsXBwB3FWC | 王恩民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正民（CBDB 336589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336589&o=json)
