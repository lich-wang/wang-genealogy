---
schema: wang-person/v1
id: p_2CuMaqpg7jjxQA3Mr9jNS6
status: active
merged_into: null
display_name: 王龍文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uDVJ7fZ7GHxjTJtfFzeapc
        subject_person_id: p_2CuMaqpg7jjxQA3Mr9jNS6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gn1sFC6Ahw885emChk1CrZ
          claim_id: c_uDVJ7fZ7GHxjTJtfFzeapc
          source_id: s_Fhrzs7JV4v34v9FP9wrzLz
          stance: supports
          locator: CBDB:71482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71482）
          source: &a1
            id: s_Fhrzs7JV4v34v9FP9wrzLz
            source_type: api_record
            title: 中国历代人物传记资料库：王龍文（CBDB 71482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71482&o=json
            external_identifier: CBDB:71482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YQHTPosDNPLUNUyNj5JCSU
        subject_person_id: p_2CuMaqpg7jjxQA3Mr9jNS6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1863年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zbre1F3hfecMH84g7B3VzB
          claim_id: c_YQHTPosDNPLUNUyNj5JCSU
          source_id: s_Fhrzs7JV4v34v9FP9wrzLz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VT7kMDbzMBEgGN6a4nL7za
        subject_person_id: p_2CuMaqpg7jjxQA3Mr9jNS6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1923年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_89PL4K6TvRAjMZGpKv9KTA
          claim_id: c_VT7kMDbzMBEgGN6a4nL7za
          source_id: s_Fhrzs7JV4v34v9FP9wrzLz
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
        id: c_cMyscicuKkXEcQ58FGK3Lv
        subject_person_id: p_2CuMaqpg7jjxQA3Mr9jNS6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Bj1ihnUnVG82bdeGewy92
          claim_id: c_cMyscicuKkXEcQ58FGK3Lv
          source_id: s_Fhrzs7JV4v34v9FP9wrzLz
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

# 王龍文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍文 | accepted |
| birth.date | 1863年 | accepted |
| death.date | 1923年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王龍文（CBDB 71482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71482&o=json)
