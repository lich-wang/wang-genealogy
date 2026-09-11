---
schema: wang-person/v1
id: p_AGKEZDuRzbxBrjYP2inJ9n
status: active
merged_into: null
display_name: 王慶齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iTUmWwYLtJxp3fSrY1e57E
        subject_person_id: p_AGKEZDuRzbxBrjYP2inJ9n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6PFow8Rq8ZDUPf4urApH4g
          claim_id: c_iTUmWwYLtJxp3fSrY1e57E
          source_id: s_JDYfacidjcMxCCLYRrPGjp
          stance: supports
          locator: CBDB:637964
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637964）
          source: &a1
            id: s_JDYfacidjcMxCCLYRrPGjp
            source_type: api_record
            title: 中国历代人物传记资料库：王慶齡（CBDB 637964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637964&o=json
            external_identifier: CBDB:637964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.575Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xrzYPpQ457uQVQAXiFchbh
        subject_person_id: p_AGKEZDuRzbxBrjYP2inJ9n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶齡，清人物。籍贯大興，曾任縣丞、主簿。（中国历代人物传记资料库 CBDB 637964）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_29DF-r4yciTZzS2UbATV9c
          claim_id: c_xrzYPpQ457uQVQAXiFchbh
          source_id: s_JDYfacidjcMxCCLYRrPGjp
          stance: supports
          locator: CBDB:637964
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

# 王慶齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶齡 | accepted |
| bio.summary | 王慶齡，清人物。籍贯大興，曾任縣丞、主簿。（中国历代人物传记资料库 CBDB 637964） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶齡（CBDB 637964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637964&o=json)
