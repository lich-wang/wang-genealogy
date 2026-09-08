---
schema: wang-person/v1
id: p_LxhtV5ZaxRczGWApHrVc5K
status: active
merged_into: null
display_name: 王镇之
cbdb_id: 25809
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HWsynXjTqcuWTRmQ32GdDW
        subject_person_id: p_LxhtV5ZaxRczGWApHrVc5K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王镇之，宋(劉)人物。CBDB 记录其籍贯记录为剡縣。中国历代人物传记资料库（CBDB）以人物编号 25809 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fBTVSEvGmczigBJZ9ie322
          claim_id: c_HWsynXjTqcuWTRmQ32GdDW
          source_id: s_HuA56HY7QzUGSn2TKRM4ak
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_HuA56HY7QzUGSn2TKRM4ak
            source_type: api_record
            title: 维基数据：王镇之（Q45408776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45408776
            external_identifier: Q45408776
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:14.393Z
            metadata_json: null
        - id: cs_Fqpowkw0e88aSLBaw6QOhX
          claim_id: c_HWsynXjTqcuWTRmQ32GdDW
          source_id: s_QUkHbBYMiFRtVw91k2F2hD
          stance: supports
          locator: CBDB:25809
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QUkHbBYMiFRtVw91k2F2hD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鎮之（25809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25809&o=json
            external_identifier: CBDB:25809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:14.542Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BUhoz2pyQeNBivVGtTm1Db
        subject_person_id: p_LxhtV5ZaxRczGWApHrVc5K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王镇之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XyeweSvRm3vDm7Sh4hTNRK
          claim_id: c_BUhoz2pyQeNBivVGtTm1Db
          source_id: s_HuA56HY7QzUGSn2TKRM4ak
          stance: supports
          locator: Q45408776
          quotation: null
          interpretation_note: null
          source:
            id: s_HuA56HY7QzUGSn2TKRM4ak
            source_type: api_record
            title: 维基数据：王镇之（Q45408776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45408776
            external_identifier: Q45408776
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:14.393Z
            metadata_json: null
        - id: cs_juaGhpp9w1wELUxtQiD1dj
          claim_id: c_BUhoz2pyQeNBivVGtTm1Db
          source_id: s_QUkHbBYMiFRtVw91k2F2hD
          stance: supports
          locator: Q45408776
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yC6CD6MEZqR48D9Kpwvf6V
        subject_person_id: p_1WQmTU233ach8AxuTKh3jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LxhtV5ZaxRczGWApHrVc5K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LioU1XJwvHgRY9yJMC1tcs
          claim_id: c_yC6CD6MEZqR48D9Kpwvf6V
          source_id: s_RZzgcXNcPQPma2YUmygrfz
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_RZzgcXNcPQPma2YUmygrfz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王隨之（25808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25808&o=json
            external_identifier: CBDB:25808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:45.564Z
            metadata_json: null
        - id: cs_joEjNRUFd6AGPd65zX2vLT
          claim_id: c_yC6CD6MEZqR48D9Kpwvf6V
          source_id: s_5CLe26Bj4DBE8Fnqe1Ybg9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5CLe26Bj4DBE8Fnqe1Ybg9
            source_type: api_record
            title: 维基数据：王随之（Q45408773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45408773
            external_identifier: Q45408773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.399Z
            metadata_json: null
        - id: cs_eJ9dgPoqCLyDXzd73WPFSC
          claim_id: c_yC6CD6MEZqR48D9Kpwvf6V
          source_id: s_HuA56HY7QzUGSn2TKRM4ak
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HuA56HY7QzUGSn2TKRM4ak
            source_type: api_record
            title: 维基数据：王镇之（Q45408776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45408776
            external_identifier: Q45408776
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:14.393Z
            metadata_json: null
        - id: cs_qHKzCWAdoMncVq6LrjKqRM
          claim_id: c_yC6CD6MEZqR48D9Kpwvf6V
          source_id: s_QUkHbBYMiFRtVw91k2F2hD
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_QUkHbBYMiFRtVw91k2F2hD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鎮之（25809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25809&o=json
            external_identifier: CBDB:25809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:14.542Z
            metadata_json: null
      object_person:
        id: p_1WQmTU233ach8AxuTKh3jA
        status: active
        display_name: 王随之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王镇之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王镇之，宋(劉)人物。CBDB 记录其籍贯记录为剡縣。中国历代人物传记资料库（CBDB）以人物编号 25809 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王镇之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1WQmTU233ach8AxuTKh3jA | 王随之 | accepted |

## 外部来源

- [维基数据：王随之（Q45408773）](https://www.wikidata.org/wiki/Q45408773)
- [维基数据：王镇之（Q45408776）](https://www.wikidata.org/wiki/Q45408776)
- [CBDB 中国历代人物传记资料库：王隨之（25808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25808&o=json)
- [CBDB 中国历代人物传记资料库：王鎮之（25809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25809&o=json)
