---
schema: wang-person/v1
id: p_AGQQjmY7TL9o4Ez2u4HPFV
status: active
merged_into: null
display_name: 王亮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vkUYRJEw5zqAQkAKbngY6o
        subject_person_id: p_AGQQjmY7TL9o4Ez2u4HPFV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YFei4dQUDvq8ozYzT9D7j6
          claim_id: c_vkUYRJEw5zqAQkAKbngY6o
          source_id: s_Z6R4EEqEN8C3zNnxTQuhUC
          stance: supports
          locator: CBDB:241293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241293）
          source: &a1
            id: s_Z6R4EEqEN8C3zNnxTQuhUC
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 241293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241293&o=json
            external_identifier: CBDB:241293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_68qVp3Vxjnw7dNq3kPgfqR
        subject_person_id: p_AGQQjmY7TL9o4Ez2u4HPFV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮，明人物。正統十三年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 241293）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZVAx-5NoU9g4yIlbo-Y0Qm
          claim_id: c_68qVp3Vxjnw7dNq3kPgfqR
          source_id: s_Z6R4EEqEN8C3zNnxTQuhUC
          stance: supports
          locator: CBDB:241293
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

# 王亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮 | accepted |
| bio.summary | 王亮，明人物。正統十三年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 241293） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亮（CBDB 241293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241293&o=json)
