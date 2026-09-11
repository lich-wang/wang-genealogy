---
schema: wang-person/v1
id: p_b7NnPqCJk9ujZrsxAeY52e
status: active
merged_into: null
display_name: 王昂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HedCHDC3jMXh81r3onPG9p
        subject_person_id: p_b7NnPqCJk9ujZrsxAeY52e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YEmFo2phREQN9qstyt9HEE
          claim_id: c_HedCHDC3jMXh81r3onPG9p
          source_id: s_246V2DHMB8JYyN2iSvajkG
          stance: supports
          locator: CBDB:460718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460718）
          source: &a1
            id: s_246V2DHMB8JYyN2iSvajkG
            source_type: api_record
            title: 中国历代人物传记资料库：王昂（CBDB 460718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460718&o=json
            external_identifier: CBDB:460718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.785Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wsBX5j1eaaAj76gVqzdoTF
        subject_person_id: p_b7NnPqCJk9ujZrsxAeY52e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 460718）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CCt_3bDRWrqoyea-OLo7rb
          claim_id: c_wsBX5j1eaaAj76gVqzdoTF
          source_id: s_246V2DHMB8JYyN2iSvajkG
          stance: supports
          locator: CBDB:460718
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

# 王昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昂 | accepted |
| bio.summary | 王昂，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 460718） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昂（CBDB 460718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460718&o=json)
