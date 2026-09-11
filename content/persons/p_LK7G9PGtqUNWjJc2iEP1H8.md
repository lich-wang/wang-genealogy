---
schema: wang-person/v1
id: p_LK7G9PGtqUNWjJc2iEP1H8
status: active
merged_into: null
display_name: 王戊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wv3GAAKr1f9U9n4aMWJGsH
        subject_person_id: p_LK7G9PGtqUNWjJc2iEP1H8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王戊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LP5R1vWG8QaetpXDzbUGYY
          claim_id: c_Wv3GAAKr1f9U9n4aMWJGsH
          source_id: s_KrXkPNqUUWzyLX7qiKq6LA
          stance: supports
          locator: CBDB:97902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97902）
          source: &a1
            id: s_KrXkPNqUUWzyLX7qiKq6LA
            source_type: api_record
            title: 中国历代人物传记资料库：王戊（CBDB 97902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97902&o=json
            external_identifier: CBDB:97902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HRKMME5AL355qfG1cADBTG
        subject_person_id: p_LK7G9PGtqUNWjJc2iEP1H8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王戊，宋人物。曾任承議郎。（中国历代人物传记资料库 CBDB 97902）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WyTW296CSAtOL9R8_x6l-P
          claim_id: c_HRKMME5AL355qfG1cADBTG
          source_id: s_KrXkPNqUUWzyLX7qiKq6LA
          stance: supports
          locator: CBDB:97902
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

# 王戊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王戊 | accepted |
| bio.summary | 王戊，宋人物。曾任承議郎。（中国历代人物传记资料库 CBDB 97902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王戊（CBDB 97902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97902&o=json)
