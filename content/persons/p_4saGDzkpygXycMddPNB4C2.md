---
schema: wang-person/v1
id: p_4saGDzkpygXycMddPNB4C2
status: active
merged_into: null
display_name: 王行瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fM4Vn4JPvePCDFdy6uqYJ4
        subject_person_id: p_4saGDzkpygXycMddPNB4C2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hvqPRw4m7DcB999QvzN8Z3
          claim_id: c_fM4Vn4JPvePCDFdy6uqYJ4
          source_id: s_TY66f5v76TS7zc7g4FsbQ1
          stance: supports
          locator: CBDB:189601
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189601）
          source: &a1
            id: s_TY66f5v76TS7zc7g4FsbQ1
            source_type: api_record
            title: 中国历代人物传记资料库：王行瑜（CBDB 189601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189601&o=json
            external_identifier: CBDB:189601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SPjdsLx8cnwK1AvCozbCzD
        subject_person_id: p_4saGDzkpygXycMddPNB4C2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 895年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BDR34M1k9xi5fTTQeQEKAL
          claim_id: c_SPjdsLx8cnwK1AvCozbCzD
          source_id: s_TY66f5v76TS7zc7g4FsbQ1
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
        id: c_i8UPv41KLjCKSfn8jn25BB
        subject_person_id: p_4saGDzkpygXycMddPNB4C2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行瑜（卒于895年），唐人物。曾任節度使。（中国历代人物传记资料库 CBDB 189601）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aZB_UfTPEsAENwF77YIG-P
          claim_id: c_i8UPv41KLjCKSfn8jn25BB
          source_id: s_TY66f5v76TS7zc7g4FsbQ1
          stance: supports
          locator: CBDB:189601
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

# 王行瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行瑜 | accepted |
| death.date | 895年 | accepted |
| bio.summary | 王行瑜（卒于895年），唐人物。曾任節度使。（中国历代人物传记资料库 CBDB 189601） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行瑜（CBDB 189601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189601&o=json)
