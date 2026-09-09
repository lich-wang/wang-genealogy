---
schema: wang-person/v1
id: p_f5U9vgpZDVZxNB7Ag9e5PP
status: active
merged_into: null
display_name: 王元震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B2k9WDQhSptt83RD2jM9pW
        subject_person_id: p_f5U9vgpZDVZxNB7Ag9e5PP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8dZ8GdTJnnA2T6Ujs8ZRgt
          claim_id: c_B2k9WDQhSptt83RD2jM9pW
          source_id: s_pWyVHD68YeCJ8whFK8L4yx
          stance: supports
          locator: CBDB:688229
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688229）
          source: &a1
            id: s_pWyVHD68YeCJ8whFK8L4yx
            source_type: api_record
            title: 中国历代人物传记资料库：王元震（CBDB 688229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688229&o=json
            external_identifier: CBDB:688229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gGr4WM13PVY5Dw1tZDKPPo
        subject_person_id: p_f5U9vgpZDVZxNB7Ag9e5PP
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
        - id: cs_yPusQvS1ZgidJu6WftDtSC
          claim_id: c_gGr4WM13PVY5Dw1tZDKPPo
          source_id: s_pWyVHD68YeCJ8whFK8L4yx
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

# 王元震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元震 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元震（CBDB 688229）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688229&o=json)
