---
schema: wang-person/v1
id: p_oNuqaKp1e81SXi84po49Xq
status: active
merged_into: null
display_name: 王士修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6vQq2zC6MufHx4oDJuuV4H
        subject_person_id: p_oNuqaKp1e81SXi84po49Xq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8yLVLeCxwrid4L7PSUrL5e
          claim_id: c_6vQq2zC6MufHx4oDJuuV4H
          source_id: s_MKCjcSCt5V6YvwPG8V4ek3
          stance: supports
          locator: CBDB:636790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636790）
          source: &a1
            id: s_MKCjcSCt5V6YvwPG8V4ek3
            source_type: api_record
            title: 中国历代人物传记资料库：王士修（CBDB 636790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636790&o=json
            external_identifier: CBDB:636790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BodtukA558ZbLgCPe4t93Y
        subject_person_id: p_oNuqaKp1e81SXi84po49Xq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4rj22DM47uTXJE8KAhwwxB
          claim_id: c_BodtukA558ZbLgCPe4t93Y
          source_id: s_MKCjcSCt5V6YvwPG8V4ek3
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

# 王士修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士修 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士修（CBDB 636790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636790&o=json)
