---
schema: wang-person/v1
id: p_gk5TtsLrBkBuAxrGyWvWEZ
status: active
merged_into: null
display_name: 王忠親
cbdb_id: 145938
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YqA91ky65BoWeLPkXAEp8V
        subject_person_id: p_gk5TtsLrBkBuAxrGyWvWEZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠親（卒于805年），唐人物。籍贯夏州，曾任殿中監、上柱國。（中国历代人物传记资料库 CBDB 145938）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_K69sAOQ79GtAXJWH0EhuHC
          claim_id: c_YqA91ky65BoWeLPkXAEp8V
          source_id: s_9j7wAX6GdY6HcHm49Lrt4m
          stance: supports
          locator: CBDB:145938
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9j7wAX6GdY6HcHm49Lrt4m
            source_type: api_record
            title: 中国历代人物传记资料库：王忠親（CBDB 145938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145938&o=json
            external_identifier: CBDB:145938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RRNRpDE5yWrcKTAtxDYNLN
        subject_person_id: p_gk5TtsLrBkBuAxrGyWvWEZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 805年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0805-01-01
            latest: 0805-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GZAi4vB7Bpv6EiK7pEzgWG
          claim_id: c_RRNRpDE5yWrcKTAtxDYNLN
          source_id: s_9j7wAX6GdY6HcHm49Lrt4m
          stance: supports
          locator: CBDB:145938
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 805
          source:
            id: s_9j7wAX6GdY6HcHm49Lrt4m
            source_type: api_record
            title: 中国历代人物传记资料库：王忠親（CBDB 145938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145938&o=json
            external_identifier: CBDB:145938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gKst2nkDJx9ycaEB1iDZZa
        subject_person_id: p_gk5TtsLrBkBuAxrGyWvWEZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠親
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1JKDxPM3Cqp5Cm748L6dRa
          claim_id: c_gKst2nkDJx9ycaEB1iDZZa
          source_id: s_9j7wAX6GdY6HcHm49Lrt4m
          stance: supports
          locator: CBDB:145938
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 805
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0AvO3uRi9wGUoSzHkftKUO
        subject_person_id: p_GbFhoA8v7vVvmKQN13YDAr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gk5TtsLrBkBuAxrGyWvWEZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JoZ7pSZq2YB04bGjhKTiD9
          claim_id: c_0AvO3uRi9wGUoSzHkftKUO
          source_id: s_9eYF13d24wCMAxXnY2oL5q
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9eYF13d24wCMAxXnY2oL5q
            source_type: api_record
            title: 中国历代人物传记资料库：王惟汶（CBDB 193082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193082&o=json
            external_identifier: CBDB:193082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GbFhoA8v7vVvmKQN13YDAr
        status: active
        display_name: 王惟汶
        merged_into_person_id: null
  children:
    - claim:
        id: c_iddspMuVy9dZf4vvhUDn2p
        subject_person_id: p_gk5TtsLrBkBuAxrGyWvWEZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BdBxCFB84EB9Jvu3mU15No
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D_VGT0KBq920QKpFcGKnZp
          claim_id: c_iddspMuVy9dZf4vvhUDn2p
          source_id: s_u2biM6FCWGexE7sr2GboWN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_u2biM6FCWGexE7sr2GboWN
            source_type: api_record
            title: 中国历代人物传记资料库：王季武（CBDB 193084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193084&o=json
            external_identifier: CBDB:193084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BdBxCFB84EB9Jvu3mU15No
        status: active
        display_name: 王季武
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠親

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王忠親（卒于805年），唐人物。籍贯夏州，曾任殿中監、上柱國。（中国历代人物传记资料库 CBDB 145938） | accepted |
| death.date | 805年 | accepted |
| name.primary | 王忠親 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GbFhoA8v7vVvmKQN13YDAr | 王惟汶 | accepted |
| children | p_BdBxCFB84EB9Jvu3mU15No | 王季武 | accepted |

## 外部来源

- [中国历代人物传记资料库：王季武（CBDB 193084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193084&o=json)
- [中国历代人物传记资料库：王惟汶（CBDB 193082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193082&o=json)
- [中国历代人物传记资料库：王忠親（CBDB 145938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145938&o=json)
