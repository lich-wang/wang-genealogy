---
schema: wang-person/v1
id: p_TDm8AW3FGV4iqKti7zSPt9
status: active
merged_into: null
display_name: 王某
cbdb_id: 193614
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zuLtwYeSePGH6KM5Eec8y7
        subject_person_id: p_TDm8AW3FGV4iqKti7zSPt9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某（卒于598年），南北朝人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 193614）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_41ZupbJUoNS15FWLMkz9FY
          claim_id: c_zuLtwYeSePGH6KM5Eec8y7
          source_id: s_ygACJZVSZz5JfhGZSbgin6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ygACJZVSZz5JfhGZSbgin6
            source_type: api_record
            title: 维基数据：王某（Q45489166）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45489166
            external_identifier: Q45489166
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
        - id: cs_-jk4Vc4wR_qT8dGfoA8RMd
          claim_id: c_zuLtwYeSePGH6KM5Eec8y7
          source_id: s_S6a4xDfApii643Q4gS3eph
          stance: supports
          locator: CBDB:193614
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_S6a4xDfApii643Q4gS3eph
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王某（193614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193614&o=json
            external_identifier: CBDB:193614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.587Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dzjum7yYuPuUHTBgVpbJV9
        subject_person_id: p_TDm8AW3FGV4iqKti7zSPt9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 598年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0598-01-01
            latest: 0598-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MLiL2uWPJiQE8ezF8ajprK
          claim_id: c_dzjum7yYuPuUHTBgVpbJV9
          source_id: s_ygACJZVSZz5JfhGZSbgin6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ygACJZVSZz5JfhGZSbgin6
            source_type: api_record
            title: 维基数据：王某（Q45489166）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45489166
            external_identifier: Q45489166
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ruxo237LwbwkFC4h1hbrjH
        subject_person_id: p_TDm8AW3FGV4iqKti7zSPt9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BNx2fqz4uDLUNWHt5FJCFx
          claim_id: c_Ruxo237LwbwkFC4h1hbrjH
          source_id: s_ygACJZVSZz5JfhGZSbgin6
          stance: supports
          locator: Q45489166
          quotation: null
          interpretation_note: null
          source:
            id: s_ygACJZVSZz5JfhGZSbgin6
            source_type: api_record
            title: 维基数据：王某（Q45489166）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45489166
            external_identifier: Q45489166
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
        - id: cs_jypWdgKhNkHFbCy4DkJ7fc
          claim_id: c_Ruxo237LwbwkFC4h1hbrjH
          source_id: s_S6a4xDfApii643Q4gS3eph
          stance: supports
          locator: Q45489166
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yBLH2a9XKQayy3iW24MKgM
        subject_person_id: p_rVSU7SGR7ggL3Y16sLKSe2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TDm8AW3FGV4iqKti7zSPt9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8kMFg3uJE8bYz5Xectb7ww
          claim_id: c_yBLH2a9XKQayy3iW24MKgM
          source_id: s_hiHG6cvQPHs7S7JeSAtB6D
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hiHG6cvQPHs7S7JeSAtB6D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王裒（157867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157867&o=json
            external_identifier: CBDB:157867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:39:53.727Z
            metadata_json: null
        - id: cs_T9Vu1LcF5LiaKiUC41BQYG
          claim_id: c_yBLH2a9XKQayy3iW24MKgM
          source_id: s_uYCbjkL9HT7KCAR6K4SZ9c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uYCbjkL9HT7KCAR6K4SZ9c
            source_type: api_record
            title: 维基数据：王褒（Q10416850）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10416850
            external_identifier: Q10416850
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:53.590Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A4%92_(%E5%8D%97%E5%8C%97%E6%9C%9D)
        - id: cs_2nxu4367rNq1v4Eewu2vAV
          claim_id: c_yBLH2a9XKQayy3iW24MKgM
          source_id: s_ygACJZVSZz5JfhGZSbgin6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ygACJZVSZz5JfhGZSbgin6
            source_type: api_record
            title: 维基数据：王某（Q45489166）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45489166
            external_identifier: Q45489166
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
        - id: cs_rtYSycVLSXN5xEJ4qbbBND
          claim_id: c_yBLH2a9XKQayy3iW24MKgM
          source_id: s_S6a4xDfApii643Q4gS3eph
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_S6a4xDfApii643Q4gS3eph
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王某（193614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193614&o=json
            external_identifier: CBDB:193614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.587Z
            metadata_json: null
      object_person:
        id: p_rVSU7SGR7ggL3Y16sLKSe2
        status: active
        display_name: 王褒
        merged_into_person_id: null
  children:
    - claim:
        id: c_xC8Bha25VrdHuZNBMrkD9N
        subject_person_id: p_TDm8AW3FGV4iqKti7zSPt9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3KsfA45kmBBF2n4LZomJB3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uDKwxZ8bcrzpA5hs9zw9Nj
          claim_id: c_xC8Bha25VrdHuZNBMrkD9N
          source_id: s_S6a4xDfApii643Q4gS3eph
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_S6a4xDfApii643Q4gS3eph
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王某（193614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193614&o=json
            external_identifier: CBDB:193614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:56.587Z
            metadata_json: null
        - id: cs_wq8eMce6iAvCs2yRx9A9Wa
          claim_id: c_xC8Bha25VrdHuZNBMrkD9N
          source_id: s_ygACJZVSZz5JfhGZSbgin6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ygACJZVSZz5JfhGZSbgin6
            source_type: api_record
            title: 维基数据：王某（Q45489166）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45489166
            external_identifier: Q45489166
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:56.263Z
            metadata_json: null
        - id: cs_K24w8x1mw6LnpJyTwAnJ4w
          claim_id: c_xC8Bha25VrdHuZNBMrkD9N
          source_id: s_q4z83WAiv6UUkux4mGMei8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_q4z83WAiv6UUkux4mGMei8
            source_type: api_record
            title: 维基数据：王某（Q45489101）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45489101
            external_identifier: Q45489101
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:06.357Z
            metadata_json: null
        - id: cs_qADA1JgPpYwVKsoPKMQqJQ
          claim_id: c_xC8Bha25VrdHuZNBMrkD9N
          source_id: s_sqLh97Jf1VaBhvX9xY1CKr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_sqLh97Jf1VaBhvX9xY1CKr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王某（193613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193613&o=json
            external_identifier: CBDB:193613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:06.516Z
            metadata_json: null
      object_person:
        id: p_3KsfA45kmBBF2n4LZomJB3
        status: active
        display_name: 王某
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某（卒于598年），南北朝人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 193614） | accepted |
| death.date | 598年 | accepted |
| name.primary | 王某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rVSU7SGR7ggL3Y16sLKSe2 | 王褒 | accepted |
| children | p_3KsfA45kmBBF2n4LZomJB3 | 王某 | accepted |

## 外部来源

- [维基数据：王褒（Q10416850）](https://www.wikidata.org/wiki/Q10416850)
- [维基数据：王某（Q45489101）](https://www.wikidata.org/wiki/Q45489101)
- [维基数据：王某（Q45489166）](https://www.wikidata.org/wiki/Q45489166)
- [CBDB 中国历代人物传记资料库：王某（193613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193613&o=json)
- [CBDB 中国历代人物传记资料库：王某（193614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193614&o=json)
- [CBDB 中国历代人物传记资料库：王裒（157867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157867&o=json)
