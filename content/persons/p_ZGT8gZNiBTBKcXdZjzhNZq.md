---
schema: wang-person/v1
id: p_ZGT8gZNiBTBKcXdZjzhNZq
status: active
merged_into: null
display_name: 王俊
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HpxKJ4zC3VrQK8QFETcA7s
        subject_person_id: p_ZGT8gZNiBTBKcXdZjzhNZq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊（753年—807年），唐人物。CBDB 记录其籍贯记录为偃師，曾任監察御史、右僕射。中国历代人物传记资料库（CBDB）以人物编号 145900 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_sejyuyJMce6Jzae5S2oPoT
          claim_id: c_HpxKJ4zC3VrQK8QFETcA7s
          source_id: s_zRRKdBK1v9aDRDctwzda8g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_zRRKdBK1v9aDRDctwzda8g
            source_type: api_record
            title: 维基数据：王俊（Q26209939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209939
            external_identifier: Q26209939
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
        - id: cs_TS157JbHdzH-FoD1ZHY0Xa
          claim_id: c_HpxKJ4zC3VrQK8QFETcA7s
          source_id: s_utHQg822imJGSLUGKwTdmR
          stance: supports
          locator: CBDB:145900
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_utHQg822imJGSLUGKwTdmR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王俊（145900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145900&o=json
            external_identifier: CBDB:145900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:30.087Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9mMKjcJQgf8BsJWdXKB547
        subject_person_id: p_ZGT8gZNiBTBKcXdZjzhNZq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 753年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0753-01-01
            latest: 0753-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QRekLRLV5uDANHLEGG3GTk
          claim_id: c_9mMKjcJQgf8BsJWdXKB547
          source_id: s_zRRKdBK1v9aDRDctwzda8g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zRRKdBK1v9aDRDctwzda8g
            source_type: api_record
            title: 维基数据：王俊（Q26209939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209939
            external_identifier: Q26209939
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CmFAPMkc1EsXZSmqZ3iZkR
        subject_person_id: p_ZGT8gZNiBTBKcXdZjzhNZq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 807年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0807-01-01
            latest: 0807-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XN3AzBqra4f1CbVdibkD7E
          claim_id: c_CmFAPMkc1EsXZSmqZ3iZkR
          source_id: s_zRRKdBK1v9aDRDctwzda8g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zRRKdBK1v9aDRDctwzda8g
            source_type: api_record
            title: 维基数据：王俊（Q26209939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209939
            external_identifier: Q26209939
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eAvtADtUSHNttXPQoNE948
        subject_person_id: p_ZGT8gZNiBTBKcXdZjzhNZq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z2SP2u96NTHB41cUixVXwP
          claim_id: c_eAvtADtUSHNttXPQoNE948
          source_id: s_zRRKdBK1v9aDRDctwzda8g
          stance: supports
          locator: Q26209939
          quotation: null
          interpretation_note: null
          source:
            id: s_zRRKdBK1v9aDRDctwzda8g
            source_type: api_record
            title: 维基数据：王俊（Q26209939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209939
            external_identifier: Q26209939
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
        - id: cs_u9GM7FUYcyKTW28FYh8cuH
          claim_id: c_eAvtADtUSHNttXPQoNE948
          source_id: s_utHQg822imJGSLUGKwTdmR
          stance: supports
          locator: Q26209939
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YVzEsaB9w6vWdR4BADjEvf
        subject_person_id: p_Cce815uEoUo6yUTu46sgAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZGT8gZNiBTBKcXdZjzhNZq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mXzv3ZtH3UCjBkPeZvPjAD
          claim_id: c_YVzEsaB9w6vWdR4BADjEvf
          source_id: s_zRRKdBK1v9aDRDctwzda8g
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_pgswrhY4xDvPTzCqV7aXVm
          claim_id: c_YVzEsaB9w6vWdR4BADjEvf
          source_id: s_pS92jA51R1fPE55T5LbhbD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_pS92jA51R1fPE55T5LbhbD
            source_type: api_record
            title: 维基数据：王暾（Q26209938）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209938
            external_identifier: Q26209938
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:29.703Z
            metadata_json: null
        - id: cs_QM3KzTvzWrkLcgvu7ngHk6
          claim_id: c_YVzEsaB9w6vWdR4BADjEvf
          source_id: s_LX9kJceu48Y8qUt7vNsnN3
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_LX9kJceu48Y8qUt7vNsnN3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王暾（191288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191288&o=json
            external_identifier: CBDB:191288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:29.891Z
            metadata_json: null
      object_person:
        id: p_Cce815uEoUo6yUTu46sgAK
        status: active
        display_name: 王暾
        merged_into_person_id: null
  children:
    - claim:
        id: c_XSrNdGrYMCKwgKVQphoC9A
        subject_person_id: p_ZGT8gZNiBTBKcXdZjzhNZq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_kBNbxB2AhECfnww4v6s6my
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LdHPLVrMRfet6RdNANii94
          claim_id: c_XSrNdGrYMCKwgKVQphoC9A
          source_id: s_zRRKdBK1v9aDRDctwzda8g
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_zRRKdBK1v9aDRDctwzda8g
            source_type: api_record
            title: 维基数据：王俊（Q26209939）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209939
            external_identifier: Q26209939
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:29.926Z
            metadata_json: null
        - id: cs_ZJD27tbAS1KCL4CfbcJC81
          claim_id: c_XSrNdGrYMCKwgKVQphoC9A
          source_id: s_mauAqqMDEA4eHV5vX3QyMY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mauAqqMDEA4eHV5vX3QyMY
            source_type: api_record
            title: 维基数据：王彦威（Q15894027）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15894027
            external_identifier: Q15894027
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:25.096Z
            metadata_json: null
      object_person:
        id: p_kBNbxB2AhECfnww4v6s6my
        status: active
        display_name: 王彦威
        merged_into_person_id: null
    - claim:
        id: c_tgr2LDd6eAkLtj6eqRyuUU
        subject_person_id: p_ZGT8gZNiBTBKcXdZjzhNZq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f1E8aCXS8n5AzbbbpzdTzB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UZt5ajeKFpmnq6qQM1EQ7H
          claim_id: c_tgr2LDd6eAkLtj6eqRyuUU
          source_id: s_ZadyTaaPx7Z81zAAdohDY3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZadyTaaPx7Z81zAAdohDY3
            source_type: api_record
            title: 维基数据：王处元（Q45646058）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45646058
            external_identifier: Q45646058
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:35.373Z
            metadata_json: null
        - id: cs_jxkBm1qoDb2t77916EaAB9
          claim_id: c_tgr2LDd6eAkLtj6eqRyuUU
          source_id: s_zRRKdBK1v9aDRDctwzda8g
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_SfG25W5RN9mvG3YH1ioE2G
          claim_id: c_tgr2LDd6eAkLtj6eqRyuUU
          source_id: s_utHQg822imJGSLUGKwTdmR
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: *a1
      object_person:
        id: p_f1E8aCXS8n5AzbbbpzdTzB
        status: active
        display_name: 王处元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王俊（753年—807年），唐人物。CBDB 记录其籍贯记录为偃師，曾任監察御史、右僕射。中国历代人物传记资料库（CBDB）以人物编号 145900 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 753年 | accepted |
| death.date | 807年 | accepted |
| name.primary | 王俊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Cce815uEoUo6yUTu46sgAK | 王暾 | accepted |
| children | p_kBNbxB2AhECfnww4v6s6my | 王彦威 | accepted |
| children | p_f1E8aCXS8n5AzbbbpzdTzB | 王处元 | accepted |

## 外部来源

- [维基数据：王处元（Q45646058）](https://www.wikidata.org/wiki/Q45646058)
- [维基数据：王俊（Q26209939）](https://www.wikidata.org/wiki/Q26209939)
- [维基数据：王暾（Q26209938）](https://www.wikidata.org/wiki/Q26209938)
- [维基数据：王彦威（Q15894027）](https://www.wikidata.org/wiki/Q15894027)
- [CBDB 中国历代人物传记资料库：王俊（145900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145900&o=json)
- [CBDB 中国历代人物传记资料库：王暾（191288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191288&o=json)
