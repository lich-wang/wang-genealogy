---
schema: wang-person/v1
id: p_hGQNUqMDwNs4EmkcGGhWRN
status: active
merged_into: null
display_name: 王崇道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e7kvYr2DYPNTsSrjeQmaiT
        subject_person_id: p_hGQNUqMDwNs4EmkcGGhWRN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5iJP3AB1MajE1C4sGhpfjc
          claim_id: c_e7kvYr2DYPNTsSrjeQmaiT
          source_id: s_E2cCB9DDbUv4UpPooJz8Gg
          stance: supports
          locator: CBDB:476933
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476933）
          source: &a1
            id: s_E2cCB9DDbUv4UpPooJz8Gg
            source_type: api_record
            title: 中国历代人物传记资料库：王崇道（CBDB 476933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476933&o=json
            external_identifier: CBDB:476933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.494Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FaAnEAACEcuLVVaXiVsLtw
        subject_person_id: p_hGQNUqMDwNs4EmkcGGhWRN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇道，元人物。曾任知州。（中国历代人物传记资料库 CBDB 476933）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ML9WfkquskViglB-nhaMUh
          claim_id: c_FaAnEAACEcuLVVaXiVsLtw
          source_id: s_E2cCB9DDbUv4UpPooJz8Gg
          stance: supports
          locator: CBDB:476933
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

# 王崇道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇道 | accepted |
| bio.summary | 王崇道，元人物。曾任知州。（中国历代人物传记资料库 CBDB 476933） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇道（CBDB 476933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476933&o=json)
