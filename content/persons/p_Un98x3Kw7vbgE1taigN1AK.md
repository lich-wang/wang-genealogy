---
schema: wang-person/v1
id: p_Un98x3Kw7vbgE1taigN1AK
status: active
merged_into: null
display_name: 王承裕
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LuMC1qvMxqJuVHX8ShW6SS
        subject_person_id: p_Un98x3Kw7vbgE1taigN1AK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承裕（1465年—1538年），字天宇，號平川，陝西西安府三原县人，官籍，明朝政治人物。弘治癸丑進士，官至南京戶部尚書。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5RVtMq-7fyXRMBFeweBHfR
          claim_id: c_LuMC1qvMxqJuVHX8ShW6SS
          source_id: s_Gju2jLDo5RtzUlCojJSOIL
          stance: supports
          locator: 导言
          quotation: 王承裕（1465年—1538年），字天宇，號平川，陝西西安府三原
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_Gju2jLDo5RtzUlCojJSOIL
            source_type: website
            title: 中文维基百科：王承裕
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF%E8%A3%95
            external_identifier: Q15941024
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_awuYekSgijP1wdPVikPppp
        subject_person_id: p_Un98x3Kw7vbgE1taigN1AK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1538年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1538-01-01
            latest: 1538-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hQ5yKbrJpPFkw64QLxCJGY
          claim_id: c_awuYekSgijP1wdPVikPppp
          source_id: s_5rkXUyJcjjf1SehC3fSzKE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5rkXUyJcjjf1SehC3fSzKE
            source_type: api_record
            title: 维基数据：王承裕（Q15941024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941024
            external_identifier: Q15941024
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:40.526Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e935kFRLbrrHUYwMWfCs86
        subject_person_id: p_Un98x3Kw7vbgE1taigN1AK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承裕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_K75E5sLG13PDH9E3kREoym
          claim_id: c_e935kFRLbrrHUYwMWfCs86
          source_id: s_5rkXUyJcjjf1SehC3fSzKE
          stance: supports
          locator: Q15941024
          quotation: null
          interpretation_note: null
          source:
            id: s_5rkXUyJcjjf1SehC3fSzKE
            source_type: api_record
            title: 维基数据：王承裕（Q15941024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941024
            external_identifier: Q15941024
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:40.526Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JMhR58WmvvRzmDcQF9L5nr
        subject_person_id: p_mLBwCR2GVoDmj97sEa96gF
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Un98x3Kw7vbgE1taigN1AK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F9MgK1ndM4k5Pg9VxnQhPP
          claim_id: c_JMhR58WmvvRzmDcQF9L5nr
          source_id: s_jtfaEuPXv7uhbwkyMkx8ng
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jtfaEuPXv7uhbwkyMkx8ng
            source_type: api_record
            title: 维基数据：王恕（Q45545428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545428
            external_identifier: Q45545428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_HeAGFAkh1WAZzHsUMVEcrK
          claim_id: c_JMhR58WmvvRzmDcQF9L5nr
          source_id: s_5rkXUyJcjjf1SehC3fSzKE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5rkXUyJcjjf1SehC3fSzKE
            source_type: api_record
            title: 维基数据：王承裕（Q15941024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941024
            external_identifier: Q15941024
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:40.526Z
            metadata_json: null
      object_person:
        id: p_mLBwCR2GVoDmj97sEa96gF
        status: active
        display_name: 王恕
        merged_into_person_id: null
    - claim:
        id: c_gJbdJximJp8mxi4rbDQfps
        subject_person_id: p_e622FY31yMzCRE9JqUsUSG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Un98x3Kw7vbgE1taigN1AK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7PAMU56BKRKxtiGo9JQRXL
          claim_id: c_gJbdJximJp8mxi4rbDQfps
          source_id: s_v4Fj3fqcKevK4gkXTvKE2U
          stance: supports
          locator: 亲属关系：五子
          quotation: null
          interpretation_note: CBDB 注明此条来源：王文恪公集:三十六卷
          source:
            id: s_v4Fj3fqcKevK4gkXTvKE2U
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王恕（62505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62505&o=json
            external_identifier: CBDB:62505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:16.484Z
            metadata_json: null
      object_person:
        id: p_e622FY31yMzCRE9JqUsUSG
        status: active
        display_name: 王恕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_n75KJTq6tPL21D75JARkcu
        subject_person_id: p_Qd35J9Vr9qLhrzFStDP4Qn
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Un98x3Kw7vbgE1taigN1AK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_78BaCnwBGzDSE6v9Cb7eVp
          claim_id: c_n75KJTq6tPL21D75JARkcu
          source_id: s_NFLp5kEQR1Npq5N2yFNW5D
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：弘治六年進士登科錄:一卷
          source:
            id: s_NFLp5kEQR1Npq5N2yFNW5D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承裕（67772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json
            external_identifier: CBDB:67772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:56.128Z
            metadata_json: null
        - id: cs_EvP8bK2tCB3wMGrDC3Q2es
          claim_id: c_n75KJTq6tPL21D75JARkcu
          source_id: s_VznKdhG3drqW4FvKg6oDCV
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_VznKdhG3drqW4FvKg6oDCV
            source_type: api_record
            title: 维基数据：张氏（Q65870769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65870769
            external_identifier: Q65870769
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
            metadata_json: null
        - id: cs_mon8Kf5qJC3E8NXbZU5wYV
          claim_id: c_n75KJTq6tPL21D75JARkcu
          source_id: s_5rkXUyJcjjf1SehC3fSzKE
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_5rkXUyJcjjf1SehC3fSzKE
            source_type: api_record
            title: 维基数据：王承裕（Q15941024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941024
            external_identifier: Q15941024
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:40.526Z
            metadata_json: null
      object_person:
        id: p_Qd35J9Vr9qLhrzFStDP4Qn
        status: active
        display_name: 张氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王承裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承裕（1465年—1538年），字天宇，號平川，陝西西安府三原县人，官籍，明朝政治人物。弘治癸丑進士，官至南京戶部尚書。 | accepted |
| death.date | 1538年 | accepted |
| name.primary | 王承裕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mLBwCR2GVoDmj97sEa96gF | 王恕 | accepted |
| parents | p_e622FY31yMzCRE9JqUsUSG | 王恕 | accepted |
| spouses | p_Qd35J9Vr9qLhrzFStDP4Qn | 张氏 | accepted |

## 外部来源

- [维基数据：王承裕（Q15941024）](https://www.wikidata.org/wiki/Q15941024)
- [维基数据：王恕（Q45545428）](https://www.wikidata.org/wiki/Q45545428)
- [维基数据：张氏（Q65870769）](https://www.wikidata.org/wiki/Q65870769)
- [中文维基百科：王承裕](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF%E8%A3%95)
- [CBDB 中国历代人物传记资料库：王承裕（67772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json)
- [CBDB 中国历代人物传记资料库：王恕（62505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62505&o=json)
