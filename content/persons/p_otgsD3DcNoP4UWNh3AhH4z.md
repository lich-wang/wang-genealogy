---
schema: wang-person/v1
id: p_otgsD3DcNoP4UWNh3AhH4z
status: active
merged_into: null
display_name: 王衮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DWfx6JUMXswGqg9qqoJSha
        subject_person_id: p_otgsD3DcNoP4UWNh3AhH4z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衮
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HJdTXEN6U22nqTgxT5zGmA
          claim_id: c_DWfx6JUMXswGqg9qqoJSha
          source_id: s_A1oA4sYcsDxA1p19uViJoj
          stance: supports
          locator: CBDB:483601
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483601）
          source: &a1
            id: s_A1oA4sYcsDxA1p19uViJoj
            source_type: api_record
            title: 中国历代人物传记资料库：王衮（CBDB 483601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483601&o=json
            external_identifier: CBDB:483601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QwjYfG4w9QpFYucAkS5pDz
        subject_person_id: p_otgsD3DcNoP4UWNh3AhH4z
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
        - id: cs_rp8Wb9f7JkbESTs11PRrBw
          claim_id: c_QwjYfG4w9QpFYucAkS5pDz
          source_id: s_A1oA4sYcsDxA1p19uViJoj
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

# 王衮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衮 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衮（CBDB 483601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483601&o=json)
