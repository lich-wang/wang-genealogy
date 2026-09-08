---
schema: wang-person/v1
id: p_dPsguGgVu58pf436VHMAKB
status: active
merged_into: null
display_name: 王瓒
cbdb_id: 175417
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U98EHtPGHV1yEaBoub66v8
        subject_person_id: p_dPsguGgVu58pf436VHMAKB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓒（卒于968年），五代人物。CBDB 记录其身份包括詩人。中国历代人物传记资料库（CBDB）以人物编号 175417 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fo4HsLEd5nFFEUpkBZDydn
          claim_id: c_U98EHtPGHV1yEaBoub66v8
          source_id: s_vvHhEKr7F13AJ7tAarX5S3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vvHhEKr7F13AJ7tAarX5S3
            source_type: api_record
            title: 维基数据：王瓒（Q45658405）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658405
            external_identifier: Q45658405
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.630Z
            metadata_json: null
        - id: cs_S0QlGdxkCjx49InRaay3I2
          claim_id: c_U98EHtPGHV1yEaBoub66v8
          source_id: s_1MaBrQ6L6s7gNQgH9zpTP1
          stance: supports
          locator: CBDB:175417
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1MaBrQ6L6s7gNQgH9zpTP1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瓚（175417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175417&o=json
            external_identifier: CBDB:175417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:00.922Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fQvmE2LYdEnweYiNVKgw7o
        subject_person_id: p_dPsguGgVu58pf436VHMAKB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 968年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0968-01-01
            latest: 0968-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LRPKnmUAMXDmahbZBdvQep
          claim_id: c_fQvmE2LYdEnweYiNVKgw7o
          source_id: s_vvHhEKr7F13AJ7tAarX5S3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vvHhEKr7F13AJ7tAarX5S3
            source_type: api_record
            title: 维基数据：王瓒（Q45658405）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658405
            external_identifier: Q45658405
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.630Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LKWBEtfP5tAwdTTvreyo9C
        subject_person_id: p_dPsguGgVu58pf436VHMAKB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓒
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MchgYwXfy7TvmuKdF3Ejha
          claim_id: c_LKWBEtfP5tAwdTTvreyo9C
          source_id: s_vvHhEKr7F13AJ7tAarX5S3
          stance: supports
          locator: Q45658405
          quotation: null
          interpretation_note: null
          source:
            id: s_vvHhEKr7F13AJ7tAarX5S3
            source_type: api_record
            title: 维基数据：王瓒（Q45658405）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658405
            external_identifier: Q45658405
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.630Z
            metadata_json: null
        - id: cs_dj8D9z6V7Hj5yQh7HnrAug
          claim_id: c_LKWBEtfP5tAwdTTvreyo9C
          source_id: s_1MaBrQ6L6s7gNQgH9zpTP1
          stance: supports
          locator: Q45658405
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7JkPYv221PGAUDhMnHnRPM
        subject_person_id: p_oBD8mWmKRYBEDsMhuUH2SN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dPsguGgVu58pf436VHMAKB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_129Ef7gCeLiX5QJijYSPM6
          claim_id: c_7JkPYv221PGAUDhMnHnRPM
          source_id: s_w935Kd2xSgqDjWrGgbuQGa
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_w935Kd2xSgqDjWrGgbuQGa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌禹（175416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175416&o=json
            external_identifier: CBDB:175416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.942Z
            metadata_json: null
        - id: cs_o426fhJ6RW3vfXck1XRR2G
          claim_id: c_7JkPYv221PGAUDhMnHnRPM
          source_id: s_u7H7psndRTuRKCJpEd2sYs
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_u7H7psndRTuRKCJpEd2sYs
            source_type: api_record
            title: 维基数据：王昌禹（Q45658345）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658345
            external_identifier: Q45658345
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.616Z
            metadata_json: null
        - id: cs_NMhmhCJ67KHv4aeRwwujXX
          claim_id: c_7JkPYv221PGAUDhMnHnRPM
          source_id: s_vvHhEKr7F13AJ7tAarX5S3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vvHhEKr7F13AJ7tAarX5S3
            source_type: api_record
            title: 维基数据：王瓒（Q45658405）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658405
            external_identifier: Q45658405
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.630Z
            metadata_json: null
        - id: cs_aLSB7e3A1C83y172vA7fDD
          claim_id: c_7JkPYv221PGAUDhMnHnRPM
          source_id: s_1MaBrQ6L6s7gNQgH9zpTP1
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1MaBrQ6L6s7gNQgH9zpTP1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瓚（175417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175417&o=json
            external_identifier: CBDB:175417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:00.922Z
            metadata_json: null
      object_person:
        id: p_oBD8mWmKRYBEDsMhuUH2SN
        status: active
        display_name: 王昌禹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_d2HLfKYNUdvoZ7jfs4PhgZ
        subject_person_id: p_dPsguGgVu58pf436VHMAKB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LEGXxBQkFkAzqKRbPcjNy2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_85Nm6ofLh3PpMg5H4EGfpj
          claim_id: c_d2HLfKYNUdvoZ7jfs4PhgZ
          source_id: s_E7Di33LRE7wGzDRVySpJAW
          stance: supports
          locator: 条文：条文识读（祖）（4世）
          quotation: 王琮是王敬弘玄孙，王瓒之曾孙，王秀之之孙
          interpretation_note: null
          source:
            id: s_E7Di33LRE7wGzDRVySpJAW
            source_type: website
            title: 中文维基百科：王琮 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.502Z
            metadata_json: null
      object_person:
        id: p_LEGXxBQkFkAzqKRbPcjNy2
        status: active
        display_name: 王琮
        merged_into_person_id: null
  other: []
---

# 王瓒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瓒（卒于968年），五代人物。CBDB 记录其身份包括詩人。中国历代人物传记资料库（CBDB）以人物编号 175417 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 968年 | accepted |
| name.primary | 王瓒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oBD8mWmKRYBEDsMhuUH2SN | 王昌禹 | accepted |
| descendants | p_LEGXxBQkFkAzqKRbPcjNy2 | 王琮 | accepted |

## 外部来源

- [维基数据：王昌禹（Q45658345）](https://www.wikidata.org/wiki/Q45658345)
- [维基数据：王瓒（Q45658405）](https://www.wikidata.org/wiki/Q45658405)
- [中文维基百科：王琮 (南梁)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81))
- [CBDB 中国历代人物传记资料库：王昌禹（175416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175416&o=json)
- [CBDB 中国历代人物传记资料库：王瓚（175417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175417&o=json)
