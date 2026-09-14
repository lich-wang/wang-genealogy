---
schema: wang-person/v1
id: p_WSxqscNRKPRdaJc2ZEcAPF
status: active
merged_into: null
display_name: 王宗文
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NazLGn98qdLW7s2cia23XX
        subject_person_id: p_WSxqscNRKPRdaJc2ZEcAPF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W86PNGmQY1gFA9n3Gtj1oF
          claim_id: c_NazLGn98qdLW7s2cia23XX
          source_id: s_B5tup8wjBKVd4KP3pYeALo
          stance: supports
          locator: CBDB:317699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317699）
          source: &a1
            id: s_B5tup8wjBKVd4KP3pYeALo
            source_type: api_record
            title: 中国历代人物传记资料库：王宗文（CBDB 317699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317699&o=json
            external_identifier: CBDB:317699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7hyqPQJHdfo4VQkDfzaHKa
        subject_person_id: p_WSxqscNRKPRdaJc2ZEcAPF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗文，明人物。嘉靖三十二年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 317699）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vBYwF3G1AgoDLAgEBXppe_
          claim_id: c_7hyqPQJHdfo4VQkDfzaHKa
          source_id: s_B5tup8wjBKVd4KP3pYeALo
          stance: supports
          locator: CBDB:317699
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f3-5beHujrFYe_kIBAUv2v
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WSxqscNRKPRdaJc2ZEcAPF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IUqVGxseunmaOH87Pzrkgf
          claim_id: c_f3-5beHujrFYe_kIBAUv2v
          source_id: s_n2Lw6xW2c9pFKUkxx97HHS
          stance: supports
          locator: CBDB：兄弟 王宗舜（126560）之父／母 王澄
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗文 与 王宗舜 为同胞（CBDB 记「兄」），王宗舜 之父／母即 王宗文 之父／母。
          source:
            id: s_n2Lw6xW2c9pFKUkxx97HHS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗文（CBDB 317699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317699&o=json
            external_identifier: CBDB:317699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oBz6NLHmFuUeBahrr88xPZ
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1tuwO14Z8MgBdgeSKf-nYs
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WSxqscNRKPRdaJc2ZEcAPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dTOxE6cb6gVaZD7ul3fUyk
          claim_id: c_1tuwO14Z8MgBdgeSKf-nYs
          source_id: s_n2Lw6xW2c9pFKUkxx97HHS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126560 王宗舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n2Lw6xW2c9pFKUkxx97HHS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗文（CBDB 317699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317699&o=json
            external_identifier: CBDB:317699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9DQWxHegXc6PNKo9W5YA34
        status: active
        display_name: 王宗舜
        merged_into_person_id: null
---

# 王宗文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗文 | accepted |
| bio.summary | 王宗文，明人物。嘉靖三十二年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 317699） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oBz6NLHmFuUeBahrr88xPZ | 王澄 | accepted |
| other | p_9DQWxHegXc6PNKo9W5YA34 | 王宗舜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗文（CBDB 317699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317699&o=json)
