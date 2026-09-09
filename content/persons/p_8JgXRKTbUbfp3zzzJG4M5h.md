---
schema: wang-person/v1
id: p_8JgXRKTbUbfp3zzzJG4M5h
status: active
merged_into: null
display_name: 王嚴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h5ehH1A4cTWh2udB9xmsWo
        subject_person_id: p_8JgXRKTbUbfp3zzzJG4M5h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嚴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F6Sm4dfXBou3S29AurcsTG
          claim_id: c_h5ehH1A4cTWh2udB9xmsWo
          source_id: s_VMT99Lgr8FM5FgY1bcgvVo
          stance: supports
          locator: CBDB:445645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445645）
          source: &a1
            id: s_VMT99Lgr8FM5FgY1bcgvVo
            source_type: api_record
            title: 中国历代人物传记资料库：王嚴（CBDB 445645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445645&o=json
            external_identifier: CBDB:445645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bTCWzTw9xvG6UiGs3yGhpC
        subject_person_id: p_8JgXRKTbUbfp3zzzJG4M5h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xpv8vtmMuHkBgghBJvnLSq
          claim_id: c_bTCWzTw9xvG6UiGs3yGhpC
          source_id: s_VMT99Lgr8FM5FgY1bcgvVo
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

# 王嚴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嚴 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嚴（CBDB 445645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445645&o=json)
