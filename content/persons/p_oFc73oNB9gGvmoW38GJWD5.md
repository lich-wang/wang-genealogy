---
schema: wang-person/v1
id: p_oFc73oNB9gGvmoW38GJWD5
status: active
merged_into: null
display_name: 王大命
cbdb_id: 301957
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8oXKH69AEQgJWFADsMAkh5
        subject_person_id: p_oFc73oNB9gGvmoW38GJWD5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大命，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301957）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KFOoXplkU0em0SxTH0s0dK
          claim_id: c_8oXKH69AEQgJWFADsMAkh5
          source_id: s_kKXiKFR3xVRG8pAV5jyYkG
          stance: supports
          locator: CBDB:301957
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kKXiKFR3xVRG8pAV5jyYkG
            source_type: api_record
            title: 中国历代人物传记资料库：王大命（CBDB 301957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301957&o=json
            external_identifier: CBDB:301957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PJe24iTiC3EvgNhzsMSuQ2
        subject_person_id: p_oFc73oNB9gGvmoW38GJWD5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AjB38Ak6fxP5xE2GRiKrjQ
          claim_id: c_PJe24iTiC3EvgNhzsMSuQ2
          source_id: s_kKXiKFR3xVRG8pAV5jyYkG
          stance: supports
          locator: CBDB:301957
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TIBFQjKXpV0DQ-YEVYEJqs
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oFc73oNB9gGvmoW38GJWD5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCAqnHblgJzSZMst9jfFZz
          claim_id: c_TIBFQjKXpV0DQ-YEVYEJqs
          source_id: s_2mIWY14NVYZG3pXjscuzwZ
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大命 与 王大平 为同胞（CBDB 记「兄」），王大平 之父／母即 王大命 之父／母。
          source:
            id: s_2mIWY14NVYZG3pXjscuzwZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大命（CBDB 301957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301957&o=json
            external_identifier: CBDB:301957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1qFNNFzs4996RToNKGEdK3
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
        id: c_Cd0jnmJiJJqUpCDQV8H2ys
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oFc73oNB9gGvmoW38GJWD5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMKVJP_A87YZkoe7YfUWad
          claim_id: c_Cd0jnmJiJJqUpCDQV8H2ys
          source_id: s_2mIWY14NVYZG3pXjscuzwZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2mIWY14NVYZG3pXjscuzwZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大命（CBDB 301957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301957&o=json
            external_identifier: CBDB:301957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h6Qqwu6rcGKuAFwWWFGZPB
        status: active
        display_name: 王大平
        merged_into_person_id: null
---

# 王大命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大命，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301957） | accepted |
| name.primary | 王大命 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1qFNNFzs4996RToNKGEdK3 | 王玉 | accepted |
| other | p_h6Qqwu6rcGKuAFwWWFGZPB | 王大平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大命（CBDB 301957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301957&o=json)
