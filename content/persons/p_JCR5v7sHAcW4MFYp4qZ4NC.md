---
schema: wang-person/v1
id: p_JCR5v7sHAcW4MFYp4qZ4NC
status: active
merged_into: null
display_name: 王晟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mtFm8Yc4pCrs91qUfN5PRS
        subject_person_id: p_JCR5v7sHAcW4MFYp4qZ4NC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kELKFJAdhRpn2y3jF9SV7j
          claim_id: c_mtFm8Yc4pCrs91qUfN5PRS
          source_id: s_PXBLF232uokcBsUEZsKiFy
          stance: supports
          locator: CBDB:37873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37873）
          source: &a1
            id: s_PXBLF232uokcBsUEZsKiFy
            source_type: api_record
            title: 中国历代人物传记资料库：王晟（CBDB 37873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37873&o=json
            external_identifier: CBDB:37873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UShBKVHnaSmT9vKzsWEgMM
        subject_person_id: p_JCR5v7sHAcW4MFYp4qZ4NC
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
        - id: cs_8WqSDM371GbHCeBazFwf6c
          claim_id: c_UShBKVHnaSmT9vKzsWEgMM
          source_id: s_PXBLF232uokcBsUEZsKiFy
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

# 王晟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晟 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晟（CBDB 37873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37873&o=json)
