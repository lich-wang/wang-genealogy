---
schema: wang-person/v1
id: p_F4oMLDeezgsznyGNp4JdbB
status: active
merged_into: null
display_name: 王耀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BymY21WZSAmhF1jfbVnDGo
        subject_person_id: p_F4oMLDeezgsznyGNp4JdbB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QPHertQnxBij4fBi3hTMyg
          claim_id: c_BymY21WZSAmhF1jfbVnDGo
          source_id: s_UdqXQTRmKg7Ywea597iGtF
          stance: supports
          locator: CBDB:284129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284129）
          source: &a1
            id: s_UdqXQTRmKg7Ywea597iGtF
            source_type: api_record
            title: 中国历代人物传记资料库：王耀（CBDB 284129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284129&o=json
            external_identifier: CBDB:284129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_siYyYV1XqPYYxbcEKNWbjd
        subject_person_id: p_F4oMLDeezgsznyGNp4JdbB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀，明人物。正德十六年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 284129）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v8Hk6xpeWQQePYvZCd36wW
          claim_id: c_siYyYV1XqPYYxbcEKNWbjd
          source_id: s_UdqXQTRmKg7Ywea597iGtF
          stance: supports
          locator: CBDB:284129
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5AIcijypd63iSQ7G57qmlp
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F4oMLDeezgsznyGNp4JdbB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LNAj3kfvcaxuJgpJd134eN
          claim_id: c_5AIcijypd63iSQ7G57qmlp
          source_id: s_gx7iSZ3tvCgQgeEf228AA2
          stance: supports
          locator: CBDB：兄弟 王化（202136）之父／母 王琰
          quotation: null
          interpretation_note: 由兄弟关系推断：王耀 与 王化 为同胞（CBDB 记「兄」），王化 之父／母即 王耀 之父／母。
          source:
            id: s_gx7iSZ3tvCgQgeEf228AA2
            source_type: api_record
            title: 中国历代人物传记资料库：王耀（CBDB 284129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284129&o=json
            external_identifier: CBDB:284129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8RMMck1DAhfReSxN8nPCYS
        status: active
        display_name: 王琰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OsS1uW-j8bS-o__0yW8e42
        subject_person_id: p_F4oMLDeezgsznyGNp4JdbB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x6qQ_f3i-leIMO-Py1HDh4
          claim_id: c_OsS1uW-j8bS-o__0yW8e42
          source_id: s_gx7iSZ3tvCgQgeEf228AA2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202136 王化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gx7iSZ3tvCgQgeEf228AA2
            source_type: api_record
            title: 中国历代人物传记资料库：王耀（CBDB 284129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284129&o=json
            external_identifier: CBDB:284129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GBfHvW9j1wmH7AtQd6s7JQ
        status: active
        display_name: 王化
        merged_into_person_id: null
---

# 王耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耀 | accepted |
| bio.summary | 王耀，明人物。正德十六年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 284129） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8RMMck1DAhfReSxN8nPCYS | 王琰 | accepted |
| other | p_GBfHvW9j1wmH7AtQd6s7JQ | 王化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王耀（CBDB 284129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284129&o=json)
