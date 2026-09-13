---
schema: wang-person/v1
id: p_1CnDV1uXu2cPKxk5ki1EED
status: active
merged_into: null
display_name: 王景道
cbdb_id: 244354
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9SCgL1qCaHCnwaNsbGRYh9
        subject_person_id: p_1CnDV1uXu2cPKxk5ki1EED
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景道，明人物。成化五年進士，曾任戶部郎中。（中国历代人物传记资料库 CBDB 244354）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_DoOY6_c2ZcaMLF6Tq6yjIx
          claim_id: c_9SCgL1qCaHCnwaNsbGRYh9
          source_id: s_UTWgaZvTyW6yG7cb28bgyB
          stance: supports
          locator: CBDB:244354
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UTWgaZvTyW6yG7cb28bgyB
            source_type: api_record
            title: 中国历代人物传记资料库：王景道（CBDB 244354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244354&o=json
            external_identifier: CBDB:244354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xW3drByL9CAs3eo36RkFCP
        subject_person_id: p_1CnDV1uXu2cPKxk5ki1EED
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pY1SYggX5be7CfBPmofEkw
          claim_id: c_xW3drByL9CAs3eo36RkFCP
          source_id: s_UTWgaZvTyW6yG7cb28bgyB
          stance: supports
          locator: CBDB:244354
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_LXjPfmgV4TxYOAPiH5qjYN
        subject_person_id: p_1CnDV1uXu2cPKxk5ki1EED
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_epxa1325d3t8zGBhqaGATe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h6J9ypsEDHmPnD7hxK8th7
          claim_id: c_LXjPfmgV4TxYOAPiH5qjYN
          source_id: s_tsLSMzErps2tPShGmMQFWS
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tsLSMzErps2tPShGmMQFWS
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 199393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199393&o=json
            external_identifier: CBDB:199393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_epxa1325d3t8zGBhqaGATe
        status: active
        display_name: 王錦
        merged_into_person_id: null
  other: []
---

# 王景道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景道，明人物。成化五年進士，曾任戶部郎中。（中国历代人物传记资料库 CBDB 244354） | accepted |
| name.primary | 王景道 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_epxa1325d3t8zGBhqaGATe | 王錦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 199393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199393&o=json)
- [中国历代人物传记资料库：王景道（CBDB 244354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244354&o=json)
