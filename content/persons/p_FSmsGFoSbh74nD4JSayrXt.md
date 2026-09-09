---
schema: wang-person/v1
id: p_FSmsGFoSbh74nD4JSayrXt
status: active
merged_into: null
display_name: 王誥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4EuE7h3GHyPkh1b7J8joG1
        subject_person_id: p_FSmsGFoSbh74nD4JSayrXt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YWukPBehS58HfaWjTpP4hf
          claim_id: c_4EuE7h3GHyPkh1b7J8joG1
          source_id: s_xJFN5nCAyZ1hEbvMzFiX1E
          stance: supports
          locator: CBDB:39157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39157）
          source: &a1
            id: s_xJFN5nCAyZ1hEbvMzFiX1E
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 39157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39157&o=json
            external_identifier: CBDB:39157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oC9J4rcDtyabiJ4CscgqQ6
        subject_person_id: p_FSmsGFoSbh74nD4JSayrXt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1231年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c35twYwcBjTLn3NYsJwRsn
          claim_id: c_oC9J4rcDtyabiJ4CscgqQ6
          source_id: s_xJFN5nCAyZ1hEbvMzFiX1E
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wM55TNgrzUpoGXc7YKJUDh
        subject_person_id: p_FSmsGFoSbh74nD4JSayrXt
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
        - id: cs_FZxa542baoc2G6QrUgkHrJ
          claim_id: c_wM55TNgrzUpoGXc7YKJUDh
          source_id: s_xJFN5nCAyZ1hEbvMzFiX1E
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

# 王誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誥 | accepted |
| death.date | 1231年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 39157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39157&o=json)
