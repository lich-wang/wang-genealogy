---
schema: wang-person/v1
id: p_7aK2bt97N12vfMGhrFAYUt
status: active
merged_into: null
display_name: 王遂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hHMF3btN2bcjzLdXPLtMs9
        subject_person_id: p_7aK2bt97N12vfMGhrFAYUt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ny8FD3etHroEH1YGSy16HM
          claim_id: c_hHMF3btN2bcjzLdXPLtMs9
          source_id: s_W8hb8qRdCi6ADXfPzotbJu
          stance: supports
          locator: CBDB:279344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279344）
          source: &a1
            id: s_W8hb8qRdCi6ADXfPzotbJu
            source_type: api_record
            title: 中国历代人物传记资料库：王遂（CBDB 279344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279344&o=json
            external_identifier: CBDB:279344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EjZawxPv3jpwhe4BGoLw1x
        subject_person_id: p_7aK2bt97N12vfMGhrFAYUt
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
        - id: cs_of96xzByRunxZEjmTBUkzh
          claim_id: c_EjZawxPv3jpwhe4BGoLw1x
          source_id: s_W8hb8qRdCi6ADXfPzotbJu
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

# 王遂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遂 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遂（CBDB 279344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279344&o=json)
