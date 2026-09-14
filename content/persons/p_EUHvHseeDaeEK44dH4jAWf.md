---
schema: wang-person/v1
id: p_EUHvHseeDaeEK44dH4jAWf
status: active
merged_into: null
display_name: 王六與
cbdb_id: 330490
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wP4W4jzZZu9u1VqBatPmWS
        subject_person_id: p_EUHvHseeDaeEK44dH4jAWf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六與，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330490）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ntl_rV0OLkRFEIu6o8cxOB
          claim_id: c_wP4W4jzZZu9u1VqBatPmWS
          source_id: s_S9pbCHPGqvoW7UuZvBuApv
          stance: supports
          locator: CBDB:330490
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_S9pbCHPGqvoW7UuZvBuApv
            source_type: api_record
            title: 中国历代人物传记资料库：王六與（CBDB 330490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330490&o=json
            external_identifier: CBDB:330490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_52hdsaYVgVhDz9SW3Lb3wJ
        subject_person_id: p_EUHvHseeDaeEK44dH4jAWf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六與
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QV9425Lqq9izu9AEnXGJob
          claim_id: c_52hdsaYVgVhDz9SW3Lb3wJ
          source_id: s_S9pbCHPGqvoW7UuZvBuApv
          stance: supports
          locator: CBDB:330490
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kX3OKgDnunMipom53owe6j
        subject_person_id: p_FwWAP4cMFqggRtz76GL45y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EUHvHseeDaeEK44dH4jAWf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KucD33S3GvD-niswPkvoaE
          claim_id: c_kX3OKgDnunMipom53owe6j
          source_id: s_tR7qUyajWJAUjYj0mM_GFS
          stance: supports
          locator: CBDB：兄弟 王三錫（205255）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王六與 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王六與 之父／母。
          source:
            id: s_tR7qUyajWJAUjYj0mM_GFS
            source_type: api_record
            title: 中国历代人物传记资料库：王六與（CBDB 330490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330490&o=json
            external_identifier: CBDB:330490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FwWAP4cMFqggRtz76GL45y
        status: active
        display_name: 王訪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KBjh6QXvgARJ5TGuZo1xhX
        subject_person_id: p_EUHvHseeDaeEK44dH4jAWf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SNd4UuLmfsSW8TJsfi9MKm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRe2x5tb5c3SYKiGE35KQ_
          claim_id: c_KBjh6QXvgARJ5TGuZo1xhX
          source_id: s_tR7qUyajWJAUjYj0mM_GFS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205255 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tR7qUyajWJAUjYj0mM_GFS
            source_type: api_record
            title: 中国历代人物传记资料库：王六與（CBDB 330490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330490&o=json
            external_identifier: CBDB:330490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SNd4UuLmfsSW8TJsfi9MKm
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王六與

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王六與，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330490） | accepted |
| name.primary | 王六與 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FwWAP4cMFqggRtz76GL45y | 王訪 | accepted |
| other | p_SNd4UuLmfsSW8TJsfi9MKm | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王六與（CBDB 330490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330490&o=json)
