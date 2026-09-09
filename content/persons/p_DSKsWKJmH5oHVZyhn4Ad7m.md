---
schema: wang-person/v1
id: p_DSKsWKJmH5oHVZyhn4Ad7m
status: active
merged_into: null
display_name: 王瑒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1hvzbFXsQqAH5k3MACTWsa
        subject_person_id: p_DSKsWKJmH5oHVZyhn4Ad7m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f9KXCE9goJrNo2mb1jg4NT
          claim_id: c_1hvzbFXsQqAH5k3MACTWsa
          source_id: s_KdzP7qpCLbwc9HBtU3Hqhj
          stance: supports
          locator: CBDB:154280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154280）
          source: &a1
            id: s_KdzP7qpCLbwc9HBtU3Hqhj
            source_type: api_record
            title: 中国历代人物传记资料库：王瑒（CBDB 154280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154280&o=json
            external_identifier: CBDB:154280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H1h58oKe8X7mY9DVy2aCC9
        subject_person_id: p_DSKsWKJmH5oHVZyhn4Ad7m
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
        - id: cs_XRorJrXMCPQrtjLYaQG4SD
          claim_id: c_H1h58oKe8X7mY9DVy2aCC9
          source_id: s_KdzP7qpCLbwc9HBtU3Hqhj
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

# 王瑒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑒 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑒（CBDB 154280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154280&o=json)
