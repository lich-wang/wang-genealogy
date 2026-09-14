---
schema: wang-person/v1
id: p_3HHmqJEpLXSB6PpgNSryHi
status: active
merged_into: null
display_name: 王筵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W4Nyz3EGywwT4Y9UD28wBb
        subject_person_id: p_3HHmqJEpLXSB6PpgNSryHi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C8NnApkCwBuKtMdQ2f6Hjr
          claim_id: c_W4Nyz3EGywwT4Y9UD28wBb
          source_id: s_5kR7qJNWd5c7idBdDM31qa
          stance: supports
          locator: CBDB:328171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328171）
          source: &a1
            id: s_5kR7qJNWd5c7idBdDM31qa
            source_type: api_record
            title: 中国历代人物传记资料库：王筵（CBDB 328171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328171&o=json
            external_identifier: CBDB:328171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FcoZFSU4ToaBHcW4Zt9qFL
        subject_person_id: p_3HHmqJEpLXSB6PpgNSryHi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筵，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328171）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gtop4HXRL4GYFniMb9lPER
          claim_id: c_FcoZFSU4ToaBHcW4Zt9qFL
          source_id: s_5kR7qJNWd5c7idBdDM31qa
          stance: supports
          locator: CBDB:328171
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0N-9cVP8NBKA1j4AHwsOJQ
        subject_person_id: p_D9N98oB92wT9B2XW2TfNE4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3HHmqJEpLXSB6PpgNSryHi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3mu-niOc4p6saX4o6Op9BQ
          claim_id: c_0N-9cVP8NBKA1j4AHwsOJQ
          source_id: s_RXhe8H0napwnm96OLdqGh9
          stance: supports
          locator: CBDB：兄弟 王篆（205090）之父／母 王良策
          quotation: null
          interpretation_note: 由兄弟关系推断：王筵 与 王篆 为同胞（CBDB 记「兄」），王篆 之父／母即 王筵 之父／母。
          source:
            id: s_RXhe8H0napwnm96OLdqGh9
            source_type: api_record
            title: 中国历代人物传记资料库：王筵（CBDB 328171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328171&o=json
            external_identifier: CBDB:328171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D9N98oB92wT9B2XW2TfNE4
        status: active
        display_name: 王良策
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qADJGLkLpDutrZNNQbXIUn
        subject_person_id: p_3HHmqJEpLXSB6PpgNSryHi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_re55RAwGuQf79apOYrfsG6
          claim_id: c_qADJGLkLpDutrZNNQbXIUn
          source_id: s_RXhe8H0napwnm96OLdqGh9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205090 王篆）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RXhe8H0napwnm96OLdqGh9
            source_type: api_record
            title: 中国历代人物传记资料库：王筵（CBDB 328171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328171&o=json
            external_identifier: CBDB:328171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oXNXhcmP3pgs4EeZNT7tYq
        status: active
        display_name: 王篆
        merged_into_person_id: null
---

# 王筵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筵 | accepted |
| bio.summary | 王筵，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328171） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D9N98oB92wT9B2XW2TfNE4 | 王良策 | accepted |
| other | p_oXNXhcmP3pgs4EeZNT7tYq | 王篆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王筵（CBDB 328171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328171&o=json)
