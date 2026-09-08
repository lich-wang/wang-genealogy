---
schema: wang-person/v1
id: p_KGRi1kNs9wSQNE2Say4FzP
status: active
merged_into: null
display_name: 王珙
cbdb_id: 22200
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yQWY4L7gmB7pFesuReBzrU
        subject_person_id: p_KGRi1kNs9wSQNE2Say4FzP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珙，宋人物。CBDB 记录其籍贯记录为元城。中国历代人物传记资料库（CBDB）以人物编号 22200 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jJd88XnN1aNp57e9FbyYrJ
          claim_id: c_yQWY4L7gmB7pFesuReBzrU
          source_id: s_4zqxM1jC7WNSS5HTnHd2Z2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_4zqxM1jC7WNSS5HTnHd2Z2
            source_type: api_record
            title: 维基数据：王珙（Q45402027）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402027
            external_identifier: Q45402027
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.262Z
            metadata_json: null
        - id: cs_yswVt4gZ_15YGCXguY_cMM
          claim_id: c_yQWY4L7gmB7pFesuReBzrU
          source_id: s_rGPB9At8CwEqMh17TwRhNm
          stance: supports
          locator: CBDB:22200
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rGPB9At8CwEqMh17TwRhNm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珙（22200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22200&o=json
            external_identifier: CBDB:22200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.411Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fJ6zA14Q5pU6Mr92gQBNLc
        subject_person_id: p_KGRi1kNs9wSQNE2Say4FzP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珙
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6J7d3o2F5Fo9xVWNiijujA
          claim_id: c_fJ6zA14Q5pU6Mr92gQBNLc
          source_id: s_4zqxM1jC7WNSS5HTnHd2Z2
          stance: supports
          locator: Q45402027
          quotation: null
          interpretation_note: null
          source:
            id: s_4zqxM1jC7WNSS5HTnHd2Z2
            source_type: api_record
            title: 维基数据：王珙（Q45402027）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402027
            external_identifier: Q45402027
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.262Z
            metadata_json: null
        - id: cs_fGZD18PVM4mTZJ6BYxSBjV
          claim_id: c_fJ6zA14Q5pU6Mr92gQBNLc
          source_id: s_rGPB9At8CwEqMh17TwRhNm
          stance: supports
          locator: Q45402027
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c7sZ6e9Uvci1MRkfw4S67w
        subject_person_id: p_ZkacAAkwxE7XjsSAHpqD1z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KGRi1kNs9wSQNE2Say4FzP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9SyTAY3aokKHh699hsiSBV
          claim_id: c_c7sZ6e9Uvci1MRkfw4S67w
          source_id: s_rGPB9At8CwEqMh17TwRhNm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_rGPB9At8CwEqMh17TwRhNm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珙（22200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22200&o=json
            external_identifier: CBDB:22200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.411Z
            metadata_json: null
        - id: cs_jVkr36qfPxgKtGDC6FCFci
          claim_id: c_c7sZ6e9Uvci1MRkfw4S67w
          source_id: s_4zqxM1jC7WNSS5HTnHd2Z2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4zqxM1jC7WNSS5HTnHd2Z2
            source_type: api_record
            title: 维基数据：王珙（Q45402027）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402027
            external_identifier: Q45402027
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.262Z
            metadata_json: null
        - id: cs_DwdVnbJC5DLCKoi3LBBNvT
          claim_id: c_c7sZ6e9Uvci1MRkfw4S67w
          source_id: s_wmrCJ8wnVjEj7szEbc4HGF
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wmrCJ8wnVjEj7szEbc4HGF
            source_type: api_record
            title: 维基数据：王奉𬤇（Q45402025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402025
            external_identifier: Q45402025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.576Z
            metadata_json: null
        - id: cs_9Ezwdaipcqgi3c8Bn2ELtL
          claim_id: c_c7sZ6e9Uvci1MRkfw4S67w
          source_id: s_Wrrjo1GnqPD6RAhizPQMsA
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Wrrjo1GnqPD6RAhizPQMsA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王奉諲（22198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22198&o=json
            external_identifier: CBDB:22198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.910Z
            metadata_json: null
      object_person:
        id: p_ZkacAAkwxE7XjsSAHpqD1z
        status: active
        display_name: 王奉𬤇
        merged_into_person_id: null
  children:
    - claim:
        id: c_KQYeh5GUPHJyHVyH2aqrwc
        subject_person_id: p_KGRi1kNs9wSQNE2Say4FzP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hb1chaQQ5nNJHx6CneR37f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_26QQbPYramEuKSoQ9WRu44
          claim_id: c_KQYeh5GUPHJyHVyH2aqrwc
          source_id: s_cEKmM4xL1FPpk4omq9j1FQ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_cEKmM4xL1FPpk4omq9j1FQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世倫（22201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22201&o=json
            external_identifier: CBDB:22201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:40:14.384Z
            metadata_json: null
        - id: cs_LQNvv7TG5u5pmAj1HWKPWL
          claim_id: c_KQYeh5GUPHJyHVyH2aqrwc
          source_id: s_RWUcMwDfJPWLNRTZEHqpJC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RWUcMwDfJPWLNRTZEHqpJC
            source_type: api_record
            title: 维基数据：王世伦（Q45402028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402028
            external_identifier: Q45402028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:14.226Z
            metadata_json: null
        - id: cs_6rJjJESdhBrbDPqD14AJqc
          claim_id: c_KQYeh5GUPHJyHVyH2aqrwc
          source_id: s_4zqxM1jC7WNSS5HTnHd2Z2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4zqxM1jC7WNSS5HTnHd2Z2
            source_type: api_record
            title: 维基数据：王珙（Q45402027）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402027
            external_identifier: Q45402027
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.262Z
            metadata_json: null
        - id: cs_EQvC9y2QUwxCM6obR1dqFP
          claim_id: c_KQYeh5GUPHJyHVyH2aqrwc
          source_id: s_rGPB9At8CwEqMh17TwRhNm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_rGPB9At8CwEqMh17TwRhNm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珙（22200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22200&o=json
            external_identifier: CBDB:22200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.411Z
            metadata_json: null
      object_person:
        id: p_hb1chaQQ5nNJHx6CneR37f
        status: active
        display_name: 王世伦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王珙，宋人物。CBDB 记录其籍贯记录为元城。中国历代人物传记资料库（CBDB）以人物编号 22200 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王珙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZkacAAkwxE7XjsSAHpqD1z | 王奉𬤇 | accepted |
| children | p_hb1chaQQ5nNJHx6CneR37f | 王世伦 | accepted |

## 外部来源

- [维基数据：王奉𬤇（Q45402025）](https://www.wikidata.org/wiki/Q45402025)
- [维基数据：王珙（Q45402027）](https://www.wikidata.org/wiki/Q45402027)
- [维基数据：王世伦（Q45402028）](https://www.wikidata.org/wiki/Q45402028)
- [CBDB 中国历代人物传记资料库：王奉諲（22198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22198&o=json)
- [CBDB 中国历代人物传记资料库：王珙（22200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22200&o=json)
- [CBDB 中国历代人物传记资料库：王世倫（22201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22201&o=json)
