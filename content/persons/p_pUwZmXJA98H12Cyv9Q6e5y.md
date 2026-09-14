---
schema: wang-person/v1
id: p_pUwZmXJA98H12Cyv9Q6e5y
status: active
merged_into: null
display_name: 王時柯
cbdb_id: 68118
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WrV69eAmPfev9CvouD66Nd
        subject_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時柯，明人物。明清進士進士，籍贯萬安，入仕進士，曾任道監察御史、光祿寺少卿、行人司行人。（中国历代人物传记资料库 CBDB 68118）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dzWHF1D68uQQbj9kAYBEJH
          claim_id: c_WrV69eAmPfev9CvouD66Nd
          source_id: s_cUp84FFRs6vaPx1eNGHyBC
          stance: supports
          locator: CBDB:68118
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cUp84FFRs6vaPx1eNGHyBC
            source_type: api_record
            title: 中国历代人物传记资料库：王時柯（CBDB 68118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68118&o=json
            external_identifier: CBDB:68118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LbNnCADuyy8yiwkfkk6hqG
        subject_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時柯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Q1c1JNCiE3CycWhUcdoHUL
          claim_id: c_LbNnCADuyy8yiwkfkk6hqG
          source_id: s_cUp84FFRs6vaPx1eNGHyBC
          stance: supports
          locator: CBDB:68118
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W22EnvFTYQ5VDdR0QRQbog
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qc_tXU088C2SxJmc0HepQh
          claim_id: c_W22EnvFTYQ5VDdR0QRQbog
          source_id: s_Tu1VwVeXjMEWveB3L1tAHt
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Tu1VwVeXjMEWveB3L1tAHt
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 280635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280635&o=json
            external_identifier: CBDB:280635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pTB7HsH5CT4VpfKwtjMaNH
        status: active
        display_name: 王淵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_gCuD7RHlOuQsscuFJevBI2
        subject_person_id: p_ik6XhKzKEHTrJABBhg9UnS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tUHwvvWfvVt4u2UbRy62Dl
          claim_id: c_gCuD7RHlOuQsscuFJevBI2
          source_id: s_EKYXJTNDt7coAE3zHh7A91
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EKYXJTNDt7coAE3zHh7A91
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 280634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280634&o=json
            external_identifier: CBDB:280634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ik6XhKzKEHTrJABBhg9UnS
        status: active
        display_name: 王憲
        merged_into_person_id: null
    - claim:
        id: c_c8MCMmduel_cY14wW23TZe
        subject_person_id: p_Np1fJ2NSMY3g6tA1mrC8NP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ntQf__Ejnkx3qNnKZBEgfw
          claim_id: c_c8MCMmduel_cY14wW23TZe
          source_id: s_brbr5hLAQjvmPthNF6noLQ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_brbr5hLAQjvmPthNF6noLQ
            source_type: api_record
            title: 中国历代人物传记资料库：王添成（CBDB 280633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280633&o=json
            external_identifier: CBDB:280633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Np1fJ2NSMY3g6tA1mrC8NP
        status: active
        display_name: 王添成
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_4pmRMrftdfsWZaS2oB1SE3
        subject_person_id: p_VVg6dPsf61FvErE9grVHYX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dvIxFfMb2XgSknVx03MDtv
          claim_id: c_4pmRMrftdfsWZaS2oB1SE3
          source_id: s_3VjuF1nC42b3LoSwHiUclE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68118 王時柯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3VjuF1nC42b3LoSwHiUclE
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 280638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280638&o=json
            external_identifier: CBDB:280638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VVg6dPsf61FvErE9grVHYX
        status: active
        display_name: 王時某
        merged_into_person_id: null
    - claim:
        id: c_E4jJGJ49wpfSMGOcAJKWH-
        subject_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xmkqssZLoj8LftLRofiQaa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2hZiWPXVXpdoVuuzVSwt-J
          claim_id: c_E4jJGJ49wpfSMGOcAJKWH-
          source_id: s__xu6FzbC3r4uPXA0AbZo00
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68118 王時柯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__xu6FzbC3r4uPXA0AbZo00
            source_type: api_record
            title: 中国历代人物传记资料库：王時楷（CBDB 280640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280640&o=json
            external_identifier: CBDB:280640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xmkqssZLoj8LftLRofiQaa
        status: active
        display_name: 王時楷
        merged_into_person_id: null
    - claim:
        id: c_Cmn6BYf8gwjwMl57g8TbmF
        subject_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yhYTLXHLm8UcwAPMMHVfwb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4d1AqBxaz0FXTBWgqSZVq
          claim_id: c_Cmn6BYf8gwjwMl57g8TbmF
          source_id: s_WBqUtuHB6JO5QXbZ5w5uio
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68118 王時柯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WBqUtuHB6JO5QXbZ5w5uio
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 280639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280639&o=json
            external_identifier: CBDB:280639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yhYTLXHLm8UcwAPMMHVfwb
        status: active
        display_name: 王時某
        merged_into_person_id: null
---

# 王時柯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時柯，明人物。明清進士進士，籍贯萬安，入仕進士，曾任道監察御史、光祿寺少卿、行人司行人。（中国历代人物传记资料库 CBDB 68118） | accepted |
| name.primary | 王時柯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pTB7HsH5CT4VpfKwtjMaNH | 王淵 | accepted |
| ancestors | p_ik6XhKzKEHTrJABBhg9UnS | 王憲 | accepted |
| ancestors | p_Np1fJ2NSMY3g6tA1mrC8NP | 王添成 | accepted |
| other | p_VVg6dPsf61FvErE9grVHYX | 王時某 | accepted |
| other | p_xmkqssZLoj8LftLRofiQaa | 王時楷 | accepted |
| other | p_yhYTLXHLm8UcwAPMMHVfwb | 王時某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時楷（CBDB 280640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280640&o=json)
- [中国历代人物传记资料库：王時柯（CBDB 68118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68118&o=json)
- [中国历代人物传记资料库：王時某（CBDB 280638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280638&o=json)
- [中国历代人物传记资料库：王時某（CBDB 280639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280639&o=json)
- [中国历代人物传记资料库：王添成（CBDB 280633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280633&o=json)
- [中国历代人物传记资料库：王憲（CBDB 280634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280634&o=json)
- [中国历代人物传记资料库：王淵（CBDB 280635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280635&o=json)
