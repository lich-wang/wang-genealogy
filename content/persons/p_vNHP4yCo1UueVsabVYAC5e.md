---
schema: wang-person/v1
id: p_vNHP4yCo1UueVsabVYAC5e
status: active
merged_into: null
display_name: 王源奕
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H8ScQNN2NMjhW3rT8npFjD
        subject_person_id: p_vNHP4yCo1UueVsabVYAC5e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源奕（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175607 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XvCRTjPWoNHTPARMnMVgkQ
          claim_id: c_H8ScQNN2NMjhW3rT8npFjD
          source_id: s_E252MQJBFTYP4C879CgfJJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_E252MQJBFTYP4C879CgfJJ
            source_type: api_record
            title: 维基数据：王源奕（Q45668921）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668921
            external_identifier: Q45668921
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.396Z
            metadata_json: null
        - id: cs_vAMQ5UI9l1zdK4IJpqc_mA
          claim_id: c_H8ScQNN2NMjhW3rT8npFjD
          source_id: s_2urkbw3QafNY8vKaH9FhrE
          stance: supports
          locator: CBDB:175607
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2urkbw3QafNY8vKaH9FhrE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源奕（175607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175607&o=json
            external_identifier: CBDB:175607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:43.546Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MK8AFpXHmJs6naDCaaFyrb
        subject_person_id: p_vNHP4yCo1UueVsabVYAC5e
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
        - id: cs_JXjL2LqyXYwQQq9SuPNTq6
          claim_id: c_MK8AFpXHmJs6naDCaaFyrb
          source_id: s_E252MQJBFTYP4C879CgfJJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_E252MQJBFTYP4C879CgfJJ
            source_type: api_record
            title: 维基数据：王源奕（Q45668921）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668921
            external_identifier: Q45668921
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.396Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HB8GAbeQ7mA4ZJBaGcaXyF
        subject_person_id: p_vNHP4yCo1UueVsabVYAC5e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源奕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6L7oPywMbUCwuQFjrk6pvQ
          claim_id: c_HB8GAbeQ7mA4ZJBaGcaXyF
          source_id: s_2urkbw3QafNY8vKaH9FhrE
          stance: supports
          locator: Q45668921
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Zxx2XP336ZFgLHpj69Qngb
          claim_id: c_HB8GAbeQ7mA4ZJBaGcaXyF
          source_id: s_E252MQJBFTYP4C879CgfJJ
          stance: supports
          locator: Q45668921
          quotation: null
          interpretation_note: null
          source:
            id: s_E252MQJBFTYP4C879CgfJJ
            source_type: api_record
            title: 维基数据：王源奕（Q45668921）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668921
            external_identifier: Q45668921
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.396Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jbJmzrj7V58NzHdq4z3Hoq
        subject_person_id: p_VCzugTfN1NUsZkRmPAN27h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vNHP4yCo1UueVsabVYAC5e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5vLLYr9b9H95qfzHHNCM3n
          claim_id: c_jbJmzrj7V58NzHdq4z3Hoq
          source_id: s_v8HG57NFjhTnDhqnEJEhAs
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_v8HG57NFjhTnDhqnEJEhAs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王現（175606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json
            external_identifier: CBDB:175606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:50.673Z
            metadata_json: null
        - id: cs_jwUakzm3Jmmsp8orRudsYs
          claim_id: c_jbJmzrj7V58NzHdq4z3Hoq
          source_id: s_FiXBmVmThrwT9DXXq9GYAt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FiXBmVmThrwT9DXXq9GYAt
            source_type: api_record
            title: 维基数据：王现（Q45668873）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668873
            external_identifier: Q45668873
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:50.483Z
            metadata_json: null
        - id: cs_39YUgyvgomud7pkDfUtxyy
          claim_id: c_jbJmzrj7V58NzHdq4z3Hoq
          source_id: s_E252MQJBFTYP4C879CgfJJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_E252MQJBFTYP4C879CgfJJ
            source_type: api_record
            title: 维基数据：王源奕（Q45668921）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668921
            external_identifier: Q45668921
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.396Z
            metadata_json: null
        - id: cs_QHJfGZZbfc6pmGMkjiw5fG
          claim_id: c_jbJmzrj7V58NzHdq4z3Hoq
          source_id: s_2urkbw3QafNY8vKaH9FhrE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2urkbw3QafNY8vKaH9FhrE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源奕（175607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175607&o=json
            external_identifier: CBDB:175607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:43.546Z
            metadata_json: null
      object_person:
        id: p_VCzugTfN1NUsZkRmPAN27h
        status: active
        display_name: 王现
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源奕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源奕（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175607 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源奕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VCzugTfN1NUsZkRmPAN27h | 王现 | accepted |

## 外部来源

- [维基数据：王现（Q45668873）](https://www.wikidata.org/wiki/Q45668873)
- [维基数据：王源奕（Q45668921）](https://www.wikidata.org/wiki/Q45668921)
- [CBDB 中国历代人物传记资料库：王現（175606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175606&o=json)
- [CBDB 中国历代人物传记资料库：王源奕（175607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175607&o=json)
