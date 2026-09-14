---
schema: wang-person/v1
id: p_sM3TGmmZiDwSdJPqv629wp
status: active
merged_into: null
display_name: 王慶濟
cbdb_id: 282383
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FQwxYXqRJeyKHMEqB7h8xN
        subject_person_id: p_sM3TGmmZiDwSdJPqv629wp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶濟，明人物。正德十二年進士，籍贯西安府。（中国历代人物传记资料库 CBDB 282383）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Bqx-U2x-4acTt7CHK6mA3T
          claim_id: c_FQwxYXqRJeyKHMEqB7h8xN
          source_id: s_nfNXMDbaVN2ApN733PE1QG
          stance: supports
          locator: CBDB:282383
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nfNXMDbaVN2ApN733PE1QG
            source_type: api_record
            title: 中国历代人物传记资料库：王慶濟（CBDB 282383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282383&o=json
            external_identifier: CBDB:282383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dSdpZ9tE9YwNNMRRDNB4Tv
        subject_person_id: p_sM3TGmmZiDwSdJPqv629wp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_d7nw4ZskxiCqUG1a5kyzQ6
          claim_id: c_dSdpZ9tE9YwNNMRRDNB4Tv
          source_id: s_nfNXMDbaVN2ApN733PE1QG
          stance: supports
          locator: CBDB:282383
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bmq5TIe9lBUdCk66CPOyJq
        subject_person_id: p_N8KkzPBYZP1o7g6fiUXXY5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sM3TGmmZiDwSdJPqv629wp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ApAo1WNePCJSiJTbfHLDe
          claim_id: c_bmq5TIe9lBUdCk66CPOyJq
          source_id: s_M5GenNjgWAEEDLKG58qRbh
          stance: supports
          locator: CBDB：兄弟 王光濟（202037）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王慶濟 与 王光濟 为同胞（CBDB 记「兄」），王光濟 之父／母即 王慶濟 之父／母。
          source:
            id: s_M5GenNjgWAEEDLKG58qRbh
            source_type: api_record
            title: 中国历代人物传记资料库：王慶濟（CBDB 282383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282383&o=json
            external_identifier: CBDB:282383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N8KkzPBYZP1o7g6fiUXXY5
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oK1oxwp8YoQf9mDPe5U30H
        subject_person_id: p_sM3TGmmZiDwSdJPqv629wp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_euJobNuQtmvx733Pf8WKF3
          claim_id: c_oK1oxwp8YoQf9mDPe5U30H
          source_id: s_M5GenNjgWAEEDLKG58qRbh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202037 王光濟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_M5GenNjgWAEEDLKG58qRbh
            source_type: api_record
            title: 中国历代人物传记资料库：王慶濟（CBDB 282383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282383&o=json
            external_identifier: CBDB:282383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xjFrEJTtUqGXh8SmiFrc9m
        status: active
        display_name: 王光濟
        merged_into_person_id: null
---

# 王慶濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慶濟，明人物。正德十二年進士，籍贯西安府。（中国历代人物传记资料库 CBDB 282383） | accepted |
| name.primary | 王慶濟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N8KkzPBYZP1o7g6fiUXXY5 | 王鎬 | accepted |
| other | p_xjFrEJTtUqGXh8SmiFrc9m | 王光濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶濟（CBDB 282383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282383&o=json)
