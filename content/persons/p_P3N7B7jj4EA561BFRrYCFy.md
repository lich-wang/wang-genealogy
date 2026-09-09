---
schema: wang-person/v1
id: p_P3N7B7jj4EA561BFRrYCFy
status: active
merged_into: null
display_name: 王觀微
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f1YCHV8v8HVdGyaLWCrez6
        subject_person_id: p_P3N7B7jj4EA561BFRrYCFy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀微
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CdaFMmPaVfuB1NgSHG8jrG
          claim_id: c_f1YCHV8v8HVdGyaLWCrez6
          source_id: s_6y9jVQsa7yXzrf6gBeTP5F
          stance: supports
          locator: CBDB:566442
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（566442）
          source: &a1
            id: s_6y9jVQsa7yXzrf6gBeTP5F
            source_type: api_record
            title: 中国历代人物传记资料库：王觀微（CBDB 566442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566442&o=json
            external_identifier: CBDB:566442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zk915TokyXStFHccAcMiZW
        subject_person_id: p_P3N7B7jj4EA561BFRrYCFy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nHGb7X12nk1dpNfw5ig9mi
          claim_id: c_Zk915TokyXStFHccAcMiZW
          source_id: s_6y9jVQsa7yXzrf6gBeTP5F
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

# 王觀微

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀微 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀微（CBDB 566442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566442&o=json)
