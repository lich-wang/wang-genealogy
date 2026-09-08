---
schema: wang-person/v1
id: p_9De1waQrNPPNQ2rPBDtZB4
status: active
merged_into: null
display_name: 王某
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F16VzgoUu3qTeQokXhYZi3
        subject_person_id: p_9De1waQrNPPNQ2rPBDtZB4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某（卒于664年），唐人物。CBDB 记录其籍贯记录为萬年。中国历代人物传记资料库（CBDB）以人物编号 175930 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xgVMFowfv7d7r2zydxLEr2
          claim_id: c_F16VzgoUu3qTeQokXhYZi3
          source_id: s_iBsZCuymcCHq9LAP1EAxCz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_iBsZCuymcCHq9LAP1EAxCz
            source_type: api_record
            title: 维基数据：王某（Q45679773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679773
            external_identifier: Q45679773
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
        - id: cs_eSuPTlPduYQQGHKReMzqUR
          claim_id: c_F16VzgoUu3qTeQokXhYZi3
          source_id: s_ZPZ61EhfEm5445N1TMVeY7
          stance: supports
          locator: CBDB:175930
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZPZ61EhfEm5445N1TMVeY7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王某（175930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175930&o=json
            external_identifier: CBDB:175930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:17.829Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7AvZyikBpbyybEw3RPKdQg
        subject_person_id: p_9De1waQrNPPNQ2rPBDtZB4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 664年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0664-01-01
            latest: 0664-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q61RDbF3B7LHceApgRWos9
          claim_id: c_7AvZyikBpbyybEw3RPKdQg
          source_id: s_iBsZCuymcCHq9LAP1EAxCz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iBsZCuymcCHq9LAP1EAxCz
            source_type: api_record
            title: 维基数据：王某（Q45679773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679773
            external_identifier: Q45679773
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MZBNFAvRwvmQyP5GN1vF6E
        subject_person_id: p_9De1waQrNPPNQ2rPBDtZB4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iMZ9ZJEh8hKKjRqXiModik
          claim_id: c_MZBNFAvRwvmQyP5GN1vF6E
          source_id: s_iBsZCuymcCHq9LAP1EAxCz
          stance: supports
          locator: Q45679773
          quotation: null
          interpretation_note: null
          source:
            id: s_iBsZCuymcCHq9LAP1EAxCz
            source_type: api_record
            title: 维基数据：王某（Q45679773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679773
            external_identifier: Q45679773
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
        - id: cs_tiR8qhw8G7f9roCGj5kKtF
          claim_id: c_MZBNFAvRwvmQyP5GN1vF6E
          source_id: s_ZPZ61EhfEm5445N1TMVeY7
          stance: supports
          locator: Q45679773
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Rmp5GZQ1vMd4EwnchTCbZi
        subject_person_id: p_BK7k2QcLRSfSmKmA6kf5hq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9De1waQrNPPNQ2rPBDtZB4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GD5YsC8n47gTKpFPHcFj2F
          claim_id: c_Rmp5GZQ1vMd4EwnchTCbZi
          source_id: s_S8nRwGMbu7ksKGZji5Z1Xm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_S8nRwGMbu7ksKGZji5Z1Xm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王述（175929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175929&o=json
            external_identifier: CBDB:175929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:51.803Z
            metadata_json: null
        - id: cs_XBGjYZ8bGinyQg5BSQQKEJ
          claim_id: c_Rmp5GZQ1vMd4EwnchTCbZi
          source_id: s_hzjzgaMSRzkZfwTpp2CZhB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hzjzgaMSRzkZfwTpp2CZhB
            source_type: api_record
            title: 维基数据：王长述（Q11573236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573236
            external_identifier: Q11573236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:58.606Z
            metadata_json: null
        - id: cs_pUrNLkQ8kvbb5vmAZDmX8s
          claim_id: c_Rmp5GZQ1vMd4EwnchTCbZi
          source_id: s_iBsZCuymcCHq9LAP1EAxCz
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iBsZCuymcCHq9LAP1EAxCz
            source_type: api_record
            title: 维基数据：王某（Q45679773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679773
            external_identifier: Q45679773
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
      object_person:
        id: p_BK7k2QcLRSfSmKmA6kf5hq
        status: active
        display_name: 王长述
        merged_into_person_id: null
  children:
    - claim:
        id: c_NniP89raoMtEkYbCwcFNHe
        subject_person_id: p_9De1waQrNPPNQ2rPBDtZB4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FTKFSomQccaLQiqMWKmQJ6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CBRz56RwmyKetdViPqyAmL
          claim_id: c_NniP89raoMtEkYbCwcFNHe
          source_id: s_iBsZCuymcCHq9LAP1EAxCz
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_B79BBTYYi3UBPL3n3QKBQG
          claim_id: c_NniP89raoMtEkYbCwcFNHe
          source_id: s_wwEpRD7kPM9rgF24EP9xqC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wwEpRD7kPM9rgF24EP9xqC
            source_type: api_record
            title: 维基数据：王无畏（Q45679805）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679805
            external_identifier: Q45679805
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:35.373Z
            metadata_json: null
      object_person:
        id: p_FTKFSomQccaLQiqMWKmQJ6
        status: active
        display_name: 王无畏
        merged_into_person_id: null
    - claim:
        id: c_sHNqoosRwFVjzQ1SXux1DL
        subject_person_id: p_9De1waQrNPPNQ2rPBDtZB4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pzCtqFfz6eNVPNeTPL4MqR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PujSCCraZM53EnUQXtJ4qE
          claim_id: c_sHNqoosRwFVjzQ1SXux1DL
          source_id: s_iBsZCuymcCHq9LAP1EAxCz
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_8J8ZHyYAn7GWKFQFnnscNq
          claim_id: c_sHNqoosRwFVjzQ1SXux1DL
          source_id: s_ME3cxFtdrC5oy5SnU42G7B
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ME3cxFtdrC5oy5SnU42G7B
            source_type: api_record
            title: 维基数据：王俨（Q45679837）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45679837
            external_identifier: Q45679837
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:35.373Z
            metadata_json: null
      object_person:
        id: p_pzCtqFfz6eNVPNeTPL4MqR
        status: active
        display_name: 王俨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某（卒于664年），唐人物。CBDB 记录其籍贯记录为萬年。中国历代人物传记资料库（CBDB）以人物编号 175930 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 664年 | accepted |
| name.primary | 王某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BK7k2QcLRSfSmKmA6kf5hq | 王长述 | accepted |
| children | p_FTKFSomQccaLQiqMWKmQJ6 | 王无畏 | accepted |
| children | p_pzCtqFfz6eNVPNeTPL4MqR | 王俨 | accepted |

## 外部来源

- [维基数据：王某（Q45679773）](https://www.wikidata.org/wiki/Q45679773)
- [维基数据：王无畏（Q45679805）](https://www.wikidata.org/wiki/Q45679805)
- [维基数据：王俨（Q45679837）](https://www.wikidata.org/wiki/Q45679837)
- [维基数据：王长述（Q11573236）](https://www.wikidata.org/wiki/Q11573236)
- [CBDB 中国历代人物传记资料库：王某（175930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175930&o=json)
- [CBDB 中国历代人物传记资料库：王述（175929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175929&o=json)
