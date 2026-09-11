---
schema: wang-person/v1
id: p_8NRY5UkMDbmzu8kjgpkSX6
status: active
merged_into: null
display_name: 王萬清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t3kQnSKQB1ur5RRXCX1ka6
        subject_person_id: p_8NRY5UkMDbmzu8kjgpkSX6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h7rAoi9G78QvTDgGAEDRk3
          claim_id: c_t3kQnSKQB1ur5RRXCX1ka6
          source_id: s_oBYkEVeoD6E7bY6iQNZMgo
          stance: supports
          locator: CBDB:69369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69369）
          source: &a1
            id: s_oBYkEVeoD6E7bY6iQNZMgo
            source_type: api_record
            title: 中国历代人物传记资料库：王萬清（CBDB 69369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69369&o=json
            external_identifier: CBDB:69369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MRKZARD5VFhwDXEoUgLDFM
        subject_person_id: p_8NRY5UkMDbmzu8kjgpkSX6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1827年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PmkzxetYcUJHwciyLtF6DP
          claim_id: c_MRKZARD5VFhwDXEoUgLDFM
          source_id: s_oBYkEVeoD6E7bY6iQNZMgo
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
        id: c_vNsukz4JZ6U8AiFwoBt61X
        subject_person_id: p_8NRY5UkMDbmzu8kjgpkSX6
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
        - id: cs_TiTeS2sQaWpQ2yULzCDKCP
          claim_id: c_vNsukz4JZ6U8AiFwoBt61X
          source_id: s_oBYkEVeoD6E7bY6iQNZMgo
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
        id: c_VPosGathC9xSiWVze0yQXW
        subject_person_id: p_8NRY5UkMDbmzu8kjgpkSX6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xxBKqkBH8siQZpCzhW3m52
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cCL_H_IKtf9x5VEQVZhV33
          claim_id: c_VPosGathC9xSiWVze0yQXW
          source_id: s_oBYkEVeoD6E7bY6iQNZMgo
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13074：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xxBKqkBH8siQZpCzhW3m52
        status: active
        display_name: 王安城
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王萬清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬清 | accepted |
| death.date | 1827年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xxBKqkBH8siQZpCzhW3m52 | 王安城 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬清（CBDB 69369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69369&o=json)
