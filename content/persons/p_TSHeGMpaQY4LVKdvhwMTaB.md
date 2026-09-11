---
schema: wang-person/v1
id: p_TSHeGMpaQY4LVKdvhwMTaB
status: active
merged_into: null
display_name: 王九齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_54b7aekfQMEyiAsTg8FVh8
        subject_person_id: p_TSHeGMpaQY4LVKdvhwMTaB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RSxk4RBxEQPVLH8wPfaeXw
          claim_id: c_54b7aekfQMEyiAsTg8FVh8
          source_id: s_Fta1y4Zbpb9W4Wk1GSkE1D
          stance: supports
          locator: CBDB:548212
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（548212）
          source: &a1
            id: s_Fta1y4Zbpb9W4Wk1GSkE1D
            source_type: api_record
            title: 中国历代人物传记资料库：王九齡（CBDB 548212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548212&o=json
            external_identifier: CBDB:548212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cZivPcTEP7ViKHzGj2uB4H
        subject_person_id: p_TSHeGMpaQY4LVKdvhwMTaB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九齡，宋人物。籍贯鄱陽，入仕進士。（中国历代人物传记资料库 CBDB 548212）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_luWZw5JjgJ7hVhkZFOK_Io
          claim_id: c_cZivPcTEP7ViKHzGj2uB4H
          source_id: s_Fta1y4Zbpb9W4Wk1GSkE1D
          stance: supports
          locator: CBDB:548212
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

# 王九齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九齡 | accepted |
| bio.summary | 王九齡，宋人物。籍贯鄱陽，入仕進士。（中国历代人物传记资料库 CBDB 548212） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九齡（CBDB 548212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548212&o=json)
