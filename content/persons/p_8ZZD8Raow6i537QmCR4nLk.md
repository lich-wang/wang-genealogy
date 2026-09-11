---
schema: wang-person/v1
id: p_8ZZD8Raow6i537QmCR4nLk
status: active
merged_into: null
display_name: 王金薇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3f5JKhxLdzEEXYZbnEHLUD
        subject_person_id: p_8ZZD8Raow6i537QmCR4nLk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金薇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tDYhJPo83ZgFMSfAhUtkPF
          claim_id: c_3f5JKhxLdzEEXYZbnEHLUD
          source_id: s_m6GQRVEBMGPSVtPC6DcHW7
          stance: supports
          locator: CBDB:640524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640524）
          source: &a1
            id: s_m6GQRVEBMGPSVtPC6DcHW7
            source_type: api_record
            title: 中国历代人物传记资料库：王金薇（CBDB 640524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640524&o=json
            external_identifier: CBDB:640524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hpyjLYFJQNdQkKwdHz27zL
        subject_person_id: p_8ZZD8Raow6i537QmCR4nLk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金薇，清人物。籍贯始興，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640524）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UmhDFbawUVKxTKdNs4xTnC
          claim_id: c_hpyjLYFJQNdQkKwdHz27zL
          source_id: s_m6GQRVEBMGPSVtPC6DcHW7
          stance: supports
          locator: CBDB:640524
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

# 王金薇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金薇 | accepted |
| bio.summary | 王金薇，清人物。籍贯始興，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640524） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金薇（CBDB 640524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640524&o=json)
