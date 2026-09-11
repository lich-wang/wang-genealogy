---
schema: wang-person/v1
id: p_7AQ6bgwQUz3k6J7Bo3sBQD
status: active
merged_into: null
display_name: 王垂蘊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Py2iMvcNkdhHC98SATpS1h
        subject_person_id: p_7AQ6bgwQUz3k6J7Bo3sBQD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂蘊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CP5Ba2Gq59NUWQveZ3XwQz
          claim_id: c_Py2iMvcNkdhHC98SATpS1h
          source_id: s_nBTe5mmT6pHFarrqmCJzzv
          stance: supports
          locator: CBDB:636697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636697）
          source: &a1
            id: s_nBTe5mmT6pHFarrqmCJzzv
            source_type: api_record
            title: 中国历代人物传记资料库：王垂蘊（CBDB 636697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636697&o=json
            external_identifier: CBDB:636697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zjfb6dNjUKCFcEHV6F6Mnr
        subject_person_id: p_7AQ6bgwQUz3k6J7Bo3sBQD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂蘊，清人物。籍贯諸城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636697）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pm7kP5BzU9wPJNXv319zo2
          claim_id: c_zjfb6dNjUKCFcEHV6F6Mnr
          source_id: s_nBTe5mmT6pHFarrqmCJzzv
          stance: supports
          locator: CBDB:636697
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

# 王垂蘊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垂蘊 | accepted |
| bio.summary | 王垂蘊，清人物。籍贯諸城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636697） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王垂蘊（CBDB 636697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636697&o=json)
