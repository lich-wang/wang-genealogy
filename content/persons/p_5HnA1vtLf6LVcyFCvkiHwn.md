---
schema: wang-person/v1
id: p_5HnA1vtLf6LVcyFCvkiHwn
status: active
merged_into: null
display_name: 王應鐘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7j6teYRK5ktdDC5t86uNpJ
        subject_person_id: p_5HnA1vtLf6LVcyFCvkiHwn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鐘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wM3vbYq5qo3u72ZQoxDcjL
          claim_id: c_7j6teYRK5ktdDC5t86uNpJ
          source_id: s_ToAutSaMQgB9Av19r7EW9p
          stance: supports
          locator: CBDB:341574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341574）
          source: &a1
            id: s_ToAutSaMQgB9Av19r7EW9p
            source_type: api_record
            title: 中国历代人物传记资料库：王應鐘（CBDB 341574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341574&o=json
            external_identifier: CBDB:341574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qB2ZtAP4MwHtUCeXboh7cK
        subject_person_id: p_5HnA1vtLf6LVcyFCvkiHwn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鐘，明人物。明清進士進士，籍贯侯官，入仕進士。（中国历代人物传记资料库 CBDB 341574）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KwmOK8aGAcyHQIGCfrC5C2
          claim_id: c_qB2ZtAP4MwHtUCeXboh7cK
          source_id: s_ToAutSaMQgB9Av19r7EW9p
          stance: supports
          locator: CBDB:341574
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

# 王應鐘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應鐘 | accepted |
| bio.summary | 王應鐘，明人物。明清進士進士，籍贯侯官，入仕進士。（中国历代人物传记资料库 CBDB 341574） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應鐘（CBDB 341574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341574&o=json)
