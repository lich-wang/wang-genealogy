---
schema: wang-person/v1
id: p_iK1Jor2tKSMCw5YwfE1b41
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 237460
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5e2YoYta3TEaZ3_KNL_RxA
        subject_person_id: p_iK1Jor2tKSMCw5YwfE1b41
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ku1xszK74BDGRD-a5vQPr9
          claim_id: c_5e2YoYta3TEaZ3_KNL_RxA
          source_id: s_4WFbBs4anY5vNvAP_sqKjc
          stance: supports
          locator: CBDB:237460
          quotation: null
          interpretation_note: CBDB 明确记录的王璟配偶
          source: &a1
            id: s_4WFbBs4anY5vNvAP_sqKjc
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王璟妻)（CBDB 237460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237460&o=json
            external_identifier: CBDB:237460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_wpu5fgTcLRkDw40hcrHLVx
        subject_person_id: p_77xZoKtiK3NRKg79yXDSya
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iK1Jor2tKSMCw5YwfE1b41
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kdtzFqAVqibSVXQMvyk-8M
          claim_id: c_wpu5fgTcLRkDw40hcrHLVx
          source_id: s_4WFbBs4anY5vNvAP_sqKjc
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第六十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_77xZoKtiK3NRKg79yXDSya
        status: active
        display_name: 王璟
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_77xZoKtiK3NRKg79yXDSya | 王璟 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王璟妻)（CBDB 237460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237460&o=json)
