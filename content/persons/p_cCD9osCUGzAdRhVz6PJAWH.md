---
schema: wang-person/v1
id: p_cCD9osCUGzAdRhVz6PJAWH
status: active
merged_into: null
display_name: 王昇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b3421CTnmcK8AZbDmcmhQH
        subject_person_id: p_cCD9osCUGzAdRhVz6PJAWH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DLDGViYh47XKFZy9CPhw7N
          claim_id: c_b3421CTnmcK8AZbDmcmhQH
          source_id: s_wwPjdpw8dLn9GVsKm4bx2u
          stance: supports
          locator: CBDB:39461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39461）
          source: &a1
            id: s_wwPjdpw8dLn9GVsKm4bx2u
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 39461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39461&o=json
            external_identifier: CBDB:39461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_L6VDwvGoMiQiazT6tVdPNZ
        subject_person_id: p_cCD9osCUGzAdRhVz6PJAWH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1054年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LJ3ao12n91t9KyLkSTdW2H
          claim_id: c_L6VDwvGoMiQiazT6tVdPNZ
          source_id: s_wwPjdpw8dLn9GVsKm4bx2u
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
        id: c_mbKVHA1YnV3exhntevNbjy
        subject_person_id: p_cCD9osCUGzAdRhVz6PJAWH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1132年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHut9oBDuifEYs5c8g61DL
          claim_id: c_mbKVHA1YnV3exhntevNbjy
          source_id: s_wwPjdpw8dLn9GVsKm4bx2u
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
        id: c_Aov3tay7Z2J5yDYnFAE8S6
        subject_person_id: p_cCD9osCUGzAdRhVz6PJAWH
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
        - id: cs_Rn3zAspDfxDar7V3tmUWCX
          claim_id: c_Aov3tay7Z2J5yDYnFAE8S6
          source_id: s_wwPjdpw8dLn9GVsKm4bx2u
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

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| birth.date | 1054年 | accepted |
| death.date | 1132年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 39461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39461&o=json)
