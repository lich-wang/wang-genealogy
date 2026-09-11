---
schema: wang-person/v1
id: p_2nQUQ4e9TgWC1xbwoC6Xh2
status: active
merged_into: null
display_name: 王一鶚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wE2eWtcZHbS4eFf3naUs36
        subject_person_id: p_2nQUQ4e9TgWC1xbwoC6Xh2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鶚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JRT4btfh1NY3A1qxL6taBg
          claim_id: c_wE2eWtcZHbS4eFf3naUs36
          source_id: s_UqF6zRiytNvohJ9dyJsQs9
          stance: supports
          locator: CBDB:256438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256438）
          source: &a1
            id: s_UqF6zRiytNvohJ9dyJsQs9
            source_type: api_record
            title: 中国历代人物传记资料库：王一鶚（CBDB 256438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256438&o=json
            external_identifier: CBDB:256438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y2k9HxvyYP1q1mSs7Yr9mH
        subject_person_id: p_2nQUQ4e9TgWC1xbwoC6Xh2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鶚，明人物。成化十七年進士，籍贯內江。（中国历代人物传记资料库 CBDB 256438）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gqk6_NSc4kXC6kGYOQpzvn
          claim_id: c_y2k9HxvyYP1q1mSs7Yr9mH
          source_id: s_UqF6zRiytNvohJ9dyJsQs9
          stance: supports
          locator: CBDB:256438
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

# 王一鶚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一鶚 | accepted |
| bio.summary | 王一鶚，明人物。成化十七年進士，籍贯內江。（中国历代人物传记资料库 CBDB 256438） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一鶚（CBDB 256438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256438&o=json)
