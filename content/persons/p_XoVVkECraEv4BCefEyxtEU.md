---
schema: wang-person/v1
id: p_XoVVkECraEv4BCefEyxtEU
status: active
merged_into: null
display_name: 王銳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QSrioUYpu35CviLN1D8Bed
        subject_person_id: p_XoVVkECraEv4BCefEyxtEU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E8zGDE85JMVMRqCnfMDQoC
          claim_id: c_QSrioUYpu35CviLN1D8Bed
          source_id: s_J91nByqmgNvew8Y4MMb89M
          stance: supports
          locator: CBDB:508443
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508443）
          source: &a1
            id: s_J91nByqmgNvew8Y4MMb89M
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 508443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508443&o=json
            external_identifier: CBDB:508443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MiMCUJ2BM4KTWRKbXvWEsH
        subject_person_id: p_XoVVkECraEv4BCefEyxtEU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳，明人物。入仕世襲(替)。（中国历代人物传记资料库 CBDB 508443）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tV1Q6DJxRKahVCRgYXY8Kq
          claim_id: c_MiMCUJ2BM4KTWRKbXvWEsH
          source_id: s_J91nByqmgNvew8Y4MMb89M
          stance: supports
          locator: CBDB:508443
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

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | 王銳，明人物。入仕世襲(替)。（中国历代人物传记资料库 CBDB 508443） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 508443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508443&o=json)
