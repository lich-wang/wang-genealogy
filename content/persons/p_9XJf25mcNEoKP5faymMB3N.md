---
schema: wang-person/v1
id: p_9XJf25mcNEoKP5faymMB3N
status: active
merged_into: null
display_name: 王源谦
cbdb_id: 175532
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EsRhr1vW7WNMiv9JRXRXsj
        subject_person_id: p_9XJf25mcNEoKP5faymMB3N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源谦（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175532）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_PconEJELtip2yXZD8HnYYq
          claim_id: c_EsRhr1vW7WNMiv9JRXRXsj
          source_id: s_xxTTACNSx8BprgXT42Vb49
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xxTTACNSx8BprgXT42Vb49
            source_type: api_record
            title: 维基数据：王源谦（Q45665084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665084
            external_identifier: Q45665084
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.528Z
            metadata_json: null
        - id: cs_00SqYvw54qYEjCglFVYjZ-
          claim_id: c_EsRhr1vW7WNMiv9JRXRXsj
          source_id: s_B69eGQgCKsvsFWCagYGaQz
          stance: supports
          locator: CBDB:175532
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_B69eGQgCKsvsFWCagYGaQz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源謙（175532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175532&o=json
            external_identifier: CBDB:175532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:36.689Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PQp4REE9e2KYt5UByQeEnf
        subject_person_id: p_9XJf25mcNEoKP5faymMB3N
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6zKyGZz4cvqFtp7tPz9Sk2
          claim_id: c_PQp4REE9e2KYt5UByQeEnf
          source_id: s_xxTTACNSx8BprgXT42Vb49
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xxTTACNSx8BprgXT42Vb49
            source_type: api_record
            title: 维基数据：王源谦（Q45665084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665084
            external_identifier: Q45665084
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.528Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BYcfwsfC7NGoZM3KM3eBJ9
        subject_person_id: p_9XJf25mcNEoKP5faymMB3N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源谦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WCHVJCpGC3xNUB8SH8ZvMb
          claim_id: c_BYcfwsfC7NGoZM3KM3eBJ9
          source_id: s_xxTTACNSx8BprgXT42Vb49
          stance: supports
          locator: Q45665084
          quotation: null
          interpretation_note: null
          source:
            id: s_xxTTACNSx8BprgXT42Vb49
            source_type: api_record
            title: 维基数据：王源谦（Q45665084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665084
            external_identifier: Q45665084
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.528Z
            metadata_json: null
        - id: cs_Z3naTA3ytSh8VQi4DXgT9t
          claim_id: c_BYcfwsfC7NGoZM3KM3eBJ9
          source_id: s_B69eGQgCKsvsFWCagYGaQz
          stance: supports
          locator: Q45665084
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MVa1PcwBpAbH96jBMza8ZV
        subject_person_id: p_MJy5DTuoAKtNQKP91F7YVb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9XJf25mcNEoKP5faymMB3N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9mnPGvCWmHmfdbzJ2md5yG
          claim_id: c_MVa1PcwBpAbH96jBMza8ZV
          source_id: s_M8qLHHSA7hgn2qjhTbVzJA
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_M8qLHHSA7hgn2qjhTbVzJA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渶（175531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json
            external_identifier: CBDB:175531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:59.521Z
            metadata_json: null
        - id: cs_AeAmWFb6C6BBcfiS8ysj6D
          claim_id: c_MVa1PcwBpAbH96jBMza8ZV
          source_id: s_rh328ZC6tAoJwkp3kbwDSm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rh328ZC6tAoJwkp3kbwDSm
            source_type: api_record
            title: 维基数据：王渶（Q45665030）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665030
            external_identifier: Q45665030
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:59.370Z
            metadata_json: null
        - id: cs_fNXNhVsZ7QuNDxg3NgH6uJ
          claim_id: c_MVa1PcwBpAbH96jBMza8ZV
          source_id: s_xxTTACNSx8BprgXT42Vb49
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xxTTACNSx8BprgXT42Vb49
            source_type: api_record
            title: 维基数据：王源谦（Q45665084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665084
            external_identifier: Q45665084
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:36.528Z
            metadata_json: null
        - id: cs_4tNC7g9dBDWUD164hNN94r
          claim_id: c_MVa1PcwBpAbH96jBMza8ZV
          source_id: s_B69eGQgCKsvsFWCagYGaQz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_B69eGQgCKsvsFWCagYGaQz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源謙（175532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175532&o=json
            external_identifier: CBDB:175532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:36.689Z
            metadata_json: null
      object_person:
        id: p_MJy5DTuoAKtNQKP91F7YVb
        status: active
        display_name: 王渶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源谦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源谦（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175532） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源谦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MJy5DTuoAKtNQKP91F7YVb | 王渶 | accepted |

## 外部来源

- [维基数据：王渶（Q45665030）](https://www.wikidata.org/wiki/Q45665030)
- [维基数据：王源谦（Q45665084）](https://www.wikidata.org/wiki/Q45665084)
- [CBDB 中国历代人物传记资料库：王渶（175531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175531&o=json)
- [CBDB 中国历代人物传记资料库：王源謙（175532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175532&o=json)
