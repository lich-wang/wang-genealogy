---
schema: wang-person/v1
id: p_weTgXctV7Eb1o4FyPStPTQ
status: active
merged_into: null
display_name: 王针
cbdb_id: 175549
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FJVxPXCgrAfgB5rBRN3B4r
        subject_person_id: p_weTgXctV7Eb1o4FyPStPTQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王针（卒于842年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175549 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xTzLLz4aYALMu6s3K4ALfT
          claim_id: c_FJVxPXCgrAfgB5rBRN3B4r
          source_id: s_3x7zux3E69S3EtGyk4m9r7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3x7zux3E69S3EtGyk4m9r7
            source_type: api_record
            title: 维基数据：王针（Q45665970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665970
            external_identifier: Q45665970
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
        - id: cs_rk6U8xuzkEirl0ZGYdBab8
          claim_id: c_FJVxPXCgrAfgB5rBRN3B4r
          source_id: s_HbLe6EeoH27EFvnm5jM81C
          stance: supports
          locator: CBDB:175549
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HbLe6EeoH27EFvnm5jM81C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鍼（175549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175549&o=json
            external_identifier: CBDB:175549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:43.474Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jgk3dKsD3ei8mPKGir72ah
        subject_person_id: p_weTgXctV7Eb1o4FyPStPTQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 842年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0842-01-01
            latest: 0842-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d1KBbASFWxPBPQDqCSQhdL
          claim_id: c_jgk3dKsD3ei8mPKGir72ah
          source_id: s_3x7zux3E69S3EtGyk4m9r7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3x7zux3E69S3EtGyk4m9r7
            source_type: api_record
            title: 维基数据：王针（Q45665970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665970
            external_identifier: Q45665970
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eg693jVqud8FjG18EkdWyy
        subject_person_id: p_weTgXctV7Eb1o4FyPStPTQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王针
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MFBtmLg1H3ZdMtcma6yG8p
          claim_id: c_Eg693jVqud8FjG18EkdWyy
          source_id: s_3x7zux3E69S3EtGyk4m9r7
          stance: supports
          locator: Q45665970
          quotation: null
          interpretation_note: null
          source:
            id: s_3x7zux3E69S3EtGyk4m9r7
            source_type: api_record
            title: 维基数据：王针（Q45665970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665970
            external_identifier: Q45665970
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
        - id: cs_oUCayRDDmyUuJLeHrKT4F3
          claim_id: c_Eg693jVqud8FjG18EkdWyy
          source_id: s_HbLe6EeoH27EFvnm5jM81C
          stance: supports
          locator: Q45665970
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ADGhYNeVePBBf98M34mp1e
        subject_person_id: p_VFY7pa85s4J6zQ3CEWQetD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_weTgXctV7Eb1o4FyPStPTQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tYqzxKpLXx1bHK7eB86v3H
          claim_id: c_ADGhYNeVePBBf98M34mp1e
          source_id: s_FHnrH5NQLrDst3z6jtiM9A
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FHnrH5NQLrDst3z6jtiM9A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王及（175543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175543&o=json
            external_identifier: CBDB:175543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:12.180Z
            metadata_json: null
        - id: cs_yShubFbEW8pgXEkPhdbSLj
          claim_id: c_ADGhYNeVePBBf98M34mp1e
          source_id: s_R2ERVGUSTFdaLQcas86RM7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_R2ERVGUSTFdaLQcas86RM7
            source_type: api_record
            title: 维基数据：王及（Q45665623）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665623
            external_identifier: Q45665623
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:12.028Z
            metadata_json: null
        - id: cs_55SMDKJxbJyXGzkip7Kqt1
          claim_id: c_ADGhYNeVePBBf98M34mp1e
          source_id: s_3x7zux3E69S3EtGyk4m9r7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3x7zux3E69S3EtGyk4m9r7
            source_type: api_record
            title: 维基数据：王针（Q45665970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665970
            external_identifier: Q45665970
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
        - id: cs_QAzdRUq81pddwJV4Jqt3bG
          claim_id: c_ADGhYNeVePBBf98M34mp1e
          source_id: s_HbLe6EeoH27EFvnm5jM81C
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HbLe6EeoH27EFvnm5jM81C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鍼（175549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175549&o=json
            external_identifier: CBDB:175549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:43.474Z
            metadata_json: null
      object_person:
        id: p_VFY7pa85s4J6zQ3CEWQetD
        status: active
        display_name: 王及
        merged_into_person_id: null
  children:
    - claim:
        id: c_b9GrWpDKz8adkcKvNvJa69
        subject_person_id: p_weTgXctV7Eb1o4FyPStPTQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_99Hkm9ELDXXQemujiK4KXn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gcZ1hE9a62CBG2h9SbRpZv
          claim_id: c_b9GrWpDKz8adkcKvNvJa69
          source_id: s_HbLe6EeoH27EFvnm5jM81C
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HbLe6EeoH27EFvnm5jM81C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鍼（175549）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175549&o=json
            external_identifier: CBDB:175549
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:43.474Z
            metadata_json: null
        - id: cs_gqcLC5PtuiJdDGrdiU4CFZ
          claim_id: c_b9GrWpDKz8adkcKvNvJa69
          source_id: s_3x7zux3E69S3EtGyk4m9r7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3x7zux3E69S3EtGyk4m9r7
            source_type: api_record
            title: 维基数据：王针（Q45665970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665970
            external_identifier: Q45665970
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:43.327Z
            metadata_json: null
        - id: cs_ocmNG14tYE58m1BMBii4mH
          claim_id: c_b9GrWpDKz8adkcKvNvJa69
          source_id: s_RzpXCQEuEaM28xpPjkF5iA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RzpXCQEuEaM28xpPjkF5iA
            source_type: api_record
            title: 维基数据：王莓（Q45666023）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666023
            external_identifier: Q45666023
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.530Z
            metadata_json: null
        - id: cs_eB36WuWFfogZXFyTuVB39d
          claim_id: c_b9GrWpDKz8adkcKvNvJa69
          source_id: s_QPy4RhEkk6rC686d7jbY6e
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_QPy4RhEkk6rC686d7jbY6e
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王莓（175550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json
            external_identifier: CBDB:175550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.682Z
            metadata_json: null
      object_person:
        id: p_99Hkm9ELDXXQemujiK4KXn
        status: active
        display_name: 王莓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王针

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王针（卒于842年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175549 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 842年 | accepted |
| name.primary | 王针 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VFY7pa85s4J6zQ3CEWQetD | 王及 | accepted |
| children | p_99Hkm9ELDXXQemujiK4KXn | 王莓 | accepted |

## 外部来源

- [维基数据：王及（Q45665623）](https://www.wikidata.org/wiki/Q45665623)
- [维基数据：王莓（Q45666023）](https://www.wikidata.org/wiki/Q45666023)
- [维基数据：王针（Q45665970）](https://www.wikidata.org/wiki/Q45665970)
- [CBDB 中国历代人物传记资料库：王及（175543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175543&o=json)
- [CBDB 中国历代人物传记资料库：王莓（175550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175550&o=json)
- [CBDB 中国历代人物传记资料库：王鍼（175549）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175549&o=json)
