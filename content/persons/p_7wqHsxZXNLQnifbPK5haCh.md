---
schema: wang-person/v1
id: p_7wqHsxZXNLQnifbPK5haCh
status: active
merged_into: null
display_name: 王應豸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TutpwWSWVKu11j6K6QCvVb
        subject_person_id: p_7wqHsxZXNLQnifbPK5haCh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應豸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yvdyChQz5bci9sTUtDd9J9
          claim_id: c_TutpwWSWVKu11j6K6QCvVb
          source_id: s_ez9MKsMKdPGyNF5ytgZ4oh
          stance: supports
          locator: CBDB:126847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126847）
          source: &a1
            id: s_ez9MKsMKdPGyNF5ytgZ4oh
            source_type: api_record
            title: 中国历代人物传记资料库：王應豸（CBDB 126847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126847&o=json
            external_identifier: CBDB:126847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3MTosKmMEZBPD3m389smEc
        subject_person_id: p_7wqHsxZXNLQnifbPK5haCh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應豸，明人物。籍贯掖縣。（中国历代人物传记资料库 CBDB 126847）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5w-YXZr6pjKDfkSSmYb4FT
          claim_id: c_3MTosKmMEZBPD3m389smEc
          source_id: s_ez9MKsMKdPGyNF5ytgZ4oh
          stance: supports
          locator: CBDB:126847
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

# 王應豸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應豸 | accepted |
| bio.summary | 王應豸，明人物。籍贯掖縣。（中国历代人物传记资料库 CBDB 126847） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應豸（CBDB 126847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126847&o=json)
