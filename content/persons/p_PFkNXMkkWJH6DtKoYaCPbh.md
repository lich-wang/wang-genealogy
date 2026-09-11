---
schema: wang-person/v1
id: p_PFkNXMkkWJH6DtKoYaCPbh
status: active
merged_into: null
display_name: 王國印
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zn7x6Q3p1HC8zgvvXdL7KW
        subject_person_id: p_PFkNXMkkWJH6DtKoYaCPbh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國印
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W5Jxwdm11JYA3MPbH6wC89
          claim_id: c_zn7x6Q3p1HC8zgvvXdL7KW
          source_id: s_uQZDANR8sDzCkV8gk2bAPv
          stance: supports
          locator: CBDB:60893
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60893）
          source: &a1
            id: s_uQZDANR8sDzCkV8gk2bAPv
            source_type: api_record
            title: 中国历代人物传记资料库：王國印（CBDB 60893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60893&o=json
            external_identifier: CBDB:60893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NV8rgM8YNAS22m7ymSKti8
        subject_person_id: p_PFkNXMkkWJH6DtKoYaCPbh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國印，清人物。曾任副將、守備。（中国历代人物传记资料库 CBDB 60893）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_73weoO_sEhdgZ_JYaUZd_d
          claim_id: c_NV8rgM8YNAS22m7ymSKti8
          source_id: s_uQZDANR8sDzCkV8gk2bAPv
          stance: supports
          locator: CBDB:60893
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

# 王國印

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國印 | accepted |
| bio.summary | 王國印，清人物。曾任副將、守備。（中国历代人物传记资料库 CBDB 60893） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國印（CBDB 60893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60893&o=json)
