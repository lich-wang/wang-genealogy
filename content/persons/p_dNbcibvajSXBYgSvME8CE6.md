---
schema: wang-person/v1
id: p_dNbcibvajSXBYgSvME8CE6
status: active
merged_into: null
display_name: 王玉
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jdc4N4bL136DvGdey8Kpk9
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PYUBLeRWq4JBxJfsHV38Yr
          claim_id: c_Jdc4N4bL136DvGdey8Kpk9
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: CBDB:283695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283695）
          source: &a1
            id: s_DpzAwGANuGaaryEQnDijHj
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 283695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json
            external_identifier: CBDB:283695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_47rmd2KxENfeEzm43CBHiQ
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉，明人物。正德十六年進士，籍贯會稽，曾任都指揮同知、錦衣衛都指揮同知、漕運參將。（中国历代人物传记资料库 CBDB 283695）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hzayqT9D4iFwOtAgB4mSzO
          claim_id: c_47rmd2KxENfeEzm43CBHiQ
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: CBDB:283695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-spPFdJX8F8qXJ2oyOFgtX
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VzREVG9zqkmWPrWDHfGpmG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q76CzQbilqRHviKOmTCejN
          claim_id: c_-spPFdJX8F8qXJ2oyOFgtX
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VzREVG9zqkmWPrWDHfGpmG
        status: active
        display_name: 王楊
        merged_into_person_id: null
    - claim:
        id: c_qzG60H4eOnvWP3Z2ZVJ9P-
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GDYJiKmBDGx8GATz5Lz7eZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CS91qL343IoMq49jAPM25V
          claim_id: c_qzG60H4eOnvWP3Z2ZVJ9P-
          source_id: s_DpzAwGANuGaaryEQnDijHj
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第五十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GDYJiKmBDGx8GATz5Lz7eZ
        status: active
        display_name: 王楠
        merged_into_person_id: null
    - claim:
        id: c_gh3v24q6Z2lXwUvKEJjjGM
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5z7BLDBnQLUq2Bc4drf2K2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YiWv0sN12pJSYRHnMUgbJu
          claim_id: c_gh3v24q6Z2lXwUvKEJjjGM
          source_id: s_L792pN15ISSF5XABbq0OR3
          stance: supports
          locator: CBDB：兄弟 王楊（202111）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王桐 与 王楊 为同胞（CBDB 记「弟」），王楊 之父／母即 王桐 之父／母。
          source:
            id: s_L792pN15ISSF5XABbq0OR3
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 283698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283698&o=json
            external_identifier: CBDB:283698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5z7BLDBnQLUq2Bc4drf2K2
        status: active
        display_name: 王桐
        merged_into_person_id: null
    - claim:
        id: c_J-2WmxfDJYWtozEWstCCKx
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KyBTH9FR7ui82xq3PNJs3r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JFCp6fhETVv5_rwRC_wQ2K
          claim_id: c_J-2WmxfDJYWtozEWstCCKx
          source_id: s_QHMIui8akIXQwjEP_l6nMT
          stance: supports
          locator: CBDB：兄弟 王楊（202111）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王椆 与 王楊 为同胞（CBDB 记「兄」），王楊 之父／母即 王椆 之父／母。
          source:
            id: s_QHMIui8akIXQwjEP_l6nMT
            source_type: api_record
            title: 中国历代人物传记资料库：王椆（CBDB 283702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283702&o=json
            external_identifier: CBDB:283702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KyBTH9FR7ui82xq3PNJs3r
        status: active
        display_name: 王椆
        merged_into_person_id: null
    - claim:
        id: c_W0ha-DrpCN7MGTeu3yn6N6
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aREPdXQ8PmYLsBwtyUdHja
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3S-rl6NpPuKJoA8YPQ9SYV
          claim_id: c_W0ha-DrpCN7MGTeu3yn6N6
          source_id: s_sGKtCwS0WOZMTMcmIiu2al
          stance: supports
          locator: CBDB：兄弟 王楊（202111）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王槐 与 王楊 为同胞（CBDB 记「兄」），王楊 之父／母即 王槐 之父／母。
          source:
            id: s_sGKtCwS0WOZMTMcmIiu2al
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 283704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283704&o=json
            external_identifier: CBDB:283704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aREPdXQ8PmYLsBwtyUdHja
        status: active
        display_name: 王槐
        merged_into_person_id: null
    - claim:
        id: c_H33Kw3eVEpXrLjfK0GSJEc
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bekqpXD2bbq8cdPpgMgCDC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TuRG8ZVWVKY52Wcz5EH7AA
          claim_id: c_H33Kw3eVEpXrLjfK0GSJEc
          source_id: s_knAdtfDuXJ_DJuZVQr2jfm
          stance: supports
          locator: CBDB：兄弟 王楊（202111）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王栩 与 王楊 为同胞（CBDB 记「兄」），王楊 之父／母即 王栩 之父／母。
          source:
            id: s_knAdtfDuXJ_DJuZVQr2jfm
            source_type: api_record
            title: 中国历代人物传记资料库：王栩（CBDB 283703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283703&o=json
            external_identifier: CBDB:283703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bekqpXD2bbq8cdPpgMgCDC
        status: active
        display_name: 王栩
        merged_into_person_id: null
    - claim:
        id: c_GrH8IlVz9J01NkbNwOLbQk
        subject_person_id: p_dNbcibvajSXBYgSvME8CE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i1EJ1VcpHtzDWYAhxWgCGc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UB6GnyqX213HyHXULAkz_U
          claim_id: c_GrH8IlVz9J01NkbNwOLbQk
          source_id: s_5YlhqM15b9GHtU6kYj59-h
          stance: supports
          locator: CBDB：兄弟 王楊（202111）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王棟 与 王楊 为同胞（CBDB 记「兄」），王楊 之父／母即 王棟 之父／母。
          source:
            id: s_5YlhqM15b9GHtU6kYj59-h
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283701&o=json
            external_identifier: CBDB:283701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i1EJ1VcpHtzDWYAhxWgCGc
        status: active
        display_name: 王棟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | 王玉，明人物。正德十六年進士，籍贯會稽，曾任都指揮同知、錦衣衛都指揮同知、漕運參將。（中国历代人物传记资料库 CBDB 283695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VzREVG9zqkmWPrWDHfGpmG | 王楊 | accepted |
| children | p_GDYJiKmBDGx8GATz5Lz7eZ | 王楠 | accepted |
| children | p_5z7BLDBnQLUq2Bc4drf2K2 | 王桐 | accepted |
| children | p_KyBTH9FR7ui82xq3PNJs3r | 王椆 | accepted |
| children | p_aREPdXQ8PmYLsBwtyUdHja | 王槐 | accepted |
| children | p_bekqpXD2bbq8cdPpgMgCDC | 王栩 | accepted |
| children | p_i1EJ1VcpHtzDWYAhxWgCGc | 王棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椆（CBDB 283702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283702&o=json)
- [中国历代人物传记资料库：王棟（CBDB 283701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283701&o=json)
- [中国历代人物传记资料库：王槐（CBDB 283704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283704&o=json)
- [中国历代人物传记资料库：王桐（CBDB 283698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283698&o=json)
- [中国历代人物传记资料库：王栩（CBDB 283703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283703&o=json)
- [中国历代人物传记资料库：王玉（CBDB 283695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283695&o=json)
