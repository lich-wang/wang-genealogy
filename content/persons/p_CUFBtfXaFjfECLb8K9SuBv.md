---
schema: wang-person/v1
id: p_CUFBtfXaFjfECLb8K9SuBv
status: active
merged_into: null
display_name: 王忠
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3CLWenejS6TX9CZN82dPC3
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QSmssMfK5yBimhxg1A4Pez
          claim_id: c_3CLWenejS6TX9CZN82dPC3
          source_id: s_ghePgYGXYAHjc3KKb4TwBb
          stance: supports
          locator: CBDB:271429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271429）
          source: &a1
            id: s_ghePgYGXYAHjc3KKb4TwBb
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 271429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271429&o=json
            external_identifier: CBDB:271429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5SLwAVEHLEJ9Zx2Ci2injL
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，明人物。景泰五年進士，籍贯金谿，曾任巡檢。（中国历代人物传记资料库 CBDB 271429）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tOxOFTduCii0ntktY8AViV
          claim_id: c_5SLwAVEHLEJ9Zx2Ci2injL
          source_id: s_ghePgYGXYAHjc3KKb4TwBb
          stance: supports
          locator: CBDB:271429
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PbeYU59NZ9vtobZMnEn7pX
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_61aKV27ohw2u1-stWCLD3_
          claim_id: c_PbeYU59NZ9vtobZMnEn7pX
          source_id: s_ohc7t8WtVqFLyQtGXbDmnK
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ohc7t8WtVqFLyQtGXbDmnK
            source_type: api_record
            title: 中国历代人物传记资料库：王稽（CBDB 198434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198434&o=json
            external_identifier: CBDB:198434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.493Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3vKgPJZPmMS9ZpS2a75EVV
        status: active
        display_name: 王稽
        merged_into_person_id: null
    - claim:
        id: c_PEsiFXmzKCPdZo6v9EtHAT
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2pz1La3gnmxK1AmRKNDz1j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MLw7T3CVyqdVqX79lmi9Rd
          claim_id: c_PEsiFXmzKCPdZo6v9EtHAT
          source_id: s_sS8i5VqYXDpj1qCfdnMRY5
          stance: supports
          locator: CBDB：兄弟 王稽（198434）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王穆 与 王稽 为同胞（CBDB 记「兄」），王稽 之父／母即 王穆 之父／母。
          source:
            id: s_sS8i5VqYXDpj1qCfdnMRY5
            source_type: api_record
            title: 中国历代人物传记资料库：王穆（CBDB 271506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271506&o=json
            external_identifier: CBDB:271506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2pz1La3gnmxK1AmRKNDz1j
        status: active
        display_name: 王穆
        merged_into_person_id: null
    - claim:
        id: c_DTHBzObp2NuG70jQeCG4qc
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ABJ8gsp2tbu2cYQ8XrpDCa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F8wuTXrm3dfPT3xPTW1omj
          claim_id: c_DTHBzObp2NuG70jQeCG4qc
          source_id: s_ZJ-sG_9c9ZnrOfmXF9kHqz
          stance: supports
          locator: CBDB：兄弟 王稽（198434）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王种 与 王稽 为同胞（CBDB 记「兄」），王稽 之父／母即 王种 之父／母。
          source:
            id: s_ZJ-sG_9c9ZnrOfmXF9kHqz
            source_type: api_record
            title: 中国历代人物传记资料库：王种（CBDB 271517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271517&o=json
            external_identifier: CBDB:271517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ABJ8gsp2tbu2cYQ8XrpDCa
        status: active
        display_name: 王种
        merged_into_person_id: null
    - claim:
        id: c_CdMO8gQnhwVKfI6VCiWa7X
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VNQDAMXMGx697Aaeg6F771
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j6mcv1mj6xwh2mRK0CCjRm
          claim_id: c_CdMO8gQnhwVKfI6VCiWa7X
          source_id: s_J5jRUSIRyYnBVhPAir5qwp
          stance: supports
          locator: CBDB：兄弟 王稽（198434）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王吉 与 王稽 为同胞（CBDB 记「弟」），王稽 之父／母即 王吉 之父／母。
          source:
            id: s_J5jRUSIRyYnBVhPAir5qwp
            source_type: api_record
            title: 中国历代人物传记资料库：王吉（CBDB 271484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271484&o=json
            external_identifier: CBDB:271484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VNQDAMXMGx697Aaeg6F771
        status: active
        display_name: 王吉
        merged_into_person_id: null
    - claim:
        id: c_zs9Y2FfToeXPC1TjdjnSYb
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e8hYUJFh9Q5fCVadiwHHmT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MPh64kvcHMdjHn42YvWvVU
          claim_id: c_zs9Y2FfToeXPC1TjdjnSYb
          source_id: s_p2QEKZdMLseRWrXSnA8Zi7
          stance: supports
          locator: CBDB：兄弟 王稽（198434）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王赫 与 王稽 为同胞（CBDB 记「弟」），王稽 之父／母即 王赫 之父／母。
          source:
            id: s_p2QEKZdMLseRWrXSnA8Zi7
            source_type: api_record
            title: 中国历代人物传记资料库：王赫（CBDB 271473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271473&o=json
            external_identifier: CBDB:271473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8hYUJFh9Q5fCVadiwHHmT
        status: active
        display_name: 王赫
        merged_into_person_id: null
    - claim:
        id: c_X3CpMnecKevRmythS89YIY
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yM3Q3hvVcAYjNabsHb8FDL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WtwJdKXbxk160eBw-NJ7fi
          claim_id: c_X3CpMnecKevRmythS89YIY
          source_id: s_OyqRWw3IIg8KgISCjHe-cg
          stance: supports
          locator: CBDB：兄弟 王稽（198434）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪 与 王稽 为同胞（CBDB 记「弟」），王稽 之父／母即 王洪 之父／母。
          source:
            id: s_OyqRWw3IIg8KgISCjHe-cg
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 271495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271495&o=json
            external_identifier: CBDB:271495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yM3Q3hvVcAYjNabsHb8FDL
        status: active
        display_name: 王洪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | 王忠，明人物。景泰五年進士，籍贯金谿，曾任巡檢。（中国历代人物传记资料库 CBDB 271429） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3vKgPJZPmMS9ZpS2a75EVV | 王稽 | accepted |
| children | p_2pz1La3gnmxK1AmRKNDz1j | 王穆 | accepted |
| children | p_ABJ8gsp2tbu2cYQ8XrpDCa | 王种 | accepted |
| children | p_VNQDAMXMGx697Aaeg6F771 | 王吉 | accepted |
| children | p_e8hYUJFh9Q5fCVadiwHHmT | 王赫 | accepted |
| children | p_yM3Q3hvVcAYjNabsHb8FDL | 王洪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王赫（CBDB 271473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271473&o=json)
- [中国历代人物传记资料库：王洪（CBDB 271495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271495&o=json)
- [中国历代人物传记资料库：王稽（CBDB 198434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198434&o=json)
- [中国历代人物传记资料库：王吉（CBDB 271484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271484&o=json)
- [中国历代人物传记资料库：王穆（CBDB 271506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271506&o=json)
- [中国历代人物传记资料库：王忠（CBDB 271429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271429&o=json)
- [中国历代人物传记资料库：王种（CBDB 271517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271517&o=json)
