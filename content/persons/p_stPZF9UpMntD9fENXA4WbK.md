---
schema: wang-person/v1
id: p_stPZF9UpMntD9fENXA4WbK
status: active
merged_into: null
display_name: 王瓊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JosoB4bQyeS4RzUawskHBu
        subject_person_id: p_stPZF9UpMntD9fENXA4WbK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MRQzaGDC2rFyV8PCErQ3GV
          claim_id: c_JosoB4bQyeS4RzUawskHBu
          source_id: s_9832GwXCJjW5qWL2wZA8ee
          stance: supports
          locator: CBDB:284065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284065）
          source: &a1
            id: s_9832GwXCJjW5qWL2wZA8ee
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 284065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284065&o=json
            external_identifier: CBDB:284065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v5VAV42XN94EXp7B3KVjt6
        subject_person_id: p_stPZF9UpMntD9fENXA4WbK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊，明人物。天順元年進士，籍贯襄陽。（中国历代人物传记资料库 CBDB 284065）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TGPNCFHqLN2EHbxqpHggoc
          claim_id: c_v5VAV42XN94EXp7B3KVjt6
          source_id: s_9832GwXCJjW5qWL2wZA8ee
          stance: supports
          locator: CBDB:284065
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

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| bio.summary | 王瓊，明人物。天順元年進士，籍贯襄陽。（中国历代人物传记资料库 CBDB 284065） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 284065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284065&o=json)
