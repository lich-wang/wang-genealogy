---
schema: wang-person/v1
id: p_jsXCS6YG2b26Y1P4LoieBa
status: active
merged_into: null
display_name: 王世英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UrF3vEsXQtXPh7gMbraPyz
        subject_person_id: p_jsXCS6YG2b26Y1P4LoieBa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dwF85sGqRwe1w6kj5jjBAR
          claim_id: c_UrF3vEsXQtXPh7gMbraPyz
          source_id: s_f23rvwByBo2mgYktYuDkcd
          stance: supports
          locator: CBDB:71458
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71458）
          source: &a1
            id: s_f23rvwByBo2mgYktYuDkcd
            source_type: api_record
            title: 中国历代人物传记资料库：王世英（CBDB 71458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71458&o=json
            external_identifier: CBDB:71458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8u9ezCjWxUZHQANUxj3P3c
        subject_person_id: p_jsXCS6YG2b26Y1P4LoieBa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1616年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQiqo6yiLKd3A5BoJi3nFU
          claim_id: c_8u9ezCjWxUZHQANUxj3P3c
          source_id: s_f23rvwByBo2mgYktYuDkcd
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
        id: c_BMWbpiKX2Qg3PGR3m1mQD3
        subject_person_id: p_jsXCS6YG2b26Y1P4LoieBa
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
        - id: cs_hn4Hhp2ZiBvx8C7ky9rLG7
          claim_id: c_BMWbpiKX2Qg3PGR3m1mQD3
          source_id: s_f23rvwByBo2mgYktYuDkcd
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

# 王世英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世英 | accepted |
| birth.date | 1616年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世英（CBDB 71458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71458&o=json)
