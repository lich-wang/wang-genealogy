---
schema: wang-person/v1
id: p_cRqV9MVyRA5JpyKsQrEwXE
status: active
merged_into: null
display_name: 王厚坤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3QrMn7ZMVJHf6PyFRgj2PY
        subject_person_id: p_cRqV9MVyRA5JpyKsQrEwXE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚坤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n7E29RFAhT4xPgWM1n7DqD
          claim_id: c_3QrMn7ZMVJHf6PyFRgj2PY
          source_id: s_7yAxCWbhKVVWjRLdPqJvRX
          stance: supports
          locator: CBDB:636445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636445）
          source: &a1
            id: s_7yAxCWbhKVVWjRLdPqJvRX
            source_type: api_record
            title: 中国历代人物传记资料库：王厚坤（CBDB 636445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636445&o=json
            external_identifier: CBDB:636445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MvAfCqDQpX6M7zJ6e2FdC4
        subject_person_id: p_cRqV9MVyRA5JpyKsQrEwXE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚坤，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 636445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TTgZuEy_QOcXri7a6nSgFS
          claim_id: c_MvAfCqDQpX6M7zJ6e2FdC4
          source_id: s_7yAxCWbhKVVWjRLdPqJvRX
          stance: supports
          locator: CBDB:636445
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

# 王厚坤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王厚坤 | accepted |
| bio.summary | 王厚坤，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 636445） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王厚坤（CBDB 636445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636445&o=json)
