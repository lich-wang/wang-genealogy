---
schema: wang-person/v1
id: p_Ez9oFaLjWBfsGGDK4Vv1MH
status: active
merged_into: null
display_name: 王懋學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GZyhnEekZQYNT8dqBgpF9L
        subject_person_id: p_Ez9oFaLjWBfsGGDK4Vv1MH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_djrP6rFEZfKnqCbK41n8Wz
          claim_id: c_GZyhnEekZQYNT8dqBgpF9L
          source_id: s_vKyeTp7BB5fhCvMYr8tY6J
          stance: supports
          locator: CBDB:343140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343140）
          source: &a1
            id: s_vKyeTp7BB5fhCvMYr8tY6J
            source_type: api_record
            title: 中国历代人物传记资料库：王懋學（CBDB 343140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343140&o=json
            external_identifier: CBDB:343140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rMJGm1FEYAMjzK48TkrvuD
        subject_person_id: p_Ez9oFaLjWBfsGGDK4Vv1MH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋學，明人物。明清進士進士，籍贯永昌衛，入仕進士。（中国历代人物传记资料库 CBDB 343140）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MFBO_CU2W2BMt3-UvXw2ea
          claim_id: c_rMJGm1FEYAMjzK48TkrvuD
          source_id: s_vKyeTp7BB5fhCvMYr8tY6J
          stance: supports
          locator: CBDB:343140
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王懋學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋學 | accepted |
| bio.summary | 王懋學，明人物。明清進士進士，籍贯永昌衛，入仕進士。（中国历代人物传记资料库 CBDB 343140） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋學（CBDB 343140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343140&o=json)
