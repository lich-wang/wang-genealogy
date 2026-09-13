---
schema: wang-person/v1
id: p_QijNj3iZ4NYhsZqc6vKFmE
status: active
merged_into: null
display_name: 王仲楚
cbdb_id: 286461
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tfMhho1aEkz5QSJj6s2hxw
        subject_person_id: p_QijNj3iZ4NYhsZqc6vKFmE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲楚，明人物。永樂十年進士，曾任經歷。（中国历代人物传记资料库 CBDB 286461）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_m9x1jWZfrhK50T6n2fiijC
          claim_id: c_tfMhho1aEkz5QSJj6s2hxw
          source_id: s_8LGXqP1Mr5pKwg5hDeTrYc
          stance: supports
          locator: CBDB:286461
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8LGXqP1Mr5pKwg5hDeTrYc
            source_type: api_record
            title: 中国历代人物传记资料库：王仲楚（CBDB 286461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286461&o=json
            external_identifier: CBDB:286461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ULwmBiGvLMaE2QEQRR4e3E
        subject_person_id: p_QijNj3iZ4NYhsZqc6vKFmE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲楚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_esCw4vbL74oLzKpbNWG8QY
          claim_id: c_ULwmBiGvLMaE2QEQRR4e3E
          source_id: s_8LGXqP1Mr5pKwg5hDeTrYc
          stance: supports
          locator: CBDB:286461
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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
        id: c_wTJcUbTzTO__rzoI752x28
        subject_person_id: p_QijNj3iZ4NYhsZqc6vKFmE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rzQDNnMKSBa8nJNVJmieoC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pJymgsi30OGrETJw40bguw
          claim_id: c_wTJcUbTzTO__rzoI752x28
          source_id: s_8LGXqP1Mr5pKwg5hDeTrYc
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第一甲第三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8LGXqP1Mr5pKwg5hDeTrYc
            source_type: api_record
            title: 中国历代人物传记资料库：王仲楚（CBDB 286461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286461&o=json
            external_identifier: CBDB:286461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rzQDNnMKSBa8nJNVJmieoC
        status: active
        display_name: 王鈺
        merged_into_person_id: null
  other: []
---

# 王仲楚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲楚，明人物。永樂十年進士，曾任經歷。（中国历代人物传记资料库 CBDB 286461） | accepted |
| name.primary | 王仲楚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rzQDNnMKSBa8nJNVJmieoC | 王鈺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲楚（CBDB 286461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286461&o=json)
