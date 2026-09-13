---
schema: wang-person/v1
id: p_5p71LDupxSiT4UNxVpx8U7
status: active
merged_into: null
display_name: 王新丰
cbdb_id: 175461
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F51D2g29y5FSDqPu4XL5Mb
        subject_person_id: p_5p71LDupxSiT4UNxVpx8U7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新丰（卒于856年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175461）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Kgyu5inkqdNpL2sY64SHTA
          claim_id: c_F51D2g29y5FSDqPu4XL5Mb
          source_id: s_1LDwp3ZAxmceauV1ZhCEmi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1LDwp3ZAxmceauV1ZhCEmi
            source_type: api_record
            title: 维基数据：王新丰（Q45661028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661028
            external_identifier: Q45661028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_oaHDVwamIU9WveTHcqTnrc
          claim_id: c_F51D2g29y5FSDqPu4XL5Mb
          source_id: s_NUC9CC1jrcEw7fuJwi6kfG
          stance: supports
          locator: CBDB:175461
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NUC9CC1jrcEw7fuJwi6kfG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王新豐（175461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175461&o=json
            external_identifier: CBDB:175461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.647Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NScv81rGvf3QhNLr6NJV7f
        subject_person_id: p_5p71LDupxSiT4UNxVpx8U7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 856年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0856-01-01
            latest: 0856-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9nashPJ5dRoa8qMoNzjE4Q
          claim_id: c_NScv81rGvf3QhNLr6NJV7f
          source_id: s_1LDwp3ZAxmceauV1ZhCEmi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1LDwp3ZAxmceauV1ZhCEmi
            source_type: api_record
            title: 维基数据：王新丰（Q45661028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661028
            external_identifier: Q45661028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ki9CENiKzVmFV9bGLdBbT6
        subject_person_id: p_5p71LDupxSiT4UNxVpx8U7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新丰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_F6fFPSL2kU4esZNFgzbYA6
          claim_id: c_Ki9CENiKzVmFV9bGLdBbT6
          source_id: s_1LDwp3ZAxmceauV1ZhCEmi
          stance: supports
          locator: Q45661028
          quotation: null
          interpretation_note: null
          source:
            id: s_1LDwp3ZAxmceauV1ZhCEmi
            source_type: api_record
            title: 维基数据：王新丰（Q45661028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661028
            external_identifier: Q45661028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_pHf9L73ZD97BhNumdxjtrw
          claim_id: c_Ki9CENiKzVmFV9bGLdBbT6
          source_id: s_NUC9CC1jrcEw7fuJwi6kfG
          stance: supports
          locator: Q45661028
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4KaokBBm4M4AoFiQz2J8Ao
        subject_person_id: p_PaPNy2CS1q35QC2Tb2fFrA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5p71LDupxSiT4UNxVpx8U7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7ipb2C1pK5dUroFvLsMK1v
          claim_id: c_4KaokBBm4M4AoFiQz2J8Ao
          source_id: s_2uFdoRoReYQS7WAxSUSUJc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_2uFdoRoReYQS7WAxSUSUJc
            source_type: api_record
            title: 维基数据：王遂（Q45660969）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45660969
            external_identifier: Q45660969
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.426Z
            metadata_json: null
        - id: cs_cUqsx9ZEebLEk2jvUxvE65
          claim_id: c_4KaokBBm4M4AoFiQz2J8Ao
          source_id: s_8RzFPkq3MCvhVXbSSNa4Cn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8RzFPkq3MCvhVXbSSNa4Cn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王遂（175460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175460&o=json
            external_identifier: CBDB:175460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.584Z
            metadata_json: null
        - id: cs_T9tcK6RaEm3duCzFHSmEt5
          claim_id: c_4KaokBBm4M4AoFiQz2J8Ao
          source_id: s_1LDwp3ZAxmceauV1ZhCEmi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1LDwp3ZAxmceauV1ZhCEmi
            source_type: api_record
            title: 维基数据：王新丰（Q45661028）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661028
            external_identifier: Q45661028
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:00.456Z
            metadata_json: null
        - id: cs_dJ1H1ngjk4GNH49b8Fb1yU
          claim_id: c_4KaokBBm4M4AoFiQz2J8Ao
          source_id: s_NUC9CC1jrcEw7fuJwi6kfG
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_NUC9CC1jrcEw7fuJwi6kfG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王新豐（175461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175461&o=json
            external_identifier: CBDB:175461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:00.647Z
            metadata_json: null
      object_person:
        id: p_PaPNy2CS1q35QC2Tb2fFrA
        status: active
        display_name: 王遂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王新丰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王新丰（卒于856年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175461） | accepted |
| death.date | 856年 | accepted |
| name.primary | 王新丰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PaPNy2CS1q35QC2Tb2fFrA | 王遂 | accepted |

## 外部来源

- [维基数据：王遂（Q45660969）](https://www.wikidata.org/wiki/Q45660969)
- [维基数据：王新丰（Q45661028）](https://www.wikidata.org/wiki/Q45661028)
- [CBDB 中国历代人物传记资料库：王遂（175460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175460&o=json)
- [CBDB 中国历代人物传记资料库：王新豐（175461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175461&o=json)
