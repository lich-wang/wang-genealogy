---
schema: wang-person/v1
id: p_jAZa72xQV94hCgdDQtVTKA
status: active
merged_into: null
display_name: 王銳
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AbjEejuSdf7cKQ3Yv5ZS6P
        subject_person_id: p_jAZa72xQV94hCgdDQtVTKA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7SNJ5RxiR4KMJ54CvN94JX
          claim_id: c_AbjEejuSdf7cKQ3Yv5ZS6P
          source_id: s_9TDGj83EuSCKC8vyKwyMH4
          stance: supports
          locator: CBDB:318102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318102）
          source: &a1
            id: s_9TDGj83EuSCKC8vyKwyMH4
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 318102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318102&o=json
            external_identifier: CBDB:318102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7bvLZHhdm3ZjfpnrUYcks6
        subject_person_id: p_jAZa72xQV94hCgdDQtVTKA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳，明人物。嘉靖三十二年進士，籍贯濰縣，入仕監生。（中国历代人物传记资料库 CBDB 318102）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MyWmguNjo6bf3HbZw7c09h
          claim_id: c_7bvLZHhdm3ZjfpnrUYcks6
          source_id: s_9TDGj83EuSCKC8vyKwyMH4
          stance: supports
          locator: CBDB:318102
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Rdr7FPPgpjZMoGEL0_BKf6
        subject_person_id: p_jAZa72xQV94hCgdDQtVTKA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6GY2aGzgx7a1G29Cw6N2Jv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wPBYjkxQ9ckjRSDTnAIpGB
          claim_id: c_Rdr7FPPgpjZMoGEL0_BKf6
          source_id: s_sqFzrQfGDUhoV1ycTDWczt
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百零七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sqFzrQfGDUhoV1ycTDWczt
            source_type: api_record
            title: 中国历代人物传记资料库：王漸（CBDB 204365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204365&o=json
            external_identifier: CBDB:204365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6GY2aGzgx7a1G29Cw6N2Jv
        status: active
        display_name: 王漸
        merged_into_person_id: null
    - claim:
        id: c_Yxx-TNcTdQ1p09j2OyCZBC
        subject_person_id: p_jAZa72xQV94hCgdDQtVTKA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7B22vmspZf4BoEDqkk3k5v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7mBzwkkXR5u10_9VoWHOAQ
          claim_id: c_Yxx-TNcTdQ1p09j2OyCZBC
          source_id: s_Kr_sxkx68TQ6wutPCIUm6m
          stance: supports
          locator: CBDB：兄弟 王漸（204365）之父／母 王銳
          quotation: null
          interpretation_note: 由兄弟关系推断：王潛 与 王漸 为同胞（CBDB 记「弟」），王漸 之父／母即 王潛 之父／母。
          source:
            id: s_Kr_sxkx68TQ6wutPCIUm6m
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 318105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318105&o=json
            external_identifier: CBDB:318105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7B22vmspZf4BoEDqkk3k5v
        status: active
        display_name: 王潛
        merged_into_person_id: null
    - claim:
        id: c__12ZcMenwqdweSA8EA0yFR
        subject_person_id: p_jAZa72xQV94hCgdDQtVTKA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DhtvFAN481P2mbYzBqYAwe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WX05nhTpVmlKLPszh1HGiv
          claim_id: c__12ZcMenwqdweSA8EA0yFR
          source_id: s_HI2FSNY-c6daM2eaSLSMty
          stance: supports
          locator: CBDB：兄弟 王漸（204365）之父／母 王銳
          quotation: null
          interpretation_note: 由兄弟关系推断：王濯 与 王漸 为同胞（CBDB 记「弟」），王漸 之父／母即 王濯 之父／母。
          source:
            id: s_HI2FSNY-c6daM2eaSLSMty
            source_type: api_record
            title: 中国历代人物传记资料库：王濯（CBDB 318109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318109&o=json
            external_identifier: CBDB:318109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DhtvFAN481P2mbYzBqYAwe
        status: active
        display_name: 王濯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | 王銳，明人物。嘉靖三十二年進士，籍贯濰縣，入仕監生。（中国历代人物传记资料库 CBDB 318102） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6GY2aGzgx7a1G29Cw6N2Jv | 王漸 | accepted |
| children | p_7B22vmspZf4BoEDqkk3k5v | 王潛 | accepted |
| children | p_DhtvFAN481P2mbYzBqYAwe | 王濯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漸（CBDB 204365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204365&o=json)
- [中国历代人物传记资料库：王潛（CBDB 318105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318105&o=json)
- [中国历代人物传记资料库：王銳（CBDB 318102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318102&o=json)
- [中国历代人物传记资料库：王濯（CBDB 318109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318109&o=json)
