---
schema: wang-person/v1
id: p_L78sP32iU3E81Y2RRAvRAs
status: active
merged_into: null
display_name: 王恩照
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eiGi6R8AQXfpPwHGxvApz5
        subject_person_id: p_L78sP32iU3E81Y2RRAvRAs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩照
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_12xxKsC61BEnAGrPegDnu8
          claim_id: c_eiGi6R8AQXfpPwHGxvApz5
          source_id: s_g378Uci2in4zb5Y49CQx6M
          stance: supports
          locator: CBDB:637848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637848）
          source: &a1
            id: s_g378Uci2in4zb5Y49CQx6M
            source_type: api_record
            title: 中国历代人物传记资料库：王恩照（CBDB 637848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637848&o=json
            external_identifier: CBDB:637848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.534Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fyBWmi3LPx5MQNB6Fdwit8
        subject_person_id: p_L78sP32iU3E81Y2RRAvRAs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩照，清人物。籍贯介休，入仕縣學附生，曾任知縣、復設訓導。（中国历代人物传记资料库 CBDB 637848）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2FMajr7u1GL67TaSJDEalh
          claim_id: c_fyBWmi3LPx5MQNB6Fdwit8
          source_id: s_g378Uci2in4zb5Y49CQx6M
          stance: supports
          locator: CBDB:637848
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

# 王恩照

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩照 | accepted |
| bio.summary | 王恩照，清人物。籍贯介休，入仕縣學附生，曾任知縣、復設訓導。（中国历代人物传记资料库 CBDB 637848） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩照（CBDB 637848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637848&o=json)
