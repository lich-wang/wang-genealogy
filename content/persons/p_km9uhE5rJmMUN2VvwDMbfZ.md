---
schema: wang-person/v1
id: p_km9uhE5rJmMUN2VvwDMbfZ
status: active
merged_into: null
display_name: 王振瓏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_esQKr6PLe3cxBkuKkeoQNx
        subject_person_id: p_km9uhE5rJmMUN2VvwDMbfZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振瓏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GVw73QvZi4SRuYJWzRkWoN
          claim_id: c_esQKr6PLe3cxBkuKkeoQNx
          source_id: s_uNSfbTYT2ynbCu8VJYy7Au
          stance: supports
          locator: CBDB:638126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638126）
          source: &a1
            id: s_uNSfbTYT2ynbCu8VJYy7Au
            source_type: api_record
            title: 中国历代人物传记资料库：王振瓏（CBDB 638126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638126&o=json
            external_identifier: CBDB:638126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m99VKttKDQcaVdCh32zyqy
        subject_person_id: p_km9uhE5rJmMUN2VvwDMbfZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振瓏，清人物。籍贯荊州府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 638126）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P2MEjf1ZfXWgm1El9h2_E1
          claim_id: c_m99VKttKDQcaVdCh32zyqy
          source_id: s_uNSfbTYT2ynbCu8VJYy7Au
          stance: supports
          locator: CBDB:638126
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

# 王振瓏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振瓏 | accepted |
| bio.summary | 王振瓏，清人物。籍贯荊州府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 638126） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振瓏（CBDB 638126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638126&o=json)
