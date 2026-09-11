---
schema: wang-person/v1
id: p_nUxV13c5UtaEz9W4ErCARU
status: active
merged_into: null
display_name: 王澤民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wdhAzDd4iPE5KA5D36g8VH
        subject_person_id: p_nUxV13c5UtaEz9W4ErCARU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rSEst2k6RZbijFJWPrrY3W
          claim_id: c_wdhAzDd4iPE5KA5D36g8VH
          source_id: s_SA4KqhsaqskjjWFsAPJg15
          stance: supports
          locator: CBDB:686196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686196）
          source: &a1
            id: s_SA4KqhsaqskjjWFsAPJg15
            source_type: api_record
            title: 中国历代人物传记资料库：王澤民（CBDB 686196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686196&o=json
            external_identifier: CBDB:686196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SSck9mK5nzwZphzTRDw8H4
        subject_person_id: p_nUxV13c5UtaEz9W4ErCARU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤民，宋人物。籍贯常州，入仕進士。（中国历代人物传记资料库 CBDB 686196）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_krjO6m_C-SQdZ4nKaBGpQr
          claim_id: c_SSck9mK5nzwZphzTRDw8H4
          source_id: s_SA4KqhsaqskjjWFsAPJg15
          stance: supports
          locator: CBDB:686196
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

# 王澤民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤民 | accepted |
| bio.summary | 王澤民，宋人物。籍贯常州，入仕進士。（中国历代人物传记资料库 CBDB 686196） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤民（CBDB 686196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686196&o=json)
