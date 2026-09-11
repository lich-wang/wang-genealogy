---
schema: wang-person/v1
id: p_EyikFFQvMo4BBYZ6vbc2on
status: active
merged_into: null
display_name: 王萬齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pr3HLDTd2LBrv6nHTjrPUt
        subject_person_id: p_EyikFFQvMo4BBYZ6vbc2on
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PMF3GPQEFR6VW48Fk7roPR
          claim_id: c_Pr3HLDTd2LBrv6nHTjrPUt
          source_id: s_Cpd5MEc6BL7TyVbRjRHas7
          stance: supports
          locator: CBDB:640128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640128）
          source: &a1
            id: s_Cpd5MEc6BL7TyVbRjRHas7
            source_type: api_record
            title: 中国历代人物传记资料库：王萬齢（CBDB 640128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640128&o=json
            external_identifier: CBDB:640128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JAfSR4yNgeAyzcnru2j2fx
        subject_person_id: p_EyikFFQvMo4BBYZ6vbc2on
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬齢，清人物。籍贯襄陽，曾任主事。（中国历代人物传记资料库 CBDB 640128）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S_UqwlxxHYIqxzqiFc0hSt
          claim_id: c_JAfSR4yNgeAyzcnru2j2fx
          source_id: s_Cpd5MEc6BL7TyVbRjRHas7
          stance: supports
          locator: CBDB:640128
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

# 王萬齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬齢 | accepted |
| bio.summary | 王萬齢，清人物。籍贯襄陽，曾任主事。（中国历代人物传记资料库 CBDB 640128） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬齢（CBDB 640128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640128&o=json)
