---
schema: wang-person/v1
id: p_2jCdqPen2qCpmHzqKYP4zq
status: active
merged_into: null
display_name: 王雲吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1rdTe3u2YinS5N3erNHUNf
        subject_person_id: p_2jCdqPen2qCpmHzqKYP4zq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9bBKWBExoF4SV2zSk6rxDg
          claim_id: c_1rdTe3u2YinS5N3erNHUNf
          source_id: s_NTEY1z8Kk8j32nJuzRRSpj
          stance: supports
          locator: CBDB:640805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640805）
          source: &a1
            id: s_NTEY1z8Kk8j32nJuzRRSpj
            source_type: api_record
            title: 中国历代人物传记资料库：王雲吉（CBDB 640805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640805&o=json
            external_identifier: CBDB:640805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gESLdXjU1Et7BBd9bFSzMD
        subject_person_id: p_2jCdqPen2qCpmHzqKYP4zq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hoo7vuG6nf971Y4dwD98fX
          claim_id: c_gESLdXjU1Et7BBd9bFSzMD
          source_id: s_NTEY1z8Kk8j32nJuzRRSpj
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

# 王雲吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲吉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲吉（CBDB 640805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640805&o=json)
