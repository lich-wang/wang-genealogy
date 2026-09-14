---
schema: wang-person/v1
id: p_99r2F1J51CnATEud2D97f9
status: active
merged_into: null
display_name: 王瑛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9xvc8Q6UYaQYLH2AJe59gB
        subject_person_id: p_99r2F1J51CnATEud2D97f9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ekh4mEJZN7yAJJ7FKvr2Ee
          claim_id: c_9xvc8Q6UYaQYLH2AJe59gB
          source_id: s_iCiGFQt1PGjRkxd3ec2tdp
          stance: supports
          locator: CBDB:326341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326341）
          source: &a1
            id: s_iCiGFQt1PGjRkxd3ec2tdp
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 326341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326341&o=json
            external_identifier: CBDB:326341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tNKG1cfuVDjNnVggfEXk7X
        subject_person_id: p_99r2F1J51CnATEud2D97f9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛，明人物。天順八年進士，籍贯上饒。（中国历代人物传记资料库 CBDB 326341）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_heEcwPMjOD6c9sVF8qjgli
          claim_id: c_tNKG1cfuVDjNnVggfEXk7X
          source_id: s_iCiGFQt1PGjRkxd3ec2tdp
          stance: supports
          locator: CBDB:326341
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_weJtaZwW_T-HDRztrYq0DK
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_99r2F1J51CnATEud2D97f9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AAW8pkszWM9qmLIHnjqxcf
          claim_id: c_weJtaZwW_T-HDRztrYq0DK
          source_id: s_mByALczy7Dcnu5Y50jTfcQ
          stance: supports
          locator: CBDB：兄弟 王讓（126898）之父／母 王應橫
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑛 与 王讓 为同胞（CBDB 记「弟」），王讓 之父／母即 王瑛 之父／母。
          source:
            id: s_mByALczy7Dcnu5Y50jTfcQ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 326341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326341&o=json
            external_identifier: CBDB:326341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        status: active
        display_name: 王應橫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_x7jD9sImIaDY1GDPuKFGWI
        subject_person_id: p_99r2F1J51CnATEud2D97f9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_H6ADXcsddQz8PL3XHF26HH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K3jjyATFNheNP8xcc3khBa
          claim_id: c_x7jD9sImIaDY1GDPuKFGWI
          source_id: s_mByALczy7Dcnu5Y50jTfcQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126898 王讓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mByALczy7Dcnu5Y50jTfcQ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 326341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326341&o=json
            external_identifier: CBDB:326341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H6ADXcsddQz8PL3XHF26HH
        status: active
        display_name: 王讓
        merged_into_person_id: null
---

# 王瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑛 | accepted |
| bio.summary | 王瑛，明人物。天順八年進士，籍贯上饒。（中国历代人物传记资料库 CBDB 326341） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rQ3QkQ6Ppvi2nvZM6NWRzv | 王應橫 | accepted |
| other | p_H6ADXcsddQz8PL3XHF26HH | 王讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑛（CBDB 326341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326341&o=json)
