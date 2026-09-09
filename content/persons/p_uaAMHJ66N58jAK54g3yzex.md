---
schema: wang-person/v1
id: p_uaAMHJ66N58jAK54g3yzex
status: active
merged_into: null
display_name: 王敏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U2qV2dubbwNk9ddZGT5ZPL
        subject_person_id: p_uaAMHJ66N58jAK54g3yzex
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9fpzm9GUGvD2UasSa8ny1d
          claim_id: c_U2qV2dubbwNk9ddZGT5ZPL
          source_id: s_Nt6nF28fYvG5y659nzmrGC
          stance: supports
          locator: CBDB:140170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140170）
          source: &a1
            id: s_Nt6nF28fYvG5y659nzmrGC
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 140170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140170&o=json
            external_identifier: CBDB:140170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MGuwwDPzhE3PiCPuXwB6Lt
        subject_person_id: p_uaAMHJ66N58jAK54g3yzex
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 644年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZefkXg1LEzseiBWxMUshAV
          claim_id: c_MGuwwDPzhE3PiCPuXwB6Lt
          source_id: s_Nt6nF28fYvG5y659nzmrGC
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
        id: c_7HHNLQT3CgwosmjH4yU9t8
        subject_person_id: p_uaAMHJ66N58jAK54g3yzex
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 704年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ascsgs68qCHby18v3iqAxX
          claim_id: c_7HHNLQT3CgwosmjH4yU9t8
          source_id: s_Nt6nF28fYvG5y659nzmrGC
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
        id: c_rb66avCKNFNnKrWQyjuA9E
        subject_person_id: p_uaAMHJ66N58jAK54g3yzex
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lb6zCSsP5eNGjTBEGUb7e8
          claim_id: c_rb66avCKNFNnKrWQyjuA9E
          source_id: s_Nt6nF28fYvG5y659nzmrGC
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

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| birth.date | 644年 | accepted |
| death.date | 704年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 140170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140170&o=json)
