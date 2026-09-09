---
schema: wang-person/v1
id: p_5DEyTVsteHsxKJcdQRnDue
status: active
merged_into: null
display_name: 王熙恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_McxAqpz2e4PU41v8bm1C6k
        subject_person_id: p_5DEyTVsteHsxKJcdQRnDue
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j9ynUMwSfK9ceMjQkcWsD6
          claim_id: c_McxAqpz2e4PU41v8bm1C6k
          source_id: s_f3LRZBFViC63oMTnw5TKES
          stance: supports
          locator: CBDB:693581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693581）
          source: &a1
            id: s_f3LRZBFViC63oMTnw5TKES
            source_type: api_record
            title: 中国历代人物传记资料库：王熙恩（CBDB 693581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693581&o=json
            external_identifier: CBDB:693581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EfHdGH9XhcDcPhf2P58MMY
        subject_person_id: p_5DEyTVsteHsxKJcdQRnDue
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1862年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y2N131mNfCXe9rhExKQSpe
          claim_id: c_EfHdGH9XhcDcPhf2P58MMY
          source_id: s_f3LRZBFViC63oMTnw5TKES
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
        id: c_9BjkXquouV5ZHGHfG6H5oV
        subject_person_id: p_5DEyTVsteHsxKJcdQRnDue
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
        - id: cs_zsCX2pyg97z61Hy8LJmdpp
          claim_id: c_9BjkXquouV5ZHGHfG6H5oV
          source_id: s_f3LRZBFViC63oMTnw5TKES
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

# 王熙恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙恩 | accepted |
| birth.date | 1862年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熙恩（CBDB 693581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693581&o=json)
