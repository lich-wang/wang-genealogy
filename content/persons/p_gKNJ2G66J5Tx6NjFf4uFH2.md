---
schema: wang-person/v1
id: p_gKNJ2G66J5Tx6NjFf4uFH2
status: active
merged_into: null
display_name: 王孟中
cbdb_id: 304152
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fqcpWVyErZjxsvV4wA6SPd
        subject_person_id: p_gKNJ2G66J5Tx6NjFf4uFH2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304152）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vn3BIHAu-Tb4um2Xzp41zE
          claim_id: c_fqcpWVyErZjxsvV4wA6SPd
          source_id: s_oz7gSPeMvKdEig5tRSjPYH
          stance: supports
          locator: CBDB:304152
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oz7gSPeMvKdEig5tRSjPYH
            source_type: api_record
            title: 中国历代人物传记资料库：王孟中（CBDB 304152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304152&o=json
            external_identifier: CBDB:304152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QDxfFCao8jzLVwB9ujv3Q8
        subject_person_id: p_gKNJ2G66J5Tx6NjFf4uFH2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wvEorfK1UX5jaEWsPMFNcr
          claim_id: c_QDxfFCao8jzLVwB9ujv3Q8
          source_id: s_oz7gSPeMvKdEig5tRSjPYH
          stance: supports
          locator: CBDB:304152
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JC9s1cYqpKgwd57NkyXV0A
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gKNJ2G66J5Tx6NjFf4uFH2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W23Yu-FG3U6GcDhTS07iKb
          claim_id: c_JC9s1cYqpKgwd57NkyXV0A
          source_id: s_Jp6r3biKglVXW7JMskC71l
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟中 与 王惟中 为同胞（CBDB 记「弟」），王惟中 之父／母即 王孟中 之父／母。
          source:
            id: s_Jp6r3biKglVXW7JMskC71l
            source_type: api_record
            title: 中国历代人物传记资料库：王孟中（CBDB 304152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304152&o=json
            external_identifier: CBDB:304152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EL1xAzh69eBckvCoFLRC2M
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RTBkM_PU135QsiPuDlzGfo
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gKNJ2G66J5Tx6NjFf4uFH2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZvbkbRud8SP97uShE8_z4k
          claim_id: c_RTBkM_PU135QsiPuDlzGfo
          source_id: s_Jp6r3biKglVXW7JMskC71l
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Jp6r3biKglVXW7JMskC71l
            source_type: api_record
            title: 中国历代人物传记资料库：王孟中（CBDB 304152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304152&o=json
            external_identifier: CBDB:304152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V5Z6bC9P1YiqepVeP78NQA
        status: active
        display_name: 王惟中
        merged_into_person_id: null
---

# 王孟中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304152） | accepted |
| name.primary | 王孟中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EL1xAzh69eBckvCoFLRC2M | 王紀 | accepted |
| other | p_V5Z6bC9P1YiqepVeP78NQA | 王惟中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟中（CBDB 304152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304152&o=json)
