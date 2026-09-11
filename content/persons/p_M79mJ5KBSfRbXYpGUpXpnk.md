---
schema: wang-person/v1
id: p_M79mJ5KBSfRbXYpGUpXpnk
status: active
merged_into: null
display_name: 王銳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AJeLXCEKd6ALPoZkHNAuBn
        subject_person_id: p_M79mJ5KBSfRbXYpGUpXpnk
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
        - id: cs_TF4iCXJRkonCUh22NQaYGE
          claim_id: c_AJeLXCEKd6ALPoZkHNAuBn
          source_id: s_Jdtxpb4ABi4DBFQTq6fXCA
          stance: supports
          locator: CBDB:317397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317397）
          source: &a1
            id: s_Jdtxpb4ABi4DBFQTq6fXCA
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 317397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317397&o=json
            external_identifier: CBDB:317397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Sajz6h6T5AoN43WxxWVve
        subject_person_id: p_M79mJ5KBSfRbXYpGUpXpnk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳，明人物。嘉靖三十二年進士，籍贯薊州。（中国历代人物传记资料库 CBDB 317397）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FJkEQSI91b_Mv8TUTxvkDL
          claim_id: c_3Sajz6h6T5AoN43WxxWVve
          source_id: s_Jdtxpb4ABi4DBFQTq6fXCA
          stance: supports
          locator: CBDB:317397
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7LZTZvJ2c_YdfPUFl8Vmdr
        subject_person_id: p_M79mJ5KBSfRbXYpGUpXpnk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1oodw5KMyHddZ5LmNR35kQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LUH0zc9ruvph0ZAKcao8rK
          claim_id: c_7LZTZvJ2c_YdfPUFl8Vmdr
          source_id: s_Jdtxpb4ABi4DBFQTq6fXCA
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1oodw5KMyHddZ5LmNR35kQ
        status: active
        display_name: 王汝正
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
| bio.summary | 王銳，明人物。嘉靖三十二年進士，籍贯薊州。（中国历代人物传记资料库 CBDB 317397） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1oodw5KMyHddZ5LmNR35kQ | 王汝正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 317397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317397&o=json)
