---
schema: wang-person/v1
id: p_79emZ1DAw7DpGb9pxiroNK
status: active
merged_into: null
display_name: 王之坪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kdqpN6QHvYSeQLDJH8AQY5
        subject_person_id: p_79emZ1DAw7DpGb9pxiroNK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之坪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GhBjZLuoxkn54fXKeb8PJu
          claim_id: c_kdqpN6QHvYSeQLDJH8AQY5
          source_id: s_LwYn8v9xUQi7pxDQKNW9VU
          stance: supports
          locator: CBDB:71353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71353）
          source: &a1
            id: s_LwYn8v9xUQi7pxDQKNW9VU
            source_type: api_record
            title: 中国历代人物传记资料库：王之坪（CBDB 71353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71353&o=json
            external_identifier: CBDB:71353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.154Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_npD9HGSDGF1qLaDMMiMNBn
        subject_person_id: p_79emZ1DAw7DpGb9pxiroNK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1640年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GxASh6vrc9cKDLH71wqDv2
          claim_id: c_npD9HGSDGF1qLaDMMiMNBn
          source_id: s_LwYn8v9xUQi7pxDQKNW9VU
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
        id: c_ghAAVSFHNVEBHsbGzb4AaP
        subject_person_id: p_79emZ1DAw7DpGb9pxiroNK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1707年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3B4hx1GLUbbwBgDAQazYE
          claim_id: c_ghAAVSFHNVEBHsbGzb4AaP
          source_id: s_LwYn8v9xUQi7pxDQKNW9VU
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
        id: c_EQA5NUFssDH131vzKMvdxX
        subject_person_id: p_79emZ1DAw7DpGb9pxiroNK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之坪（1640年—1707年），清人物。籍贯鄞縣，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 71353）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dbo9NjLlbVn7LNSL7S1YGi
          claim_id: c_EQA5NUFssDH131vzKMvdxX
          source_id: s_LwYn8v9xUQi7pxDQKNW9VU
          stance: supports
          locator: CBDB:71353
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

# 王之坪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之坪 | accepted |
| birth.date | 1640年 | accepted |
| death.date | 1707年 | accepted |
| bio.summary | 王之坪（1640年—1707年），清人物。籍贯鄞縣，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 71353） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之坪（CBDB 71353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71353&o=json)
