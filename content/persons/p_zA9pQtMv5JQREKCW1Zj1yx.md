---
schema: wang-person/v1
id: p_zA9pQtMv5JQREKCW1Zj1yx
status: active
merged_into: null
display_name: 王鳳韶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H8YMyrigGnF89s6GPcNMWY
        subject_person_id: p_zA9pQtMv5JQREKCW1Zj1yx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pMi5RP7ihBd67fw9DxHDKi
          claim_id: c_H8YMyrigGnF89s6GPcNMWY
          source_id: s_yGNZD2HKKvzSK5ULuBMZqt
          stance: supports
          locator: CBDB:640965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640965）
          source: &a1
            id: s_yGNZD2HKKvzSK5ULuBMZqt
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳韶（CBDB 640965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640965&o=json
            external_identifier: CBDB:640965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.430Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rv13cFUMqYTeEFT8dTo4JT
        subject_person_id: p_zA9pQtMv5JQREKCW1Zj1yx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳韶，清人物。籍贯蘇州府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 640965）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K5Q-SGEbtZbZmGyzclL1rO
          claim_id: c_Rv13cFUMqYTeEFT8dTo4JT
          source_id: s_yGNZD2HKKvzSK5ULuBMZqt
          stance: supports
          locator: CBDB:640965
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

# 王鳳韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳韶 | accepted |
| bio.summary | 王鳳韶，清人物。籍贯蘇州府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 640965） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳韶（CBDB 640965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640965&o=json)
