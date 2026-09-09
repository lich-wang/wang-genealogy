---
schema: wang-person/v1
id: p_YpfPCUMPC42vyi5sC5oaH2
status: active
merged_into: null
display_name: 王利用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EVhgEVPPDhQ9KDj6E6qcgQ
        subject_person_id: p_YpfPCUMPC42vyi5sC5oaH2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NXSrhv5kfyQp9qfCzjC65j
          claim_id: c_EVhgEVPPDhQ9KDj6E6qcgQ
          source_id: s_kXLSxJ1NXesLAqc81fwuK9
          stance: supports
          locator: CBDB:1849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1849）
          source: &a1
            id: s_kXLSxJ1NXesLAqc81fwuK9
            source_type: api_record
            title: 中国历代人物传记资料库：王利用（CBDB 1849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1849&o=json
            external_identifier: CBDB:1849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.341Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n2aGd7Afnc32tGGrJubYRm
        subject_person_id: p_YpfPCUMPC42vyi5sC5oaH2
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
        - id: cs_p8TsX9ViQ1PN8vyVGRV9MJ
          claim_id: c_n2aGd7Afnc32tGGrJubYRm
          source_id: s_kXLSxJ1NXesLAqc81fwuK9
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

# 王利用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王利用 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王利用（CBDB 1849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1849&o=json)
