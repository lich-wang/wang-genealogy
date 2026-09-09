---
schema: wang-person/v1
id: p_3toE8uM93DL7Cmc1LZN1Q9
status: active
merged_into: null
display_name: 王懷慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dn8666CDpBPJn2AFQbq466
        subject_person_id: p_3toE8uM93DL7Cmc1LZN1Q9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_knDfw1P3r38fF82zpY13BU
          claim_id: c_Dn8666CDpBPJn2AFQbq466
          source_id: s_pK2rQu4Pjc1ePanYZoPh8J
          stance: supports
          locator: CBDB:450814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（450814）
          source: &a1
            id: s_pK2rQu4Pjc1ePanYZoPh8J
            source_type: api_record
            title: 中国历代人物传记资料库：王懷慶（CBDB 450814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=450814&o=json
            external_identifier: CBDB:450814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8BvJQ3XeP8D8ksDQxxL21h
        subject_person_id: p_3toE8uM93DL7Cmc1LZN1Q9
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
        - id: cs_5xUnEMJs6KtToSHzyMjBDY
          claim_id: c_8BvJQ3XeP8D8ksDQxxL21h
          source_id: s_pK2rQu4Pjc1ePanYZoPh8J
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

# 王懷慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷慶 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懷慶（CBDB 450814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=450814&o=json)
