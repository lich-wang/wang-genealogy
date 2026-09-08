---
schema: wang-person/v1
id: p_QfEjWdrECKbMYtjssh6b81
status: active
merged_into: null
display_name: 王冕
cbdb_id: 175618
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VEERis7dvVKt8WzJwx5gtN
        subject_person_id: p_QfEjWdrECKbMYtjssh6b81
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175618 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Q5e1s17vTL7XECMtHXeL3E
          claim_id: c_VEERis7dvVKt8WzJwx5gtN
          source_id: s_KYgYpX9eeuC2y5moxWYXYE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_KYgYpX9eeuC2y5moxWYXYE
            source_type: api_record
            title: 维基数据：王冕（Q45669448）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669448
            external_identifier: Q45669448
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
        - id: cs_p4ZbdT8cL_9hol4n9ABKIg
          claim_id: c_VEERis7dvVKt8WzJwx5gtN
          source_id: s_7HDGnADt51Ztnsv694snpH
          stance: supports
          locator: CBDB:175618
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7HDGnADt51Ztnsv694snpH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王冕（175618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175618&o=json
            external_identifier: CBDB:175618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:45.577Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MQgocwjHinSqMyNe3dHgXT
        subject_person_id: p_QfEjWdrECKbMYtjssh6b81
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
        - id: cs_joXNt81PjD6bTuiRs1o9ax
          claim_id: c_MQgocwjHinSqMyNe3dHgXT
          source_id: s_KYgYpX9eeuC2y5moxWYXYE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_KYgYpX9eeuC2y5moxWYXYE
            source_type: api_record
            title: 维基数据：王冕（Q45669448）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669448
            external_identifier: Q45669448
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GDobHUxDaK5GRAbK9JaB1y
        subject_person_id: p_QfEjWdrECKbMYtjssh6b81
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NDH6bFc4VFkPLc8M1N2xBg
          claim_id: c_GDobHUxDaK5GRAbK9JaB1y
          source_id: s_KYgYpX9eeuC2y5moxWYXYE
          stance: supports
          locator: Q45669448
          quotation: null
          interpretation_note: null
          source:
            id: s_KYgYpX9eeuC2y5moxWYXYE
            source_type: api_record
            title: 维基数据：王冕（Q45669448）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669448
            external_identifier: Q45669448
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
        - id: cs_iAFQQHJtcPJ27QSQrQf2As
          claim_id: c_GDobHUxDaK5GRAbK9JaB1y
          source_id: s_7HDGnADt51Ztnsv694snpH
          stance: supports
          locator: Q45669448
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CwfF2LZTrRERk6g58zdo4R
        subject_person_id: p_33KokniZL21s1thwAaox5M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QfEjWdrECKbMYtjssh6b81
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3oa37CbrWp8kfYS8gq8bXF
          claim_id: c_CwfF2LZTrRERk6g58zdo4R
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
        - id: cs_7RfJbNpJpAaMSBex2fUxPi
          claim_id: c_CwfF2LZTrRERk6g58zdo4R
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
        - id: cs_7F2Q9E1WU47nbU3UpGZJHA
          claim_id: c_CwfF2LZTrRERk6g58zdo4R
          source_id: s_KYgYpX9eeuC2y5moxWYXYE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KYgYpX9eeuC2y5moxWYXYE
            source_type: api_record
            title: 维基数据：王冕（Q45669448）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45669448
            external_identifier: Q45669448
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:45.420Z
            metadata_json: null
        - id: cs_ULvLHa7ZT6W775WFzjj4fY
          claim_id: c_CwfF2LZTrRERk6g58zdo4R
          source_id: s_7HDGnADt51Ztnsv694snpH
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7HDGnADt51Ztnsv694snpH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王冕（175618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175618&o=json
            external_identifier: CBDB:175618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:45.577Z
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

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王冕（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175618 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王冕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_33KokniZL21s1thwAaox5M | 王和及 | accepted |

## 外部来源

- [维基数据：王和及（Q45669401）](https://www.wikidata.org/wiki/Q45669401)
- [维基数据：王冕（Q45669448）](https://www.wikidata.org/wiki/Q45669448)
- [CBDB 中国历代人物传记资料库：王和及（175617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175617&o=json)
- [CBDB 中国历代人物传记资料库：王冕（175618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175618&o=json)
