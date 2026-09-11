---
schema: wang-person/v1
id: p_AekrHekJBR41ECw5f6w7ss
status: active
merged_into: null
display_name: 王句
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jw2dKdXFVbq3yriuHgJbaw
        subject_person_id: p_AekrHekJBR41ECw5f6w7ss
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王句
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PjE8JqpCMd27t4wQzePB1w
          claim_id: c_jw2dKdXFVbq3yriuHgJbaw
          source_id: s_ZcrBtbms1RNyQYvThPk4jT
          stance: supports
          locator: CBDB:71051
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71051）
          source: &a1
            id: s_ZcrBtbms1RNyQYvThPk4jT
            source_type: api_record
            title: 中国历代人物传记资料库：王句（CBDB 71051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71051&o=json
            external_identifier: CBDB:71051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_W5jxoDqTrftbaQA7ihGQzg
        subject_person_id: p_AekrHekJBR41ECw5f6w7ss
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1656年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bFSWtmdEXHebn3uEeXPgCg
          claim_id: c_W5jxoDqTrftbaQA7ihGQzg
          source_id: s_ZcrBtbms1RNyQYvThPk4jT
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
        id: c_AcnjJfq3jsWEU25Nou5eXY
        subject_person_id: p_AekrHekJBR41ECw5f6w7ss
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1723年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rbUk3VQbSFgG9HJLKU3GT7
          claim_id: c_AcnjJfq3jsWEU25Nou5eXY
          source_id: s_ZcrBtbms1RNyQYvThPk4jT
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
        id: c_maFDoquGe65Z6B62ZZfQED
        subject_person_id: p_AekrHekJBR41ECw5f6w7ss
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王句（1656年—1723年），清人物。籍贯考城。（中国历代人物传记资料库 CBDB 71051）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0C5cBNVI_4rmCLKFVZm4iy
          claim_id: c_maFDoquGe65Z6B62ZZfQED
          source_id: s_ZcrBtbms1RNyQYvThPk4jT
          stance: supports
          locator: CBDB:71051
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

# 王句

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王句 | accepted |
| birth.date | 1656年 | accepted |
| death.date | 1723年 | accepted |
| bio.summary | 王句（1656年—1723年），清人物。籍贯考城。（中国历代人物传记资料库 CBDB 71051） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王句（CBDB 71051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71051&o=json)
