---
schema: wang-person/v1
id: p_9nMQd6ceMAGfnhGs6TTb7s
status: active
merged_into: null
display_name: 王袞錫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fG5vMa6p2jcCH15RA4ZFQy
        subject_person_id: p_9nMQd6ceMAGfnhGs6TTb7s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袞錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NdHaH5bRT8P4URtrRoJHNY
          claim_id: c_fG5vMa6p2jcCH15RA4ZFQy
          source_id: s_dSJCzs2ekrJDZHTqbsR9qZ
          stance: supports
          locator: CBDB:556726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556726）
          source: &a1
            id: s_dSJCzs2ekrJDZHTqbsR9qZ
            source_type: api_record
            title: 中国历代人物传记资料库：王袞錫（CBDB 556726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556726&o=json
            external_identifier: CBDB:556726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qp37YFgMuY8YyPaVHd4TEG
        subject_person_id: p_9nMQd6ceMAGfnhGs6TTb7s
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
        - id: cs_bRJCcYExARArKCmcBc2Uhn
          claim_id: c_Qp37YFgMuY8YyPaVHd4TEG
          source_id: s_dSJCzs2ekrJDZHTqbsR9qZ
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
  ancestors:
    - claim:
        id: c_M5ZiKJTPsEHi-8d_s2U2PX
        subject_person_id: p_ftZ1PRscrPmBh4Qh3AiyfY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9nMQd6ceMAGfnhGs6TTb7s
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MZWFxTDJop9sRjrhDbJAJs
          claim_id: c_M5ZiKJTPsEHi-8d_s2U2PX
          source_id: s_dSJCzs2ekrJDZHTqbsR9qZ
          stance: supports
          locator: 紹興府志:八十卷，Igid=316302：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ftZ1PRscrPmBh4Qh3AiyfY
        status: active
        display_name: 王思任
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王袞錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王袞錫 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ftZ1PRscrPmBh4Qh3AiyfY | 王思任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王袞錫（CBDB 556726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556726&o=json)
