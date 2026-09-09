---
schema: wang-person/v1
id: p_g1bQWn3PbS3d9G594MB3nm
status: active
merged_into: null
display_name: 王吉相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oDQ5BjGSqxruD9LKHP4kMm
        subject_person_id: p_g1bQWn3PbS3d9G594MB3nm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4BzDRtzpair8V9VbR53oR6
          claim_id: c_oDQ5BjGSqxruD9LKHP4kMm
          source_id: s_W6qLGsdLSTXYBnog6E8GGc
          stance: supports
          locator: CBDB:71524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71524）
          source: &a1
            id: s_W6qLGsdLSTXYBnog6E8GGc
            source_type: api_record
            title: 中国历代人物传记资料库：王吉相（CBDB 71524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71524&o=json
            external_identifier: CBDB:71524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZNr885U2JH9aie82x7Ef7R
        subject_person_id: p_g1bQWn3PbS3d9G594MB3nm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1645年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWFeVjLwbLJK8Hi26FympF
          claim_id: c_ZNr885U2JH9aie82x7Ef7R
          source_id: s_W6qLGsdLSTXYBnog6E8GGc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pdTigExa5jrDFFDS1KGiEk
        subject_person_id: p_g1bQWn3PbS3d9G594MB3nm
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
        - id: cs_GcE6yyJKmCheo3bHTUFStt
          claim_id: c_pdTigExa5jrDFFDS1KGiEk
          source_id: s_W6qLGsdLSTXYBnog6E8GGc
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

# 王吉相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉相 | accepted |
| birth.date | 1645年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王吉相（CBDB 71524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71524&o=json)
