---
schema: wang-person/v1
id: p_JruKq5EFewtbq3uZA1AAt8
status: active
merged_into: null
display_name: 王壽桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bcKA16m36vF3qsy5A8P7sv
        subject_person_id: p_JruKq5EFewtbq3uZA1AAt8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qseban7QZF8nGHE9HCekuV
          claim_id: c_bcKA16m36vF3qsy5A8P7sv
          source_id: s_YJYsHNtVd3oNDi8SaRv8zL
          stance: supports
          locator: CBDB:544417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544417）
          source: &a1
            id: s_YJYsHNtVd3oNDi8SaRv8zL
            source_type: api_record
            title: 中国历代人物传记资料库：王壽桂（CBDB 544417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544417&o=json
            external_identifier: CBDB:544417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BT7SiT2JL1KcpBZzG11s4x
        subject_person_id: p_JruKq5EFewtbq3uZA1AAt8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽桂，宋人物。籍贯湘鄉，入仕進士。（中国历代人物传记资料库 CBDB 544417）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CN4V4GjQ841Io474hBnFwG
          claim_id: c_BT7SiT2JL1KcpBZzG11s4x
          source_id: s_YJYsHNtVd3oNDi8SaRv8zL
          stance: supports
          locator: CBDB:544417
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王壽桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽桂 | accepted |
| bio.summary | 王壽桂，宋人物。籍贯湘鄉，入仕進士。（中国历代人物传记资料库 CBDB 544417） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽桂（CBDB 544417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544417&o=json)
