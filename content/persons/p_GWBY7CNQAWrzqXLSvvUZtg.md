---
schema: wang-person/v1
id: p_GWBY7CNQAWrzqXLSvvUZtg
status: active
merged_into: null
display_name: 王永昌
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oh1twfDN3qe5sQhMvW961S
        subject_person_id: p_GWBY7CNQAWrzqXLSvvUZtg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R57g8ucd71oZR2AJoZRFNa
          claim_id: c_oh1twfDN3qe5sQhMvW961S
          source_id: s_rm7Qj71B7o2MzUsJN5ECaM
          stance: supports
          locator: CBDB:221618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221618）
          source: &a1
            id: s_rm7Qj71B7o2MzUsJN5ECaM
            source_type: api_record
            title: 中国历代人物传记资料库：王永昌（CBDB 221618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221618&o=json
            external_identifier: CBDB:221618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X1XcYjRWMXj83JoTkXHPK4
        subject_person_id: p_GWBY7CNQAWrzqXLSvvUZtg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永昌，明人物。萬曆八年進士，籍贯烏程，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 221618）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s4uGpyBSlWtONi6TlMjUcB
          claim_id: c_X1XcYjRWMXj83JoTkXHPK4
          source_id: s_rm7Qj71B7o2MzUsJN5ECaM
          stance: supports
          locator: CBDB:221618
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Vgj-79nPEdj_n_v9HHulKE
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GWBY7CNQAWrzqXLSvvUZtg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EFhbyRJ1yx5q2Qa6EMnxbB
          claim_id: c_Vgj-79nPEdj_n_v9HHulKE
          source_id: s_6tlA-Fqy1R7c45DbgR76C9
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永昌 与 王永寧 为同胞（CBDB 记「弟」），王永寧 之父／母即 王永昌 之父／母。
          source:
            id: s_6tlA-Fqy1R7c45DbgR76C9
            source_type: api_record
            title: 中国历代人物传记资料库：王永昌（CBDB 221618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221618&o=json
            external_identifier: CBDB:221618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Syn7L23qcdCnWJH3gNVxhk
        status: active
        display_name: 王國柱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-R3_rxYSdUq_3OCPGBtIyu
        subject_person_id: p_GWBY7CNQAWrzqXLSvvUZtg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Vu5wPFU9etB1mZyT3n6avf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UY63m1u7nJpFj_obim5m3m
          claim_id: c_-R3_rxYSdUq_3OCPGBtIyu
          source_id: s_6tlA-Fqy1R7c45DbgR76C9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206689 王永寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6tlA-Fqy1R7c45DbgR76C9
            source_type: api_record
            title: 中国历代人物传记资料库：王永昌（CBDB 221618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221618&o=json
            external_identifier: CBDB:221618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vu5wPFU9etB1mZyT3n6avf
        status: active
        display_name: 王永寧
        merged_into_person_id: null
---

# 王永昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永昌 | accepted |
| bio.summary | 王永昌，明人物。萬曆八年進士，籍贯烏程，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 221618） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Syn7L23qcdCnWJH3gNVxhk | 王國柱 | accepted |
| other | p_Vu5wPFU9etB1mZyT3n6avf | 王永寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永昌（CBDB 221618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221618&o=json)
