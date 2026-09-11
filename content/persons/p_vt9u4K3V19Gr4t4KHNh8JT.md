---
schema: wang-person/v1
id: p_vt9u4K3V19Gr4t4KHNh8JT
status: active
merged_into: null
display_name: 王宠
cbdb_id: 92046
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QXCHmcnoRnexGfxtRXfinD
        subject_person_id: p_vt9u4K3V19Gr4t4KHNh8JT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宠，唐人物。CBDB 记录其籍贯记录为咸陽，身份包括工於文。中国历代人物传记资料库（CBDB）以人物编号 92046 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zFVXt9WA9NUawadb7PpFbK
          claim_id: c_QXCHmcnoRnexGfxtRXfinD
          source_id: s_TWik6uokuq4VC9KHUKP5h7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_TWik6uokuq4VC9KHUKP5h7
            source_type: api_record
            title: 维基数据：王宠（Q45442967）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442967
            external_identifier: Q45442967
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_d-kHmX8Xn1gWCF_KSrziJo
          claim_id: c_QXCHmcnoRnexGfxtRXfinD
          source_id: s_HQykX6s4hZd7PDx465NMUH
          stance: supports
          locator: CBDB:92046
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HQykX6s4hZd7PDx465NMUH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寵（92046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92046&o=json
            external_identifier: CBDB:92046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.640Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qp4WAWbecUMkbiStDhu5AU
        subject_person_id: p_vt9u4K3V19Gr4t4KHNh8JT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宠
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EgQGQWVMMFLdbgKCwRQbi9
          claim_id: c_qp4WAWbecUMkbiStDhu5AU
          source_id: s_TWik6uokuq4VC9KHUKP5h7
          stance: supports
          locator: Q45442967
          quotation: null
          interpretation_note: null
          source:
            id: s_TWik6uokuq4VC9KHUKP5h7
            source_type: api_record
            title: 维基数据：王宠（Q45442967）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442967
            external_identifier: Q45442967
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_XL9hLrf795B6RYCRYm9URu
          claim_id: c_qp4WAWbecUMkbiStDhu5AU
          source_id: s_HQykX6s4hZd7PDx465NMUH
          stance: supports
          locator: Q45442967
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_a7t92Q8iTq82rHpFBsvz8s
        subject_person_id: p_4HKPieD6fbNJ6PWBDrdsH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vt9u4K3V19Gr4t4KHNh8JT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5nqwvq88qx8z4Q1oxDbNnU
          claim_id: c_a7t92Q8iTq82rHpFBsvz8s
          source_id: s_aqT62HmHd1Zy5QuErHLovj
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_aqT62HmHd1Zy5QuErHLovj
            source_type: api_record
            title: 维基数据：王曒（Q45665407）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665407
            external_identifier: Q45665407
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:36.179Z
            metadata_json: null
        - id: cs_Cfto2ehKuz83v1GFu3DcND
          claim_id: c_a7t92Q8iTq82rHpFBsvz8s
          source_id: s_uGDohKi8JoWi4niPPUjK5Q
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_uGDohKi8JoWi4niPPUjK5Q
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王曒（175538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175538&o=json
            external_identifier: CBDB:175538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:36.335Z
            metadata_json: null
        - id: cs_jEdKaAkYRYqf7z4ALUaFEB
          claim_id: c_a7t92Q8iTq82rHpFBsvz8s
          source_id: s_TWik6uokuq4VC9KHUKP5h7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_TWik6uokuq4VC9KHUKP5h7
            source_type: api_record
            title: 维基数据：王宠（Q45442967）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442967
            external_identifier: Q45442967
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_EMZs6DxhAzQPKVAoUduXAF
          claim_id: c_a7t92Q8iTq82rHpFBsvz8s
          source_id: s_HQykX6s4hZd7PDx465NMUH
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HQykX6s4hZd7PDx465NMUH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寵（92046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92046&o=json
            external_identifier: CBDB:92046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.640Z
            metadata_json: null
      object_person:
        id: p_4HKPieD6fbNJ6PWBDrdsH7
        status: active
        display_name: 王曒
        merged_into_person_id: null
  children:
    - claim:
        id: c_TwQqFgMg4L1dAvEjQLTb5p
        subject_person_id: p_vt9u4K3V19Gr4t4KHNh8JT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2NTHSuTRAQfY7rnLH41fx7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TjuP4MSq53RzAGYZQaXfH9
          claim_id: c_TwQqFgMg4L1dAvEjQLTb5p
          source_id: s_TWik6uokuq4VC9KHUKP5h7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_TWik6uokuq4VC9KHUKP5h7
            source_type: api_record
            title: 维基数据：王宠（Q45442967）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442967
            external_identifier: Q45442967
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:45.495Z
            metadata_json: null
        - id: cs_X2uyhoD9WfiZCP1R56Waot
          claim_id: c_TwQqFgMg4L1dAvEjQLTb5p
          source_id: s_HQykX6s4hZd7PDx465NMUH
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HQykX6s4hZd7PDx465NMUH
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寵（92046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92046&o=json
            external_identifier: CBDB:92046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:45.640Z
            metadata_json: null
        - id: cs_E13gJMiJ4ModV9Cuz1m6MP
          claim_id: c_TwQqFgMg4L1dAvEjQLTb5p
          source_id: s_eRrFti22ak1JuurWMbB8MF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eRrFti22ak1JuurWMbB8MF
            source_type: api_record
            title: 维基数据：王仲连（Q45665461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665461
            external_identifier: Q45665461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:01.010Z
            metadata_json: null
        - id: cs_LU9Szp1hsUCFd6R8otWHs5
          claim_id: c_TwQqFgMg4L1dAvEjQLTb5p
          source_id: s_VtRYHnhDAVQax6saLZ9QEq
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VtRYHnhDAVQax6saLZ9QEq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲連（175540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175540&o=json
            external_identifier: CBDB:175540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:01.171Z
            metadata_json: null
      object_person:
        id: p_2NTHSuTRAQfY7rnLH41fx7
        status: active
        display_name: 王仲连
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Xi7sfk7cqVzkelophS10UR
        subject_person_id: p_oXeM1DhnzL8dBtmUo4Qtqd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vt9u4K3V19Gr4t4KHNh8JT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GgB6YEt9X1YkLCzoz-0XDD
          claim_id: c_Xi7sfk7cqVzkelophS10UR
          source_id: s_T1ghCs1VBUTNw5nSgpKgZg
          stance: supports
          locator: Pers DB / 唐代人物知識ベース，pers00171：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T1ghCs1VBUTNw5nSgpKgZg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王琳（91982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91982&o=json
            external_identifier: CBDB:91982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.980Z
            metadata_json: null
      object_person:
        id: p_oXeM1DhnzL8dBtmUo4Qtqd
        status: active
        display_name: 王晙
        merged_into_person_id: null
    - claim:
        id: c_AVgGtG9MWOwBvJZHHe1CSZ
        subject_person_id: p_PMHDEn49o8y5aW5qiXbb15
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vt9u4K3V19Gr4t4KHNh8JT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sx5NeOtQ97_iC8-AK3QRk4
          claim_id: c_AVgGtG9MWOwBvJZHHe1CSZ
          source_id: s_T1ghCs1VBUTNw5nSgpKgZg
          stance: supports
          locator: Pers DB / 唐代人物知識ベース，pers00171：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T1ghCs1VBUTNw5nSgpKgZg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王琳（91982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91982&o=json
            external_identifier: CBDB:91982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:43.980Z
            metadata_json: null
      object_person:
        id: p_PMHDEn49o8y5aW5qiXbb15
        status: active
        display_name: 王琳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宠，唐人物。CBDB 记录其籍贯记录为咸陽，身份包括工於文。中国历代人物传记资料库（CBDB）以人物编号 92046 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王宠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4HKPieD6fbNJ6PWBDrdsH7 | 王曒 | accepted |
| children | p_2NTHSuTRAQfY7rnLH41fx7 | 王仲连 | accepted |
| ancestors | p_oXeM1DhnzL8dBtmUo4Qtqd | 王晙 | accepted |
| ancestors | p_PMHDEn49o8y5aW5qiXbb15 | 王琳 | accepted |

## 外部来源

- [维基数据：王宠（Q45442967）](https://www.wikidata.org/wiki/Q45442967)
- [维基数据：王曒（Q45665407）](https://www.wikidata.org/wiki/Q45665407)
- [维基数据：王仲连（Q45665461）](https://www.wikidata.org/wiki/Q45665461)
- [CBDB 中国历代人物传记资料库：王寵（92046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92046&o=json)
- [CBDB 中国历代人物传记资料库：王曒（175538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175538&o=json)
- [CBDB 中国历代人物传记资料库：王琳（91982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91982&o=json)
- [CBDB 中国历代人物传记资料库：王仲連（175540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175540&o=json)
