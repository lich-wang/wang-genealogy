---
schema: wang-person/v1
id: p_KyBTH9FR7ui82xq3PNJs3r
status: active
merged_into: null
display_name: 王椆
cbdb_id: 283702
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wpXQ1t8rGFL1Hu2kPLcW3n
        subject_person_id: p_KyBTH9FR7ui82xq3PNJs3r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椆，明人物。正德十六年進士，籍贯會稽。（中国历代人物传记资料库 CBDB 283702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_lr43E4CGM8cQCi-9GSAbRk
          claim_id: c_wpXQ1t8rGFL1Hu2kPLcW3n
          source_id: s_PVvW1RCorgKmPmwMhz3caS
          stance: supports
          locator: CBDB:283702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PVvW1RCorgKmPmwMhz3caS
            source_type: api_record
            title: 中国历代人物传记资料库：王椆（CBDB 283702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283702&o=json
            external_identifier: CBDB:283702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qC1JB8A5sV7jkwnLyuxCpz
        subject_person_id: p_KyBTH9FR7ui82xq3PNJs3r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2z6hvyFMSKfEHtxXx41Js7
          claim_id: c_qC1JB8A5sV7jkwnLyuxCpz
          source_id: s_PVvW1RCorgKmPmwMhz3caS
          stance: supports
          locator: CBDB:283702
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J-2WmxfDJYWtozEWstCCKx
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KyBTH9FR7ui82xq3PNJs3r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JFCp6fhETVv5_rwRC_wQ2K
          claim_id: c_J-2WmxfDJYWtozEWstCCKx
          source_id: s_QHMIui8akIXQwjEP_l6nMT
          stance: supports
          locator: CBDB：兄弟 王楊（202111）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王椆 与 王楊 为同胞（CBDB 记「兄」），王楊 之父／母即 王椆 之父／母。
          source:
            id: s_QHMIui8akIXQwjEP_l6nMT
            source_type: api_record
            title: 中国历代人物传记资料库：王椆（CBDB 283702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283702&o=json
            external_identifier: CBDB:283702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dNbcibvajSXBYgSvME8CE6
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GoKxYkmHGE2mZ7idWB58Da
        subject_person_id: p_KyBTH9FR7ui82xq3PNJs3r
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dnQAALnw8aQuyfa9ez5gs6
          claim_id: c_GoKxYkmHGE2mZ7idWB58Da
          source_id: s_QHMIui8akIXQwjEP_l6nMT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202111 王楊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QHMIui8akIXQwjEP_l6nMT
            source_type: api_record
            title: 中国历代人物传记资料库：王椆（CBDB 283702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283702&o=json
            external_identifier: CBDB:283702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VzREVG9zqkmWPrWDHfGpmG
        status: active
        display_name: 王楊
        merged_into_person_id: null
    - claim:
        id: c_PfNQNNWsHIk5S7zAXKY44J
        subject_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KyBTH9FR7ui82xq3PNJs3r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oedLQgJgskq7OgXxLfRHlL
          claim_id: c_PfNQNNWsHIk5S7zAXKY44J
          source_id: s_QHMIui8akIXQwjEP_l6nMT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203063 王楠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QHMIui8akIXQwjEP_l6nMT
            source_type: api_record
            title: 中国历代人物传记资料库：王椆（CBDB 283702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283702&o=json
            external_identifier: CBDB:283702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GDYJiKmBDGx8GATz5Lz7eZ
        status: active
        display_name: 王楠
        merged_into_person_id: null
---

# 王椆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王椆，明人物。正德十六年進士，籍贯會稽。（中国历代人物传记资料库 CBDB 283702） | accepted |
| name.primary | 王椆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dNbcibvajSXBYgSvME8CE6 | 王玉 | accepted |
| other | p_VzREVG9zqkmWPrWDHfGpmG | 王楊 | accepted |
| other | p_GDYJiKmBDGx8GATz5Lz7eZ | 王楠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椆（CBDB 283702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283702&o=json)
