---
schema: wang-person/v1
id: p_7AscngLYCSDVww4DK8tNub
status: active
merged_into: null
display_name: 王喬棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tDwErmqWaz617kvEwwcK2Z
        subject_person_id: p_7AscngLYCSDVww4DK8tNub
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vuqtL7PkcG9onp48zYNNKK
          claim_id: c_tDwErmqWaz617kvEwwcK2Z
          source_id: s_BWz7ugye6buTumbGA6g7KA
          stance: supports
          locator: CBDB:125522
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（125522）
          source: &a1
            id: s_BWz7ugye6buTumbGA6g7KA
            source_type: api_record
            title: 中国历代人物传记资料库：王喬棟（CBDB 125522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125522&o=json
            external_identifier: CBDB:125522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dhxHxugubCusi2c7KVCW4r
        subject_person_id: p_7AscngLYCSDVww4DK8tNub
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1645年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qUFv4r4F4HYBBioGJtQV8F
          claim_id: c_dhxHxugubCusi2c7KVCW4r
          source_id: s_BWz7ugye6buTumbGA6g7KA
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
        id: c_XPMV2GuFV4fF646yWSK28V
        subject_person_id: p_7AscngLYCSDVww4DK8tNub
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喬棟（卒于1645年），明人物。籍贯雄縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 125522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U8_BBY86JqzQyZdf_fRShH
          claim_id: c_XPMV2GuFV4fF646yWSK28V
          source_id: s_BWz7ugye6buTumbGA6g7KA
          stance: supports
          locator: CBDB:125522
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

# 王喬棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喬棟 | accepted |
| death.date | 1645年 | accepted |
| bio.summary | 王喬棟（卒于1645年），明人物。籍贯雄縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 125522） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喬棟（CBDB 125522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=125522&o=json)
