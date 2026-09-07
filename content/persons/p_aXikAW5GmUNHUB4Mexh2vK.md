---
schema: wang-person/v1
id: p_aXikAW5GmUNHUB4Mexh2vK
status: active
merged_into: null
display_name: 王龙溪
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a_VKjYiktn5VSQ59gEKUr5
        subject_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龙溪（1498年—1583年），史料所见人物。本项目依据《王龙溪》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_LwfjtfkarsUbv1sVvM_9TC
          claim_id: c_a_VKjYiktn5VSQ59gEKUr5
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: Q11573179
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_uzM4rHi8qUhyHDCqSDb8qM
            source_type: api_record
            title: 维基数据：王龙溪（Q11573179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573179
            external_identifier: Q11573179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:20.610Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BJWEr1GJVZ6DzLU5tqJBEq
        subject_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1498年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1498-01-01
            latest: 1498-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_makrMnkq5XwAZMXx6FxGwz
          claim_id: c_BJWEr1GJVZ6DzLU5tqJBEq
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uzM4rHi8qUhyHDCqSDb8qM
            source_type: api_record
            title: 维基数据：王龙溪（Q11573179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573179
            external_identifier: Q11573179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:20.610Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KjuCcRyq698Dymnx9PUyeD
        subject_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1583年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1583-01-01
            latest: 1583-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bwx7EH3qawFHytq6KukNtL
          claim_id: c_KjuCcRyq698Dymnx9PUyeD
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uzM4rHi8qUhyHDCqSDb8qM
            source_type: api_record
            title: 维基数据：王龙溪（Q11573179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573179
            external_identifier: Q11573179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:20.610Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3HDwu9nkqi5WALyreJthGx
        subject_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龙溪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uHZDJVnAwKzXdUZrzwbEou
          claim_id: c_3HDwu9nkqi5WALyreJthGx
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: Q11573179
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HtZhsrYQ7UuPb6GcHjBDGM
        subject_person_id: p_38MrYsNYkPoBeMisQP7Sof
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3SorJkuCd5yFdDfsFvFstr
          claim_id: c_HtZhsrYQ7UuPb6GcHjBDGM
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uzM4rHi8qUhyHDCqSDb8qM
            source_type: api_record
            title: 维基数据：王龙溪（Q11573179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573179
            external_identifier: Q11573179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:20.610Z
            metadata_json: null
        - id: cs_yNAiFNAHFbw7UxXL5GyoUj
          claim_id: c_HtZhsrYQ7UuPb6GcHjBDGM
          source_id: s_FdcsjYhgoT5aEMKGbVeF8a
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FdcsjYhgoT5aEMKGbVeF8a
            source_type: api_record
            title: 维基数据：王经（Q45553378）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45553378
            external_identifier: Q45553378
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:13.205Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B6%93_(%E5%BC%98%E6%B2%BB%E9%80%B2%E5%A3%AB)
      object_person:
        id: p_38MrYsNYkPoBeMisQP7Sof
        status: active
        display_name: 王经
        merged_into_person_id: null
  children:
    - claim:
        id: c_iuyWsq1Q1QjTTmpnk2SHM1
        subject_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_desA1uacXT6D2CosVe2Mmy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1jc3GS45FwmfGR4W1rkrTx
          claim_id: c_iuyWsq1Q1QjTTmpnk2SHM1
          source_id: s_Nb9Lc4JDAQsnVKF5Z8dNZm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Nb9Lc4JDAQsnVKF5Z8dNZm
            source_type: api_record
            title: 维基数据：王应吉（Q45685847）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685847
            external_identifier: Q45685847
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:15.427Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%87%89%E5%90%89_(%E8%90%AC%E6%9B%86%E9%80%B2%E5%A3%AB)
        - id: cs_3EpNaKnSG13w3KKGfQDpkY
          claim_id: c_iuyWsq1Q1QjTTmpnk2SHM1
          source_id: s_2AbfFEGVf6njE9MhrfSvXE
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖十一年進士登科錄:一卷
          source:
            id: s_2AbfFEGVf6njE9MhrfSvXE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王畿（126814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json
            external_identifier: CBDB:126814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:50.309Z
            metadata_json: null
        - id: cs_i5MoEn57zu6FKP2Qh7V7Z9
          claim_id: c_iuyWsq1Q1QjTTmpnk2SHM1
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uzM4rHi8qUhyHDCqSDb8qM
            source_type: api_record
            title: 维基数据：王龙溪（Q11573179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573179
            external_identifier: Q11573179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:20.610Z
            metadata_json: null
      object_person:
        id: p_desA1uacXT6D2CosVe2Mmy
        status: active
        display_name: 王应吉
        merged_into_person_id: null
    - claim:
        id: c_qsu5DQ82CjMUb18HK8kNu9
        subject_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_D3uVxqQFBH491G6DL79z4g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FFGebPmUTYJPTnaZxBvTEb
          claim_id: c_qsu5DQ82CjMUb18HK8kNu9
          source_id: s_2AbfFEGVf6njE9MhrfSvXE
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖十一年進士登科錄:一卷
          source:
            id: s_2AbfFEGVf6njE9MhrfSvXE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王畿（126814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json
            external_identifier: CBDB:126814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:50.309Z
            metadata_json: null
        - id: cs_Lhk7VM21u66qLff8q1FWDc
          claim_id: c_qsu5DQ82CjMUb18HK8kNu9
          source_id: s_91xFukRX26asLRNMy3yByp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_91xFukRX26asLRNMy3yByp
            source_type: api_record
            title: 维基数据：王应桢（Q45510958）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45510958
            external_identifier: Q45510958
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:15.427Z
            metadata_json: null
        - id: cs_zREMPKg2wZKW1HQNsD9U71
          claim_id: c_qsu5DQ82CjMUb18HK8kNu9
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uzM4rHi8qUhyHDCqSDb8qM
            source_type: api_record
            title: 维基数据：王龙溪（Q11573179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573179
            external_identifier: Q11573179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:20.610Z
            metadata_json: null
      object_person:
        id: p_D3uVxqQFBH491G6DL79z4g
        status: active
        display_name: 王应桢
        merged_into_person_id: null
    - claim:
        id: c_LDXA3jyUwnA1aAExuBiDw2
        subject_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_qYbHrFaVm7aZKdVMAZgyL1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gmurp6sFXHEJmK5Gp7C8UW
          claim_id: c_LDXA3jyUwnA1aAExuBiDw2
          source_id: s_ecwrmMvoLwB9nwq7sDNaHG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ecwrmMvoLwB9nwq7sDNaHG
            source_type: api_record
            title: 维基数据：王应斌（Q45511084）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45511084
            external_identifier: Q45511084
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
        - id: cs_nZxGPAmMcEQjLduQrPBBro
          claim_id: c_LDXA3jyUwnA1aAExuBiDw2
          source_id: s_2AbfFEGVf6njE9MhrfSvXE
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖十一年進士登科錄:一卷
          source:
            id: s_2AbfFEGVf6njE9MhrfSvXE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王畿（126814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json
            external_identifier: CBDB:126814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:50.309Z
            metadata_json: null
        - id: cs_qb7BuJrQaKLQybF8uBHHrd
          claim_id: c_LDXA3jyUwnA1aAExuBiDw2
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uzM4rHi8qUhyHDCqSDb8qM
            source_type: api_record
            title: 维基数据：王龙溪（Q11573179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573179
            external_identifier: Q11573179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:20.610Z
            metadata_json: null
      object_person:
        id: p_qYbHrFaVm7aZKdVMAZgyL1
        status: active
        display_name: 王应斌
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_nVNXwWvm9Z39pzXbJMYHTg
        subject_person_id: p_GwYZgMHCT7QS7yjR4GUr42
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ju6ncH7kWpfT9ucbjypzLV
          claim_id: c_nVNXwWvm9Z39pzXbJMYHTg
          source_id: s_2AbfFEGVf6njE9MhrfSvXE
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖十一年進士登科錄:一卷
          source:
            id: s_2AbfFEGVf6njE9MhrfSvXE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王畿（126814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json
            external_identifier: CBDB:126814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:50.309Z
            metadata_json: null
        - id: cs_ZD6ER2FTxM9hA1kAp6pXY5
          claim_id: c_nVNXwWvm9Z39pzXbJMYHTg
          source_id: s_uzM4rHi8qUhyHDCqSDb8qM
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_uzM4rHi8qUhyHDCqSDb8qM
            source_type: api_record
            title: 维基数据：王龙溪（Q11573179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573179
            external_identifier: Q11573179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:20.610Z
            metadata_json: null
        - id: cs_ciHmg8692qMtr2HB142YR9
          claim_id: c_nVNXwWvm9Z39pzXbJMYHTg
          source_id: s_rBgrT47bTAon6yPEJoEAFs
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_rBgrT47bTAon6yPEJoEAFs
            source_type: api_record
            title: 维基数据：张氏（Q65818542）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65818542
            external_identifier: Q65818542
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json: null
      object_person:
        id: p_GwYZgMHCT7QS7yjR4GUr42
        status: active
        display_name: 张氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王龙溪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王龙溪（1498年—1583年），史料所见人物。本项目依据《王龙溪》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1498年 | accepted |
| death.date | 1583年 | accepted |
| name.primary | 王龙溪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |
| children | p_desA1uacXT6D2CosVe2Mmy | 王应吉 | accepted |
| children | p_D3uVxqQFBH491G6DL79z4g | 王应桢 | accepted |
| children | p_qYbHrFaVm7aZKdVMAZgyL1 | 王应斌 | accepted |
| spouses | p_GwYZgMHCT7QS7yjR4GUr42 | 张氏 | accepted |

## 外部来源

- [维基数据：王经（Q45553378）](https://www.wikidata.org/wiki/Q45553378)
- [维基数据：王龙溪（Q11573179）](https://www.wikidata.org/wiki/Q11573179)
- [维基数据：王应斌（Q45511084）](https://www.wikidata.org/wiki/Q45511084)
- [维基数据：王应吉（Q45685847）](https://www.wikidata.org/wiki/Q45685847)
- [维基数据：王应桢（Q45510958）](https://www.wikidata.org/wiki/Q45510958)
- [维基数据：张氏（Q65818542）](https://www.wikidata.org/wiki/Q65818542)
- [CBDB 中国历代人物传记资料库：王畿（126814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126814&o=json)
