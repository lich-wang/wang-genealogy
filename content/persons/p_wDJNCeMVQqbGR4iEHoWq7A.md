---
schema: wang-person/v1
id: p_wDJNCeMVQqbGR4iEHoWq7A
status: active
merged_into: null
display_name: 王迢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VLLCgQrpKrCk3XzLEWSmcx
        subject_person_id: p_wDJNCeMVQqbGR4iEHoWq7A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J28n46FQPKdmgxi7vqtsPg
          claim_id: c_VLLCgQrpKrCk3XzLEWSmcx
          source_id: s_8b1XGWMN8FsGCRJ2YjMHHD
          stance: supports
          locator: CBDB:38234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38234）
          source: &a1
            id: s_8b1XGWMN8FsGCRJ2YjMHHD
            source_type: api_record
            title: 中国历代人物传记资料库：王迢（CBDB 38234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38234&o=json
            external_identifier: CBDB:38234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LwVQbTTz7GQDxKj5ZZbGnP
        subject_person_id: p_wDJNCeMVQqbGR4iEHoWq7A
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
        - id: cs_73D4VTRSv32PzGsHg7g9ox
          claim_id: c_LwVQbTTz7GQDxKj5ZZbGnP
          source_id: s_8b1XGWMN8FsGCRJ2YjMHHD
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

# 王迢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迢 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迢（CBDB 38234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38234&o=json)
