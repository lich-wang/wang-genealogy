---
schema: wang-person/v1
id: p_zDqWGnkLPXbEcaV9HD6KiU
status: active
merged_into: null
display_name: 王忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dXNxgLkKszK3NRaMMCsXd3
        subject_person_id: p_zDqWGnkLPXbEcaV9HD6KiU
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
        - id: cs_19AeDbE9s9zyfX5yjLiSTA
          claim_id: c_dXNxgLkKszK3NRaMMCsXd3
          source_id: s_tH8pVqSpGZXuZUCiFWdJkL
          stance: supports
          locator: CBDB:272387
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272387）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x6AoJBWNxAWkjPHoAQyFxC
        subject_person_id: p_zDqWGnkLPXbEcaV9HD6KiU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qPigokffdsJt6KVXuuRUsF
          claim_id: c_x6AoJBWNxAWkjPHoAQyFxC
          source_id: s_tH8pVqSpGZXuZUCiFWdJkL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
          source: *a1
      object_person:
        id: p_G5CWBF7uCCTFxLBu21txfC
        status: active
        display_name: 王萱
        merged_into_person_id: null
    - claim:
        id: c_Ow58vbBxsLJzSNvOtEDP69
        subject_person_id: p_zDqWGnkLPXbEcaV9HD6KiU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aEsLhzJM2J5736Dvki9e9Z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vCw7XFwQYPsnnHB4AgZ9G1
          claim_id: c_Ow58vbBxsLJzSNvOtEDP69
          source_id: s_tH8pVqSpGZXuZUCiFWdJkL
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第九十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aEsLhzJM2J5736Dvki9e9Z
        status: active
        display_name: 王蓂
        merged_into_person_id: null
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_G5CWBF7uCCTFxLBu21txfC | 王萱 | accepted |
| descendants | p_aEsLhzJM2J5736Dvki9e9Z | 王蓂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 272387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272387&o=json)
