---
schema: wang-person/v1
id: p_yFRHDsrF36D3LgRopsK1tE
status: active
merged_into: null
display_name: 王曰溫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mp6SsFUVeBY16qo4s67KLK
        subject_person_id: p_yFRHDsrF36D3LgRopsK1tE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰溫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mg9wT2ZqzbthGPm77eUboq
          claim_id: c_Mp6SsFUVeBY16qo4s67KLK
          source_id: s_98bXfuvMrvNuaQa8vbZWNg
          stance: supports
          locator: CBDB:71400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71400）
          source: &a1
            id: s_98bXfuvMrvNuaQa8vbZWNg
            source_type: api_record
            title: 中国历代人物传记资料库：王曰溫（CBDB 71400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71400&o=json
            external_identifier: CBDB:71400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7YCkCugKWwPAmxJVhSFvUU
        subject_person_id: p_yFRHDsrF36D3LgRopsK1tE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1645年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3sJHrryYHuzJTUFCTQNmTN
          claim_id: c_7YCkCugKWwPAmxJVhSFvUU
          source_id: s_98bXfuvMrvNuaQa8vbZWNg
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
        id: c_efBRm3bhS1stWDU8SJCnH1
        subject_person_id: p_yFRHDsrF36D3LgRopsK1tE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1686年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y94FEbVvt7xdnY2j8bQV1L
          claim_id: c_efBRm3bhS1stWDU8SJCnH1
          source_id: s_98bXfuvMrvNuaQa8vbZWNg
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
        id: c_jMwqNUuH2YHSfzBz7BRLjE
        subject_person_id: p_yFRHDsrF36D3LgRopsK1tE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰溫（1645年—1686年），清人物。籍贯尉氏。（中国历代人物传记资料库 CBDB 71400）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MTTfVIizMjwXz3HvYMdAmg
          claim_id: c_jMwqNUuH2YHSfzBz7BRLjE
          source_id: s_98bXfuvMrvNuaQa8vbZWNg
          stance: supports
          locator: CBDB:71400
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

# 王曰溫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰溫 | accepted |
| birth.date | 1645年 | accepted |
| death.date | 1686年 | accepted |
| bio.summary | 王曰溫（1645年—1686年），清人物。籍贯尉氏。（中国历代人物传记资料库 CBDB 71400） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曰溫（CBDB 71400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71400&o=json)
