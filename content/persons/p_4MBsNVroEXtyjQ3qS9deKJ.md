---
schema: wang-person/v1
id: p_4MBsNVroEXtyjQ3qS9deKJ
status: active
merged_into: null
display_name: 王請軾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mduQpAfZN7L4WzPmGd4rYn
        subject_person_id: p_4MBsNVroEXtyjQ3qS9deKJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王請軾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PJNB3unw4SguRHd3A5L8oE
          claim_id: c_mduQpAfZN7L4WzPmGd4rYn
          source_id: s_ecGipTcTinZfsQri6AJs6F
          stance: supports
          locator: CBDB:341684
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341684）
          source: &a1
            id: s_ecGipTcTinZfsQri6AJs6F
            source_type: api_record
            title: 中国历代人物传记资料库：王請軾（CBDB 341684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341684&o=json
            external_identifier: CBDB:341684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KEXPgkKby8j5idsFrtwPPL
        subject_person_id: p_4MBsNVroEXtyjQ3qS9deKJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王請軾，清人物。明清進士進士，籍贯山東省，入仕進士。（中国历代人物传记资料库 CBDB 341684）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sPt0RenKSYnobygbFukRVc
          claim_id: c_KEXPgkKby8j5idsFrtwPPL
          source_id: s_ecGipTcTinZfsQri6AJs6F
          stance: supports
          locator: CBDB:341684
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

# 王請軾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王請軾 | accepted |
| bio.summary | 王請軾，清人物。明清進士進士，籍贯山東省，入仕進士。（中国历代人物传记资料库 CBDB 341684） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王請軾（CBDB 341684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341684&o=json)
