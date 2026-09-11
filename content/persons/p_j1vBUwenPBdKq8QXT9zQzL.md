---
schema: wang-person/v1
id: p_j1vBUwenPBdKq8QXT9zQzL
status: active
merged_into: null
display_name: 王名揚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j2PdbDYCwywa7m4HwubDDv
        subject_person_id: p_j1vBUwenPBdKq8QXT9zQzL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王名揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5kG5zN4HP7Br1BB53P72hb
          claim_id: c_j2PdbDYCwywa7m4HwubDDv
          source_id: s_Y6XVVXb9EomVKSKpQmACKh
          stance: supports
          locator: CBDB:441138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（441138）
          source: &a1
            id: s_Y6XVVXb9EomVKSKpQmACKh
            source_type: api_record
            title: 中国历代人物传记资料库：王名揚（CBDB 441138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441138&o=json
            external_identifier: CBDB:441138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.103Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rGmKPmxz2cx2aex7PCjchT
        subject_person_id: p_j1vBUwenPBdKq8QXT9zQzL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王名揚，清人物。籍贯諸城，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 441138）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FEBNiJt-jHX8_kUC8N2LTS
          claim_id: c_rGmKPmxz2cx2aex7PCjchT
          source_id: s_Y6XVVXb9EomVKSKpQmACKh
          stance: supports
          locator: CBDB:441138
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

# 王名揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王名揚 | accepted |
| bio.summary | 王名揚，清人物。籍贯諸城，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 441138） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王名揚（CBDB 441138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441138&o=json)
