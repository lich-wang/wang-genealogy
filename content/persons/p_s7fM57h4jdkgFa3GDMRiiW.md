---
schema: wang-person/v1
id: p_s7fM57h4jdkgFa3GDMRiiW
status: active
merged_into: null
display_name: 王彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ray5PsNtcdJV3bMSEu2J7
        subject_person_id: p_s7fM57h4jdkgFa3GDMRiiW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HCiNxBCuB6g3sELJ9Aomfi
          claim_id: c_6ray5PsNtcdJV3bMSEu2J7
          source_id: s_DvBKJFh1dF1Fi2Xuz53rKh
          stance: supports
          locator: CBDB:260650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260650）
          source: &a1
            id: s_DvBKJFh1dF1Fi2Xuz53rKh
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 260650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260650&o=json
            external_identifier: CBDB:260650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ABqvdhF28h3JpDeDpDv64p
        subject_person_id: p_s7fM57h4jdkgFa3GDMRiiW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uwoQINQjQPCeHlTWNCGqgH
          claim_id: c_ABqvdhF28h3JpDeDpDv64p
          source_id: s_DvBKJFh1dF1Fi2Xuz53rKh
          stance: supports
          locator: CBDB:260650
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

# 王彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彝 | accepted |
| bio.summary | 王彝，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260650） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彝（CBDB 260650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260650&o=json)
