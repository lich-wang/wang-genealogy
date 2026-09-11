---
schema: wang-person/v1
id: p_Ma6KPxcQg4o2wZpzBRMMFD
status: active
merged_into: null
display_name: 王季光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kDk3A22sqyHUqVArPm8vEF
        subject_person_id: p_Ma6KPxcQg4o2wZpzBRMMFD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n6FTxBU1j2Fk8ibmQ27Kec
          claim_id: c_kDk3A22sqyHUqVArPm8vEF
          source_id: s_3Wk54vjky2TgVKvkQrNPkA
          stance: supports
          locator: CBDB:637017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637017）
          source: &a1
            id: s_3Wk54vjky2TgVKvkQrNPkA
            source_type: api_record
            title: 中国历代人物传记资料库：王季光（CBDB 637017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637017&o=json
            external_identifier: CBDB:637017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kAasJC1vBRQWZ3nJb8nBUa
        subject_person_id: p_Ma6KPxcQg4o2wZpzBRMMFD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季光，清人物。籍贯臨汾，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 637017）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DsQEuOE3voy3rjY7_qYki6
          claim_id: c_kAasJC1vBRQWZ3nJb8nBUa
          source_id: s_3Wk54vjky2TgVKvkQrNPkA
          stance: supports
          locator: CBDB:637017
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

# 王季光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王季光 | accepted |
| bio.summary | 王季光，清人物。籍贯臨汾，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 637017） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王季光（CBDB 637017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637017&o=json)
