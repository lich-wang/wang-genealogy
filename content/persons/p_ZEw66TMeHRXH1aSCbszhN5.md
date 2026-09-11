---
schema: wang-person/v1
id: p_ZEw66TMeHRXH1aSCbszhN5
status: active
merged_into: null
display_name: 王壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hw9Dv4PTS9hWEiecMk9vsP
        subject_person_id: p_ZEw66TMeHRXH1aSCbszhN5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KM2H5jWDxmUTBU5yC6mCQV
          claim_id: c_hw9Dv4PTS9hWEiecMk9vsP
          source_id: s_aaujVvJ7ZQ5W8P8EwAJw38
          stance: supports
          locator: CBDB:100896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100896）
          source: &a1
            id: s_aaujVvJ7ZQ5W8P8EwAJw38
            source_type: api_record
            title: 中国历代人物传记资料库：王壽（CBDB 100896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100896&o=json
            external_identifier: CBDB:100896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8bUsbnx2QqmDQE3KMi82hc
        subject_person_id: p_ZEw66TMeHRXH1aSCbszhN5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1251年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6uVfVjLDCRifdxcpNGNxLt
          claim_id: c_8bUsbnx2QqmDQE3KMi82hc
          source_id: s_aaujVvJ7ZQ5W8P8EwAJw38
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
        id: c_9XDo8HX6Cpk4AaYJt8cyNM
        subject_person_id: p_ZEw66TMeHRXH1aSCbszhN5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1310年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Z2f58odbHF9tGomQQFUdi
          claim_id: c_9XDo8HX6Cpk4AaYJt8cyNM
          source_id: s_aaujVvJ7ZQ5W8P8EwAJw38
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
        id: c_9VhSs4eymnCH9v3653XAJu
        subject_person_id: p_ZEw66TMeHRXH1aSCbszhN5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽（1251年—1310年），元人物。曾任兵部員外郎、翰林國史院侍讀學士、集賢直學士。（中国历代人物传记资料库 CBDB 100896）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yXN90fKooD8mjHBqHMODQb
          claim_id: c_9VhSs4eymnCH9v3653XAJu
          source_id: s_aaujVvJ7ZQ5W8P8EwAJw38
          stance: supports
          locator: CBDB:100896
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

# 王壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽 | accepted |
| birth.date | 1251年 | accepted |
| death.date | 1310年 | accepted |
| bio.summary | 王壽（1251年—1310年），元人物。曾任兵部員外郎、翰林國史院侍讀學士、集賢直學士。（中国历代人物传记资料库 CBDB 100896） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽（CBDB 100896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100896&o=json)
