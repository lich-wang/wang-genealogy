---
schema: wang-person/v1
id: p_qqsY6t9Q8faV4F4CdLeZ5T
status: active
merged_into: null
display_name: 王本堅
cbdb_id: 332107
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iaJsuAjnRnzzF8tT5bcGra
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本堅，明人物。嘉靖四十四年進士，籍贯什邡，曾任主簿。（中国历代人物传记资料库 CBDB 332107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1c56xFvAktoR_RAg5zKcur
          claim_id: c_iaJsuAjnRnzzF8tT5bcGra
          source_id: s_8mW4QyCmDN4jrYUjExNRUL
          stance: supports
          locator: CBDB:332107
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8mW4QyCmDN4jrYUjExNRUL
            source_type: api_record
            title: 中国历代人物传记资料库：王本堅（CBDB 332107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332107&o=json
            external_identifier: CBDB:332107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g6JM31WU8SNa3aMo477NDb
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CY8yWgrT9co52msPxzbXPF
          claim_id: c_g6JM31WU8SNa3aMo477NDb
          source_id: s_8mW4QyCmDN4jrYUjExNRUL
          stance: supports
          locator: CBDB:332107
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dpCeYS1s3NAuekdwLFJdeK
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UMUkjo8ahM3AKur1S9jMgA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vj-Clyv4nisZKI7-fQiKtf
          claim_id: c_dpCeYS1s3NAuekdwLFJdeK
          source_id: s_8mW4QyCmDN4jrYUjExNRUL
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8mW4QyCmDN4jrYUjExNRUL
            source_type: api_record
            title: 中国历代人物传记资料库：王本堅（CBDB 332107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332107&o=json
            external_identifier: CBDB:332107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_UMUkjo8ahM3AKur1S9jMgA
        status: active
        display_name: 王謠
        merged_into_person_id: null
    - claim:
        id: c_HJHfRT1ngDtPe0GJePzfAS
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ygimbuKCCi9mcoHAHWATw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FCMCi5o6ZSqzCgzN_ogdvn
          claim_id: c_HJHfRT1ngDtPe0GJePzfAS
          source_id: s_LH8sek9tNQA8KHthkDhFGn
          stance: supports
          locator: CBDB：兄弟 王謠（205360）之父／母 王本堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王詩 与 王謠 为同胞（CBDB 记「兄」），王謠 之父／母即 王詩 之父／母。
          source:
            id: s_LH8sek9tNQA8KHthkDhFGn
            source_type: api_record
            title: 中国历代人物传记资料库：王詩（CBDB 332115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332115&o=json
            external_identifier: CBDB:332115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3ygimbuKCCi9mcoHAHWATw
        status: active
        display_name: 王詩
        merged_into_person_id: null
    - claim:
        id: c_2e8Vo3oi3Nlv9mHpmEXnLz
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4goTpo5iS7ZGxNr8h4JZfQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kyq7JaBkt746AAhtbT6uNZ
          claim_id: c_2e8Vo3oi3Nlv9mHpmEXnLz
          source_id: s_X3fBMkWtPnbBKOjcmxZYHu
          stance: supports
          locator: CBDB：兄弟 王謠（205360）之父／母 王本堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王誠 与 王謠 为同胞（CBDB 记「兄」），王謠 之父／母即 王誠 之父／母。
          source:
            id: s_X3fBMkWtPnbBKOjcmxZYHu
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 332114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332114&o=json
            external_identifier: CBDB:332114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4goTpo5iS7ZGxNr8h4JZfQ
        status: active
        display_name: 王誠
        merged_into_person_id: null
    - claim:
        id: c_cbR8Ow6q8L4vsqZgl4FRPh
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H8xiGDEA4FNguQLBSYCnbR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_86s6vgmQdPxHnKfL3UwqNp
          claim_id: c_cbR8Ow6q8L4vsqZgl4FRPh
          source_id: s_yaEsJgM2BuAy2ndLk_EbZ3
          stance: supports
          locator: CBDB：兄弟 王謠（205360）之父／母 王本堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王許 与 王謠 为同胞（CBDB 记「兄」），王謠 之父／母即 王許 之父／母。
          source:
            id: s_yaEsJgM2BuAy2ndLk_EbZ3
            source_type: api_record
            title: 中国历代人物传记资料库：王許（CBDB 332117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332117&o=json
            external_identifier: CBDB:332117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H8xiGDEA4FNguQLBSYCnbR
        status: active
        display_name: 王許
        merged_into_person_id: null
    - claim:
        id: c_oCAPt8G0x4ek0I3GH09FBs
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LEBbiyhaB1AiEoiXUd4yqs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l8hX22bCzocfrrZCEbfXYn
          claim_id: c_oCAPt8G0x4ek0I3GH09FBs
          source_id: s_6qNh8reZ3wJTZ54O0wZP5J
          stance: supports
          locator: CBDB：兄弟 王謠（205360）之父／母 王本堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王謀 与 王謠 为同胞（CBDB 记「兄」），王謠 之父／母即 王謀 之父／母。
          source:
            id: s_6qNh8reZ3wJTZ54O0wZP5J
            source_type: api_record
            title: 中国历代人物传记资料库：王謀（CBDB 332116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332116&o=json
            external_identifier: CBDB:332116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LEBbiyhaB1AiEoiXUd4yqs
        status: active
        display_name: 王謀
        merged_into_person_id: null
    - claim:
        id: c_ZKEa57v0BGxU9Wgmk-RqJg
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oSai1CEM7KTBFb5HHRgoaT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_48T6p4tHAiFXdC-JiYHPUK
          claim_id: c_ZKEa57v0BGxU9Wgmk-RqJg
          source_id: s_wbz9KIo9HwNwMIvKhnYE2X
          stance: supports
          locator: CBDB：兄弟 王謠（205360）之父／母 王本堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王詠 与 王謠 为同胞（CBDB 记「弟」），王謠 之父／母即 王詠 之父／母。
          source:
            id: s_wbz9KIo9HwNwMIvKhnYE2X
            source_type: api_record
            title: 中国历代人物传记资料库：王詠（CBDB 332113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332113&o=json
            external_identifier: CBDB:332113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oSai1CEM7KTBFb5HHRgoaT
        status: active
        display_name: 王詠
        merged_into_person_id: null
    - claim:
        id: c_Rt0aKya-i9M60tFZfaplkW
        subject_person_id: p_qqsY6t9Q8faV4F4CdLeZ5T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x55Ji43ffG77Vv6tFXSmuT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-yL_upjd8MZa_oFcXLnPU2
          claim_id: c_Rt0aKya-i9M60tFZfaplkW
          source_id: s_IiQKvT0O45o7f4CBWerSVt
          stance: supports
          locator: CBDB：兄弟 王謠（205360）之父／母 王本堅
          quotation: null
          interpretation_note: 由兄弟关系推断：王諧 与 王謠 为同胞（CBDB 记「兄」），王謠 之父／母即 王諧 之父／母。
          source:
            id: s_IiQKvT0O45o7f4CBWerSVt
            source_type: api_record
            title: 中国历代人物传记资料库：王諧（CBDB 332118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332118&o=json
            external_identifier: CBDB:332118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x55Ji43ffG77Vv6tFXSmuT
        status: active
        display_name: 王諧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王本堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王本堅，明人物。嘉靖四十四年進士，籍贯什邡，曾任主簿。（中国历代人物传记资料库 CBDB 332107） | accepted |
| name.primary | 王本堅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UMUkjo8ahM3AKur1S9jMgA | 王謠 | accepted |
| children | p_3ygimbuKCCi9mcoHAHWATw | 王詩 | accepted |
| children | p_4goTpo5iS7ZGxNr8h4JZfQ | 王誠 | accepted |
| children | p_H8xiGDEA4FNguQLBSYCnbR | 王許 | accepted |
| children | p_LEBbiyhaB1AiEoiXUd4yqs | 王謀 | accepted |
| children | p_oSai1CEM7KTBFb5HHRgoaT | 王詠 | accepted |
| children | p_x55Ji43ffG77Vv6tFXSmuT | 王諧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本堅（CBDB 332107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332107&o=json)
- [中国历代人物传记资料库：王誠（CBDB 332114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332114&o=json)
- [中国历代人物传记资料库：王謀（CBDB 332116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332116&o=json)
- [中国历代人物传记资料库：王詩（CBDB 332115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332115&o=json)
- [中国历代人物传记资料库：王諧（CBDB 332118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332118&o=json)
- [中国历代人物传记资料库：王許（CBDB 332117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332117&o=json)
- [中国历代人物传记资料库：王詠（CBDB 332113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332113&o=json)
