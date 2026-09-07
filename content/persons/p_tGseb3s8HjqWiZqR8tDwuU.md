---
schema: wang-person/v1
id: p_tGseb3s8HjqWiZqR8tDwuU
status: active
merged_into: null
display_name: 王伦
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HQw2Vav7WunJbzjCN3YVPM
        subject_person_id: p_tGseb3s8HjqWiZqR8tDwuU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伦（卒于916年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任校書郎。中国历代人物传记资料库（CBDB）以人物编号 175548 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ceSs9iF8UVwHJkCpWq2hKg
          claim_id: c_HQw2Vav7WunJbzjCN3YVPM
          source_id: s_g31YJag5o68NZVcBDE8SGX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_g31YJag5o68NZVcBDE8SGX
            source_type: api_record
            title: 维基数据：王伦（Q45665914）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665914
            external_identifier: Q45665914
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.307Z
            metadata_json: null
        - id: cs_Vgp5zb6mzXmMmWqCg3c5RF
          claim_id: c_HQw2Vav7WunJbzjCN3YVPM
          source_id: s_1b4gd4yPqyBQ9b8G4iWjQr
          stance: supports
          locator: CBDB:175548
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1b4gd4yPqyBQ9b8G4iWjQr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倫（175548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175548&o=json
            external_identifier: CBDB:175548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:15.592Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_amn36CW8WKnVK2keDH1j9b
        subject_person_id: p_tGseb3s8HjqWiZqR8tDwuU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 916年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0916-01-01
            latest: 0916-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h1tR3XA3oBDFHYV4iKjZ4j
          claim_id: c_amn36CW8WKnVK2keDH1j9b
          source_id: s_g31YJag5o68NZVcBDE8SGX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_g31YJag5o68NZVcBDE8SGX
            source_type: api_record
            title: 维基数据：王伦（Q45665914）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665914
            external_identifier: Q45665914
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.307Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gz7jQ9xmpxEicjWNHx2Va3
        subject_person_id: p_tGseb3s8HjqWiZqR8tDwuU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1XJLT1LpBRS3wcAGnXPMD9
          claim_id: c_Gz7jQ9xmpxEicjWNHx2Va3
          source_id: s_g31YJag5o68NZVcBDE8SGX
          stance: supports
          locator: Q45665914
          quotation: null
          interpretation_note: null
          source:
            id: s_g31YJag5o68NZVcBDE8SGX
            source_type: api_record
            title: 维基数据：王伦（Q45665914）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665914
            external_identifier: Q45665914
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.307Z
            metadata_json: null
        - id: cs_8EzCvTK17CU6b2aQLSjjvq
          claim_id: c_Gz7jQ9xmpxEicjWNHx2Va3
          source_id: s_1b4gd4yPqyBQ9b8G4iWjQr
          stance: supports
          locator: Q45665914
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i3twX9rKnP6AvKC75ZJnxh
        subject_person_id: p_DgA93iH24ZodpFmFWyHcNR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tGseb3s8HjqWiZqR8tDwuU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FLCaKPkwFD2bY8VdLnMtjY
          claim_id: c_i3twX9rKnP6AvKC75ZJnxh
          source_id: s_ZsaLJJ1y7ju46UGxvbk2kS
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ZsaLJJ1y7ju46UGxvbk2kS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王搏（175545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json
            external_identifier: CBDB:175545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.677Z
            metadata_json: null
        - id: cs_oa2KEV5eC7oux6wLBh89Sm
          claim_id: c_i3twX9rKnP6AvKC75ZJnxh
          source_id: s_Luponw9m711YWZVTA2bFZp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Luponw9m711YWZVTA2bFZp
            source_type: api_record
            title: 维基数据：王搏（Q45665731）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665731
            external_identifier: Q45665731
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.529Z
            metadata_json: null
        - id: cs_JoeKxgCrTKuDS3FYUkue24
          claim_id: c_i3twX9rKnP6AvKC75ZJnxh
          source_id: s_g31YJag5o68NZVcBDE8SGX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_g31YJag5o68NZVcBDE8SGX
            source_type: api_record
            title: 维基数据：王伦（Q45665914）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665914
            external_identifier: Q45665914
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.307Z
            metadata_json: null
        - id: cs_tA4e3jg84cajRzJg3z1o72
          claim_id: c_i3twX9rKnP6AvKC75ZJnxh
          source_id: s_1b4gd4yPqyBQ9b8G4iWjQr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1b4gd4yPqyBQ9b8G4iWjQr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倫（175548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175548&o=json
            external_identifier: CBDB:175548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:15.592Z
            metadata_json: null
      object_person:
        id: p_DgA93iH24ZodpFmFWyHcNR
        status: active
        display_name: 王搏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伦（卒于916年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任校書郎。中国历代人物传记资料库（CBDB）以人物编号 175548 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 916年 | accepted |
| name.primary | 王伦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DgA93iH24ZodpFmFWyHcNR | 王搏 | accepted |

## 外部来源

- [维基数据：王搏（Q45665731）](https://www.wikidata.org/wiki/Q45665731)
- [维基数据：王伦（Q45665914）](https://www.wikidata.org/wiki/Q45665914)
- [CBDB 中国历代人物传记资料库：王搏（175545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json)
- [CBDB 中国历代人物传记资料库：王倫（175548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175548&o=json)
