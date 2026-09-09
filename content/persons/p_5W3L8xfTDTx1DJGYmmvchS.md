---
schema: wang-person/v1
id: p_5W3L8xfTDTx1DJGYmmvchS
status: active
merged_into: null
display_name: 王暠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JCtHDvL3b7jgPv9x16iAh4
        subject_person_id: p_5W3L8xfTDTx1DJGYmmvchS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L7PfPrhuFVFwZoT4QX9ab4
          claim_id: c_JCtHDvL3b7jgPv9x16iAh4
          source_id: s_du83JUEWn3vv7pFdFPH116
          stance: supports
          locator: CBDB:551544
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551544）
          source: &a1
            id: s_du83JUEWn3vv7pFdFPH116
            source_type: api_record
            title: 中国历代人物传记资料库：王暠（CBDB 551544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551544&o=json
            external_identifier: CBDB:551544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dYjkSLiLmiL1uYmjhgHDEf
        subject_person_id: p_5W3L8xfTDTx1DJGYmmvchS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1345年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EnTDLhcnh4jr6D3tu9sF4z
          claim_id: c_dYjkSLiLmiL1uYmjhgHDEf
          source_id: s_du83JUEWn3vv7pFdFPH116
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
        id: c_TEaJpCkJ2TkLKawnjmnVQ1
        subject_person_id: p_5W3L8xfTDTx1DJGYmmvchS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为高麗人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yV8CGtVG1TRQnvGfnjG1jZ
          claim_id: c_TEaJpCkJ2TkLKawnjmnVQ1
          source_id: s_du83JUEWn3vv7pFdFPH116
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

# 王暠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暠 | accepted |
| death.date | 1345年 | accepted |
| bio.summary | CBDB 记载为高麗人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暠（CBDB 551544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551544&o=json)
