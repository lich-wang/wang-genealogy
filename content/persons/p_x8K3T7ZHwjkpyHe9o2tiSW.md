---
schema: wang-person/v1
id: p_x8K3T7ZHwjkpyHe9o2tiSW
status: active
merged_into: null
display_name: 王孝侢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7Zg4sk3nQdXp1pe4eD8sRA
        subject_person_id: p_x8K3T7ZHwjkpyHe9o2tiSW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝侢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ceV97YLDosjyGRkrD2KBkr
          claim_id: c_7Zg4sk3nQdXp1pe4eD8sRA
          source_id: s_KvQULp8j66vwGsoa6XA9ta
          stance: supports
          locator: CBDB:637008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637008）
          source: &a1
            id: s_KvQULp8j66vwGsoa6XA9ta
            source_type: api_record
            title: 中国历代人物传记资料库：王孝侢（CBDB 637008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637008&o=json
            external_identifier: CBDB:637008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1q2rCheTdqgkzp2JhJLtrG
        subject_person_id: p_x8K3T7ZHwjkpyHe9o2tiSW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝侢，清人物。籍贯會稽，入仕鄉貢舉人，曾任撫民同知。（中国历代人物传记资料库 CBDB 637008）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dTaKvnX9cZXXRx53VSAvSN
          claim_id: c_1q2rCheTdqgkzp2JhJLtrG
          source_id: s_KvQULp8j66vwGsoa6XA9ta
          stance: supports
          locator: CBDB:637008
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

# 王孝侢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝侢 | accepted |
| bio.summary | 王孝侢，清人物。籍贯會稽，入仕鄉貢舉人，曾任撫民同知。（中国历代人物传记资料库 CBDB 637008） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孝侢（CBDB 637008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637008&o=json)
