---
schema: wang-person/v1
id: p_8R7HPFkFDXrvifr3jfnRM7
status: active
merged_into: null
display_name: 王允恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WRXrD3A96tH2pVX714ppev
        subject_person_id: p_8R7HPFkFDXrvifr3jfnRM7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_STQt4U2K1a4z1CqjzF1E4Y
          claim_id: c_WRXrD3A96tH2pVX714ppev
          source_id: s_2eEbYEdMZaR1WDjz8fVuXf
          stance: supports
          locator: CBDB:688844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688844）
          source: &a1
            id: s_2eEbYEdMZaR1WDjz8fVuXf
            source_type: api_record
            title: 中国历代人物传记资料库：王允恭（CBDB 688844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688844&o=json
            external_identifier: CBDB:688844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2YFu9QT4ru8RDNKFCUJGSq
        subject_person_id: p_8R7HPFkFDXrvifr3jfnRM7
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
        - id: cs_qB7boNghYF2GBSeXFZTp6C
          claim_id: c_2YFu9QT4ru8RDNKFCUJGSq
          source_id: s_2eEbYEdMZaR1WDjz8fVuXf
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

# 王允恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允恭 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允恭（CBDB 688844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688844&o=json)
