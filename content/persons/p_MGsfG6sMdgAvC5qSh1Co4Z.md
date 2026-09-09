---
schema: wang-person/v1
id: p_MGsfG6sMdgAvC5qSh1Co4Z
status: active
merged_into: null
display_name: 王檝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UuHPCFXBxhck8JA8yK4Muu
        subject_person_id: p_MGsfG6sMdgAvC5qSh1Co4Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H5n9n4NswBZtJDrRKY9HEj
          claim_id: c_UuHPCFXBxhck8JA8yK4Muu
          source_id: s_SfP5D1uBKdg6hzCdGSsSGi
          stance: supports
          locator: CBDB:495680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495680）
          source: &a1
            id: s_SfP5D1uBKdg6hzCdGSsSGi
            source_type: api_record
            title: 中国历代人物传记资料库：王檝（CBDB 495680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495680&o=json
            external_identifier: CBDB:495680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fhv8AhvpzPKwPituFBN37G
        subject_person_id: p_MGsfG6sMdgAvC5qSh1Co4Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UGifA1NtMxKX7kc5C9s1zW
          claim_id: c_fhv8AhvpzPKwPituFBN37G
          source_id: s_SfP5D1uBKdg6hzCdGSsSGi
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

# 王檝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王檝 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王檝（CBDB 495680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495680&o=json)
