---
schema: wang-person/v1
id: p_aAYStJZ8kM2wqHkiwuS3ow
status: active
merged_into: null
display_name: 王晏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UEeS6KtMLsD3bpvKneDyAW
        subject_person_id: p_aAYStJZ8kM2wqHkiwuS3ow
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gi3FbQFKEvs3f3BjYPGYkQ
          claim_id: c_UEeS6KtMLsD3bpvKneDyAW
          source_id: s_zgfdXM2yQCUd3ZDsZGcq42
          stance: supports
          locator: CBDB:476928
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476928）
          source: &a1
            id: s_zgfdXM2yQCUd3ZDsZGcq42
            source_type: api_record
            title: 中国历代人物传记资料库：王晏（CBDB 476928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476928&o=json
            external_identifier: CBDB:476928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.494Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NHn4okof8DUprLyxizgKGH
        subject_person_id: p_aAYStJZ8kM2wqHkiwuS3ow
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏，五代人物。曾任知州。（中国历代人物传记资料库 CBDB 476928）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UHug8EDtgvS8Q-Dkhf6vqr
          claim_id: c_NHn4okof8DUprLyxizgKGH
          source_id: s_zgfdXM2yQCUd3ZDsZGcq42
          stance: supports
          locator: CBDB:476928
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

# 王晏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晏 | accepted |
| bio.summary | 王晏，五代人物。曾任知州。（中国历代人物传记资料库 CBDB 476928） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晏（CBDB 476928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476928&o=json)
