---
schema: wang-person/v1
id: p_gmmN3mijWJkdUqDCNjk67h
status: active
merged_into: null
display_name: 王霞卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YQ4a91ggjLX94h5e361xM6
        subject_person_id: p_gmmN3mijWJkdUqDCNjk67h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霞卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jYSWMbdHaQMJzyWmMin59N
          claim_id: c_YQ4a91ggjLX94h5e361xM6
          source_id: s_NsACFmn2VykNch9zpjA7Q1
          stance: supports
          locator: CBDB:92123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92123）
          source: &a1
            id: s_NsACFmn2VykNch9zpjA7Q1
            source_type: api_record
            title: 中国历代人物传记资料库：王霞卿（CBDB 92123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92123&o=json
            external_identifier: CBDB:92123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U8YGRFr32mfyr6poq7D5Xs
        subject_person_id: p_gmmN3mijWJkdUqDCNjk67h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霞卿，唐人物。籍贯藍田，身份为詩人。（中国历代人物传记资料库 CBDB 92123）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EDZfFUid0B9xHWmZljJ4EK
          claim_id: c_U8YGRFr32mfyr6poq7D5Xs
          source_id: s_NsACFmn2VykNch9zpjA7Q1
          stance: supports
          locator: CBDB:92123
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

# 王霞卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霞卿 | accepted |
| bio.summary | 王霞卿，唐人物。籍贯藍田，身份为詩人。（中国历代人物传记资料库 CBDB 92123） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霞卿（CBDB 92123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92123&o=json)
