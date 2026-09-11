---
schema: wang-person/v1
id: p_WfpmFG7PBmbHPuXTpMYqh5
status: active
merged_into: null
display_name: 王倚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YrW7aCQ6gTLMXure7isiYq
        subject_person_id: p_WfpmFG7PBmbHPuXTpMYqh5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jyJp4vGx9k25k4H4u7d25o
          claim_id: c_YrW7aCQ6gTLMXure7isiYq
          source_id: s_Qxqfr6Y45MLUzpsfhYQqw6
          stance: supports
          locator: CBDB:688003
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688003）
          source: &a1
            id: s_Qxqfr6Y45MLUzpsfhYQqw6
            source_type: api_record
            title: 中国历代人物传记资料库：王倚（CBDB 688003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688003&o=json
            external_identifier: CBDB:688003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PC6yTDsWhfDZvjib76A84A
        subject_person_id: p_WfpmFG7PBmbHPuXTpMYqh5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倚，宋人物。籍贯臨川，入仕進士。（中国历代人物传记资料库 CBDB 688003）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vXUeThZW9sKRpI5lou_Z3m
          claim_id: c_PC6yTDsWhfDZvjib76A84A
          source_id: s_Qxqfr6Y45MLUzpsfhYQqw6
          stance: supports
          locator: CBDB:688003
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

# 王倚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倚 | accepted |
| bio.summary | 王倚，宋人物。籍贯臨川，入仕進士。（中国历代人物传记资料库 CBDB 688003） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倚（CBDB 688003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688003&o=json)
