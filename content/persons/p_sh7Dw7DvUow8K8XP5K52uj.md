---
schema: wang-person/v1
id: p_sh7Dw7DvUow8K8XP5K52uj
status: active
merged_into: null
display_name: 王照
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XTJCna8r6mZdokg9r63zNV
        subject_person_id: p_sh7Dw7DvUow8K8XP5K52uj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王照
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fram831U5CHTpyq58WkmDc
          claim_id: c_XTJCna8r6mZdokg9r63zNV
          source_id: s_LjprYVK8riyEgPL4g8hKAz
          stance: supports
          locator: CBDB:688061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688061）
          source: &a1
            id: s_LjprYVK8riyEgPL4g8hKAz
            source_type: api_record
            title: 中国历代人物传记资料库：王照（CBDB 688061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688061&o=json
            external_identifier: CBDB:688061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AKACz5U22ZgSGK4rDK2sDp
        subject_person_id: p_sh7Dw7DvUow8K8XP5K52uj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HBTCCBZ1c69egMWfarXUBG
          claim_id: c_AKACz5U22ZgSGK4rDK2sDp
          source_id: s_LjprYVK8riyEgPL4g8hKAz
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

# 王照

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王照 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王照（CBDB 688061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688061&o=json)
