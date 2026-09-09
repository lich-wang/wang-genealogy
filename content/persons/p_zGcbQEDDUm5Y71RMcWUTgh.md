---
schema: wang-person/v1
id: p_zGcbQEDDUm5Y71RMcWUTgh
status: active
merged_into: null
display_name: 王鎡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EymtUQKuZMP33KAZGHHEHF
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1wrCupPm8ZuzvHm487TPqJ
          claim_id: c_EymtUQKuZMP33KAZGHHEHF
          source_id: s_vJU69VwCVCj51QDFCVypTL
          stance: supports
          locator: CBDB:22083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22083）
          source: &a1
            id: s_vJU69VwCVCj51QDFCVypTL
            source_type: api_record
            title: 中国历代人物传记资料库：王鎡（CBDB 22083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22083&o=json
            external_identifier: CBDB:22083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ATVqi163PYktHWsLjmoEbG
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
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
        - id: cs_ZQ9GJJbMKJ79Aau5eUhPyU
          claim_id: c_ATVqi163PYktHWsLjmoEbG
          source_id: s_vJU69VwCVCj51QDFCVypTL
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

# 王鎡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎡 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎡（CBDB 22083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22083&o=json)
