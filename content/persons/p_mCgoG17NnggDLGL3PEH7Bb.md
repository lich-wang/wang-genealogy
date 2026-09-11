---
schema: wang-person/v1
id: p_mCgoG17NnggDLGL3PEH7Bb
status: active
merged_into: null
display_name: 王瑩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKCRtEKMDrTSLV5hkE2V8M
        subject_person_id: p_mCgoG17NnggDLGL3PEH7Bb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1H2okQkpB8iKD2M7DKba4Z
          claim_id: c_DKCRtEKMDrTSLV5hkE2V8M
          source_id: s_ea79LdDJRbngLJwMRyEPPS
          stance: supports
          locator: CBDB:568662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568662）
          source: &a1
            id: s_ea79LdDJRbngLJwMRyEPPS
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 568662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568662&o=json
            external_identifier: CBDB:568662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Efas9tfRerzFptqV8wxDL
        subject_person_id: p_mCgoG17NnggDLGL3PEH7Bb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 568662）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mK2U2cAH9l9qmtZ3GrJKyE
          claim_id: c_3Efas9tfRerzFptqV8wxDL
          source_id: s_ea79LdDJRbngLJwMRyEPPS
          stance: supports
          locator: CBDB:568662
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

# 王瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑩 | accepted |
| bio.summary | 王瑩，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 568662） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑩（CBDB 568662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568662&o=json)
