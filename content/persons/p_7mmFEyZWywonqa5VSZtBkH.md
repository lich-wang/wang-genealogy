---
schema: wang-person/v1
id: p_7mmFEyZWywonqa5VSZtBkH
status: active
merged_into: null
display_name: 王宗靖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KdRY1h8eHt5spHi6P5R3uZ
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FhAug4g9GA9Gsy1mtA4dR5
          claim_id: c_KdRY1h8eHt5spHi6P5R3uZ
          source_id: s_w1YnkyRZphMzkRJWxURuiC
          stance: supports
          locator: CBDB:225727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225727）
          source: &a1
            id: s_w1YnkyRZphMzkRJWxURuiC
            source_type: api_record
            title: 中国历代人物传记资料库：王宗靖（CBDB 225727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225727&o=json
            external_identifier: CBDB:225727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m6CdCLDesb8YVT4dmuaHAc
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
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
        - id: cs_3kE9Xci8u4vQJ68d3g2CHB
          claim_id: c_m6CdCLDesb8YVT4dmuaHAc
          source_id: s_w1YnkyRZphMzkRJWxURuiC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2G0R0kP4oQTnHg8amLI7Cm
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QeyTyninIaSTQ-55oOaqB8
          claim_id: c_2G0R0kP4oQTnHg8amLI7Cm
          source_id: s_w1YnkyRZphMzkRJWxURuiC
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第二百六十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oKtgLK3Hc3EvgppJQNGw5k
        status: active
        display_name: 王堦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗靖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oKtgLK3Hc3EvgppJQNGw5k | 王堦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗靖（CBDB 225727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225727&o=json)
