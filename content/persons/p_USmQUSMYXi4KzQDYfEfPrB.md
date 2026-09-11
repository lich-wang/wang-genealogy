---
schema: wang-person/v1
id: p_USmQUSMYXi4KzQDYfEfPrB
status: active
merged_into: null
display_name: 王三聘
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mmUVz1ZPUhv82823ny6rRn
        subject_person_id: p_USmQUSMYXi4KzQDYfEfPrB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4rqKYCYxAnBFakyYreTLgs
          claim_id: c_mmUVz1ZPUhv82823ny6rRn
          source_id: s_tZJ2HoEknJaRB1RtDzZU3M
          stance: supports
          locator: CBDB:203385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203385）
          source: &a1
            id: s_tZJ2HoEknJaRB1RtDzZU3M
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 203385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203385&o=json
            external_identifier: CBDB:203385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kwKJt3JpyqRZ5m15hxcTse
        subject_person_id: p_USmQUSMYXi4KzQDYfEfPrB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DPcB5P5EKP56dtjtwCDdAx
          claim_id: c_kwKJt3JpyqRZ5m15hxcTse
          source_id: s_tZJ2HoEknJaRB1RtDzZU3M
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KgC4MHS7RCBYPf9Hp2xbSb
        subject_person_id: p_USmQUSMYXi4KzQDYfEfPrB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘（生于1507年），明人物。嘉靖二十年進士，籍贯黃縣，入仕進士。（中国历代人物传记资料库 CBDB 203385）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YlNEPInjnl4FDT0dJw0KP6
          claim_id: c_KgC4MHS7RCBYPf9Hp2xbSb
          source_id: s_tZJ2HoEknJaRB1RtDzZU3M
          stance: supports
          locator: CBDB:203385
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VmbgkNE6CrxJ6RTQYkVMlu
        subject_person_id: p_32qBUADizjGa3P7B3ZTimt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_USmQUSMYXi4KzQDYfEfPrB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WlYb0Drk7ecCCs_asjmMr6
          claim_id: c_VmbgkNE6CrxJ6RTQYkVMlu
          source_id: s_KsZnLRsXB29v8BDss4UGTC
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KsZnLRsXB29v8BDss4UGTC
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 303942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303942&o=json
            external_identifier: CBDB:303942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_32qBUADizjGa3P7B3ZTimt
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_mUpsQDGlr_1s-vCfoLqk1X
        subject_person_id: p_9V1S8p6jPM71QZAFWb6twD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_USmQUSMYXi4KzQDYfEfPrB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UBSo0bGMEo81jM0rbiKnaV
          claim_id: c_mUpsQDGlr_1s-vCfoLqk1X
          source_id: s_SH85YdWrk91hveG3Moo16D
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SH85YdWrk91hveG3Moo16D
            source_type: api_record
            title: 中国历代人物传记资料库：王禧（CBDB 303941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303941&o=json
            external_identifier: CBDB:303941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9V1S8p6jPM71QZAFWb6twD
        status: active
        display_name: 王禧
        merged_into_person_id: null
    - claim:
        id: c__PFLANJ5ieNi8CNZaPTrRd
        subject_person_id: p_P9gDV5HsE4yKwvXFECnE97
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_USmQUSMYXi4KzQDYfEfPrB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lz2XwMW_dkIguy7BEMzOyP
          claim_id: c__PFLANJ5ieNi8CNZaPTrRd
          source_id: s_gNg4Hn3AHXh32nLkjrB1nD
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gNg4Hn3AHXh32nLkjrB1nD
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 303940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303940&o=json
            external_identifier: CBDB:303940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_P9gDV5HsE4yKwvXFECnE97
        status: active
        display_name: 王成
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王三聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三聘 | accepted |
| birth.date | 1507年 | accepted |
| bio.summary | 王三聘（生于1507年），明人物。嘉靖二十年進士，籍贯黃縣，入仕進士。（中国历代人物传记资料库 CBDB 203385） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_32qBUADizjGa3P7B3ZTimt | 王瑤 | accepted |
| ancestors | p_9V1S8p6jPM71QZAFWb6twD | 王禧 | accepted |
| ancestors | p_P9gDV5HsE4yKwvXFECnE97 | 王成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 303940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303940&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 203385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203385&o=json)
- [中国历代人物传记资料库：王禧（CBDB 303941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303941&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 303942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303942&o=json)
