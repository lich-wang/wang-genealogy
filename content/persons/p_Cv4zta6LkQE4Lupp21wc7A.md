---
schema: wang-person/v1
id: p_Cv4zta6LkQE4Lupp21wc7A
status: active
merged_into: null
display_name: 王太后
cbdb_id: 525259
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KKAKcxMqCCNsjr94VGWvUU
        subject_person_id: p_Cv4zta6LkQE4Lupp21wc7A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太后，名娡，槐里人，父王仲，母臧兒（故燕王臧荼孫）。初嫁金王孫生一女，後入漢景帝太子宮，生三女一男，男即漢武帝。景帝即位，立為皇后（《史記·外戚世家》）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Lk3mDzaY7VIOkzfPyVOxWt
          claim_id: c_KKAKcxMqCCNsjr94VGWvUU
          source_id: s_kmi1MAOvFuTEWecEPRdKKA
          stance: supports
          locator: 史記/卷049·王太后傳
          quotation: null
          interpretation_note: 依正史列传原文重写简介。
          source:
            id: s_kmi1MAOvFuTEWecEPRdKKA
            source_type: website
            title: 维基文库：史記/卷049·王太后
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/史記/卷049
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:01:15.894Z
            metadata_json: null
        - id: cs_2N20iRKDo-Pt-ZHJvDVdFr
          claim_id: c_KKAKcxMqCCNsjr94VGWvUU
          source_id: s_c1qRhARgRC7uusDYXb43AF
          stance: supports
          locator: CBDB:525259
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_c1qRhARgRC7uusDYXb43AF
            source_type: api_record
            title: 中国历代人物传记资料库：王太后（CBDB 525259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525259&o=json
            external_identifier: CBDB:525259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KTv3nfiHzfNDYDGTmWsLcw
        subject_person_id: p_Cv4zta6LkQE4Lupp21wc7A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太后
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_g19tfnbRDDdAkSqB753Wxa
          claim_id: c_KTv3nfiHzfNDYDGTmWsLcw
          source_id: s_c1qRhARgRC7uusDYXb43AF
          stance: supports
          locator: CBDB:525259
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
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

# 王太后

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王太后，名娡，槐里人，父王仲，母臧兒（故燕王臧荼孫）。初嫁金王孫生一女，後入漢景帝太子宮，生三女一男，男即漢武帝。景帝即位，立為皇后（《史記·外戚世家》）。 | accepted |
| name.primary | 王太后 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基文库：史記/卷049·王太后](https://zh.wikisource.org/wiki/史記/卷049)
- [中国历代人物传记资料库：王太后（CBDB 525259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525259&o=json)
