---
schema: wang-person/v1
id: p_928cgSb5GRH74HYGi4X666
status: active
merged_into: null
display_name: 王難得
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cVLmHowfqrY9zaom6FETLD
        subject_person_id: p_928cgSb5GRH74HYGi4X666
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王難得
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sqC6dtEAJe9dKX8pKVEMrz
          claim_id: c_cVLmHowfqrY9zaom6FETLD
          source_id: s_pFo3k98KvMkDFjt98x1Ch5
          stance: supports
          locator: CBDB:382929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382929）
          source: &a1
            id: s_pFo3k98KvMkDFjt98x1Ch5
            source_type: api_record
            title: 中国历代人物传记资料库：王難得（CBDB 382929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382929&o=json
            external_identifier: CBDB:382929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_24A5N3CqxUbAqg242N6WT7
        subject_person_id: p_928cgSb5GRH74HYGi4X666
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MfMWyWyFQTwiG2s3LaAhME
          claim_id: c_24A5N3CqxUbAqg242N6WT7
          source_id: s_pFo3k98KvMkDFjt98x1Ch5
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

# 王難得

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王難得 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王難得（CBDB 382929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382929&o=json)
