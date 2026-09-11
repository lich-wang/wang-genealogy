---
schema: wang-person/v1
id: p_Dp2fbAPhcZEHPyLxJDJR6u
status: active
merged_into: null
display_name: 王國楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z89CpaKUTSFHQ8VLGRW8fu
        subject_person_id: p_Dp2fbAPhcZEHPyLxJDJR6u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b1B4V6GPAC5ELgiDM3JaMV
          claim_id: c_z89CpaKUTSFHQ8VLGRW8fu
          source_id: s_WYDuMLi7H1TV7DhiA8b4W8
          stance: supports
          locator: CBDB:343435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343435）
          source: &a1
            id: s_WYDuMLi7H1TV7DhiA8b4W8
            source_type: api_record
            title: 中国历代人物传记资料库：王國楨（CBDB 343435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343435&o=json
            external_identifier: CBDB:343435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_scSZpNJeU3ta9PAEgb4UwE
        subject_person_id: p_Dp2fbAPhcZEHPyLxJDJR6u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國楨，明人物。明清進士進士，籍贯山陰，入仕進士。（中国历代人物传记资料库 CBDB 343435）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SFQWXU73YhOf41jSd8oZh6
          claim_id: c_scSZpNJeU3ta9PAEgb4UwE
          source_id: s_WYDuMLi7H1TV7DhiA8b4W8
          stance: supports
          locator: CBDB:343435
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

# 王國楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國楨 | accepted |
| bio.summary | 王國楨，明人物。明清進士進士，籍贯山陰，入仕進士。（中国历代人物传记资料库 CBDB 343435） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國楨（CBDB 343435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343435&o=json)
