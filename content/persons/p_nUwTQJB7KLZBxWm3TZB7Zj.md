---
schema: wang-person/v1
id: p_nUwTQJB7KLZBxWm3TZB7Zj
status: active
merged_into: null
display_name: 王來聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rNikAaJqtYJzzz68qWD7D3
        subject_person_id: p_nUwTQJB7KLZBxWm3TZB7Zj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yep46QKrPaVHR4B7H1QAUj
          claim_id: c_rNikAaJqtYJzzz68qWD7D3
          source_id: s_efh34U2kiZCNSrbQutupBk
          stance: supports
          locator: CBDB:126564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126564）
          source: &a1
            id: s_efh34U2kiZCNSrbQutupBk
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 126564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126564&o=json
            external_identifier: CBDB:126564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NcHkbM265GsuPoAEFyR9GF
        subject_person_id: p_nUwTQJB7KLZBxWm3TZB7Zj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來聘，明人物。籍贯京師。（中国历代人物传记资料库 CBDB 126564）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__zX9990FG3reYCTG13W0eg
          claim_id: c_NcHkbM265GsuPoAEFyR9GF
          source_id: s_efh34U2kiZCNSrbQutupBk
          stance: supports
          locator: CBDB:126564
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

# 王來聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來聘 | accepted |
| bio.summary | 王來聘，明人物。籍贯京師。（中国历代人物传记资料库 CBDB 126564） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王來聘（CBDB 126564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126564&o=json)
