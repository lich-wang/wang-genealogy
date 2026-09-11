---
schema: wang-person/v1
id: p_AsrRcMrSQCkU4ugBf1Rxxy
status: active
merged_into: null
display_name: 王新熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kgjT47V8rBpir6QcCtzmu9
        subject_person_id: p_AsrRcMrSQCkU4ugBf1Rxxy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zxkcnK2FccuPBEvM5vZSrj
          claim_id: c_kgjT47V8rBpir6QcCtzmu9
          source_id: s_p8pNqsABmt8KHjaQYxFgv5
          stance: supports
          locator: CBDB:638309
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638309）
          source: &a1
            id: s_p8pNqsABmt8KHjaQYxFgv5
            source_type: api_record
            title: 中国历代人物传记资料库：王新熙（CBDB 638309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638309&o=json
            external_identifier: CBDB:638309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZijR6pNA57PvXohjjj9HKT
        subject_person_id: p_AsrRcMrSQCkU4ugBf1Rxxy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新熙，清人物。籍贯浙江省，入仕軍功補授(軍功)，曾任中軍守備。（中国历代人物传记资料库 CBDB 638309）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wCYlnQrvn8QXfnqJH8UsGu
          claim_id: c_ZijR6pNA57PvXohjjj9HKT
          source_id: s_p8pNqsABmt8KHjaQYxFgv5
          stance: supports
          locator: CBDB:638309
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

# 王新熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王新熙 | accepted |
| bio.summary | 王新熙，清人物。籍贯浙江省，入仕軍功補授(軍功)，曾任中軍守備。（中国历代人物传记资料库 CBDB 638309） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王新熙（CBDB 638309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638309&o=json)
