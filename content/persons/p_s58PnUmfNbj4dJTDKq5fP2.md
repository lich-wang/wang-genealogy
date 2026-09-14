---
schema: wang-person/v1
id: p_s58PnUmfNbj4dJTDKq5fP2
status: active
merged_into: null
display_name: 王同議
cbdb_id: 326623
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ezbDJXTfrogMT3zAAnaxeA
        subject_person_id: p_s58PnUmfNbj4dJTDKq5fP2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同議，明人物。嘉靖四十一年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 326623）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8Lmpxp-z5KwaBcQAUlZdh1
          claim_id: c_ezbDJXTfrogMT3zAAnaxeA
          source_id: s_vn7TWMsAMhLE2SuFtvpZT5
          stance: supports
          locator: CBDB:326623
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vn7TWMsAMhLE2SuFtvpZT5
            source_type: api_record
            title: 中国历代人物传记资料库：王同議（CBDB 326623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326623&o=json
            external_identifier: CBDB:326623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3nZ7yejBys7NPMusAk735s
        subject_person_id: p_s58PnUmfNbj4dJTDKq5fP2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同議
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ck8N9DrPxELotLERsio6Qq
          claim_id: c_3nZ7yejBys7NPMusAk735s
          source_id: s_vn7TWMsAMhLE2SuFtvpZT5
          stance: supports
          locator: CBDB:326623
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zOM4y5spG1onAiRyslDSAQ
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s58PnUmfNbj4dJTDKq5fP2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZfrqHRGDTXwXEH8WCXEaRA
          claim_id: c_zOM4y5spG1onAiRyslDSAQ
          source_id: s_OMMPD-dBoiFj1C5ypaPMdi
          stance: supports
          locator: CBDB：兄弟 王同讚（204969）之父／母 王叔中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同議 与 王同讚 为同胞（CBDB 记「兄」），王同讚 之父／母即 王同議 之父／母。
          source:
            id: s_OMMPD-dBoiFj1C5ypaPMdi
            source_type: api_record
            title: 中国历代人物传记资料库：王同議（CBDB 326623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326623&o=json
            external_identifier: CBDB:326623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BQt5KMQt85phWutCQLQcnd
        status: active
        display_name: 王叔中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_r6kBI5k8ShAxQWmH8pqIIB
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s58PnUmfNbj4dJTDKq5fP2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dtG8o3-VGn9tsKoNqylMJ
          claim_id: c_r6kBI5k8ShAxQWmH8pqIIB
          source_id: s_OMMPD-dBoiFj1C5ypaPMdi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204969 王同讚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OMMPD-dBoiFj1C5ypaPMdi
            source_type: api_record
            title: 中国历代人物传记资料库：王同議（CBDB 326623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326623&o=json
            external_identifier: CBDB:326623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4PMudrRao4a9cRDuakPq7M
        status: active
        display_name: 王同讚
        merged_into_person_id: null
---

# 王同議

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同議，明人物。嘉靖四十一年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 326623） | accepted |
| name.primary | 王同議 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BQt5KMQt85phWutCQLQcnd | 王叔中 | accepted |
| other | p_4PMudrRao4a9cRDuakPq7M | 王同讚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同議（CBDB 326623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326623&o=json)
