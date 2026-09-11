---
schema: wang-person/v1
id: p_HY4foB7WHBPEN1WjojLHNY
status: active
merged_into: null
display_name: 王楫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NogqpgW8fSfJiYy8P6DrVU
        subject_person_id: p_HY4foB7WHBPEN1WjojLHNY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6AZHZgkWAF8NJGaUxmoMV1
          claim_id: c_NogqpgW8fSfJiYy8P6DrVU
          source_id: s_u4GtCGS2czZpchrtKFqPWH
          stance: supports
          locator: CBDB:71242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71242）
          source: &a1
            id: s_u4GtCGS2czZpchrtKFqPWH
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 71242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71242&o=json
            external_identifier: CBDB:71242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rVAaE9RrgvW9sBKTxBhiqd
        subject_person_id: p_HY4foB7WHBPEN1WjojLHNY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1809年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V9fWLFfj5yu4kyX6DuBfdL
          claim_id: c_rVAaE9RrgvW9sBKTxBhiqd
          source_id: s_u4GtCGS2czZpchrtKFqPWH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_T4Cbu4vsUk6EKVnqf4B16E
        subject_person_id: p_HY4foB7WHBPEN1WjojLHNY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1847年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BEFhuzDFnsxMQycPhrDe8R
          claim_id: c_T4Cbu4vsUk6EKVnqf4B16E
          source_id: s_u4GtCGS2czZpchrtKFqPWH
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
        id: c_NvFerJJTSUJZCY2KrZ2yRU
        subject_person_id: p_HY4foB7WHBPEN1WjojLHNY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫（1809年—1847年），清人物。籍贯青浦。（中国历代人物传记资料库 CBDB 71242）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_74_116j03VTLXryntOzVfX
          claim_id: c_NvFerJJTSUJZCY2KrZ2yRU
          source_id: s_u4GtCGS2czZpchrtKFqPWH
          stance: supports
          locator: CBDB:71242
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

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楫 | accepted |
| birth.date | 1809年 | accepted |
| death.date | 1847年 | accepted |
| bio.summary | 王楫（1809年—1847年），清人物。籍贯青浦。（中国历代人物传记资料库 CBDB 71242） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楫（CBDB 71242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71242&o=json)
