---
schema: wang-person/v1
id: p_hcJbZBW3dzx64dQcJ64oZJ
status: active
merged_into: null
display_name: 王昂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_upxoxgoPVYBmArM6rBrJLT
        subject_person_id: p_hcJbZBW3dzx64dQcJ64oZJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kt5BE8de8fY3G6xh9dd7yV
          claim_id: c_upxoxgoPVYBmArM6rBrJLT
          source_id: s_EKwRaH5e8N78tavktJFd34
          stance: supports
          locator: CBDB:379441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379441）
          source: &a1
            id: s_EKwRaH5e8N78tavktJFd34
            source_type: api_record
            title: 中国历代人物传记资料库：王昂（CBDB 379441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379441&o=json
            external_identifier: CBDB:379441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6KGzUA9C3SoSKg6LyJPLLB
        subject_person_id: p_hcJbZBW3dzx64dQcJ64oZJ
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
        - id: cs_Q1x4K34Q6k3oWcu4cYS15e
          claim_id: c_6KGzUA9C3SoSKg6LyJPLLB
          source_id: s_EKwRaH5e8N78tavktJFd34
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

# 王昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昂 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昂（CBDB 379441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379441&o=json)
