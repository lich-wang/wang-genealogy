---
schema: wang-person/v1
id: p_mk3dTkzG94aLkYaNf5KJ63
status: active
merged_into: null
display_name: 王希善
cbdb_id: 238212
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QezhCEQQT1mNruKQ4RbqYv
        subject_person_id: p_mk3dTkzG94aLkYaNf5KJ63
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希善，明人物。正统七年進士。（中国历代人物传记资料库 CBDB 238212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6uAIEEF2KS4d8pZJsaoLpk
          claim_id: c_QezhCEQQT1mNruKQ4RbqYv
          source_id: s_QKx3pfBwVgbnNiU1NHL4eZ
          stance: supports
          locator: CBDB:238212
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QKx3pfBwVgbnNiU1NHL4eZ
            source_type: api_record
            title: 中国历代人物传记资料库：王希善（CBDB 238212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238212&o=json
            external_identifier: CBDB:238212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tVoc76PeVpt7Q7HREC9hT2
        subject_person_id: p_mk3dTkzG94aLkYaNf5KJ63
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_R88cVQiS8x8U77543m5H17
          claim_id: c_tVoc76PeVpt7Q7HREC9hT2
          source_id: s_QKx3pfBwVgbnNiU1NHL4eZ
          stance: supports
          locator: CBDB:238212
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_y4iLQTrXMubKAe4QboGi-Z
        subject_person_id: p_mk3dTkzG94aLkYaNf5KJ63
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UigxC39qu348GRPzwB2VV6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7S7RO7Z3UI_ez6LjwQpV1F
          claim_id: c_y4iLQTrXMubKAe4QboGi-Z
          source_id: s_ePBk9yjtryp6Aok3sJ2P9k
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第二十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ePBk9yjtryp6Aok3sJ2P9k
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 126681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126681&o=json
            external_identifier: CBDB:126681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UigxC39qu348GRPzwB2VV6
        status: active
        display_name: 王理
        merged_into_person_id: null
  other: []
---

# 王希善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希善，明人物。正统七年進士。（中国历代人物传记资料库 CBDB 238212） | accepted |
| name.primary | 王希善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UigxC39qu348GRPzwB2VV6 | 王理 | accepted |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 126681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126681&o=json)
- [中国历代人物传记资料库：王希善（CBDB 238212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238212&o=json)
