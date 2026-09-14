---
schema: wang-person/v1
id: p_qZVUJP1g7SnCf6ZeRGtd5a
status: active
merged_into: null
display_name: 王行中
cbdb_id: 214288
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v8zBwCRZDKFGJ4NfXM1Pg4
        subject_person_id: p_qZVUJP1g7SnCf6ZeRGtd5a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行中，明人物。萬曆二年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 214288）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3f49AzusGD3yU6ZCw3YheD
          claim_id: c_v8zBwCRZDKFGJ4NfXM1Pg4
          source_id: s_38t7psE11NEZBzxdZ5KDzK
          stance: supports
          locator: CBDB:214288
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_38t7psE11NEZBzxdZ5KDzK
            source_type: api_record
            title: 中国历代人物传记资料库：王行中（CBDB 214288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214288&o=json
            external_identifier: CBDB:214288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LRM6gD8CPpbGTrsuG24R38
        subject_person_id: p_qZVUJP1g7SnCf6ZeRGtd5a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sjzSaWmHihtRohDuGVxt1A
          claim_id: c_LRM6gD8CPpbGTrsuG24R38
          source_id: s_38t7psE11NEZBzxdZ5KDzK
          stance: supports
          locator: CBDB:214288
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jcX_-8tUXvvMLRYRepfZq2
        subject_person_id: p_5pYb5XTgHHLxK22eWK3gGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qZVUJP1g7SnCf6ZeRGtd5a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M4q7OYgen_W11Y_TQ1ckCG
          claim_id: c_jcX_-8tUXvvMLRYRepfZq2
          source_id: s_zZqZdlpaoeE1lQZ20KHwea
          stance: supports
          locator: CBDB：兄弟 王致中（206164）之父／母 王胤
          quotation: null
          interpretation_note: 由兄弟关系推断：王行中 与 王致中 为同胞（CBDB 记「弟」），王致中 之父／母即 王行中 之父／母。
          source:
            id: s_zZqZdlpaoeE1lQZ20KHwea
            source_type: api_record
            title: 中国历代人物传记资料库：王行中（CBDB 214288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214288&o=json
            external_identifier: CBDB:214288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5pYb5XTgHHLxK22eWK3gGJ
        status: active
        display_name: 王胤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wD_4wK2JrEbguCjXp-DsOm
        subject_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qZVUJP1g7SnCf6ZeRGtd5a
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XkDiX3ie20Q3-f2wxMrk9U
          claim_id: c_wD_4wK2JrEbguCjXp-DsOm
          source_id: s_zZqZdlpaoeE1lQZ20KHwea
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206164 王致中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zZqZdlpaoeE1lQZ20KHwea
            source_type: api_record
            title: 中国历代人物传记资料库：王行中（CBDB 214288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214288&o=json
            external_identifier: CBDB:214288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nZ6oVMjM9PndsMQA7hdBnN
        status: active
        display_name: 王致中
        merged_into_person_id: null
---

# 王行中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王行中，明人物。萬曆二年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 214288） | accepted |
| name.primary | 王行中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5pYb5XTgHHLxK22eWK3gGJ | 王胤 | accepted |
| other | p_nZ6oVMjM9PndsMQA7hdBnN | 王致中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王行中（CBDB 214288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214288&o=json)
