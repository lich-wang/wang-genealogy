---
schema: wang-person/v1
id: p_4RJHMKDkRKmqcKp8MAKp3U
status: active
merged_into: null
display_name: 王學誥
cbdb_id: 316262
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UtTJjCnoYU6FmBY4FEAr2b
        subject_person_id: p_4RJHMKDkRKmqcKp8MAKp3U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學誥，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316262）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7NXiiw1S_9hOZhc2V6JCYa
          claim_id: c_UtTJjCnoYU6FmBY4FEAr2b
          source_id: s_J6R9u6M8orgL4jU3A7HLPi
          stance: supports
          locator: CBDB:316262
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_J6R9u6M8orgL4jU3A7HLPi
            source_type: api_record
            title: 中国历代人物传记资料库：王學誥（CBDB 316262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316262&o=json
            external_identifier: CBDB:316262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Agm2LQJzE19yeEx3N4By6M
        subject_person_id: p_4RJHMKDkRKmqcKp8MAKp3U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AaAQ25t26mxhamxBg6N94R
          claim_id: c_Agm2LQJzE19yeEx3N4By6M
          source_id: s_J6R9u6M8orgL4jU3A7HLPi
          stance: supports
          locator: CBDB:316262
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mu5V-x2cQzkFVI18Xh9gbv
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4RJHMKDkRKmqcKp8MAKp3U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HTzisSBd8fwB_wx9ZtAFU
          claim_id: c_mu5V-x2cQzkFVI18Xh9gbv
          source_id: s_J4UG3rrf-Sy8E8cU8yfSyp
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學誥 与 王學謨 为同胞（CBDB 记「弟」），王學謨 之父／母即 王學誥 之父／母。
          source:
            id: s_J4UG3rrf-Sy8E8cU8yfSyp
            source_type: api_record
            title: 中国历代人物传记资料库：王學誥（CBDB 316262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316262&o=json
            external_identifier: CBDB:316262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CTanKyckA8Emf57Dk1Jm7o
        status: active
        display_name: 王世卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_T5hvx_-AthdBAYRn9ly9Q8
        subject_person_id: p_4RJHMKDkRKmqcKp8MAKp3U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TIHEqA5jIr5hBtend0Srdd
          claim_id: c_T5hvx_-AthdBAYRn9ly9Q8
          source_id: s_J4UG3rrf-Sy8E8cU8yfSyp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_J4UG3rrf-Sy8E8cU8yfSyp
            source_type: api_record
            title: 中国历代人物传记资料库：王學誥（CBDB 316262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316262&o=json
            external_identifier: CBDB:316262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nxMTBwovWR92XT8tAZTvLW
        status: active
        display_name: 王學謨
        merged_into_person_id: null
---

# 王學誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學誥，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316262） | accepted |
| name.primary | 王學誥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CTanKyckA8Emf57Dk1Jm7o | 王世卿 | accepted |
| other | p_nxMTBwovWR92XT8tAZTvLW | 王學謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學誥（CBDB 316262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316262&o=json)
