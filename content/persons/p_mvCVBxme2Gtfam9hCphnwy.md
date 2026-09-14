---
schema: wang-person/v1
id: p_mvCVBxme2Gtfam9hCphnwy
status: active
merged_into: null
display_name: 王應詔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rH6NFGYv76tmJzHxgJLjJH
        subject_person_id: p_mvCVBxme2Gtfam9hCphnwy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZBFnaq3RHT7Gzi8pXuUopq
          claim_id: c_rH6NFGYv76tmJzHxgJLjJH
          source_id: s_2XxsZqBbikUYGQcHU7JsGj
          stance: supports
          locator: CBDB:297737
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297737）
          source: &a1
            id: s_2XxsZqBbikUYGQcHU7JsGj
            source_type: api_record
            title: 中国历代人物传记资料库：王應詔（CBDB 297737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297737&o=json
            external_identifier: CBDB:297737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JREWZ3guNNrxS1MctdwDAh
        subject_person_id: p_mvCVBxme2Gtfam9hCphnwy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應詔，明人物。嘉靖十四年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 297737）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rvdH3bF116owAHLU9I9WqH
          claim_id: c_JREWZ3guNNrxS1MctdwDAh
          source_id: s_2XxsZqBbikUYGQcHU7JsGj
          stance: supports
          locator: CBDB:297737
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WAp0S4r4iUqj-bNvqtog5-
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mvCVBxme2Gtfam9hCphnwy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lCiuTIS2g0b829lDD_xE9U
          claim_id: c_WAp0S4r4iUqj-bNvqtog5-
          source_id: s_QDNNzsY32xtqFEYISgJSQE
          stance: supports
          locator: CBDB：兄弟 王應期（202976）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王應詔 与 王應期 为同胞（CBDB 记「兄」），王應期 之父／母即 王應詔 之父／母。
          source:
            id: s_QDNNzsY32xtqFEYISgJSQE
            source_type: api_record
            title: 中国历代人物传记资料库：王應詔（CBDB 297737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297737&o=json
            external_identifier: CBDB:297737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BePMtcQN2evcZUVaYKvcA9
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kml2wheNjxIwLuLon-0tFO
        subject_person_id: p_7wzTGA3qgQYcchPFctGbYw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mvCVBxme2Gtfam9hCphnwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDykMRBYzH6-uNeZXl6UIQ
          claim_id: c_kml2wheNjxIwLuLon-0tFO
          source_id: s_QDNNzsY32xtqFEYISgJSQE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202976 王應期）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QDNNzsY32xtqFEYISgJSQE
            source_type: api_record
            title: 中国历代人物传记资料库：王應詔（CBDB 297737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297737&o=json
            external_identifier: CBDB:297737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7wzTGA3qgQYcchPFctGbYw
        status: active
        display_name: 王應期
        merged_into_person_id: null
---

# 王應詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應詔 | accepted |
| bio.summary | 王應詔，明人物。嘉靖十四年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 297737） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BePMtcQN2evcZUVaYKvcA9 | 王政 | accepted |
| other | p_7wzTGA3qgQYcchPFctGbYw | 王應期 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應詔（CBDB 297737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297737&o=json)
