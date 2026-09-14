---
schema: wang-person/v1
id: p_93w6EWjQAuF7ETZJATszKb
status: active
merged_into: null
display_name: 王松
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_afTwxt73JATHfZ9EC23Yx9
        subject_person_id: p_93w6EWjQAuF7ETZJATszKb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9vG27Ve9M7Pm9VX2VyP6Lr
          claim_id: c_afTwxt73JATHfZ9EC23Yx9
          source_id: s_U5cd7C1difNZkyDCf69aYq
          stance: supports
          locator: CBDB:271108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271108）
          source: &a1
            id: s_U5cd7C1difNZkyDCf69aYq
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 271108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271108&o=json
            external_identifier: CBDB:271108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BE7n2xAQnEbCNuWZqEgBiv
        subject_person_id: p_93w6EWjQAuF7ETZJATszKb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松，明人物。弘治十五年進士，籍贯望江，曾任義官。（中国历代人物传记资料库 CBDB 271108）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UWaxSGx94n-1jPhrXcs37_
          claim_id: c_BE7n2xAQnEbCNuWZqEgBiv
          source_id: s_U5cd7C1difNZkyDCf69aYq
          stance: supports
          locator: CBDB:271108
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DKeEi22uG8bj9qNZi4ClR3
        subject_person_id: p_JJVNEEM87Q9sBUqrYf9DpQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_93w6EWjQAuF7ETZJATszKb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4ui2pILDADzTNnMEvCgfC
          claim_id: c_DKeEi22uG8bj9qNZi4ClR3
          source_id: s_xW8nZiEjF7c1hpa2mpn4WK
          stance: supports
          locator: CBDB：兄弟 王材（201358）之父／母 王瓊
          quotation: null
          interpretation_note: 由兄弟关系推断：王松 与 王材 为同胞（CBDB 记「弟」），王材 之父／母即 王松 之父／母。
          source:
            id: s_xW8nZiEjF7c1hpa2mpn4WK
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 271108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271108&o=json
            external_identifier: CBDB:271108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JJVNEEM87Q9sBUqrYf9DpQ
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ab_xatgzngJLFYNPHejUhQ
        subject_person_id: p_5dqAK3hD6kewBU4JbJcy31
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_93w6EWjQAuF7ETZJATszKb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XzksJWsRbFa13zkhXfavhS
          claim_id: c_Ab_xatgzngJLFYNPHejUhQ
          source_id: s_xW8nZiEjF7c1hpa2mpn4WK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201358 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xW8nZiEjF7c1hpa2mpn4WK
            source_type: api_record
            title: 中国历代人物传记资料库：王松（CBDB 271108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271108&o=json
            external_identifier: CBDB:271108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5dqAK3hD6kewBU4JbJcy31
        status: active
        display_name: 王材
        merged_into_person_id: null
---

# 王松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松 | accepted |
| bio.summary | 王松，明人物。弘治十五年進士，籍贯望江，曾任義官。（中国历代人物传记资料库 CBDB 271108） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JJVNEEM87Q9sBUqrYf9DpQ | 王瓊 | accepted |
| other | p_5dqAK3hD6kewBU4JbJcy31 | 王材 | accepted |

## 外部来源

- [中国历代人物传记资料库：王松（CBDB 271108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271108&o=json)
