---
schema: wang-person/v1
id: p_AWHrZaKAHaZx3V7FVZzpXg
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 385798
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L-2ht48CQqyfrL3MIrDn3v
        subject_person_id: p_AWHrZaKAHaZx3V7FVZzpXg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_owTF0O9eQbBa_MlI6ISi57
          claim_id: c_L-2ht48CQqyfrL3MIrDn3v
          source_id: s_Iz0WYyrN04YzJVnnqNQ-9x
          stance: supports
          locator: CBDB:385798
          quotation: null
          interpretation_note: CBDB 明确记录的王登配偶
          source: &a1
            id: s_Iz0WYyrN04YzJVnnqNQ-9x
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(陳珫女)（CBDB 385798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385798&o=json
            external_identifier: CBDB:385798
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
        id: c_Aehh6xCtWnFnF4v6JZuErN
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_AWHrZaKAHaZx3V7FVZzpXg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FgOaqW_IY7ybSe1A7mXk9K
          claim_id: c_Aehh6xCtWnFnF4v6JZuErN
          source_id: s_Iz0WYyrN04YzJVnnqNQ-9x
          stance: supports
          locator: 全宋文，卷 5677：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_35wd94gwG3pzokf4a6CedM
        status: active
        display_name: 王登
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_35wd94gwG3pzokf4a6CedM | 王登 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(陳珫女)（CBDB 385798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385798&o=json)
