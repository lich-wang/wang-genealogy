---
schema: wang-person/v1
id: p_pzt3FX1W3D76KkHwePYQAA
status: active
merged_into: null
display_name: 王欽璽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DJVFuD96LwqxvoR8Q6sKP9
        subject_person_id: p_pzt3FX1W3D76KkHwePYQAA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rwQEAdTTzF5TkAbST8icoC
          claim_id: c_DJVFuD96LwqxvoR8Q6sKP9
          source_id: s_Qrs3veBdJB3UZ2PNEA18VH
          stance: supports
          locator: CBDB:640724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640724）
          source: &a1
            id: s_Qrs3veBdJB3UZ2PNEA18VH
            source_type: api_record
            title: 中国历代人物传记资料库：王欽璽（CBDB 640724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640724&o=json
            external_identifier: CBDB:640724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F8UJ55sLyfmiDC3jrF9FvX
        subject_person_id: p_pzt3FX1W3D76KkHwePYQAA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽璽，清人物。籍贯祁縣，曾任訓導。（中国历代人物传记资料库 CBDB 640724）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jcGzze41s8GD_pHJQrSI93
          claim_id: c_F8UJ55sLyfmiDC3jrF9FvX
          source_id: s_Qrs3veBdJB3UZ2PNEA18VH
          stance: supports
          locator: CBDB:640724
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

# 王欽璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽璽 | accepted |
| bio.summary | 王欽璽，清人物。籍贯祁縣，曾任訓導。（中国历代人物传记资料库 CBDB 640724） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王欽璽（CBDB 640724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640724&o=json)
