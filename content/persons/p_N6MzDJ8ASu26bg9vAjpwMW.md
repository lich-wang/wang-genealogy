---
schema: wang-person/v1
id: p_N6MzDJ8ASu26bg9vAjpwMW
status: active
merged_into: null
display_name: 王翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xknrmDREK99pQs9CR3wQPX
        subject_person_id: p_N6MzDJ8ASu26bg9vAjpwMW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pZDNjjv6wMJxMvLC646Q42
          claim_id: c_xknrmDREK99pQs9CR3wQPX
          source_id: s_MyJPz8AfxMu7JncrZ89ZDM
          stance: supports
          locator: CBDB:282975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282975）
          source: &a1
            id: s_MyJPz8AfxMu7JncrZ89ZDM
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 282975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282975&o=json
            external_identifier: CBDB:282975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zvxE2naF8JTQzMitgTPBGq
        subject_person_id: p_N6MzDJ8ASu26bg9vAjpwMW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰，明人物。景泰二年進士，籍贯仁和。（中国历代人物传记资料库 CBDB 282975）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jHaIlwsdOkBN2dcrz4QrLC
          claim_id: c_zvxE2naF8JTQzMitgTPBGq
          source_id: s_MyJPz8AfxMu7JncrZ89ZDM
          stance: supports
          locator: CBDB:282975
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

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | 王翰，明人物。景泰二年進士，籍贯仁和。（中国历代人物传记资料库 CBDB 282975） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 282975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282975&o=json)
