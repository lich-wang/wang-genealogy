---
schema: wang-person/v1
id: p_BmLUexhEmZ9dL1bG4SSFLb
status: active
merged_into: null
display_name: 王方坦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Gp5EeZsBto9ckZ4rz5mUZ
        subject_person_id: p_BmLUexhEmZ9dL1bG4SSFLb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方坦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6eCmKxzQFuP9Jgeq39CgN2
          claim_id: c_2Gp5EeZsBto9ckZ4rz5mUZ
          source_id: s_a9LbCQURwBdADPRaz1FrT6
          stance: supports
          locator: CBDB:638316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638316）
          source: &a1
            id: s_a9LbCQURwBdADPRaz1FrT6
            source_type: api_record
            title: 中国历代人物传记资料库：王方坦（CBDB 638316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638316&o=json
            external_identifier: CBDB:638316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oXFjah6AvNF14tTrGQzTE2
        subject_person_id: p_BmLUexhEmZ9dL1bG4SSFLb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方坦，清人物。籍贯長沙，入仕鄉貢舉人，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 638316）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9TVb5v9kSRn3V1K-WR0xjc
          claim_id: c_oXFjah6AvNF14tTrGQzTE2
          source_id: s_a9LbCQURwBdADPRaz1FrT6
          stance: supports
          locator: CBDB:638316
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

# 王方坦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方坦 | accepted |
| bio.summary | 王方坦，清人物。籍贯長沙，入仕鄉貢舉人，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 638316） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王方坦（CBDB 638316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638316&o=json)
