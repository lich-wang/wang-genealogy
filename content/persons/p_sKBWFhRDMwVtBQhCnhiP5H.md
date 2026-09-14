---
schema: wang-person/v1
id: p_sKBWFhRDMwVtBQhCnhiP5H
status: active
merged_into: null
display_name: 王績燦
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XEGuQt9D3ZbXYA943rrXrh
        subject_person_id: p_sKBWFhRDMwVtBQhCnhiP5H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sBAKRewxKxsWAqa5J9yW7L
          claim_id: c_XEGuQt9D3ZbXYA943rrXrh
          source_id: s_7FhrAXbKnoB42gNH3QWw1v
          stance: supports
          locator: CBDB:126856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126856）
          source: &a1
            id: s_7FhrAXbKnoB42gNH3QWw1v
            source_type: api_record
            title: 中国历代人物传记资料库：王績燦（CBDB 126856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126856&o=json
            external_identifier: CBDB:126856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_564eNNyaL8CZAq5YxXoMhd
        subject_person_id: p_sKBWFhRDMwVtBQhCnhiP5H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績燦，明人物。籍贯安福，入仕進士，曾任御史。（中国历代人物传记资料库 CBDB 126856）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WKx-XlXpDw8RPQ59NWvpIL
          claim_id: c_564eNNyaL8CZAq5YxXoMhd
          source_id: s_7FhrAXbKnoB42gNH3QWw1v
          stance: supports
          locator: CBDB:126856
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_kWSA4pVK578quoZM6ya5Ji
        status: active
        display_name: 王其宖
        merged_into_person_id: null
    - claim:
        id: c_9wj48CkqlhGyDuiMVGriIH
        subject_person_id: p_sKBWFhRDMwVtBQhCnhiP5H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BQ3R7YJp9brWojW7bC5Dii
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dUB17JLeaTxLWlx8MIHTuR
          claim_id: c_9wj48CkqlhGyDuiMVGriIH
          source_id: s_I2SJj3FmEaHTdZTps0-z7J
          stance: supports
          locator: CBDB：兄弟 王其宖（556806）之父／母 王績燦
          quotation: null
          interpretation_note: 由兄弟关系推断：王其窿 与 王其宖 为同胞（CBDB 记「兄」），王其宖 之父／母即 王其窿 之父／母。
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
        id: c_4xxfe_ACoSOspEET5ou8UN
        subject_person_id: p_sKBWFhRDMwVtBQhCnhiP5H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SLU3AsHiTcjuHEj6weBiD5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EP-FAI-7WyALI9yaFUal_x
          claim_id: c_4xxfe_ACoSOspEET5ou8UN
          source_id: s_tiQnwNPZOMhJFW4CWAncoP
          stance: supports
          locator: CBDB：兄弟 王其宖（556806）之父／母 王績燦
          quotation: null
          interpretation_note: 由兄弟关系推断：王其寏 与 王其宖 为同胞（CBDB 记「兄」），王其宖 之父／母即 王其寏 之父／母。
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
        id: c_Kt-RssgJBHioskU7OMaOyv
        subject_person_id: p_sKBWFhRDMwVtBQhCnhiP5H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t8shTQbiML52cwU2H4T7BM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vv0IrqoDaArX-mFnU8kY1e
          claim_id: c_Kt-RssgJBHioskU7OMaOyv
          source_id: s_VCOVKG6aCuE7upvszEHg0Y
          stance: supports
          locator: CBDB：兄弟 王其宖（556806）之父／母 王績燦
          quotation: null
          interpretation_note: 由兄弟关系推断：王其定 与 王其宖 为同胞（CBDB 记「弟」），王其宖 之父／母即 王其定 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王績燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王績燦 | accepted |
| bio.summary | 王績燦，明人物。籍贯安福，入仕進士，曾任御史。（中国历代人物传记资料库 CBDB 126856） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kWSA4pVK578quoZM6ya5Ji | 王其宖 | accepted |
| children | p_BQ3R7YJp9brWojW7bC5Dii | 王其窿 | accepted |
| children | p_SLU3AsHiTcjuHEj6weBiD5 | 王其寏 | accepted |
| children | p_t8shTQbiML52cwU2H4T7BM | 王其定 | accepted |

## 外部来源

- [中国历代人物传记资料库：王績燦（CBDB 126856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126856&o=json)
- [中国历代人物传记资料库：王其定（CBDB 556810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556810&o=json)
- [中国历代人物传记资料库：王其宖（CBDB 556806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556806&o=json)
- [中国历代人物传记资料库：王其寏（CBDB 556812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556812&o=json)
- [中国历代人物传记资料库：王其窿（CBDB 556811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556811&o=json)
