---
schema: wang-person/v1
id: p_ow2jTmBbn5c8TQ4WbrUPy8
status: active
merged_into: null
display_name: 王廷本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H8xvL2C32Kj6Nd4c9v3ee9
        subject_person_id: p_ow2jTmBbn5c8TQ4WbrUPy8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NcVdD1EfCM6hQgqMqy58qY
          claim_id: c_H8xvL2C32Kj6Nd4c9v3ee9
          source_id: s_3qGoW9HfJeK23KzQ6Wk9mc
          stance: supports
          locator: CBDB:692250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692250）
          source: &a1
            id: s_3qGoW9HfJeK23KzQ6Wk9mc
            source_type: api_record
            title: 中国历代人物传记资料库：王廷本（CBDB 692250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692250&o=json
            external_identifier: CBDB:692250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2uNs8ULdJkPYpZjPbHEa2Z
        subject_person_id: p_ow2jTmBbn5c8TQ4WbrUPy8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷本，清人物。籍贯黟縣，身份为為善鄉里，入仕監生。（中国历代人物传记资料库 CBDB 692250）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EmH9011rS7iCPZKYNDDbpx
          claim_id: c_2uNs8ULdJkPYpZjPbHEa2Z
          source_id: s_3qGoW9HfJeK23KzQ6Wk9mc
          stance: supports
          locator: CBDB:692250
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

# 王廷本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷本 | accepted |
| bio.summary | 王廷本，清人物。籍贯黟縣，身份为為善鄉里，入仕監生。（中国历代人物传记资料库 CBDB 692250） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷本（CBDB 692250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692250&o=json)
