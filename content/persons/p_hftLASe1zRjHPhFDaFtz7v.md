---
schema: wang-person/v1
id: p_hftLASe1zRjHPhFDaFtz7v
status: active
merged_into: null
display_name: 王文烜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cgyFGQbxLCHV1rjRJdv2hT
        subject_person_id: p_hftLASe1zRjHPhFDaFtz7v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文烜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LEXgwgZE5h5fJ3VcmhaKcz
          claim_id: c_cgyFGQbxLCHV1rjRJdv2hT
          source_id: s_X1hXibjt6Pj5cQpA2KZtCh
          stance: supports
          locator: CBDB:638252
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638252）
          source: &a1
            id: s_X1hXibjt6Pj5cQpA2KZtCh
            source_type: api_record
            title: 中国历代人物传记资料库：王文烜（CBDB 638252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638252&o=json
            external_identifier: CBDB:638252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_29qE7AtgNxDr8gzaHN4Zas
        subject_person_id: p_hftLASe1zRjHPhFDaFtz7v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文烜，清人物。籍贯宛平，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638252）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eNyNhkpl8R2PmUE4l_DnnR
          claim_id: c_29qE7AtgNxDr8gzaHN4Zas
          source_id: s_X1hXibjt6Pj5cQpA2KZtCh
          stance: supports
          locator: CBDB:638252
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

# 王文烜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文烜 | accepted |
| bio.summary | 王文烜，清人物。籍贯宛平，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638252） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文烜（CBDB 638252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638252&o=json)
