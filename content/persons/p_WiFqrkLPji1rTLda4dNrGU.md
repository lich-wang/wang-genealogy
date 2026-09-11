---
schema: wang-person/v1
id: p_WiFqrkLPji1rTLda4dNrGU
status: active
merged_into: null
display_name: 王斌儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XP22udNkiPYJBzDZXgzw6T
        subject_person_id: p_WiFqrkLPji1rTLda4dNrGU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S7yPzjjg9LH3KH9bwBvpNr
          claim_id: c_XP22udNkiPYJBzDZXgzw6T
          source_id: s_pjoaFDWNbkGGeraLFN8ipb
          stance: supports
          locator: CBDB:638297
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638297）
          source: &a1
            id: s_pjoaFDWNbkGGeraLFN8ipb
            source_type: api_record
            title: 中国历代人物传记资料库：王斌儒（CBDB 638297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638297&o=json
            external_identifier: CBDB:638297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_312d5HK2JmRC29FNBS73fi
        subject_person_id: p_WiFqrkLPji1rTLda4dNrGU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌儒，清人物。籍贯奉天府，曾任戶部八品筆帖式、戶部七品筆帖式、七品筆帖式。（中国历代人物传记资料库 CBDB 638297）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tL3fecMkGYorPYsah_dxoJ
          claim_id: c_312d5HK2JmRC29FNBS73fi
          source_id: s_pjoaFDWNbkGGeraLFN8ipb
          stance: supports
          locator: CBDB:638297
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

# 王斌儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌儒 | accepted |
| bio.summary | 王斌儒，清人物。籍贯奉天府，曾任戶部八品筆帖式、戶部七品筆帖式、七品筆帖式。（中国历代人物传记资料库 CBDB 638297） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斌儒（CBDB 638297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638297&o=json)
