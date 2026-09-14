---
schema: wang-person/v1
id: p_ecePLWAX2MYTBmTm5LMA1A
status: active
merged_into: null
display_name: 王徑
cbdb_id: 237581
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K6pZ3Jyq5wP5T3ckuwAnim
        subject_person_id: p_ecePLWAX2MYTBmTm5LMA1A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徑，明人物。正统七年進士，籍贯固安。（中国历代人物传记资料库 CBDB 237581）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4xwpyJ45e1YJXpZjqHqash
          claim_id: c_K6pZ3Jyq5wP5T3ckuwAnim
          source_id: s_JDu9BMHMErBJqBNESbed6C
          stance: supports
          locator: CBDB:237581
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JDu9BMHMErBJqBNESbed6C
            source_type: api_record
            title: 中国历代人物传记资料库：王徑（CBDB 237581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237581&o=json
            external_identifier: CBDB:237581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DNVJAWhWPf8b27iqvwRnE9
        subject_person_id: p_ecePLWAX2MYTBmTm5LMA1A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TKQNeoEHnr2sC2ufJETayr
          claim_id: c_DNVJAWhWPf8b27iqvwRnE9
          source_id: s_JDu9BMHMErBJqBNESbed6C
          stance: supports
          locator: CBDB:237581
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-H9rakHzBa4ePE3APo2y6f
        subject_person_id: p_pgR8SLxunnSi6qPKCxtHNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ecePLWAX2MYTBmTm5LMA1A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZECgcW-hln3Ers1NcSKmvF
          claim_id: c_-H9rakHzBa4ePE3APo2y6f
          source_id: s_ZGJbWXgKGa035nn-RXksgc
          stance: supports
          locator: CBDB：兄弟 王復（67655）之父／母 王騏
          quotation: null
          interpretation_note: 由兄弟关系推断：王徑 与 王復 为同胞（CBDB 记「弟」），王復 之父／母即 王徑 之父／母。
          source:
            id: s_ZGJbWXgKGa035nn-RXksgc
            source_type: api_record
            title: 中国历代人物传记资料库：王徑（CBDB 237581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237581&o=json
            external_identifier: CBDB:237581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pgR8SLxunnSi6qPKCxtHNt
        status: active
        display_name: 王騏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yxfvvHYSOWg6adq9rlel1L
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ecePLWAX2MYTBmTm5LMA1A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J4Tnrqan2Fnwq3wl2JdLiA
          claim_id: c_yxfvvHYSOWg6adq9rlel1L
          source_id: s_ZGJbWXgKGa035nn-RXksgc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67655 王復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZGJbWXgKGa035nn-RXksgc
            source_type: api_record
            title: 中国历代人物传记资料库：王徑（CBDB 237581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237581&o=json
            external_identifier: CBDB:237581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Koi5WJ5jcXbBAKpaCrntSB
        status: active
        display_name: 王復
        merged_into_person_id: null
---

# 王徑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王徑，明人物。正统七年進士，籍贯固安。（中国历代人物传记资料库 CBDB 237581） | accepted |
| name.primary | 王徑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pgR8SLxunnSi6qPKCxtHNt | 王騏 | accepted |
| other | p_Koi5WJ5jcXbBAKpaCrntSB | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徑（CBDB 237581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237581&o=json)
