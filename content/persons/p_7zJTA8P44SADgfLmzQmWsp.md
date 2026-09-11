---
schema: wang-person/v1
id: p_7zJTA8P44SADgfLmzQmWsp
status: active
merged_into: null
display_name: 王興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Q1j9Bk34nePC5c6XM7RNJ
        subject_person_id: p_7zJTA8P44SADgfLmzQmWsp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SKTXG1wRfkjDYDMjPsFypX
          claim_id: c_4Q1j9Bk34nePC5c6XM7RNJ
          source_id: s_VJ7MEJV7desBmx2SNdRwAf
          stance: supports
          locator: CBDB:271817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271817）
          source: &a1
            id: s_VJ7MEJV7desBmx2SNdRwAf
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 271817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271817&o=json
            external_identifier: CBDB:271817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GBkcgqHSY86GkWX6EtDLpQ
        subject_person_id: p_7zJTA8P44SADgfLmzQmWsp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興，明人物。景泰五年進士，籍贯密雲。（中国历代人物传记资料库 CBDB 271817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Am_w0sVVagMtdal9939eeD
          claim_id: c_GBkcgqHSY86GkWX6EtDLpQ
          source_id: s_VJ7MEJV7desBmx2SNdRwAf
          stance: supports
          locator: CBDB:271817
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

# 王興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興 | accepted |
| bio.summary | 王興，明人物。景泰五年進士，籍贯密雲。（中国历代人物传记资料库 CBDB 271817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興（CBDB 271817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271817&o=json)
