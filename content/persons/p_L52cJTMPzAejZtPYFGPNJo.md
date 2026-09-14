---
schema: wang-person/v1
id: p_L52cJTMPzAejZtPYFGPNJo
status: active
merged_into: null
display_name: 王以第
cbdb_id: 331770
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7VhKHWiCaZg1jdxnAK443k
        subject_person_id: p_L52cJTMPzAejZtPYFGPNJo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以第，明人物。嘉靖四十四年進士，籍贯達州。（中国历代人物传记资料库 CBDB 331770）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NciVDfdndMEwqrQ0eFMLdj
          claim_id: c_7VhKHWiCaZg1jdxnAK443k
          source_id: s_7EfSrSoDWvG4gnhrDVAzRV
          stance: supports
          locator: CBDB:331770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7EfSrSoDWvG4gnhrDVAzRV
            source_type: api_record
            title: 中国历代人物传记资料库：王以第（CBDB 331770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331770&o=json
            external_identifier: CBDB:331770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FrCbRYr5x5vrh3sE5463Be
        subject_person_id: p_L52cJTMPzAejZtPYFGPNJo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以第
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hi4kvAN2278hkL9vYLPoBp
          claim_id: c_FrCbRYr5x5vrh3sE5463Be
          source_id: s_7EfSrSoDWvG4gnhrDVAzRV
          stance: supports
          locator: CBDB:331770
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EvrXy5PMQ5wsSjKZOssLUb
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L52cJTMPzAejZtPYFGPNJo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W9xx4lZKjwH7bh1BGT1utc
          claim_id: c_EvrXy5PMQ5wsSjKZOssLUb
          source_id: s_qg_a_74HrTtwVWg1Yvp0SG
          stance: supports
          locator: CBDB：兄弟 王以修（126492）之父／母 王言中
          quotation: null
          interpretation_note: 由兄弟关系推断：王以第 与 王以修 为同胞（CBDB 记「弟」），王以修 之父／母即 王以第 之父／母。
          source:
            id: s_qg_a_74HrTtwVWg1Yvp0SG
            source_type: api_record
            title: 中国历代人物传记资料库：王以第（CBDB 331770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331770&o=json
            external_identifier: CBDB:331770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iHMh7eWrNMdmn3tpjzgVvy
        status: active
        display_name: 王言中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Jo3HMzMyvRgPqmXMpGnkBZ
        subject_person_id: p_5joJqoMyociS4kycpuaY9i
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_L52cJTMPzAejZtPYFGPNJo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AthC95NyOvH2yV-XY3SG4G
          claim_id: c_Jo3HMzMyvRgPqmXMpGnkBZ
          source_id: s_qg_a_74HrTtwVWg1Yvp0SG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126492 王以修）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qg_a_74HrTtwVWg1Yvp0SG
            source_type: api_record
            title: 中国历代人物传记资料库：王以第（CBDB 331770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331770&o=json
            external_identifier: CBDB:331770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5joJqoMyociS4kycpuaY9i
        status: active
        display_name: 王以修
        merged_into_person_id: null
---

# 王以第

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以第，明人物。嘉靖四十四年進士，籍贯達州。（中国历代人物传记资料库 CBDB 331770） | accepted |
| name.primary | 王以第 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iHMh7eWrNMdmn3tpjzgVvy | 王言中 | accepted |
| other | p_5joJqoMyociS4kycpuaY9i | 王以修 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以第（CBDB 331770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331770&o=json)
