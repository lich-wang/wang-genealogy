---
schema: wang-person/v1
id: p_1SVuPfDRKYQknBQ42u2jUC
status: active
merged_into: null
display_name: 王榮陛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_heCopPDRbp4dujdBx9XZNX
        subject_person_id: p_1SVuPfDRKYQknBQ42u2jUC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮陛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_56umnoPosG5oLA5ZFSu6Q2
          claim_id: c_heCopPDRbp4dujdBx9XZNX
          source_id: s_Ue33bXh8y4kRZEF3ArMgsM
          stance: supports
          locator: CBDB:638805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638805）
          source: &a1
            id: s_Ue33bXh8y4kRZEF3ArMgsM
            source_type: api_record
            title: 中国历代人物传记资料库：王榮陛（CBDB 638805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638805&o=json
            external_identifier: CBDB:638805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6xAR6WHVncnQrnSSo6VpKB
        subject_person_id: p_1SVuPfDRKYQknBQ42u2jUC
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
        - id: cs_MJFj3t1F8y1mm51roSsiNp
          claim_id: c_6xAR6WHVncnQrnSSo6VpKB
          source_id: s_Ue33bXh8y4kRZEF3ArMgsM
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

# 王榮陛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮陛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮陛（CBDB 638805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638805&o=json)
