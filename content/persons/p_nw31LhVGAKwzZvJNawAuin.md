---
schema: wang-person/v1
id: p_nw31LhVGAKwzZvJNawAuin
status: active
merged_into: null
display_name: 王续
cbdb_id: 175442
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9RNmKAaknuukX6BC1F5fgz
        subject_person_id: p_nw31LhVGAKwzZvJNawAuin
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王续（卒于672年），唐人物。籍贯臨沂，曾任令。（中国历代人物传记资料库 CBDB 175442）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_6jCiV6ZR2rMxYw3G4fJHfv
          claim_id: c_9RNmKAaknuukX6BC1F5fgz
          source_id: s_3BvwN6qmnvGmoMKpTtxD29
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3BvwN6qmnvGmoMKpTtxD29
            source_type: api_record
            title: 维基数据：王续（Q45659893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659893
            external_identifier: Q45659893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.430Z
            metadata_json: null
        - id: cs__in769l16AlZwWDudgGrA1
          claim_id: c_9RNmKAaknuukX6BC1F5fgz
          source_id: s_b5wKNwCa3xyN423a66jL7z
          stance: supports
          locator: CBDB:175442
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_b5wKNwCa3xyN423a66jL7z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王續（175442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175442&o=json
            external_identifier: CBDB:175442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.596Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_42Ej6G2Q6EdHCP5SaE5fgG
        subject_person_id: p_nw31LhVGAKwzZvJNawAuin
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 672年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0672-01-01
            latest: 0672-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bPNT9LN5CqPsRoP6zzKGCZ
          claim_id: c_42Ej6G2Q6EdHCP5SaE5fgG
          source_id: s_3BvwN6qmnvGmoMKpTtxD29
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3BvwN6qmnvGmoMKpTtxD29
            source_type: api_record
            title: 维基数据：王续（Q45659893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659893
            external_identifier: Q45659893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.430Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EkxzRNQMSniHLKeBRAdAKm
        subject_person_id: p_nw31LhVGAKwzZvJNawAuin
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王续
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1hRyG1CatgkE6DnhSmsng5
          claim_id: c_EkxzRNQMSniHLKeBRAdAKm
          source_id: s_3BvwN6qmnvGmoMKpTtxD29
          stance: supports
          locator: Q45659893
          quotation: null
          interpretation_note: null
          source:
            id: s_3BvwN6qmnvGmoMKpTtxD29
            source_type: api_record
            title: 维基数据：王续（Q45659893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659893
            external_identifier: Q45659893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.430Z
            metadata_json: null
        - id: cs_KLqand1NcwJsosUWQ85dCC
          claim_id: c_EkxzRNQMSniHLKeBRAdAKm
          source_id: s_b5wKNwCa3xyN423a66jL7z
          stance: supports
          locator: Q45659893
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_14NMjzFbVi1phMgmeqV6gu
        subject_person_id: p_ujGjqexGpFHSeeL644vaA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nw31LhVGAKwzZvJNawAuin
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_emdyeuiBpBe1acvsNek3tA
          claim_id: c_14NMjzFbVi1phMgmeqV6gu
          source_id: s_Nwn5LEBCq2tAp9BpBtAtnK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Nwn5LEBCq2tAp9BpBtAtnK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王弘直（175393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175393&o=json
            external_identifier: CBDB:175393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.728Z
            metadata_json: null
        - id: cs_wFKpZP6BMV1rvCyyX7wYep
          claim_id: c_14NMjzFbVi1phMgmeqV6gu
          source_id: s_MuAKHk7C2oEADSy4mxkVHM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MuAKHk7C2oEADSy4mxkVHM
            source_type: api_record
            title: 维基数据：王弘直（Q45656974）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656974
            external_identifier: Q45656974
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.576Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%98%E7%9B%B4
        - id: cs_vb6GxrajJcQs3nT1v3WW8v
          claim_id: c_14NMjzFbVi1phMgmeqV6gu
          source_id: s_3BvwN6qmnvGmoMKpTtxD29
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3BvwN6qmnvGmoMKpTtxD29
            source_type: api_record
            title: 维基数据：王续（Q45659893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659893
            external_identifier: Q45659893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.430Z
            metadata_json: null
        - id: cs_AgGeT5FteGDpYjH2QZoLfU
          claim_id: c_14NMjzFbVi1phMgmeqV6gu
          source_id: s_b5wKNwCa3xyN423a66jL7z
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_b5wKNwCa3xyN423a66jL7z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王續（175442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175442&o=json
            external_identifier: CBDB:175442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.596Z
            metadata_json: null
      object_person:
        id: p_ujGjqexGpFHSeeL644vaA9
        status: active
        display_name: 王弘直
        merged_into_person_id: null
  children:
    - claim:
        id: c_5YqrsDx14ynBU6V5D7XoDT
        subject_person_id: p_nw31LhVGAKwzZvJNawAuin
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S89vKPvai9yEMN4NRS1jZV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4Ehra7JKAHtq9Hs3B88LEQ
          claim_id: c_5YqrsDx14ynBU6V5D7XoDT
          source_id: s_3BvwN6qmnvGmoMKpTtxD29
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3BvwN6qmnvGmoMKpTtxD29
            source_type: api_record
            title: 维基数据：王续（Q45659893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659893
            external_identifier: Q45659893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.430Z
            metadata_json: null
        - id: cs_KdJwmBK294t9pArg8BDopE
          claim_id: c_5YqrsDx14ynBU6V5D7XoDT
          source_id: s_b5wKNwCa3xyN423a66jL7z
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_b5wKNwCa3xyN423a66jL7z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王續（175442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175442&o=json
            external_identifier: CBDB:175442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.596Z
            metadata_json: null
        - id: cs_1qFcycYG3bJmMm8Sw1Kecy
          claim_id: c_5YqrsDx14ynBU6V5D7XoDT
          source_id: s_bq2C6a9K2XNsgtNLhEKd2B
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bq2C6a9K2XNsgtNLhEKd2B
            source_type: api_record
            title: 维基数据：王愔（Q45659952）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659952
            external_identifier: Q45659952
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_LV8FbnEizd8FCD29W2jwNi
          claim_id: c_5YqrsDx14ynBU6V5D7XoDT
          source_id: s_7U3EttuGHHZxeZjRyAGw86
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7U3EttuGHHZxeZjRyAGw86
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愔（175443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json
            external_identifier: CBDB:175443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.514Z
            metadata_json: null
      object_person:
        id: p_S89vKPvai9yEMN4NRS1jZV
        status: active
        display_name: 王愔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王续

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王续（卒于672年），唐人物。籍贯臨沂，曾任令。（中国历代人物传记资料库 CBDB 175442） | accepted |
| death.date | 672年 | accepted |
| name.primary | 王续 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ujGjqexGpFHSeeL644vaA9 | 王弘直 | accepted |
| children | p_S89vKPvai9yEMN4NRS1jZV | 王愔 | accepted |

## 外部来源

- [维基数据：王弘直（Q45656974）](https://www.wikidata.org/wiki/Q45656974)
- [维基数据：王续（Q45659893）](https://www.wikidata.org/wiki/Q45659893)
- [维基数据：王愔（Q45659952）](https://www.wikidata.org/wiki/Q45659952)
- [CBDB 中国历代人物传记资料库：王弘直（175393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175393&o=json)
- [CBDB 中国历代人物传记资料库：王續（175442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175442&o=json)
- [CBDB 中国历代人物传记资料库：王愔（175443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175443&o=json)
