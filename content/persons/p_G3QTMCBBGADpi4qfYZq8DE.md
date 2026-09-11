---
schema: wang-person/v1
id: p_G3QTMCBBGADpi4qfYZq8DE
status: active
merged_into: null
display_name: 王世隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3D3qBvRh5FnZJ1fJFJjXNw
        subject_person_id: p_G3QTMCBBGADpi4qfYZq8DE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o3PmCHJauDh1CrW3bAcAK1
          claim_id: c_3D3qBvRh5FnZJ1fJFJjXNw
          source_id: s_xCPPKBXbN4z1AcBXQ7VsnU
          stance: supports
          locator: CBDB:685946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685946）
          source: &a1
            id: s_xCPPKBXbN4z1AcBXQ7VsnU
            source_type: api_record
            title: 中国历代人物传记资料库：王世隆（CBDB 685946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685946&o=json
            external_identifier: CBDB:685946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gi3GrLDdW4DgLnHK1FJL4N
        subject_person_id: p_G3QTMCBBGADpi4qfYZq8DE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世隆，宋人物。籍贯道州，入仕進士。（中国历代人物传记资料库 CBDB 685946）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nws1SGe6Q-zbBQi9Z7yYHF
          claim_id: c_gi3GrLDdW4DgLnHK1FJL4N
          source_id: s_xCPPKBXbN4z1AcBXQ7VsnU
          stance: supports
          locator: CBDB:685946
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

# 王世隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世隆 | accepted |
| bio.summary | 王世隆，宋人物。籍贯道州，入仕進士。（中国历代人物传记资料库 CBDB 685946） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世隆（CBDB 685946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685946&o=json)
