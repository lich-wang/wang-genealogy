---
schema: wang-person/v1
id: p_U6W8y5mQF3C77Crvv2dooL
status: active
merged_into: null
display_name: 王大化
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Yt8CrNP6p7EFcj8XxkEoE
        subject_person_id: p_U6W8y5mQF3C77Crvv2dooL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B5B2ccYrBkU2XAKa4PqJcg
          claim_id: c_1Yt8CrNP6p7EFcj8XxkEoE
          source_id: s_wzq4GVcS5n3pYkMoAPNAgC
          stance: supports
          locator: CBDB:471316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471316）
          source: &a1
            id: s_wzq4GVcS5n3pYkMoAPNAgC
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 471316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471316&o=json
            external_identifier: CBDB:471316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vMJPK2SRQfnn6SA1mTHSPo
        subject_person_id: p_U6W8y5mQF3C77Crvv2dooL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P92tX9UL8ymyj7k6SNsHoM
          claim_id: c_vMJPK2SRQfnn6SA1mTHSPo
          source_id: s_wzq4GVcS5n3pYkMoAPNAgC
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
  descendants: []
  other: []
---

# 王大化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大化 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大化（CBDB 471316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471316&o=json)
