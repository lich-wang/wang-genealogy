---
schema: wang-person/v1
id: p_yqzECoS43GzFGAMb7TPXrs
status: active
merged_into: null
display_name: 王用臣
cbdb_id: 284143
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ta61SwYiUcV5BX9GfEM5qs
        subject_person_id: p_yqzECoS43GzFGAMb7TPXrs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用臣，明人物。正德十六年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 284143）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GSnqPrt6apWqGc8qyjRcOr
          claim_id: c_ta61SwYiUcV5BX9GfEM5qs
          source_id: s_gCjiED7yfSvSUTrF8LriPA
          stance: supports
          locator: CBDB:284143
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gCjiED7yfSvSUTrF8LriPA
            source_type: api_record
            title: 中国历代人物传记资料库：王用臣（CBDB 284143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284143&o=json
            external_identifier: CBDB:284143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i9zgXvNorrpQ6NfZruFcEA
        subject_person_id: p_yqzECoS43GzFGAMb7TPXrs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GyLkzWMSsnXQLPKHvMECMY
          claim_id: c_i9zgXvNorrpQ6NfZruFcEA
          source_id: s_gCjiED7yfSvSUTrF8LriPA
          stance: supports
          locator: CBDB:284143
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LmaJImyFH0vWkG-_DYquXL
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yqzECoS43GzFGAMb7TPXrs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mMTeH19KV7vOJkO8H8eDcK
          claim_id: c_LmaJImyFH0vWkG-_DYquXL
          source_id: s_7E0M6jBgqq_oFIxKcwAc32
          stance: supports
          locator: CBDB：兄弟 王用賓（202137）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王用臣 与 王用賓 为同胞（CBDB 记「弟」），王用賓 之父／母即 王用臣 之父／母。
          source:
            id: s_7E0M6jBgqq_oFIxKcwAc32
            source_type: api_record
            title: 中国历代人物传记资料库：王用臣（CBDB 284143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284143&o=json
            external_identifier: CBDB:284143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NuNTQZExjKcTBss2PH1NRS
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hft6SG7W-boaHL0BukSB68
        subject_person_id: p_6BcNKRe82htPqYxnsGXoQy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yqzECoS43GzFGAMb7TPXrs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bkkCEO9YEXFniZIyaZRpwS
          claim_id: c_hft6SG7W-boaHL0BukSB68
          source_id: s_7E0M6jBgqq_oFIxKcwAc32
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202137 王用賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7E0M6jBgqq_oFIxKcwAc32
            source_type: api_record
            title: 中国历代人物传记资料库：王用臣（CBDB 284143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284143&o=json
            external_identifier: CBDB:284143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6BcNKRe82htPqYxnsGXoQy
        status: active
        display_name: 王用賓
        merged_into_person_id: null
---

# 王用臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用臣，明人物。正德十六年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 284143） | accepted |
| name.primary | 王用臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NuNTQZExjKcTBss2PH1NRS | 王懋 | accepted |
| other | p_6BcNKRe82htPqYxnsGXoQy | 王用賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用臣（CBDB 284143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284143&o=json)
