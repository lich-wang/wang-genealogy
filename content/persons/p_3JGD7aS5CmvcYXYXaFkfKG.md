---
schema: wang-person/v1
id: p_3JGD7aS5CmvcYXYXaFkfKG
status: active
merged_into: null
display_name: 王壎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JShg82TihMm4nmEDrsJckx
        subject_person_id: p_3JGD7aS5CmvcYXYXaFkfKG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_37hVA3CyRizTC1iAmH1ofr
          claim_id: c_JShg82TihMm4nmEDrsJckx
          source_id: s_NHvLLy169M9v8zMxmM4Pmf
          stance: supports
          locator: CBDB:236483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236483）
          source: &a1
            id: s_NHvLLy169M9v8zMxmM4Pmf
            source_type: api_record
            title: 中国历代人物传记资料库：王壎（CBDB 236483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236483&o=json
            external_identifier: CBDB:236483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_84pxJaSP9cWy6oeP2cJW8e
        subject_person_id: p_3JGD7aS5CmvcYXYXaFkfKG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壎，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eOSFZ9aI4zHNgU3S86oer6
          claim_id: c_84pxJaSP9cWy6oeP2cJW8e
          source_id: s_NHvLLy169M9v8zMxmM4Pmf
          stance: supports
          locator: CBDB:236483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王壎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壎 | accepted |
| bio.summary | 王壎，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壎（CBDB 236483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236483&o=json)
