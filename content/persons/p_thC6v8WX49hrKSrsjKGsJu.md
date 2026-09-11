---
schema: wang-person/v1
id: p_thC6v8WX49hrKSrsjKGsJu
status: active
merged_into: null
display_name: 王詠香
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P2oq65GT6AW4SBatvrpe5b
        subject_person_id: p_thC6v8WX49hrKSrsjKGsJu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詠香
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BYNFMzj7LDuf2iJ8PyMcQ8
          claim_id: c_P2oq65GT6AW4SBatvrpe5b
          source_id: s_6bs8GeokH68uqcAXXBF86U
          stance: supports
          locator: CBDB:636534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636534）
          source: &a1
            id: s_6bs8GeokH68uqcAXXBF86U
            source_type: api_record
            title: 中国历代人物传记资料库：王詠香（CBDB 636534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636534&o=json
            external_identifier: CBDB:636534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gGo7yqdNUwM89zYSuAT4LR
        subject_person_id: p_thC6v8WX49hrKSrsjKGsJu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詠香，清人物。籍贯饒州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1wYKHYOuzge3W7dwp1OaGZ
          claim_id: c_gGo7yqdNUwM89zYSuAT4LR
          source_id: s_6bs8GeokH68uqcAXXBF86U
          stance: supports
          locator: CBDB:636534
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

# 王詠香

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詠香 | accepted |
| bio.summary | 王詠香，清人物。籍贯饒州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詠香（CBDB 636534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636534&o=json)
