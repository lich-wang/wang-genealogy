---
schema: wang-person/v1
id: p_RFZ9vFkjbiPmkztLgYMcSM
status: active
merged_into: null
display_name: 王慶鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cFtPMwurQcQnR2zLKw53VW
        subject_person_id: p_RFZ9vFkjbiPmkztLgYMcSM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r8Xc1eztBwKpzzRCj9ww3U
          claim_id: c_cFtPMwurQcQnR2zLKw53VW
          source_id: s_EAqs6ykG4JszJMCagDRW2y
          stance: supports
          locator: CBDB:637959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637959）
          source: &a1
            id: s_EAqs6ykG4JszJMCagDRW2y
            source_type: api_record
            title: 中国历代人物传记资料库：王慶鑾（CBDB 637959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637959&o=json
            external_identifier: CBDB:637959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q6ViSbVcWpuqiK5mRaG77n
        subject_person_id: p_RFZ9vFkjbiPmkztLgYMcSM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶鑾，清人物。籍贯饒州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637959）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_43dRr2HkSa-Jv6tZILlAQA
          claim_id: c_Q6ViSbVcWpuqiK5mRaG77n
          source_id: s_EAqs6ykG4JszJMCagDRW2y
          stance: supports
          locator: CBDB:637959
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

# 王慶鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶鑾 | accepted |
| bio.summary | 王慶鑾，清人物。籍贯饒州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637959） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶鑾（CBDB 637959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637959&o=json)
