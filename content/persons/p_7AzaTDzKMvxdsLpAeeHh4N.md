---
schema: wang-person/v1
id: p_7AzaTDzKMvxdsLpAeeHh4N
status: active
merged_into: null
display_name: 王用子
cbdb_id: 320676
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BGAwWbKKiDfUo22UHF75XJ
        subject_person_id: p_7AzaTDzKMvxdsLpAeeHh4N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用子，明人物。嘉靖三十五年進士，籍贯大同。（中国历代人物传记资料库 CBDB 320676）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FMOPwF4Lg1ec4bXDxmu0Cx
          claim_id: c_BGAwWbKKiDfUo22UHF75XJ
          source_id: s_MueuUb7um9jRuYWaNSBLE4
          stance: supports
          locator: CBDB:320676
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MueuUb7um9jRuYWaNSBLE4
            source_type: api_record
            title: 中国历代人物传记资料库：王用子（CBDB 320676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320676&o=json
            external_identifier: CBDB:320676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ehHfTWBsGNswKxjqohnbRg
        subject_person_id: p_7AzaTDzKMvxdsLpAeeHh4N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用子
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KRzFNRndGqdjv9qdhJzH27
          claim_id: c_ehHfTWBsGNswKxjqohnbRg
          source_id: s_MueuUb7um9jRuYWaNSBLE4
          stance: supports
          locator: CBDB:320676
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rUmlxWiYRr-eElCk-GE894
        subject_person_id: p_7vykPE7zRJ5ERMERNaXtrP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7AzaTDzKMvxdsLpAeeHh4N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_21bMjim-Hvy73XaufTHv2N
          claim_id: c_rUmlxWiYRr-eElCk-GE894
          source_id: s_O1gpWt-7o5zqmfcWDTnJns
          stance: supports
          locator: CBDB：兄弟 王用中（204549）之父／母 王尚德
          quotation: null
          interpretation_note: 由兄弟关系推断：王用子 与 王用中 为同胞（CBDB 记「兄」），王用中 之父／母即 王用子 之父／母。
          source:
            id: s_O1gpWt-7o5zqmfcWDTnJns
            source_type: api_record
            title: 中国历代人物传记资料库：王用子（CBDB 320676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320676&o=json
            external_identifier: CBDB:320676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7vykPE7zRJ5ERMERNaXtrP
        status: active
        display_name: 王尚德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LzTSqfjVlJvnsE84roqbzi
        subject_person_id: p_7AzaTDzKMvxdsLpAeeHh4N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kJMVeQvjhmn2GKoEDEQfZk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dCkfa0-cUhb1pB8DnhXrkh
          claim_id: c_LzTSqfjVlJvnsE84roqbzi
          source_id: s_O1gpWt-7o5zqmfcWDTnJns
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204549 王用中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_O1gpWt-7o5zqmfcWDTnJns
            source_type: api_record
            title: 中国历代人物传记资料库：王用子（CBDB 320676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320676&o=json
            external_identifier: CBDB:320676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kJMVeQvjhmn2GKoEDEQfZk
        status: active
        display_name: 王用中
        merged_into_person_id: null
---

# 王用子

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用子，明人物。嘉靖三十五年進士，籍贯大同。（中国历代人物传记资料库 CBDB 320676） | accepted |
| name.primary | 王用子 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7vykPE7zRJ5ERMERNaXtrP | 王尚德 | accepted |
| other | p_kJMVeQvjhmn2GKoEDEQfZk | 王用中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用子（CBDB 320676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320676&o=json)
