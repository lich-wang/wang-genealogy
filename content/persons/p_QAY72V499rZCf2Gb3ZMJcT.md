---
schema: wang-person/v1
id: p_QAY72V499rZCf2Gb3ZMJcT
status: active
merged_into: null
display_name: 王质
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3KKDoUmkgXhmHmtaRm8vYg
        subject_person_id: p_QAY72V499rZCf2Gb3ZMJcT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王质（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽，身份包括詩人，曾任觀察使、丞。中国历代人物传记资料库（CBDB）以人物编号 175493 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BPqqxp5ACdDtfWs2ao7rfJ
          claim_id: c_3KKDoUmkgXhmHmtaRm8vYg
          source_id: s_ZQwR7dcT1HV4zDC7F3Fz6g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZQwR7dcT1HV4zDC7F3Fz6g
            source_type: api_record
            title: 维基数据：王质（Q45662922）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662922
            external_identifier: Q45662922
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.184Z
            metadata_json: null
        - id: cs_WbrI-EkOyvir-lrLjUF65q
          claim_id: c_3KKDoUmkgXhmHmtaRm8vYg
          source_id: s_Tmont75HXT8qcmf87vkv8D
          stance: supports
          locator: CBDB:175493
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Tmont75HXT8qcmf87vkv8D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王質（175493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175493&o=json
            external_identifier: CBDB:175493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:48.494Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kPG8JiWhn7NLYVpG9xUWY9
        subject_person_id: p_QAY72V499rZCf2Gb3ZMJcT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B4DJgh4WqYfAquE9sej2pa
          claim_id: c_kPG8JiWhn7NLYVpG9xUWY9
          source_id: s_ZQwR7dcT1HV4zDC7F3Fz6g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZQwR7dcT1HV4zDC7F3Fz6g
            source_type: api_record
            title: 维基数据：王质（Q45662922）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662922
            external_identifier: Q45662922
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.184Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ELoE3VYN8uf22GHojD6aMC
        subject_person_id: p_QAY72V499rZCf2Gb3ZMJcT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王质
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_N3qbqLiJudSSupTsCK9rux
          claim_id: c_ELoE3VYN8uf22GHojD6aMC
          source_id: s_Tmont75HXT8qcmf87vkv8D
          stance: supports
          locator: Q45662922
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_zFcR4Cf174pFbG22d6CRJn
          claim_id: c_ELoE3VYN8uf22GHojD6aMC
          source_id: s_ZQwR7dcT1HV4zDC7F3Fz6g
          stance: supports
          locator: Q45662922
          quotation: null
          interpretation_note: null
          source:
            id: s_ZQwR7dcT1HV4zDC7F3Fz6g
            source_type: api_record
            title: 维基数据：王质（Q45662922）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662922
            external_identifier: Q45662922
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.184Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LdBHPcbHaEEv5gq8W6NR48
        subject_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QAY72V499rZCf2Gb3ZMJcT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_wr347SY9ptjYcYK2K8TFkQ
          claim_id: c_LdBHPcbHaEEv5gq8W6NR48
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_z1QzDJUax9fgL7VRNz75xd
          claim_id: c_LdBHPcbHaEEv5gq8W6NR48
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CC8cxfJwpULd6yy84PKXh5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王魯卿（175492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json
            external_identifier: CBDB:175492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.602Z
            metadata_json: null
        - id: cs_sJzgYYtLDC536NFUQY4n4T
          claim_id: c_LdBHPcbHaEEv5gq8W6NR48
          source_id: s_ZQwR7dcT1HV4zDC7F3Fz6g
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZQwR7dcT1HV4zDC7F3Fz6g
            source_type: api_record
            title: 维基数据：王质（Q45662922）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662922
            external_identifier: Q45662922
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.184Z
            metadata_json: null
        - id: cs_aSxzQqoNyUDWyQgGWiAz8L
          claim_id: c_LdBHPcbHaEEv5gq8W6NR48
          source_id: s_Tmont75HXT8qcmf87vkv8D
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Tmont75HXT8qcmf87vkv8D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王質（175493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175493&o=json
            external_identifier: CBDB:175493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:48.494Z
            metadata_json: null
      object_person:
        id: p_SDFpyQ9WQCR839CKSQL9E1
        status: active
        display_name: 王鲁卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王质

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王质（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽，身份包括詩人，曾任觀察使、丞。中国历代人物传记资料库（CBDB）以人物编号 175493 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王质 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SDFpyQ9WQCR839CKSQL9E1 | 王鲁卿 | accepted |

## 外部来源

- [维基数据：王鲁卿（Q45662864）](https://www.wikidata.org/wiki/Q45662864)
- [维基数据：王质（Q45662922）](https://www.wikidata.org/wiki/Q45662922)
- [CBDB 中国历代人物传记资料库：王魯卿（175492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json)
- [CBDB 中国历代人物传记资料库：王質（175493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175493&o=json)
