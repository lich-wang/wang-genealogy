---
schema: wang-person/v1
id: p_HHN54ybok4JAB2UR3NWCPs
status: active
merged_into: null
display_name: 王剛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2ATtQA96vFevKZD1X88VAM
        subject_person_id: p_HHN54ybok4JAB2UR3NWCPs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u9MUDGA4YQEQe8eKC4Vkrr
          claim_id: c_2ATtQA96vFevKZD1X88VAM
          source_id: s_aCfDJAgNQdp1KXmn9Wwihg
          stance: supports
          locator: CBDB:241572
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241572）
          source: &a1
            id: s_aCfDJAgNQdp1KXmn9Wwihg
            source_type: api_record
            title: 中国历代人物传记资料库：王剛（CBDB 241572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241572&o=json
            external_identifier: CBDB:241572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uVpRGpKc62coeMZGqfG4Qr
        subject_person_id: p_HHN54ybok4JAB2UR3NWCPs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T6SNz9wsUJCZFmuNj4TBy9
          claim_id: c_uVpRGpKc62coeMZGqfG4Qr
          source_id: s_aCfDJAgNQdp1KXmn9Wwihg
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

# 王剛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王剛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王剛（CBDB 241572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241572&o=json)
