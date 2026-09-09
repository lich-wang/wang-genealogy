---
schema: wang-person/v1
id: p_sBrch9576SA9L9dkiEbD91
status: active
merged_into: null
display_name: 王國昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pbw3tPYM9Koz2RTLYKQeVu
        subject_person_id: p_sBrch9576SA9L9dkiEbD91
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_opw3e8S1cuKRXoXUosgRS2
          claim_id: c_Pbw3tPYM9Koz2RTLYKQeVu
          source_id: s_66wo9JKogHd5biQVPDZjRE
          stance: supports
          locator: CBDB:101324
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101324）
          source: &a1
            id: s_66wo9JKogHd5biQVPDZjRE
            source_type: api_record
            title: 中国历代人物传记资料库：王國昌（CBDB 101324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101324&o=json
            external_identifier: CBDB:101324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fAVMo9Lzxke8iMA3emeJt8
        subject_person_id: p_sBrch9576SA9L9dkiEbD91
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1271年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H3ejy7HMwqH4equCyNwyse
          claim_id: c_fAVMo9Lzxke8iMA3emeJt8
          source_id: s_66wo9JKogHd5biQVPDZjRE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N5iKa721EU95CQEsTrf9B1
        subject_person_id: p_sBrch9576SA9L9dkiEbD91
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oYJ3kTVk6RY5ptLD8pJQr2
          claim_id: c_N5iKa721EU95CQEsTrf9B1
          source_id: s_66wo9JKogHd5biQVPDZjRE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王國昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國昌 | accepted |
| death.date | 1271年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國昌（CBDB 101324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101324&o=json)
