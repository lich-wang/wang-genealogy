---
schema: wang-person/v1
id: p_rJLAb1zuPHp5jJNmMsnPmV
status: active
merged_into: null
display_name: 王定
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DL3QdKgDNr1ZgAQiN4pVXC
        subject_person_id: p_rJLAb1zuPHp5jJNmMsnPmV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CJb4Z9WV58RF1TDL5NPfVw
          claim_id: c_DL3QdKgDNr1ZgAQiN4pVXC
          source_id: s_iwU2RT9fn71Du3Fy3Cy6zP
          stance: supports
          locator: CBDB:36875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36875）
          source: &a1
            id: s_iwU2RT9fn71Du3Fy3Cy6zP
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 36875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36875&o=json
            external_identifier: CBDB:36875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EJCkKFwNqjnLDvCLBSVZ7U
        subject_person_id: p_rJLAb1zuPHp5jJNmMsnPmV
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
        - id: cs_t86KtsDiHTGf89AmJ7pRTJ
          claim_id: c_EJCkKFwNqjnLDvCLBSVZ7U
          source_id: s_iwU2RT9fn71Du3Fy3Cy6zP
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

# 王定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 36875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36875&o=json)
