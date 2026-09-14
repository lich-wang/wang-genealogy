---
schema: wang-person/v1
id: p_kWSA4pVK578quoZM6ya5Ji
status: active
merged_into: null
display_name: 王其宖
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H4MG8Xjd8SQKMGXAPr9BXY
        subject_person_id: p_kWSA4pVK578quoZM6ya5Ji
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其宖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R1DqPkowF8vao7EfKPKRu7
          claim_id: c_H4MG8Xjd8SQKMGXAPr9BXY
          source_id: s_VJxwAXaGGds626GHJYT2EA
          stance: supports
          locator: CBDB:556806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556806）
          source: &a1
            id: s_VJxwAXaGGds626GHJYT2EA
            source_type: api_record
            title: 中国历代人物传记资料库：王其宖（CBDB 556806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556806&o=json
            external_identifier: CBDB:556806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RqJzZ4nkopGMZTw2aygEM8
        subject_person_id: p_kWSA4pVK578quoZM6ya5Ji
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其宖，明人物。籍贯安福，曾任推官。（中国历代人物传记资料库 CBDB 556806）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n6abS9qbpLhout9_S8hHZN
          claim_id: c_RqJzZ4nkopGMZTw2aygEM8
          source_id: s_VJxwAXaGGds626GHJYT2EA
          stance: supports
          locator: CBDB:556806
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f2K4gZ6mbYz_VWU8ZFYI9M
        subject_person_id: p_sKBWFhRDMwVtBQhCnhiP5H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kWSA4pVK578quoZM6ya5Ji
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZT3uJ-ZISrpobRG_tZ6eBB
          claim_id: c_f2K4gZ6mbYz_VWU8ZFYI9M
          source_id: s_VJxwAXaGGds626GHJYT2EA
          stance: supports
          locator: 江西通志，Igid=1197629：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sKBWFhRDMwVtBQhCnhiP5H
        status: active
        display_name: 王績燦
        merged_into_person_id: null
  children:
    - claim:
        id: c_IwBcGh7lCOqegRo67cUCnV
        subject_person_id: p_kWSA4pVK578quoZM6ya5Ji
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8PL4rTG5Xg84JyjtCHLgG4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MKq5SY0wGbB54y7XOD-9mM
          claim_id: c_IwBcGh7lCOqegRo67cUCnV
          source_id: s_Gtv58d7QoXVKsBKF6Up77V
          stance: supports
          locator: 江西通志，Igid=1197629：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Gtv58d7QoXVKsBKF6Up77V
            source_type: api_record
            title: 中国历代人物传记资料库：王謙言（CBDB 556813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556813&o=json
            external_identifier: CBDB:556813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.534Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8PL4rTG5Xg84JyjtCHLgG4
        status: active
        display_name: 王謙言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yNxsBzkpL7xUKC62qcmf7J
        subject_person_id: p_BQ3R7YJp9brWojW7bC5Dii
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kWSA4pVK578quoZM6ya5Ji
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yGjcH-wvLKYycCSkRZUr-G
          claim_id: c_yNxsBzkpL7xUKC62qcmf7J
          source_id: s_I2SJj3FmEaHTdZTps0-z7J
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 556806 王其宖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I2SJj3FmEaHTdZTps0-z7J
            source_type: api_record
            title: 中国历代人物传记资料库：王其窿（CBDB 556811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556811&o=json
            external_identifier: CBDB:556811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BQ3R7YJp9brWojW7bC5Dii
        status: active
        display_name: 王其窿
        merged_into_person_id: null
    - claim:
        id: c_5eY1a6GVo_B-ph3-NNpCNM
        subject_person_id: p_SLU3AsHiTcjuHEj6weBiD5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kWSA4pVK578quoZM6ya5Ji
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PlZx_4Tjvzz_3higuvDSgz
          claim_id: c_5eY1a6GVo_B-ph3-NNpCNM
          source_id: s_tiQnwNPZOMhJFW4CWAncoP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 556806 王其宖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tiQnwNPZOMhJFW4CWAncoP
            source_type: api_record
            title: 中国历代人物传记资料库：王其寏（CBDB 556812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556812&o=json
            external_identifier: CBDB:556812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SLU3AsHiTcjuHEj6weBiD5
        status: active
        display_name: 王其寏
        merged_into_person_id: null
    - claim:
        id: c_0xyP6lbC2xW6ZtwRREQlk4
        subject_person_id: p_kWSA4pVK578quoZM6ya5Ji
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_t8shTQbiML52cwU2H4T7BM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_breXSOhPPB7keR-JnvVv9c
          claim_id: c_0xyP6lbC2xW6ZtwRREQlk4
          source_id: s_VCOVKG6aCuE7upvszEHg0Y
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 556806 王其宖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VCOVKG6aCuE7upvszEHg0Y
            source_type: api_record
            title: 中国历代人物传记资料库：王其定（CBDB 556810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556810&o=json
            external_identifier: CBDB:556810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t8shTQbiML52cwU2H4T7BM
        status: active
        display_name: 王其定
        merged_into_person_id: null
---

# 王其宖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其宖 | accepted |
| bio.summary | 王其宖，明人物。籍贯安福，曾任推官。（中国历代人物传记资料库 CBDB 556806） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sKBWFhRDMwVtBQhCnhiP5H | 王績燦 | accepted |
| children | p_8PL4rTG5Xg84JyjtCHLgG4 | 王謙言 | accepted |
| other | p_BQ3R7YJp9brWojW7bC5Dii | 王其窿 | accepted |
| other | p_SLU3AsHiTcjuHEj6weBiD5 | 王其寏 | accepted |
| other | p_t8shTQbiML52cwU2H4T7BM | 王其定 | accepted |

## 外部来源

- [中国历代人物传记资料库：王其定（CBDB 556810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556810&o=json)
- [中国历代人物传记资料库：王其宖（CBDB 556806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556806&o=json)
- [中国历代人物传记资料库：王其寏（CBDB 556812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556812&o=json)
- [中国历代人物传记资料库：王其窿（CBDB 556811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556811&o=json)
- [中国历代人物传记资料库：王謙言（CBDB 556813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556813&o=json)
