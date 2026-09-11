---
schema: wang-person/v1
id: p_HY2YuL547Kh5aqzUsBs5ED
status: active
merged_into: null
display_name: 王應奎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Ne87RdeVzyRWC9VpXKVyj
        subject_person_id: p_HY2YuL547Kh5aqzUsBs5ED
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rE8G9J9bbwooZvrJUbuRCH
          claim_id: c_2Ne87RdeVzyRWC9VpXKVyj
          source_id: s_We8vizuHiJK4rXEBZdUvF1
          stance: supports
          locator: CBDB:213996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213996）
          source: &a1
            id: s_We8vizuHiJK4rXEBZdUvF1
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 213996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213996&o=json
            external_identifier: CBDB:213996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rPynu9EjPmnaJ16MpiHDPJ
        subject_person_id: p_HY2YuL547Kh5aqzUsBs5ED
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
        - id: cs_tq6tXdALsWBYA3zidZQvjn
          claim_id: c_rPynu9EjPmnaJ16MpiHDPJ
          source_id: s_We8vizuHiJK4rXEBZdUvF1
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
        id: c_u16gKSGfx17NTi7z8ZJQff
        subject_person_id: p_HY2YuL547Kh5aqzUsBs5ED
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRiGw_Oi6q0_P6xy_7_yw4
          claim_id: c_u16gKSGfx17NTi7z8ZJQff
          source_id: s_We8vizuHiJK4rXEBZdUvF1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oXDRfETnLuW3oEE7nvKJYF
        status: active
        display_name: 王國賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應奎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oXDRfETnLuW3oEE7nvKJYF | 王國賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應奎（CBDB 213996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213996&o=json)
