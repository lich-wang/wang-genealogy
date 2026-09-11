---
schema: wang-person/v1
id: p_m7wwoo1FH2uNPza3MUkG26
status: active
merged_into: null
display_name: 王卓然
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n3EFGG4EQJzp9JyFvq2mFB
        subject_person_id: p_m7wwoo1FH2uNPza3MUkG26
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卓然
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HNFCHk1QYdKcYGxhBCLGFz
          claim_id: c_n3EFGG4EQJzp9JyFvq2mFB
          source_id: s_NuAMF5o33k3GGSr698boLA
          stance: supports
          locator: CBDB:71745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71745）
          source: &a1
            id: s_NuAMF5o33k3GGSr698boLA
            source_type: api_record
            title: 中国历代人物传记资料库：王卓然（CBDB 71745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71745&o=json
            external_identifier: CBDB:71745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rhuddFCHLceEgBJjRkP6ES
        subject_person_id: p_m7wwoo1FH2uNPza3MUkG26
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1811年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x476ewTY1P4orRqMT6Cumx
          claim_id: c_rhuddFCHLceEgBJjRkP6ES
          source_id: s_NuAMF5o33k3GGSr698boLA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NiExsWTz9ZtqBe45u8MKqM
        subject_person_id: p_m7wwoo1FH2uNPza3MUkG26
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卓然（生于1811年），清人物。籍贯盧氏。（中国历代人物传记资料库 CBDB 71745）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_09BrBTIKxfLZvp3DbfyM5o
          claim_id: c_NiExsWTz9ZtqBe45u8MKqM
          source_id: s_NuAMF5o33k3GGSr698boLA
          stance: supports
          locator: CBDB:71745
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

# 王卓然

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卓然 | accepted |
| birth.date | 1811年 | accepted |
| bio.summary | 王卓然（生于1811年），清人物。籍贯盧氏。（中国历代人物传记资料库 CBDB 71745） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王卓然（CBDB 71745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71745&o=json)
