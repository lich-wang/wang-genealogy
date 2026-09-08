---
schema: wang-person/v1
id: p_1WQmTU233ach8AxuTKh3jA
status: active
merged_into: null
display_name: 王随之
cbdb_id: 25808
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TH6rEiXh1RwCnHQS8QZDVw
        subject_person_id: p_1WQmTU233ach8AxuTKh3jA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王随之，東晉人物。CBDB 记录其籍贯记录为剡縣。中国历代人物传记资料库（CBDB）以人物编号 25808 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xHP1s55vwFRunCTdjD3B5z
          claim_id: c_TH6rEiXh1RwCnHQS8QZDVw
          source_id: s_5CLe26Bj4DBE8Fnqe1Ybg9
          stance: supports
          locator: null
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
        - id: cs_XEViEWXe2VLWH0Jq7wHMup
          claim_id: c_TH6rEiXh1RwCnHQS8QZDVw
          source_id: s_RZzgcXNcPQPma2YUmygrfz
          stance: supports
          locator: CBDB:25808
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DbMeFDNdb6Wi6h5pAJTMs4
        subject_person_id: p_1WQmTU233ach8AxuTKh3jA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王随之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VsiYyjfiLTXj6rj4CQRmqb
          claim_id: c_DbMeFDNdb6Wi6h5pAJTMs4
          source_id: s_RZzgcXNcPQPma2YUmygrfz
          stance: supports
          locator: Q45408773
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_VsjL3NFNzZBGJPaM51GJ1g
          claim_id: c_DbMeFDNdb6Wi6h5pAJTMs4
          source_id: s_5CLe26Bj4DBE8Fnqe1Ybg9
          stance: supports
          locator: Q45408773
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ppZ7cSkfXDiN4EL37wwxzd
        subject_person_id: p_xgQoPQTLieHrbiQJtTGE2i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1WQmTU233ach8AxuTKh3jA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2nUtSQUFiYsHRYqC17RoAm
          claim_id: c_ppZ7cSkfXDiN4EL37wwxzd
          source_id: s_hk8MPY3rkcCg1LVBw7zyLy
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_hk8MPY3rkcCg1LVBw7zyLy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王耆之（25807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25807&o=json
            external_identifier: CBDB:25807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:06.684Z
            metadata_json: null
        - id: cs_zKGMbEn2Tj7E2UpK2nboC3
          claim_id: c_ppZ7cSkfXDiN4EL37wwxzd
          source_id: s_fZZnVMJS1BvMgsjgFYgEC7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fZZnVMJS1BvMgsjgFYgEC7
            source_type: api_record
            title: 维基数据：王耆之（Q45408771）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45408771
            external_identifier: Q45408771
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:06.504Z
            metadata_json: null
        - id: cs_KC1V2dWpPaM5j4vQQFVG4t
          claim_id: c_ppZ7cSkfXDiN4EL37wwxzd
          source_id: s_5CLe26Bj4DBE8Fnqe1Ybg9
          stance: supports
          locator: P22（父）
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
        - id: cs_dxT7rAKAFZfbCK8TvvgKUn
          claim_id: c_ppZ7cSkfXDiN4EL37wwxzd
          source_id: s_RZzgcXNcPQPma2YUmygrfz
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_xgQoPQTLieHrbiQJtTGE2i
        status: active
        display_name: 王耆之
        merged_into_person_id: null
  children:
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
        id: p_LxhtV5ZaxRczGWApHrVc5K
        status: active
        display_name: 王镇之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王随之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王随之，東晉人物。CBDB 记录其籍贯记录为剡縣。中国历代人物传记资料库（CBDB）以人物编号 25808 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王随之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xgQoPQTLieHrbiQJtTGE2i | 王耆之 | accepted |
| children | p_LxhtV5ZaxRczGWApHrVc5K | 王镇之 | accepted |

## 外部来源

- [维基数据：王耆之（Q45408771）](https://www.wikidata.org/wiki/Q45408771)
- [维基数据：王随之（Q45408773）](https://www.wikidata.org/wiki/Q45408773)
- [维基数据：王镇之（Q45408776）](https://www.wikidata.org/wiki/Q45408776)
- [CBDB 中国历代人物传记资料库：王耆之（25807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25807&o=json)
- [CBDB 中国历代人物传记资料库：王隨之（25808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25808&o=json)
- [CBDB 中国历代人物传记资料库：王鎮之（25809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25809&o=json)
