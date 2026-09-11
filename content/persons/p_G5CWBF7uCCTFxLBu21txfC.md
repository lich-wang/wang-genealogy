---
schema: wang-person/v1
id: p_G5CWBF7uCCTFxLBu21txfC
status: active
merged_into: null
display_name: 王萱
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vbQj8P1oNVFLmGGfRjrfVy
        subject_person_id: p_G5CWBF7uCCTFxLBu21txfC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ig51GYQ3YhN9QDy8zFiF6
          claim_id: c_vbQj8P1oNVFLmGGfRjrfVy
          source_id: s_Po7Ghu2qkZRa7RVgkb14H3
          stance: supports
          locator: CBDB:126760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126760）
          source: &a1
            id: s_Po7Ghu2qkZRa7RVgkb14H3
            source_type: api_record
            title: 中国历代人物传记资料库：王萱（CBDB 126760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126760&o=json
            external_identifier: CBDB:126760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dnWw3YR7m1CoTw3X1avqUk
        subject_person_id: p_G5CWBF7uCCTFxLBu21txfC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1482年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JPkrBZk5UMNtrKKNMXGFEy
          claim_id: c_dnWw3YR7m1CoTw3X1avqUk
          source_id: s_Po7Ghu2qkZRa7RVgkb14H3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CTWLTL27vuH7XfLfokVhCA
        subject_person_id: p_G5CWBF7uCCTFxLBu21txfC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2N883Pn3Sf2Lw99yYtzwnY
          claim_id: c_CTWLTL27vuH7XfLfokVhCA
          source_id: s_Po7Ghu2qkZRa7RVgkb14H3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JPEouPDs69uG5SDKKS4pN3
        subject_person_id: p_G5CWBF7uCCTFxLBu21txfC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萱（1482年—1518年），明人物。籍贯金谿，身份为博學之人，入仕進士，曾任給事中、庶吉士、通政使。（中国历代人物传记资料库 CBDB 126760）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4Zf_WhO94qNonfFC0WrHTA
          claim_id: c_JPEouPDs69uG5SDKKS4pN3
          source_id: s_Po7Ghu2qkZRa7RVgkb14H3
          stance: supports
          locator: CBDB:126760
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4Xa_sdQ2-wj0ENjavgUOIu
        subject_person_id: p_gGC23xhwQXL2gcAMcS3G3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G5CWBF7uCCTFxLBu21txfC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DuEnPR11xJ-9uNXhT11ZNt
          claim_id: c_4Xa_sdQ2-wj0ENjavgUOIu
          source_id: s_F2ub4THmm62GUS1a2VdLK1
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百七十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F2ub4THmm62GUS1a2VdLK1
            source_type: api_record
            title: 中国历代人物传记资料库：王序（CBDB 272389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272389&o=json
            external_identifier: CBDB:272389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gGC23xhwQXL2gcAMcS3G3U
        status: active
        display_name: 王序
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_B7F3kcQHKdoH2uYKJOSr89
        subject_person_id: p_dYegPiWdT54QHJwpw2osf4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G5CWBF7uCCTFxLBu21txfC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tQaY-K09rDWM32cI6XyYaB
          claim_id: c_B7F3kcQHKdoH2uYKJOSr89
          source_id: s_pay7sv6ejVEo8FKXMYVU5q
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百七十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pay7sv6ejVEo8FKXMYVU5q
            source_type: api_record
            title: 中国历代人物传记资料库：王吉（CBDB 272388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272388&o=json
            external_identifier: CBDB:272388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dYegPiWdT54QHJwpw2osf4
        status: active
        display_name: 王吉
        merged_into_person_id: null
    - claim:
        id: c_UtvI_2pq9r5hyLL6j_aoOr
        subject_person_id: p_zDqWGnkLPXbEcaV9HD6KiU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G5CWBF7uCCTFxLBu21txfC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JBcGhEaCZvJ1Gar61bmVqJ
          claim_id: c_UtvI_2pq9r5hyLL6j_aoOr
          source_id: s_tH8pVqSpGZXuZUCiFWdJkL
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百七十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tH8pVqSpGZXuZUCiFWdJkL
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 272387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272387&o=json
            external_identifier: CBDB:272387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zDqWGnkLPXbEcaV9HD6KiU
        status: active
        display_name: 王忠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王萱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萱 | accepted |
| birth.date | 1482年 | accepted |
| death.date | 1518年 | accepted |
| bio.summary | 王萱（1482年—1518年），明人物。籍贯金谿，身份为博學之人，入仕進士，曾任給事中、庶吉士、通政使。（中国历代人物传记资料库 CBDB 126760） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGC23xhwQXL2gcAMcS3G3U | 王序 | accepted |
| ancestors | p_dYegPiWdT54QHJwpw2osf4 | 王吉 | accepted |
| ancestors | p_zDqWGnkLPXbEcaV9HD6KiU | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王吉（CBDB 272388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272388&o=json)
- [中国历代人物传记资料库：王序（CBDB 272389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272389&o=json)
- [中国历代人物传记资料库：王萱（CBDB 126760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126760&o=json)
- [中国历代人物传记资料库：王忠（CBDB 272387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272387&o=json)
