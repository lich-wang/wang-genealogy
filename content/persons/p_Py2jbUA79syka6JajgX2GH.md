---
schema: wang-person/v1
id: p_Py2jbUA79syka6JajgX2GH
status: active
merged_into: null
display_name: 王懿德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hwmv8XeWvkiJ1NpHgSPnS8
        subject_person_id: p_Py2jbUA79syka6JajgX2GH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DZa5C85S4hzwEoc6CL9fFN
          claim_id: c_hwmv8XeWvkiJ1NpHgSPnS8
          source_id: s_fFA9vAN1NmcpsBXnJbP6NV
          stance: supports
          locator: CBDB:57222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57222）
          source: &a1
            id: s_fFA9vAN1NmcpsBXnJbP6NV
            source_type: api_record
            title: 中国历代人物传记资料库：王懿德（CBDB 57222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57222&o=json
            external_identifier: CBDB:57222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bbRrNamcrUSoF4UmsBcWED
        subject_person_id: p_Py2jbUA79syka6JajgX2GH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H5b3KNVtB9vpvi4BAQBn7v
          claim_id: c_bbRrNamcrUSoF4UmsBcWED
          source_id: s_fFA9vAN1NmcpsBXnJbP6NV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2XHGPn8bb5mW9EXQbZHgEY
        subject_person_id: p_Py2jbUA79syka6JajgX2GH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1861年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LCgqJtEFPndhMVkDXXcUSx
          claim_id: c_2XHGPn8bb5mW9EXQbZHgEY
          source_id: s_fFA9vAN1NmcpsBXnJbP6NV
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
        id: c_3g2Phd49bau2D2Pq7zshrU
        subject_person_id: p_Py2jbUA79syka6JajgX2GH
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
        - id: cs_kRVHBWxqdw7Rf3KCfZ9eLE
          claim_id: c_3g2Phd49bau2D2Pq7zshrU
          source_id: s_fFA9vAN1NmcpsBXnJbP6NV
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

# 王懿德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懿德 | accepted |
| birth.date | 1798年 | accepted |
| death.date | 1861年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懿德（CBDB 57222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57222&o=json)
