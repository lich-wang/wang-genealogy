---
schema: wang-person/v1
id: p_dH2xuW5Lt7eGA9nJNsvby5
status: active
merged_into: null
display_name: 王浩
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7mjD8spufUUPvrtG8ENDE1
        subject_person_id: p_dH2xuW5Lt7eGA9nJNsvby5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Uo8sMxo5CoAuxLLJYUFS3
          claim_id: c_7mjD8spufUUPvrtG8ENDE1
          source_id: s_4Jd3SGz3ToLj2uBg4TUMBw
          stance: supports
          locator: CBDB:280589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280589）
          source: &a1
            id: s_4Jd3SGz3ToLj2uBg4TUMBw
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 280589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280589&o=json
            external_identifier: CBDB:280589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tPV9qoUB94ha177pA2BAiD
        subject_person_id: p_dH2xuW5Lt7eGA9nJNsvby5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩，明人物。正德十二年進士，籍贯淅川，曾任知縣。（中国历代人物传记资料库 CBDB 280589）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MpV2RADddbpZ9C2of8s4TB
          claim_id: c_tPV9qoUB94ha177pA2BAiD
          source_id: s_4Jd3SGz3ToLj2uBg4TUMBw
          stance: supports
          locator: CBDB:280589
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qWdk02Z7LTSjPX-vUF9KA3
        subject_person_id: p_dH2xuW5Lt7eGA9nJNsvby5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kCdr4Vt3ng3vFN4WR6C2uB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LtXokd83HNrtUzXhMKSMKv
          claim_id: c_qWdk02Z7LTSjPX-vUF9KA3
          source_id: s_4Jd3SGz3ToLj2uBg4TUMBw
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百一十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kCdr4Vt3ng3vFN4WR6C2uB
        status: active
        display_name: 王尚志
        merged_into_person_id: null
    - claim:
        id: c_RbDr2fvhKeAFvPbjrupdN5
        subject_person_id: p_dH2xuW5Lt7eGA9nJNsvby5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_77Wg266yLAs2nXX7duMNPG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jVbqR3iWT7WzX--KNIFHtS
          claim_id: c_RbDr2fvhKeAFvPbjrupdN5
          source_id: s_MKkVb_R77g_gcLzESKe_YH
          stance: supports
          locator: CBDB：兄弟 王尚志（201927）之父／母 王浩
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚忠 与 王尚志 为同胞（CBDB 记「弟」），王尚志 之父／母即 王尚忠 之父／母。
          source:
            id: s_MKkVb_R77g_gcLzESKe_YH
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 280593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280593&o=json
            external_identifier: CBDB:280593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_77Wg266yLAs2nXX7duMNPG
        status: active
        display_name: 王尚忠
        merged_into_person_id: null
    - claim:
        id: c_wI8X9ggJ3TuntOh3XwpiNb
        subject_person_id: p_dH2xuW5Lt7eGA9nJNsvby5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9krHiUjsyZkZorguPCMSqA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lX4MrowDAOp22t2jC4BEN0
          claim_id: c_wI8X9ggJ3TuntOh3XwpiNb
          source_id: s_WxbX0WUZ9fr37oSJ6YXKHr
          stance: supports
          locator: CBDB：兄弟 王尚志（201927）之父／母 王浩
          quotation: null
          interpretation_note: 由兄弟关系推断：王譽 与 王尚志 为同胞（CBDB 记「弟」），王尚志 之父／母即 王譽 之父／母。
          source:
            id: s_WxbX0WUZ9fr37oSJ6YXKHr
            source_type: api_record
            title: 中国历代人物传记资料库：王譽（CBDB 280594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280594&o=json
            external_identifier: CBDB:280594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9krHiUjsyZkZorguPCMSqA
        status: active
        display_name: 王譽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| bio.summary | 王浩，明人物。正德十二年進士，籍贯淅川，曾任知縣。（中国历代人物传记资料库 CBDB 280589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kCdr4Vt3ng3vFN4WR6C2uB | 王尚志 | accepted |
| children | p_77Wg266yLAs2nXX7duMNPG | 王尚忠 | accepted |
| children | p_9krHiUjsyZkZorguPCMSqA | 王譽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 280589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280589&o=json)
- [中国历代人物传记资料库：王尚忠（CBDB 280593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280593&o=json)
- [中国历代人物传记资料库：王譽（CBDB 280594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280594&o=json)
