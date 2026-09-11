---
schema: wang-person/v1
id: p_tby7Z4J8RoMA8RxPizJbAj
status: active
merged_into: null
display_name: 王承烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eeD3kC4Ng8QSGgqnZtJ61E
        subject_person_id: p_tby7Z4J8RoMA8RxPizJbAj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m7wUfY9VDUotUmPcADhgJD
          claim_id: c_eeD3kC4Ng8QSGgqnZtJ61E
          source_id: s_Kgsh2BU5qsrj9Q4hPjnzTd
          stance: supports
          locator: CBDB:66236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66236）
          source: &a1
            id: s_Kgsh2BU5qsrj9Q4hPjnzTd
            source_type: api_record
            title: 中国历代人物传记资料库：王承烈（CBDB 66236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66236&o=json
            external_identifier: CBDB:66236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WREdQh4FD5GVbjxADDSt8s
        subject_person_id: p_tby7Z4J8RoMA8RxPizJbAj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1666年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T4JhogLeAVsw4Kk6BHfcGA
          claim_id: c_WREdQh4FD5GVbjxADDSt8s
          source_id: s_Kgsh2BU5qsrj9Q4hPjnzTd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cnpb3vBwDx3S7MBnsEFwyh
        subject_person_id: p_tby7Z4J8RoMA8RxPizJbAj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1729年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_okUTVeGjc41AzHVJcvqdsQ
          claim_id: c_cnpb3vBwDx3S7MBnsEFwyh
          source_id: s_Kgsh2BU5qsrj9Q4hPjnzTd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_znLZzPNK7Nb42Gnh27eZaM
        subject_person_id: p_tby7Z4J8RoMA8RxPizJbAj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承烈（1666年—1729年），清人物。明清進士進士，籍贯涇陽，入仕進士，曾任道監察御史、檢討、同考官。（中国历代人物传记资料库 CBDB 66236）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XWSafrOWBvQdQWnvnh0QZ7
          claim_id: c_znLZzPNK7Nb42Gnh27eZaM
          source_id: s_Kgsh2BU5qsrj9Q4hPjnzTd
          stance: supports
          locator: CBDB:66236
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

# 王承烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承烈 | accepted |
| birth.date | 1666年 | accepted |
| death.date | 1729年 | accepted |
| bio.summary | 王承烈（1666年—1729年），清人物。明清進士進士，籍贯涇陽，入仕進士，曾任道監察御史、檢討、同考官。（中国历代人物传记资料库 CBDB 66236） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承烈（CBDB 66236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66236&o=json)
