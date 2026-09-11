---
schema: wang-person/v1
id: p_yG4vgsT9QLSJVV5g4uZj2V
status: active
merged_into: null
display_name: 王貫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kzs2WGvjoQq6c3Yu92BnFZ
        subject_person_id: p_yG4vgsT9QLSJVV5g4uZj2V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fVJmkPXB52NW1DcpnAM9Sx
          claim_id: c_Kzs2WGvjoQq6c3Yu92BnFZ
          source_id: s_Y5AwjjYmRFtq6mwX2uLcLW
          stance: supports
          locator: CBDB:477297
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477297）
          source: &a1
            id: s_Y5AwjjYmRFtq6mwX2uLcLW
            source_type: api_record
            title: 中国历代人物传记资料库：王貫（CBDB 477297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477297&o=json
            external_identifier: CBDB:477297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rc11mPqcAc9EnYFdDxEFbL
        subject_person_id: p_yG4vgsT9QLSJVV5g4uZj2V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 477297）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pBr9zY2ri-U4FZXP3d5MQo
          claim_id: c_Rc11mPqcAc9EnYFdDxEFbL
          source_id: s_Y5AwjjYmRFtq6mwX2uLcLW
          stance: supports
          locator: CBDB:477297
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

# 王貫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貫 | accepted |
| bio.summary | 王貫，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 477297） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貫（CBDB 477297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477297&o=json)
