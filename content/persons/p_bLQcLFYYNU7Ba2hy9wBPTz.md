---
schema: wang-person/v1
id: p_bLQcLFYYNU7Ba2hy9wBPTz
status: active
merged_into: null
display_name: 王年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nTiQdLuADH63YBDRHhxG9Q
        subject_person_id: p_bLQcLFYYNU7Ba2hy9wBPTz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b41C6NdzBuRKAg9WowDFmr
          claim_id: c_nTiQdLuADH63YBDRHhxG9Q
          source_id: s_45223Ad5JQo2fAuaenz1UK
          stance: supports
          locator: CBDB:452976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452976）
          source: &a1
            id: s_45223Ad5JQo2fAuaenz1UK
            source_type: api_record
            title: 中国历代人物传记资料库：王年（CBDB 452976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452976&o=json
            external_identifier: CBDB:452976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EX6LUMeLduA8m4hMCW1tZf
        subject_person_id: p_bLQcLFYYNU7Ba2hy9wBPTz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王年，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 452976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_atG1SK2QJ3KBuRzzBkfl4R
          claim_id: c_EX6LUMeLduA8m4hMCW1tZf
          source_id: s_45223Ad5JQo2fAuaenz1UK
          stance: supports
          locator: CBDB:452976
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

# 王年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王年 | accepted |
| bio.summary | 王年，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 452976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王年（CBDB 452976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452976&o=json)
