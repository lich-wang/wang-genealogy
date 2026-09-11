---
schema: wang-person/v1
id: p_Nba7Pxxui6p48JunwKJsB3
status: active
merged_into: null
display_name: 王庚年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dt8o2N3s3AhUydYGG4AsY9
        subject_person_id: p_Nba7Pxxui6p48JunwKJsB3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3A6wWV1MkHxvmZg5DvtLQK
          claim_id: c_Dt8o2N3s3AhUydYGG4AsY9
          source_id: s_Mu4ziEavHeUjFVyLTsE5Y7
          stance: supports
          locator: CBDB:637422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637422）
          source: &a1
            id: s_Mu4ziEavHeUjFVyLTsE5Y7
            source_type: api_record
            title: 中国历代人物传记资料库：王庚年（CBDB 637422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637422&o=json
            external_identifier: CBDB:637422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fhBFw5gSA5iDKgPnpANTGp
        subject_person_id: p_Nba7Pxxui6p48JunwKJsB3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庚年，清人物。籍贯長山，入仕鄉貢舉人，曾任內閣中書。（中国历代人物传记资料库 CBDB 637422）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rseAymgkef385dcyiz9_T8
          claim_id: c_fhBFw5gSA5iDKgPnpANTGp
          source_id: s_Mu4ziEavHeUjFVyLTsE5Y7
          stance: supports
          locator: CBDB:637422
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

# 王庚年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庚年 | accepted |
| bio.summary | 王庚年，清人物。籍贯長山，入仕鄉貢舉人，曾任內閣中書。（中国历代人物传记资料库 CBDB 637422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庚年（CBDB 637422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637422&o=json)
