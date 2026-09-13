---
schema: wang-person/v1
id: p_BdmxytotV7zqZnEBKrEUyP
status: active
merged_into: null
display_name: 王纶
cbdb_id: 277430
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o6H1oECKeCNohmQjKL6SHr
        subject_person_id: p_BdmxytotV7zqZnEBKrEUyP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纶，明人物。正德六年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 277430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_8Tru4EUqs2bNzKf5qhtty3
          claim_id: c_o6H1oECKeCNohmQjKL6SHr
          source_id: s_jwpL4YCme3VDd3qJnCQEE4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_jwpL4YCme3VDd3qJnCQEE4
            source_type: api_record
            title: 维基数据：王纶（Q45663776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663776
            external_identifier: Q45663776
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
        - id: cs_4GyH-8bnarK_38p2XA99ID
          claim_id: c_o6H1oECKeCNohmQjKL6SHr
          source_id: s_yMMxyo8vRCvjeb5kyddaVn
          stance: supports
          locator: CBDB:277430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yMMxyo8vRCvjeb5kyddaVn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綸（277430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277430&o=json
            external_identifier: CBDB:277430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:40.784Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_x9LbmrHDKCyCYRBtyrufMg
        subject_person_id: p_BdmxytotV7zqZnEBKrEUyP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_f9VV66yG5o61ofG8ZWQ4o4
          claim_id: c_x9LbmrHDKCyCYRBtyrufMg
          source_id: s_yMMxyo8vRCvjeb5kyddaVn
          stance: supports
          locator: Q45663776
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_keUi7gWCpREgYLBqccA6a6
          claim_id: c_x9LbmrHDKCyCYRBtyrufMg
          source_id: s_jwpL4YCme3VDd3qJnCQEE4
          stance: supports
          locator: Q45663776
          quotation: null
          interpretation_note: null
          source:
            id: s_jwpL4YCme3VDd3qJnCQEE4
            source_type: api_record
            title: 维基数据：王纶（Q45663776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663776
            external_identifier: Q45663776
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zcM7p63JNv8oUDLiuTDSYn
        subject_person_id: p_ofwfED7cGNaG45dVNWJBNj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BdmxytotV7zqZnEBKrEUyP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYUMbWHdZ15MJ29UQpRFsb
          claim_id: c_zcM7p63JNv8oUDLiuTDSYn
          source_id: s_jwpL4YCme3VDd3qJnCQEE4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_X98ycHrTXxUuc6MENJ15NT
          claim_id: c_zcM7p63JNv8oUDLiuTDSYn
          source_id: s_SYCC4D3gpxEXf8QPU9rNwS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SYCC4D3gpxEXf8QPU9rNwS
            source_type: api_record
            title: 维基数据：王䪧（Q45663719）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663719
            external_identifier: Q45663719
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
      object_person:
        id: p_ofwfED7cGNaG45dVNWJBNj
        status: active
        display_name: 王䪧
        merged_into_person_id: null
  children:
    - claim:
        id: c_FTKvMumAHJW25Bo98hMwgU
        subject_person_id: p_BdmxytotV7zqZnEBKrEUyP
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_xTUQkpHtgJpkRB8hx9DSUD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_acY1UcJWXAXnWno4BL5oKK
          claim_id: c_FTKvMumAHJW25Bo98hMwgU
          source_id: s_7NsrDwMNaCv8dkJCGJP3NP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7NsrDwMNaCv8dkJCGJP3NP
            source_type: api_record
            title: 维基数据：王以旗（Q15916579）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916579
            external_identifier: Q15916579
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:20.057Z
            metadata_json: null
        - id: cs_rxSG8Z9QFGWVCFfA8FymVD
          claim_id: c_FTKvMumAHJW25Bo98hMwgU
          source_id: s_jwpL4YCme3VDd3qJnCQEE4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jwpL4YCme3VDd3qJnCQEE4
            source_type: api_record
            title: 维基数据：王纶（Q45663776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663776
            external_identifier: Q45663776
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
      object_person:
        id: p_xTUQkpHtgJpkRB8hx9DSUD
        status: active
        display_name: 王以旗
        merged_into_person_id: null
    - claim:
        id: c_SmFiuzZK10Rkaw9xQucYlS
        subject_person_id: p_BdmxytotV7zqZnEBKrEUyP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HkYj7LW8rVxG-K4c4zbgNv
          claim_id: c_SmFiuzZK10Rkaw9xQucYlS
          source_id: s_yMMxyo8vRCvjeb5kyddaVn
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第四十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PuUiGdtpzWdsK7wcEt3S7p
        status: active
        display_name: 王以旂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纶，明人物。正德六年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 277430） | accepted |
| name.primary | 王纶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ofwfED7cGNaG45dVNWJBNj | 王䪧 | accepted |
| children | p_xTUQkpHtgJpkRB8hx9DSUD | 王以旗 | accepted |
| children | p_PuUiGdtpzWdsK7wcEt3S7p | 王以旂 | accepted |

## 外部来源

- [维基数据：王纶（Q45663776）](https://www.wikidata.org/wiki/Q45663776)
- [维基数据：王以旗（Q15916579）](https://www.wikidata.org/wiki/Q15916579)
- [维基数据：王䪧（Q45663719）](https://www.wikidata.org/wiki/Q45663719)
- [CBDB 中国历代人物传记资料库：王綸（277430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277430&o=json)
