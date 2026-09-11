---
schema: wang-person/v1
id: p_QEWpFKiKZc1EfE8M4rwzsP
status: active
merged_into: null
display_name: 王之賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KyBF3x5vA7btoj1Gz1kkuj
        subject_person_id: p_QEWpFKiKZc1EfE8M4rwzsP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5AzjXKQXBCoWmsPpRJGzLQ
          claim_id: c_KyBF3x5vA7btoj1Gz1kkuj
          source_id: s_aBAA4oBbp3rwbEqimr4xwf
          stance: supports
          locator: CBDB:334260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334260）
          source: &a1
            id: s_aBAA4oBbp3rwbEqimr4xwf
            source_type: api_record
            title: 中国历代人物传记资料库：王之賢（CBDB 334260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334260&o=json
            external_identifier: CBDB:334260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yue2fpPyWe5SFZemBA8BHj
        subject_person_id: p_QEWpFKiKZc1EfE8M4rwzsP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之賢，明人物。隆慶二年進士，籍贯鄒平。（中国历代人物传记资料库 CBDB 334260）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rHWu3jP83XMNBeSclMe8-4
          claim_id: c_Yue2fpPyWe5SFZemBA8BHj
          source_id: s_aBAA4oBbp3rwbEqimr4xwf
          stance: supports
          locator: CBDB:334260
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

# 王之賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之賢 | accepted |
| bio.summary | 王之賢，明人物。隆慶二年進士，籍贯鄒平。（中国历代人物传记资料库 CBDB 334260） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之賢（CBDB 334260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334260&o=json)
