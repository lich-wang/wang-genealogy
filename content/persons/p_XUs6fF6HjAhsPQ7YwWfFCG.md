---
schema: wang-person/v1
id: p_XUs6fF6HjAhsPQ7YwWfFCG
status: active
merged_into: null
display_name: 王鶴祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZJVjzabp2T35ANaSsD7UA8
        subject_person_id: p_XUs6fF6HjAhsPQ7YwWfFCG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V8wv4Y1JAd32GLjqPiqDeX
          claim_id: c_ZJVjzabp2T35ANaSsD7UA8
          source_id: s_nLGUM2VaouvsZETuH6jaPA
          stance: supports
          locator: CBDB:641020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641020）
          source: &a1
            id: s_nLGUM2VaouvsZETuH6jaPA
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴祥（CBDB 641020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641020&o=json
            external_identifier: CBDB:641020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kS5VEZ2BFVixZfiEog53tF
        subject_person_id: p_XUs6fF6HjAhsPQ7YwWfFCG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴祥，清人物。籍贯鞏昌府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 641020）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IuGNqKFdG2sAjWF32vPmTa
          claim_id: c_kS5VEZ2BFVixZfiEog53tF
          source_id: s_nLGUM2VaouvsZETuH6jaPA
          stance: supports
          locator: CBDB:641020
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

# 王鶴祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鶴祥 | accepted |
| bio.summary | 王鶴祥，清人物。籍贯鞏昌府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 641020） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鶴祥（CBDB 641020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641020&o=json)
