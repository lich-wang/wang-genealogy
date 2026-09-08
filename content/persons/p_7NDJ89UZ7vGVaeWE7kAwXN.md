---
schema: wang-person/v1
id: p_7NDJ89UZ7vGVaeWE7kAwXN
status: active
merged_into: null
display_name: 王克承
cbdb_id: 513576
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3HiUNxWQbb_sE2tYPmPF4c
        subject_person_id: p_7NDJ89UZ7vGVaeWE7kAwXN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克承，清人物。中国历代人物传记资料库（CBDB）以人物编号 513576 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RK5P2zIc378-y_nMsEVItu
          claim_id: c_3HiUNxWQbb_sE2tYPmPF4c
          source_id: s_GwMY3GgCZVVsVCtaQ1JYjp
          stance: supports
          locator: CBDB:513576
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GwMY3GgCZVVsVCtaQ1JYjp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王克承（513576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513576&o=json
            external_identifier: CBDB:513576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:23.183Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kK9H52R14KPHsjVWQpdLyE
        subject_person_id: p_7NDJ89UZ7vGVaeWE7kAwXN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克承
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ntgF5y7B3RcFW9xyJx4Mxe
          claim_id: c_kK9H52R14KPHsjVWQpdLyE
          source_id: s_GwMY3GgCZVVsVCtaQ1JYjp
          stance: supports
          locator: CBDB:513576
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rYQ6UtxE5s8RPKeDDQBVcD
        subject_person_id: p_tebqY22pd9wZzkQFGZaaDe
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_7NDJ89UZ7vGVaeWE7kAwXN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zDncVyQaXCFHbKYeUEnogD
          claim_id: c_rYQ6UtxE5s8RPKeDDQBVcD
          source_id: s_48LqQaDxdZaKx1Y5S35tbe
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：人名權威資料（中央研究院歷史語言研究所）
          source:
            id: s_48LqQaDxdZaKx1Y5S35tbe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王熙（56873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56873&o=json
            external_identifier: CBDB:56873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:21.685Z
            metadata_json: null
      object_person:
        id: p_tebqY22pd9wZzkQFGZaaDe
        status: active
        display_name: 王熙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王克承

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王克承，清人物。中国历代人物传记资料库（CBDB）以人物编号 513576 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王克承 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tebqY22pd9wZzkQFGZaaDe | 王熙 | accepted |

## 外部来源

- [CBDB 中国历代人物传记资料库：王克承（513576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513576&o=json)
- [CBDB 中国历代人物传记资料库：王熙（56873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56873&o=json)
