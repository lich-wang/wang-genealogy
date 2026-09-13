---
schema: wang-person/v1
id: p_WYBVDefMepwPbbNYpiw6QQ
status: active
merged_into: null
display_name: 王冠
cbdb_id: 175619
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EpY6yrvrdtF65KexFNQ9xL
        subject_person_id: p_WYBVDefMepwPbbNYpiw6QQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_NfN6c3So6bszmiYt2jEyb2
          claim_id: c_EpY6yrvrdtF65KexFNQ9xL
          source_id: s_FnomdH9YWSwBDDfZSoDzjV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FnomdH9YWSwBDDfZSoDzjV
            source_type: api_record
            title: 维基数据：王冠（Q45669496）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669496
            external_identifier: Q45669496
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
        - id: cs_3TsG_RSzH6y6wEQ1ydSNJf
          claim_id: c_EpY6yrvrdtF65KexFNQ9xL
          source_id: s_4sTV2JH3EMfiMAkSC1f54d
          stance: supports
          locator: CBDB:175619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4sTV2JH3EMfiMAkSC1f54d
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王冠（175619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175619&o=json
            external_identifier: CBDB:175619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:45.579Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2WzeYT9K8k6t2RxRwQiUM3
        subject_person_id: p_WYBVDefMepwPbbNYpiw6QQ
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
        - id: cs_6L4r2EPwd73NmotJe74EnP
          claim_id: c_2WzeYT9K8k6t2RxRwQiUM3
          source_id: s_FnomdH9YWSwBDDfZSoDzjV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FnomdH9YWSwBDDfZSoDzjV
            source_type: api_record
            title: 维基数据：王冠（Q45669496）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669496
            external_identifier: Q45669496
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oUJEfPqqkXU29Z8ZorWnQL
        subject_person_id: p_WYBVDefMepwPbbNYpiw6QQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Q5CrC9bKPYE5bLgx6jVweW
          claim_id: c_oUJEfPqqkXU29Z8ZorWnQL
          source_id: s_4sTV2JH3EMfiMAkSC1f54d
          stance: supports
          locator: Q45669496
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_xM66s7tUtQ2L6HBvyj9FDM
          claim_id: c_oUJEfPqqkXU29Z8ZorWnQL
          source_id: s_FnomdH9YWSwBDDfZSoDzjV
          stance: supports
          locator: Q45669496
          quotation: null
          interpretation_note: null
          source:
            id: s_FnomdH9YWSwBDDfZSoDzjV
            source_type: api_record
            title: 维基数据：王冠（Q45669496）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669496
            external_identifier: Q45669496
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3HcWgPtzHrrU3JrTMtqYG5
        subject_person_id: p_33KokniZL21s1thwAaox5M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WYBVDefMepwPbbNYpiw6QQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_E1Mi4xZUBVMzpNAhBZDWYx
          claim_id: c_3HcWgPtzHrrU3JrTMtqYG5
          source_id: s_wERXsoni44ApD73ugMJToC
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wERXsoni44ApD73ugMJToC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和及（175617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175617&o=json
            external_identifier: CBDB:175617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:52.528Z
            metadata_json: null
        - id: cs_qeHuao5KrXNGq5xgt18JMT
          claim_id: c_3HcWgPtzHrrU3JrTMtqYG5
          source_id: s_m5BPSZX3Gs1WTn7X9usBWq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_m5BPSZX3Gs1WTn7X9usBWq
            source_type: api_record
            title: 维基数据：王和及（Q45669401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669401
            external_identifier: Q45669401
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:52.356Z
            metadata_json: null
        - id: cs_RUiEGC8ieUKgZLy5Embm51
          claim_id: c_3HcWgPtzHrrU3JrTMtqYG5
          source_id: s_FnomdH9YWSwBDDfZSoDzjV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FnomdH9YWSwBDDfZSoDzjV
            source_type: api_record
            title: 维基数据：王冠（Q45669496）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669496
            external_identifier: Q45669496
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
        - id: cs_WAt14KStDPNwbMWieNsu3h
          claim_id: c_3HcWgPtzHrrU3JrTMtqYG5
          source_id: s_4sTV2JH3EMfiMAkSC1f54d
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_4sTV2JH3EMfiMAkSC1f54d
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王冠（175619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175619&o=json
            external_identifier: CBDB:175619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:45.579Z
            metadata_json: null
      object_person:
        id: p_33KokniZL21s1thwAaox5M
        status: active
        display_name: 王和及
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王冠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王冠（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175619） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王冠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_33KokniZL21s1thwAaox5M | 王和及 | accepted |

## 外部来源

- [维基数据：王冠（Q45669496）](https://www.wikidata.org/wiki/Q45669496)
- [维基数据：王和及（Q45669401）](https://www.wikidata.org/wiki/Q45669401)
- [CBDB 中国历代人物传记资料库：王冠（175619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175619&o=json)
- [CBDB 中国历代人物传记资料库：王和及（175617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175617&o=json)
