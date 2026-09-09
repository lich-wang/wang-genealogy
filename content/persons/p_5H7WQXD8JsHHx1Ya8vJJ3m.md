---
schema: wang-person/v1
id: p_5H7WQXD8JsHHx1Ya8vJJ3m
status: active
merged_into: null
display_name: 王衎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sbffx28pdjBv7TBfAHXdRB
        subject_person_id: p_5H7WQXD8JsHHx1Ya8vJJ3m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TRVnn5x6Ksyv8PEij3FwFX
          claim_id: c_Sbffx28pdjBv7TBfAHXdRB
          source_id: s_zcwctEDTiTE736QyweeXAZ
          stance: supports
          locator: CBDB:157524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157524）
          source: &a1
            id: s_zcwctEDTiTE736QyweeXAZ
            source_type: api_record
            title: 中国历代人物传记资料库：王衎（CBDB 157524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157524&o=json
            external_identifier: CBDB:157524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aqefKS3FeBZ4MzGkoNgize
        subject_person_id: p_5H7WQXD8JsHHx1Ya8vJJ3m
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
        - id: cs_gqveioLP5iEPEaegrH5KPt
          claim_id: c_aqefKS3FeBZ4MzGkoNgize
          source_id: s_zcwctEDTiTE736QyweeXAZ
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

# 王衎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衎 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衎（CBDB 157524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157524&o=json)
