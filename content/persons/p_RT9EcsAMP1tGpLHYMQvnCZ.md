---
schema: wang-person/v1
id: p_RT9EcsAMP1tGpLHYMQvnCZ
status: active
merged_into: null
display_name: 王逵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_84P489PdeKxVUx8j2FAApC
        subject_person_id: p_RT9EcsAMP1tGpLHYMQvnCZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ye1o4ujB4JcoJtpoyd9Nvq
          claim_id: c_84P489PdeKxVUx8j2FAApC
          source_id: s_nqnsVjEESwU9YqETTnyT7i
          stance: supports
          locator: CBDB:701623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701623）
          source: &a1
            id: s_nqnsVjEESwU9YqETTnyT7i
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 701623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701623&o=json
            external_identifier: CBDB:701623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n6w6jmsJztc9hUL33TKpcc
        subject_person_id: p_RT9EcsAMP1tGpLHYMQvnCZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵，明人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 701623）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XWx1B3hcVIktExe-5lqgF8
          claim_id: c_n6w6jmsJztc9hUL33TKpcc
          source_id: s_nqnsVjEESwU9YqETTnyT7i
          stance: supports
          locator: CBDB:701623
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

# 王逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逵 | accepted |
| bio.summary | 王逵，明人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 701623） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逵（CBDB 701623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701623&o=json)
