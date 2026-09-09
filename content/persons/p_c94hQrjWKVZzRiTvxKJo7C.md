---
schema: wang-person/v1
id: p_c94hQrjWKVZzRiTvxKJo7C
status: active
merged_into: null
display_name: 王昉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_STCzT2aVd82TRWZGYtHmHf
        subject_person_id: p_c94hQrjWKVZzRiTvxKJo7C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a6tC5ccDNxSeydRWnoYB6D
          claim_id: c_STCzT2aVd82TRWZGYtHmHf
          source_id: s_eSVHuC129FMDWSq9JdXZVb
          stance: supports
          locator: CBDB:638364
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638364）
          source: &a1
            id: s_eSVHuC129FMDWSq9JdXZVb
            source_type: api_record
            title: 中国历代人物传记资料库：王昉（CBDB 638364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638364&o=json
            external_identifier: CBDB:638364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H5kzSaJXPtwRMHxNP3Nn8V
        subject_person_id: p_c94hQrjWKVZzRiTvxKJo7C
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
        - id: cs_aoucfzxYS3yxCgZdkd1BZA
          claim_id: c_H5kzSaJXPtwRMHxNP3Nn8V
          source_id: s_eSVHuC129FMDWSq9JdXZVb
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

# 王昉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昉（CBDB 638364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638364&o=json)
