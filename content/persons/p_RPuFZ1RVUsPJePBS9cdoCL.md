---
schema: wang-person/v1
id: p_RPuFZ1RVUsPJePBS9cdoCL
status: active
merged_into: null
display_name: 王源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tkrR4v9Lw9pZd47ABUm4UK
        subject_person_id: p_RPuFZ1RVUsPJePBS9cdoCL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ntjp1tD3jzhcpcPp7XoZKM
          claim_id: c_tkrR4v9Lw9pZd47ABUm4UK
          source_id: s_B91mJVV6xLN3mtbzczk6JC
          stance: supports
          locator: CBDB:67871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67871）
          source: &a1
            id: s_B91mJVV6xLN3mtbzczk6JC
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 67871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67871&o=json
            external_identifier: CBDB:67871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5YnPS7F4RYQdaJXV1QE86s
        subject_person_id: p_RPuFZ1RVUsPJePBS9cdoCL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FrTX1gjxFLgj6YebajqaH2
          claim_id: c_5YnPS7F4RYQdaJXV1QE86s
          source_id: s_B91mJVV6xLN3mtbzczk6JC
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
        id: c_xbRYytTxfVuLsU21cFiFyn
        subject_person_id: p_RPuFZ1RVUsPJePBS9cdoCL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源（卒于1511年），明人物。明清進士進士，籍贯代州，入仕進士，曾任提刑按察使司副使、提刑按察使司僉事、刑部郎中。（中国历代人物传记资料库 CBDB 67871）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_03JqyNjqYcv11UvM-h3d1s
          claim_id: c_xbRYytTxfVuLsU21cFiFyn
          source_id: s_B91mJVV6xLN3mtbzczk6JC
          stance: supports
          locator: CBDB:67871
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

# 王源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源 | accepted |
| death.date | 1511年 | accepted |
| bio.summary | 王源（卒于1511年），明人物。明清進士進士，籍贯代州，入仕進士，曾任提刑按察使司副使、提刑按察使司僉事、刑部郎中。（中国历代人物传记资料库 CBDB 67871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王源（CBDB 67871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67871&o=json)
