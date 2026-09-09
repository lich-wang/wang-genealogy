---
schema: wang-person/v1
id: p_2TAbcpA7pUj3qhD9t2FmaE
status: active
merged_into: null
display_name: 王錫袞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aARhM7UQNcB9S51J1XDwF4
        subject_person_id: p_2TAbcpA7pUj3qhD9t2FmaE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫袞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kvE6QVpmdUYVFtSADyP6A1
          claim_id: c_aARhM7UQNcB9S51J1XDwF4
          source_id: s_G4y312XrQHnHtqQ54RkAnH
          stance: supports
          locator: CBDB:343803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343803）
          source: &a1
            id: s_G4y312XrQHnHtqQ54RkAnH
            source_type: api_record
            title: 中国历代人物传记资料库：王錫袞（CBDB 343803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343803&o=json
            external_identifier: CBDB:343803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2cmPNv1LyGru6w778NGRjb
        subject_person_id: p_2TAbcpA7pUj3qhD9t2FmaE
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
        - id: cs_mZJVBPEtjCGvUDJvCLEGit
          claim_id: c_2cmPNv1LyGru6w778NGRjb
          source_id: s_G4y312XrQHnHtqQ54RkAnH
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

# 王錫袞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫袞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫袞（CBDB 343803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343803&o=json)
