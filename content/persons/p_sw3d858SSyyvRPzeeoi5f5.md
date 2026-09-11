---
schema: wang-person/v1
id: p_sw3d858SSyyvRPzeeoi5f5
status: active
merged_into: null
display_name: 王纲
cbdb_id: 246750
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NypPCCEvJPHPR1xB3KEwRf
        subject_person_id: p_sw3d858SSyyvRPzeeoi5f5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纲，明人物。CBDB 记录其籍贯记录为沂州，曾任倉大使。中国历代人物传记资料库（CBDB）以人物编号 246750 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zkDp5FCbNv7CqmvZCjPZii
          claim_id: c_NypPCCEvJPHPR1xB3KEwRf
          source_id: s_ZoETyCvgGMb1E4U4fBAXm5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZoETyCvgGMb1E4U4fBAXm5
            source_type: api_record
            title: 维基数据：王纲（Q45484265）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45484265
            external_identifier: Q45484265
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs_Y-eVXvuo5YtFyjH35sVcHC
          claim_id: c_NypPCCEvJPHPR1xB3KEwRf
          source_id: s_r9QnLpEBAEg45SiFrhK6aC
          stance: supports
          locator: CBDB:246750
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_r9QnLpEBAEg45SiFrhK6aC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綱（246750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246750&o=json
            external_identifier: CBDB:246750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:52.244Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XajYLVhr7F5UAyue7FRQ9P
        subject_person_id: p_sw3d858SSyyvRPzeeoi5f5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纲
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FiTtnGKJtQbSGjRdba9XWG
          claim_id: c_XajYLVhr7F5UAyue7FRQ9P
          source_id: s_ZoETyCvgGMb1E4U4fBAXm5
          stance: supports
          locator: Q45484265
          quotation: null
          interpretation_note: null
          source:
            id: s_ZoETyCvgGMb1E4U4fBAXm5
            source_type: api_record
            title: 维基数据：王纲（Q45484265）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45484265
            external_identifier: Q45484265
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs_kx8MBrUE1sQTpThTg3Eeom
          claim_id: c_XajYLVhr7F5UAyue7FRQ9P
          source_id: s_r9QnLpEBAEg45SiFrhK6aC
          stance: supports
          locator: Q45484265
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nwPheyS2bBdPZJrN52kbMD
        subject_person_id: p_L6DCbYaxvTKejPkJXVgChn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sw3d858SSyyvRPzeeoi5f5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FdhPD4z6biT89E5kxDaPBD
          claim_id: c_nwPheyS2bBdPZJrN52kbMD
          source_id: s_ZoETyCvgGMb1E4U4fBAXm5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZoETyCvgGMb1E4U4fBAXm5
            source_type: api_record
            title: 维基数据：王纲（Q45484265）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45484265
            external_identifier: Q45484265
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs_7T1B5iUiuNS6gNm1t4KrZ1
          claim_id: c_nwPheyS2bBdPZJrN52kbMD
          source_id: s_KM9WYhfJLbb5kUWzQPKTz3
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KM9WYhfJLbb5kUWzQPKTz3
            source_type: api_record
            title: 维基数据：王升（Q45484201）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45484201
            external_identifier: Q45484201
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
      object_person:
        id: p_L6DCbYaxvTKejPkJXVgChn
        status: active
        display_name: 王升
        merged_into_person_id: null
  children:
    - claim:
        id: c_PexpQD5KjWahBPE3zNjTo6
        subject_person_id: p_sw3d858SSyyvRPzeeoi5f5
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_7koQzcggkeDLYupbQwieGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EkHnbN65Erdbkm8xLWa5dg
          claim_id: c_PexpQD5KjWahBPE3zNjTo6
          source_id: s_xsPTYDtJ99pFyKQsn3EBUa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xsPTYDtJ99pFyKQsn3EBUa
            source_type: api_record
            title: 维基数据：王璟（Q15929306）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15929306
            external_identifier: Q15929306
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:35.752Z
            metadata_json: null
        - id: cs_dYE68Lf2TKshMwhVkEPR5H
          claim_id: c_PexpQD5KjWahBPE3zNjTo6
          source_id: s_ZoETyCvgGMb1E4U4fBAXm5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZoETyCvgGMb1E4U4fBAXm5
            source_type: api_record
            title: 维基数据：王纲（Q45484265）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45484265
            external_identifier: Q45484265
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
      object_person:
        id: p_7koQzcggkeDLYupbQwieGE
        status: active
        display_name: 王璟
        merged_into_person_id: null
    - claim:
        id: c_P0uudqNTOIcKVu6-nWdmyq
        subject_person_id: p_sw3d858SSyyvRPzeeoi5f5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WiwMbe5khxgYE1U6q8kKz5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q8gl2p1kffLDisSWpSPGfZ
          claim_id: c_P0uudqNTOIcKVu6-nWdmyq
          source_id: s_r9QnLpEBAEg45SiFrhK6aC
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WiwMbe5khxgYE1U6q8kKz5
        status: active
        display_name: 王璟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纲，明人物。CBDB 记录其籍贯记录为沂州，曾任倉大使。中国历代人物传记资料库（CBDB）以人物编号 246750 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王纲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L6DCbYaxvTKejPkJXVgChn | 王升 | accepted |
| children | p_7koQzcggkeDLYupbQwieGE | 王璟 | accepted |
| children | p_WiwMbe5khxgYE1U6q8kKz5 | 王璟 | accepted |

## 外部来源

- [维基数据：王纲（Q45484265）](https://www.wikidata.org/wiki/Q45484265)
- [维基数据：王璟（Q15929306）](https://www.wikidata.org/wiki/Q15929306)
- [维基数据：王升（Q45484201）](https://www.wikidata.org/wiki/Q45484201)
- [CBDB 中国历代人物传记资料库：王綱（246750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246750&o=json)
