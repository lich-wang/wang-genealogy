---
schema: wang-person/v1
id: p_C18BYNFYuQNvWa6XCscLEk
status: active
merged_into: null
display_name: 王景
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Guw1UEwitr3zu5uwi1QWyb
        subject_person_id: p_C18BYNFYuQNvWa6XCscLEk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TYJnwbPDxppTySvMyWexfF
          claim_id: c_Guw1UEwitr3zu5uwi1QWyb
          source_id: s_LYT8XkvqwpURhX5a2UmeX6
          stance: supports
          locator: CBDB:494318
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494318）
          source: &a1
            id: s_LYT8XkvqwpURhX5a2UmeX6
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 494318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494318&o=json
            external_identifier: CBDB:494318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.441Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yNTat9DAmayTVutzAJf68b
        subject_person_id: p_C18BYNFYuQNvWa6XCscLEk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景，明人物。曾任典史。（中国历代人物传记资料库 CBDB 494318）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9JoUXK0Iq1_KMDZW7zuFdm
          claim_id: c_yNTat9DAmayTVutzAJf68b
          source_id: s_LYT8XkvqwpURhX5a2UmeX6
          stance: supports
          locator: CBDB:494318
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

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| bio.summary | 王景，明人物。曾任典史。（中国历代人物传记资料库 CBDB 494318） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景（CBDB 494318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494318&o=json)
