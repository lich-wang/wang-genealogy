---
schema: wang-person/v1
id: p_2NwHNFLfCfq3mSTEyrq4Cx
status: active
merged_into: null
display_name: 王珍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cFhUtanQ3E15iGZbHz97Dm
        subject_person_id: p_2NwHNFLfCfq3mSTEyrq4Cx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ajDDAeDPnSWCfcwVhrJD7g
          claim_id: c_cFhUtanQ3E15iGZbHz97Dm
          source_id: s_EVHfsA7TWh9EWHVxePtiCX
          stance: supports
          locator: CBDB:213298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213298）
          source: &a1
            id: s_EVHfsA7TWh9EWHVxePtiCX
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 213298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213298&o=json
            external_identifier: CBDB:213298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kRNZE9qmCJr1qjmb9ZiZs6
        subject_person_id: p_2NwHNFLfCfq3mSTEyrq4Cx
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
        - id: cs_hAEWXGi3JRpUrSQNSEpX9D
          claim_id: c_kRNZE9qmCJr1qjmb9ZiZs6
          source_id: s_EVHfsA7TWh9EWHVxePtiCX
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
        id: c_bboOuT6zGYvwbo-d5H2WEL
        subject_person_id: p_2NwHNFLfCfq3mSTEyrq4Cx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BDGbLxvCTFWSUvdwVPuxPV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gs91lnIBQMoHdma0aUWaXJ
          claim_id: c_bboOuT6zGYvwbo-d5H2WEL
          source_id: s_EVHfsA7TWh9EWHVxePtiCX
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BDGbLxvCTFWSUvdwVPuxPV
        status: active
        display_name: 王見賓
        merged_into_person_id: null
  other: []
---

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BDGbLxvCTFWSUvdwVPuxPV | 王見賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珍（CBDB 213298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213298&o=json)
