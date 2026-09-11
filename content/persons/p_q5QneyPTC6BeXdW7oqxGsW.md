---
schema: wang-person/v1
id: p_q5QneyPTC6BeXdW7oqxGsW
status: active
merged_into: null
display_name: 王太平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PX6qotPKU6Lf7UzjJqMVb3
        subject_person_id: p_q5QneyPTC6BeXdW7oqxGsW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WQHEVSP2UikDo68AeYgRCH
          claim_id: c_PX6qotPKU6Lf7UzjJqMVb3
          source_id: s_b7uEDLFeNwxjn8qywowh7t
          stance: supports
          locator: CBDB:636945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636945）
          source: &a1
            id: s_b7uEDLFeNwxjn8qywowh7t
            source_type: api_record
            title: 中国历代人物传记资料库：王太平（CBDB 636945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636945&o=json
            external_identifier: CBDB:636945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_utohELCpcVkw3yM5sW6KBB
        subject_person_id: p_q5QneyPTC6BeXdW7oqxGsW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太平，清人物。籍贯孝義，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 636945）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_80tVyaGDcfNqhPYFFcJA6f
          claim_id: c_utohELCpcVkw3yM5sW6KBB
          source_id: s_b7uEDLFeNwxjn8qywowh7t
          stance: supports
          locator: CBDB:636945
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

# 王太平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王太平 | accepted |
| bio.summary | 王太平，清人物。籍贯孝義，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 636945） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王太平（CBDB 636945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636945&o=json)
