---
schema: wang-person/v1
id: p_NUptxN93sii3uKyvcmSFrK
status: active
merged_into: null
display_name: 王宗茂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fKSGDm8Gh2JnoXQUcqrEzB
        subject_person_id: p_NUptxN93sii3uKyvcmSFrK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗茂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sUok9Q9aKCz7QbzhHzV5qN
          claim_id: c_fKSGDm8Gh2JnoXQUcqrEzB
          source_id: s_mbBT81sjxG4vsmidzpaNPN
          stance: supports
          locator: CBDB:561520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561520）
          source: &a1
            id: s_mbBT81sjxG4vsmidzpaNPN
            source_type: api_record
            title: 中国历代人物传记资料库：王宗茂（CBDB 561520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561520&o=json
            external_identifier: CBDB:561520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qxgUPsLcEE8UWCADjMFuvE
        subject_person_id: p_NUptxN93sii3uKyvcmSFrK
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
        - id: cs_SZFdd1tAXS5QYTYgwVpEMN
          claim_id: c_qxgUPsLcEE8UWCADjMFuvE
          source_id: s_mbBT81sjxG4vsmidzpaNPN
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

# 王宗茂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗茂 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗茂（CBDB 561520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561520&o=json)
