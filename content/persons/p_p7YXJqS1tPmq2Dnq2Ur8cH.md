---
schema: wang-person/v1
id: p_p7YXJqS1tPmq2Dnq2Ur8cH
status: active
merged_into: null
display_name: 王緄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RrYbSN6MmwZLEE2UqBsELH
        subject_person_id: p_p7YXJqS1tPmq2Dnq2Ur8cH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iMS3UXEJyUY17Bta69NKDD
          claim_id: c_RrYbSN6MmwZLEE2UqBsELH
          source_id: s_dvRkbWxuCfDAGx1qFFUaQ2
          stance: supports
          locator: CBDB:327950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327950）
          source: &a1
            id: s_dvRkbWxuCfDAGx1qFFUaQ2
            source_type: api_record
            title: 中国历代人物传记资料库：王緄（CBDB 327950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327950&o=json
            external_identifier: CBDB:327950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.273Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F9F6yD6hSzcBYJMXGCuW6u
        subject_person_id: p_p7YXJqS1tPmq2Dnq2Ur8cH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緄，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327950）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sJMFoedUoPzhLlrN6JH5TT
          claim_id: c_F9F6yD6hSzcBYJMXGCuW6u
          source_id: s_dvRkbWxuCfDAGx1qFFUaQ2
          stance: supports
          locator: CBDB:327950
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

# 王緄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緄 | accepted |
| bio.summary | 王緄，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327950） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緄（CBDB 327950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327950&o=json)
