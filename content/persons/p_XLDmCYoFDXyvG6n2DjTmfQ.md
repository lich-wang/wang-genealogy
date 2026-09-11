---
schema: wang-person/v1
id: p_XLDmCYoFDXyvG6n2DjTmfQ
status: active
merged_into: null
display_name: 王宗蓁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r37RYAeWxmgjgceQPt4196
        subject_person_id: p_XLDmCYoFDXyvG6n2DjTmfQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗蓁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GCTmADqf5xTCiXEQTQ3u9e
          claim_id: c_r37RYAeWxmgjgceQPt4196
          source_id: s_Pje9VHx9RH5JGid9thG5Ha
          stance: supports
          locator: CBDB:311237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311237）
          source: &a1
            id: s_Pje9VHx9RH5JGid9thG5Ha
            source_type: api_record
            title: 中国历代人物传记资料库：王宗蓁（CBDB 311237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311237&o=json
            external_identifier: CBDB:311237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xc7z52JAWDQEe49A84BEBt
        subject_person_id: p_XLDmCYoFDXyvG6n2DjTmfQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗蓁，明人物。嘉靖二十六年進士，籍贯京山。（中国历代人物传记资料库 CBDB 311237）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E45rn5c6IZW8WREfS4A2NI
          claim_id: c_Xc7z52JAWDQEe49A84BEBt
          source_id: s_Pje9VHx9RH5JGid9thG5Ha
          stance: supports
          locator: CBDB:311237
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

# 王宗蓁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗蓁 | accepted |
| bio.summary | 王宗蓁，明人物。嘉靖二十六年進士，籍贯京山。（中国历代人物传记资料库 CBDB 311237） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗蓁（CBDB 311237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311237&o=json)
