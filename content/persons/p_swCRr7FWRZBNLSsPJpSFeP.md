---
schema: wang-person/v1
id: p_swCRr7FWRZBNLSsPJpSFeP
status: active
merged_into: null
display_name: 王夢昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j93G4bjvM251ca4uGzLRrC
        subject_person_id: p_swCRr7FWRZBNLSsPJpSFeP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7VxoZyGBMztFC7W8C7CWR4
          claim_id: c_j93G4bjvM251ca4uGzLRrC
          source_id: s_EL2cjejeyQTevLAvGV9WPx
          stance: supports
          locator: CBDB:30490
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30490）
          source: &a1
            id: s_EL2cjejeyQTevLAvGV9WPx
            source_type: api_record
            title: 中国历代人物传记资料库：王夢昌（CBDB 30490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30490&o=json
            external_identifier: CBDB:30490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8MN7UGuLARzeBE9FCdLxDC
        subject_person_id: p_swCRr7FWRZBNLSsPJpSFeP
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
        - id: cs_XH17P6pAQCQY9urvJA1HN2
          claim_id: c_8MN7UGuLARzeBE9FCdLxDC
          source_id: s_EL2cjejeyQTevLAvGV9WPx
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

# 王夢昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢昌 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢昌（CBDB 30490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30490&o=json)
