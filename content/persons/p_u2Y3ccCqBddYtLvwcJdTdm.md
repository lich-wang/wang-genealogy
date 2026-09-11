---
schema: wang-person/v1
id: p_u2Y3ccCqBddYtLvwcJdTdm
status: active
merged_into: null
display_name: 王仲簡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XmBBNPFo6R98RkbQ4h8kBg
        subject_person_id: p_u2Y3ccCqBddYtLvwcJdTdm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RZPncZg7zRPW2u1ZoDQxAQ
          claim_id: c_XmBBNPFo6R98RkbQ4h8kBg
          source_id: s_u7jjzy2mZR1LRvhnU2B26q
          stance: supports
          locator: CBDB:91999
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91999）
          source: &a1
            id: s_u7jjzy2mZR1LRvhnU2B26q
            source_type: api_record
            title: 中国历代人物传记资料库：王仲簡（CBDB 91999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91999&o=json
            external_identifier: CBDB:91999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YF6JNNtRnh3qsLG6h2mo9u
        subject_person_id: p_u2Y3ccCqBddYtLvwcJdTdm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 977年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5JncgcGu17zrc1hdLNGnkn
          claim_id: c_YF6JNNtRnh3qsLG6h2mo9u
          source_id: s_u7jjzy2mZR1LRvhnU2B26q
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
        id: c_cBqzggxGcUAdo96f67Kao7
        subject_person_id: p_u2Y3ccCqBddYtLvwcJdTdm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲簡（卒于977年），後周人物。籍贯潭州，身份为詩人，入仕進士，曾任縣丞。（中国历代人物传记资料库 CBDB 91999）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zhXGEPq37sptrHRjkRXKp4
          claim_id: c_cBqzggxGcUAdo96f67Kao7
          source_id: s_u7jjzy2mZR1LRvhnU2B26q
          stance: supports
          locator: CBDB:91999
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

# 王仲簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲簡 | accepted |
| death.date | 977年 | accepted |
| bio.summary | 王仲簡（卒于977年），後周人物。籍贯潭州，身份为詩人，入仕進士，曾任縣丞。（中国历代人物传记资料库 CBDB 91999） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲簡（CBDB 91999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91999&o=json)
