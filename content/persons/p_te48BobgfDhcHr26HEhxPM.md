---
schema: wang-person/v1
id: p_te48BobgfDhcHr26HEhxPM
status: active
merged_into: null
display_name: 王餘慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zyNh96CoHqgYAk4g6Ga8DH
        subject_person_id: p_te48BobgfDhcHr26HEhxPM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eQ7HPKK8QuLWLQGLgK4Xwc
          claim_id: c_zyNh96CoHqgYAk4g6Ga8DH
          source_id: s_FMBYYMdfmbxe6bmAKAWp6x
          stance: supports
          locator: CBDB:695044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695044）
          source: &a1
            id: s_FMBYYMdfmbxe6bmAKAWp6x
            source_type: api_record
            title: 中国历代人物传记资料库：王餘慶（CBDB 695044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695044&o=json
            external_identifier: CBDB:695044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KCBAEMnXpKCdt8zjXF4qZP
        subject_person_id: p_te48BobgfDhcHr26HEhxPM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘慶，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695044）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E_1FHbTuXWJYNuKvU-lDE6
          claim_id: c_KCBAEMnXpKCdt8zjXF4qZP
          source_id: s_FMBYYMdfmbxe6bmAKAWp6x
          stance: supports
          locator: CBDB:695044
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

# 王餘慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王餘慶 | accepted |
| bio.summary | 王餘慶，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695044） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王餘慶（CBDB 695044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695044&o=json)
