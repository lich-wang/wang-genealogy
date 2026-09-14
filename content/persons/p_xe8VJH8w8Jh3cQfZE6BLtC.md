---
schema: wang-person/v1
id: p_xe8VJH8w8Jh3cQfZE6BLtC
status: active
merged_into: null
display_name: 王廷相
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFd5kfpJBHDoQx1yNFjT1J
        subject_person_id: p_xe8VJH8w8Jh3cQfZE6BLtC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VQAZejFEN4s39ia9q9ZTBJ
          claim_id: c_JFd5kfpJBHDoQx1yNFjT1J
          source_id: s_he6C157Sw8YkJ19DC9N3vv
          stance: supports
          locator: CBDB:326523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326523）
          source: &a1
            id: s_he6C157Sw8YkJ19DC9N3vv
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 326523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326523&o=json
            external_identifier: CBDB:326523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cSdxEVbiFfRatPUy7j9TeH
        subject_person_id: p_xe8VJH8w8Jh3cQfZE6BLtC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷相，明人物。嘉靖四十一年進士，籍贯浮梁。（中国历代人物传记资料库 CBDB 326523）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JaZHXdrBEy_rRXsBLfy8M1
          claim_id: c_cSdxEVbiFfRatPUy7j9TeH
          source_id: s_he6C157Sw8YkJ19DC9N3vv
          stance: supports
          locator: CBDB:326523
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cg1o5xYGz9AFOr0zXqDPkj
        subject_person_id: p_UEhwLuzK5mRw1PBd3N1Kd9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xe8VJH8w8Jh3cQfZE6BLtC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eJxDQgzov9e4tlYDLDbfgM
          claim_id: c_cg1o5xYGz9AFOr0zXqDPkj
          source_id: s_-UIeRjOvi_8AFlIu4JiowX
          stance: supports
          locator: CBDB：兄弟 王廷輔（204965）之父／母 王文盛
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷相 与 王廷輔 为同胞（CBDB 记「兄」），王廷輔 之父／母即 王廷相 之父／母。
          source:
            id: s_-UIeRjOvi_8AFlIu4JiowX
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 326523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326523&o=json
            external_identifier: CBDB:326523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UEhwLuzK5mRw1PBd3N1Kd9
        status: active
        display_name: 王文盛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-Tz7GSE1hDo-ksP3QDIU20
        subject_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xe8VJH8w8Jh3cQfZE6BLtC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v1wovnccfeONY-gYnIofEg
          claim_id: c_-Tz7GSE1hDo-ksP3QDIU20
          source_id: s_-UIeRjOvi_8AFlIu4JiowX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204965 王廷輔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-UIeRjOvi_8AFlIu4JiowX
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 326523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326523&o=json
            external_identifier: CBDB:326523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7x8JYYpfNVCNz7epCoiZPm
        status: active
        display_name: 王廷輔
        merged_into_person_id: null
---

# 王廷相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷相 | accepted |
| bio.summary | 王廷相，明人物。嘉靖四十一年進士，籍贯浮梁。（中国历代人物传记资料库 CBDB 326523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UEhwLuzK5mRw1PBd3N1Kd9 | 王文盛 | accepted |
| other | p_7x8JYYpfNVCNz7epCoiZPm | 王廷輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷相（CBDB 326523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326523&o=json)
