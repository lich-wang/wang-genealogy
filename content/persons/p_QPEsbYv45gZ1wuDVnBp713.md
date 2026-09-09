---
schema: wang-person/v1
id: p_QPEsbYv45gZ1wuDVnBp713
status: active
merged_into: null
display_name: 王略
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F898BDwRhp3QB7Xk5LdCs4
        subject_person_id: p_QPEsbYv45gZ1wuDVnBp713
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王略
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VMk4CMZADPG1EDoyGDSq5K
          claim_id: c_F898BDwRhp3QB7Xk5LdCs4
          source_id: s_RwtKPQXb3KrqS74WMJS1Ez
          stance: supports
          locator: CBDB:37859
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37859）
          source: &a1
            id: s_RwtKPQXb3KrqS74WMJS1Ez
            source_type: api_record
            title: 中国历代人物传记资料库：王略（CBDB 37859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37859&o=json
            external_identifier: CBDB:37859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xJbXpkznEncLRP2AZTtU1J
        subject_person_id: p_QPEsbYv45gZ1wuDVnBp713
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
        - id: cs_4rEaAn5MmDHkWQpeq7Ut95
          claim_id: c_xJbXpkznEncLRP2AZTtU1J
          source_id: s_RwtKPQXb3KrqS74WMJS1Ez
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

# 王略

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王略 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王略（CBDB 37859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37859&o=json)
