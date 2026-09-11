---
schema: wang-person/v1
id: p_pNpMBY7Kn6eA2tJiLCjZtW
status: active
merged_into: null
display_name: 王喬棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sTBQg6hKkB6E4FidqsZ9xb
        subject_person_id: p_pNpMBY7Kn6eA2tJiLCjZtW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mBXSMnSiXWbaXvtvEYGoUR
          claim_id: c_sTBQg6hKkB6E4FidqsZ9xb
          source_id: s_C4PqRTk5MnTUAjrgt35Mph
          stance: supports
          locator: CBDB:342101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342101）
          source: &a1
            id: s_C4PqRTk5MnTUAjrgt35Mph
            source_type: api_record
            title: 中国历代人物传记资料库：王喬棟（CBDB 342101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342101&o=json
            external_identifier: CBDB:342101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D3Ph4aj746jS9TH2H5oGU7
        subject_person_id: p_pNpMBY7Kn6eA2tJiLCjZtW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬棟，明人物。明清進士進士，籍贯雄縣，入仕進士。（中国历代人物传记资料库 CBDB 342101）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P6yMmD0bEUo52f4f9SkC4P
          claim_id: c_D3Ph4aj746jS9TH2H5oGU7
          source_id: s_C4PqRTk5MnTUAjrgt35Mph
          stance: supports
          locator: CBDB:342101
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

# 王喬棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喬棟 | accepted |
| bio.summary | 王喬棟，明人物。明清進士進士，籍贯雄縣，入仕進士。（中国历代人物传记资料库 CBDB 342101） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喬棟（CBDB 342101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342101&o=json)
