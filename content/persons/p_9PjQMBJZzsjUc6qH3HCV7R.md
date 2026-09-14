---
schema: wang-person/v1
id: p_9PjQMBJZzsjUc6qH3HCV7R
status: active
merged_into: null
display_name: 王儼
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jm7fdMdFj2emRFFRfGGp6x
        subject_person_id: p_9PjQMBJZzsjUc6qH3HCV7R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ncW2N425P4xsZNF14NQcLv
          claim_id: c_jm7fdMdFj2emRFFRfGGp6x
          source_id: s_3uhNAYGKd2q1CWvuDw89pJ
          stance: supports
          locator: CBDB:280416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280416）
          source: &a1
            id: s_3uhNAYGKd2q1CWvuDw89pJ
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 280416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280416&o=json
            external_identifier: CBDB:280416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WajHz6xqw2yNHrunZSAras
        subject_person_id: p_9PjQMBJZzsjUc6qH3HCV7R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，明人物。正德十二年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 280416）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Se_JvJqbAIp2ZbR8csSbY9
          claim_id: c_WajHz6xqw2yNHrunZSAras
          source_id: s_3uhNAYGKd2q1CWvuDw89pJ
          stance: supports
          locator: CBDB:280416
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0uX7UQjo6zi3ReHXXRgprc
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9PjQMBJZzsjUc6qH3HCV7R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UWt1dyxfC5EDrsZjyDKmqH
          claim_id: c_0uX7UQjo6zi3ReHXXRgprc
          source_id: s_XRK2GYO63Dps8vyOQbRWt4
          stance: supports
          locator: CBDB：兄弟 王鳳靈（126795）之父／母 王玉和
          quotation: null
          interpretation_note: 由兄弟关系推断：王儼 与 王鳳靈 为同胞（CBDB 记「弟」），王鳳靈 之父／母即 王儼 之父／母。
          source:
            id: s_XRK2GYO63Dps8vyOQbRWt4
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 280416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280416&o=json
            external_identifier: CBDB:280416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GDjC7pvEU5iRp3K4Ac1DMb
        status: active
        display_name: 王玉和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_juJ4AFhrOLw4Mp8vf0ZNwX
        subject_person_id: p_9PjQMBJZzsjUc6qH3HCV7R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9E29bSqO7RSaDC8GkROZpi
          claim_id: c_juJ4AFhrOLw4Mp8vf0ZNwX
          source_id: s_XRK2GYO63Dps8vyOQbRWt4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126795 王鳳靈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XRK2GYO63Dps8vyOQbRWt4
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 280416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280416&o=json
            external_identifier: CBDB:280416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        status: active
        display_name: 王鳳靈
        merged_into_person_id: null
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，明人物。正德十二年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 280416） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GDjC7pvEU5iRp3K4Ac1DMb | 王玉和 | accepted |
| other | p_ZyrbUQzJSc8r8t3Ud7TNAC | 王鳳靈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 280416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280416&o=json)
