---
schema: wang-person/v1
id: p_8xDaMWzNxnEQ59fhzP6dKw
status: active
merged_into: null
display_name: 王國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x1ELsmRdXdYUD4FrCPTRLP
        subject_person_id: p_8xDaMWzNxnEQ59fhzP6dKw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KUc7UBwHANJ3LnUrxr51UE
          claim_id: c_x1ELsmRdXdYUD4FrCPTRLP
          source_id: s_acKF8C1EtDhTAULNT1ak1E
          stance: supports
          locator: CBDB:531226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531226）
          source: &a1
            id: s_acKF8C1EtDhTAULNT1ak1E
            source_type: api_record
            title: 中国历代人物传记资料库：王國（CBDB 531226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531226&o=json
            external_identifier: CBDB:531226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y4yFng4UysMb1aCyc3XNBK
        subject_person_id: p_8xDaMWzNxnEQ59fhzP6dKw
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
        - id: cs_2y7E6Ejwai3DSUGDjM3X7F
          claim_id: c_y4yFng4UysMb1aCyc3XNBK
          source_id: s_acKF8C1EtDhTAULNT1ak1E
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

# 王國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國（CBDB 531226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531226&o=json)
