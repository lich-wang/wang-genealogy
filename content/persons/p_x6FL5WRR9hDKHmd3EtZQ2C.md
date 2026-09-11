---
schema: wang-person/v1
id: p_x6FL5WRR9hDKHmd3EtZQ2C
status: active
merged_into: null
display_name: 王應鳳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WNY5aY2MefJWRr8Jqmiox8
        subject_person_id: p_x6FL5WRR9hDKHmd3EtZQ2C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mAYp5UHbTeLGTX7NGKJP6c
          claim_id: c_WNY5aY2MefJWRr8Jqmiox8
          source_id: s_kBoTTn5c2rePZwNbJy2o4n
          stance: supports
          locator: CBDB:57213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57213）
          source: &a1
            id: s_kBoTTn5c2rePZwNbJy2o4n
            source_type: api_record
            title: 中国历代人物传记资料库：王應鳳（CBDB 57213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57213&o=json
            external_identifier: CBDB:57213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GLtGANWaNHFoaNWeuK4A3A
        subject_person_id: p_x6FL5WRR9hDKHmd3EtZQ2C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1832年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1y5r7r3GmQUQ8845fQE4YY
          claim_id: c_GLtGANWaNHFoaNWeuK4A3A
          source_id: s_kBoTTn5c2rePZwNbJy2o4n
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
        id: c_QWr2ZpLmainQ9ZCXyfWo7o
        subject_person_id: p_x6FL5WRR9hDKHmd3EtZQ2C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鳳（卒于1832年），清人物。籍贯鎮遠，曾任協副將、協左營都司、鎮標中營把總。（中国历代人物传记资料库 CBDB 57213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ef04pYAzI0GYAuBiwatf0F
          claim_id: c_QWr2ZpLmainQ9ZCXyfWo7o
          source_id: s_kBoTTn5c2rePZwNbJy2o4n
          stance: supports
          locator: CBDB:57213
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qyViH4YhxZAcckAc5LyOZ9
        subject_person_id: p_ua4wWGnxrrEiXXF9Cv3bbC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x6FL5WRR9hDKHmd3EtZQ2C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BXzBo2SgScX51vQ4nD4gbt
          claim_id: c_qyViH4YhxZAcckAc5LyOZ9
          source_id: s_wkK1FTPzWhFY4XKJnx95GH
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），432：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wkK1FTPzWhFY4XKJnx95GH
            source_type: api_record
            title: 中国历代人物传记资料库：王含章（CBDB 514429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514429&o=json
            external_identifier: CBDB:514429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ua4wWGnxrrEiXXF9Cv3bbC
        status: active
        display_name: 王含章
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應鳳 | accepted |
| death.date | 1832年 | accepted |
| bio.summary | 王應鳳（卒于1832年），清人物。籍贯鎮遠，曾任協副將、協左營都司、鎮標中營把總。（中国历代人物传记资料库 CBDB 57213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ua4wWGnxrrEiXXF9Cv3bbC | 王含章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王含章（CBDB 514429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514429&o=json)
- [中国历代人物传记资料库：王應鳳（CBDB 57213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57213&o=json)
