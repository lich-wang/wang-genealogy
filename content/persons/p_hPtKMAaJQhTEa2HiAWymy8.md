---
schema: wang-person/v1
id: p_hPtKMAaJQhTEa2HiAWymy8
status: active
merged_into: null
display_name: 王重魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qhdFJaLraK3pWhoBg31qvS
        subject_person_id: p_hPtKMAaJQhTEa2HiAWymy8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3H1uKa9nKJGJV71SHpXQD5
          claim_id: c_qhdFJaLraK3pWhoBg31qvS
          source_id: s_eCPEWSBjC5a36qV5AzQbQn
          stance: supports
          locator: CBDB:640503
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640503）
          source: &a1
            id: s_eCPEWSBjC5a36qV5AzQbQn
            source_type: api_record
            title: 中国历代人物传记资料库：王重魁（CBDB 640503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640503&o=json
            external_identifier: CBDB:640503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UAgFyeifs5tq3f6CRa425y
        subject_person_id: p_hPtKMAaJQhTEa2HiAWymy8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重魁，清人物。籍贯永順，曾任復設訓導。（中国历代人物传记资料库 CBDB 640503）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kIjsgtirQElqQ0F3UyzKbG
          claim_id: c_UAgFyeifs5tq3f6CRa425y
          source_id: s_eCPEWSBjC5a36qV5AzQbQn
          stance: supports
          locator: CBDB:640503
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

# 王重魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重魁 | accepted |
| bio.summary | 王重魁，清人物。籍贯永順，曾任復設訓導。（中国历代人物传记资料库 CBDB 640503） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重魁（CBDB 640503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640503&o=json)
