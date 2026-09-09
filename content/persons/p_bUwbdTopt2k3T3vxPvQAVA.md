---
schema: wang-person/v1
id: p_bUwbdTopt2k3T3vxPvQAVA
status: active
merged_into: null
display_name: 王西之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cf1bqRPmm9T5SkVAccUSz4
        subject_person_id: p_bUwbdTopt2k3T3vxPvQAVA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王西之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JoHKG93VL31t3tJt9eei6w
          claim_id: c_Cf1bqRPmm9T5SkVAccUSz4
          source_id: s_Fkx5SQgtJsJG9fZbEH1LVN
          stance: supports
          locator: CBDB:536697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（536697）
          source: &a1
            id: s_Fkx5SQgtJsJG9fZbEH1LVN
            source_type: api_record
            title: 中国历代人物传记资料库：王西之（CBDB 536697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536697&o=json
            external_identifier: CBDB:536697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_67mkL9MZ8fPbWzZDKvPaVU
        subject_person_id: p_bUwbdTopt2k3T3vxPvQAVA
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
        - id: cs_h6uXMbCK9zRJZMxTLwU2H1
          claim_id: c_67mkL9MZ8fPbWzZDKvPaVU
          source_id: s_Fkx5SQgtJsJG9fZbEH1LVN
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

# 王西之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王西之 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王西之（CBDB 536697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536697&o=json)
