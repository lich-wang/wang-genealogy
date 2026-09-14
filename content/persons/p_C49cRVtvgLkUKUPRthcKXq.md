---
schema: wang-person/v1
id: p_C49cRVtvgLkUKUPRthcKXq
status: active
merged_into: null
display_name: 王顒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R81okHxgNj7LqEp92DQDRH
        subject_person_id: p_C49cRVtvgLkUKUPRthcKXq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7dfe6cDSgvRiJBewfzTAMB
          claim_id: c_R81okHxgNj7LqEp92DQDRH
          source_id: s_CWjtDZ4ta7EqYFz63w4EtQ
          stance: supports
          locator: CBDB:327156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327156）
          source: &a1
            id: s_CWjtDZ4ta7EqYFz63w4EtQ
            source_type: api_record
            title: 中国历代人物传记资料库：王顒（CBDB 327156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327156&o=json
            external_identifier: CBDB:327156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WeBorXfhA71ZtB8bUUEhtM
        subject_person_id: p_C49cRVtvgLkUKUPRthcKXq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顒，明人物。嘉靖四十一年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 327156）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FT5iepVZOBf5EOccVlfWM1
          claim_id: c_WeBorXfhA71ZtB8bUUEhtM
          source_id: s_CWjtDZ4ta7EqYFz63w4EtQ
          stance: supports
          locator: CBDB:327156
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J6t90Z2d8o17eNvHbSTFx9
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C49cRVtvgLkUKUPRthcKXq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9MRIUt5a1KPg-31uI9sORM
          claim_id: c_J6t90Z2d8o17eNvHbSTFx9
          source_id: s_cfzmObTR3gNbwdACIdcprQ
          stance: supports
          locator: CBDB：兄弟 王乾章（126679）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王顒 与 王乾章 为同胞（CBDB 记「弟」），王乾章 之父／母即 王顒 之父／母。
          source:
            id: s_cfzmObTR3gNbwdACIdcprQ
            source_type: api_record
            title: 中国历代人物传记资料库：王顒（CBDB 327156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327156&o=json
            external_identifier: CBDB:327156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KEoDBUQZkr54B6QhQtTe7V
        status: active
        display_name: 王寬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_AjXM50kvP7l_ZzleNQbAj5
        subject_person_id: p_BxK799vwCxhyA6JGbqpHzN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_C49cRVtvgLkUKUPRthcKXq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bvLdnVL2Mz27sSD7xi1U3E
          claim_id: c_AjXM50kvP7l_ZzleNQbAj5
          source_id: s_cfzmObTR3gNbwdACIdcprQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126679 王乾章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cfzmObTR3gNbwdACIdcprQ
            source_type: api_record
            title: 中国历代人物传记资料库：王顒（CBDB 327156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327156&o=json
            external_identifier: CBDB:327156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BxK799vwCxhyA6JGbqpHzN
        status: active
        display_name: 王乾章
        merged_into_person_id: null
---

# 王顒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顒 | accepted |
| bio.summary | 王顒，明人物。嘉靖四十一年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 327156） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KEoDBUQZkr54B6QhQtTe7V | 王寬 | accepted |
| other | p_BxK799vwCxhyA6JGbqpHzN | 王乾章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王顒（CBDB 327156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327156&o=json)
