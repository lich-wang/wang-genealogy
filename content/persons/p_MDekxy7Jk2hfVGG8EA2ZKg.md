---
schema: wang-person/v1
id: p_MDekxy7Jk2hfVGG8EA2ZKg
status: active
merged_into: null
display_name: 王觀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SXoj83KHLMaTvAy16mL2QZ
        subject_person_id: p_MDekxy7Jk2hfVGG8EA2ZKg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_64QBM3u2t6zaqRQjbSEmSQ
          claim_id: c_SXoj83KHLMaTvAy16mL2QZ
          source_id: s_fQ13PtmpQDWAWMpbnYuq3t
          stance: supports
          locator: CBDB:70439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（70439）
          source: &a1
            id: s_fQ13PtmpQDWAWMpbnYuq3t
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 70439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70439&o=json
            external_identifier: CBDB:70439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r3H94fiSWWTWfc9oKtZBu1
        subject_person_id: p_MDekxy7Jk2hfVGG8EA2ZKg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀，明人物。籍贯祥符，入仕太學生，曾任府學訓導、學訓導、知府。（中国历代人物传记资料库 CBDB 70439）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0l_rdRPHvpOaD1Rl-c7yY9
          claim_id: c_r3H94fiSWWTWfc9oKtZBu1
          source_id: s_fQ13PtmpQDWAWMpbnYuq3t
          stance: supports
          locator: CBDB:70439
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

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | 王觀，明人物。籍贯祥符，入仕太學生，曾任府學訓導、學訓導、知府。（中国历代人物传记资料库 CBDB 70439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 70439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70439&o=json)
