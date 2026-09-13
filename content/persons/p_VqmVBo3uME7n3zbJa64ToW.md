---
schema: wang-person/v1
id: p_VqmVBo3uME7n3zbJa64ToW
status: active
merged_into: null
display_name: 萧纲
cbdb_id: 33251
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_umyMjeiyxWuLHf3zQq9szN
        subject_person_id: p_VqmVBo3uME7n3zbJa64ToW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 萧纲（503—551），南梁人物。籍贯丹徒，入仕繼位。（中国历代人物传记资料库 CBDB 33251）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_aQmmZJip_u5jarNx8-Pug-
          claim_id: c_umyMjeiyxWuLHf3zQq9szN
          source_id: s_fYTEWByYHfTMBLVTCFFFMj
          stance: supports
          locator: CBDB:33251
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fYTEWByYHfTMBLVTCFFFMj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：蕭綱（33251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33251&o=json
            external_identifier: CBDB:33251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:39:57.014Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S9DyC9B8ANosqJwTMXHi9i
        subject_person_id: p_VqmVBo3uME7n3zbJa64ToW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 萧纲
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QX5Z7vEWAEDhZBr46HjmdK
          claim_id: c_S9DyC9B8ANosqJwTMXHi9i
          source_id: s_3H6y8sQcxUsP9WeT25e3a4
          stance: supports
          locator: Q1140994
          quotation: null
          interpretation_note: null
          source:
            id: s_3H6y8sQcxUsP9WeT25e3a4
            source_type: api_record
            title: 维基数据：萧纲（Q1140994）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1140994
            external_identifier: Q1140994
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:56.865Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%A2%81%E7%AE%80%E6%96%87%E5%B8%9D
        - id: cs_S3dSqwmzwVSQMLP9WRAjpT
          claim_id: c_S9DyC9B8ANosqJwTMXHi9i
          source_id: s_fYTEWByYHfTMBLVTCFFFMj
          stance: supports
          locator: Q1140994
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iGCiLr8CZAMCzcPJ1bAwTt
        subject_person_id: p_DhUjuywJqHsjzPd3dD2gmf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VqmVBo3uME7n3zbJa64ToW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Ymru8wj16QqByRgPv18vGz
          claim_id: c_iGCiLr8CZAMCzcPJ1bAwTt
          source_id: s_i4zob1xyPNzLCHKw8ZxR9a
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_i4zob1xyPNzLCHKw8ZxR9a
            source_type: api_record
            title: 维基数据：王靈賓（Q8257718）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8257718
            external_identifier: Q8257718
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:30.337Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9D%88%E8%B3%93
        - id: cs_GMyrFYoY8DcZWS86hSbY5V
          claim_id: c_iGCiLr8CZAMCzcPJ1bAwTt
          source_id: s_3H6y8sQcxUsP9WeT25e3a4
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_3H6y8sQcxUsP9WeT25e3a4
            source_type: api_record
            title: 维基数据：萧纲（Q1140994）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1140994
            external_identifier: Q1140994
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:56.865Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%A2%81%E7%AE%80%E6%96%87%E5%B8%9D
        - id: cs_DWBs2u2v4qeL89wUJLvds5
          claim_id: c_iGCiLr8CZAMCzcPJ1bAwTt
          source_id: s_8ZwZMVbrz29JNoWXqboFQS
          stance: supports
          locator: 条文：条文识读（妃）
          quotation: 王灵宾：蕭綱當太子時的太子妃
          interpretation_note: null
          source:
            id: s_8ZwZMVbrz29JNoWXqboFQS
            source_type: website
            title: 中文维基百科：梁简文帝
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%A2%81%E7%AE%80%E6%96%87%E5%B8%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:27.491Z
            metadata_json: null
        - id: cs_gxDUTn6doC866RYP94fL5L
          claim_id: c_iGCiLr8CZAMCzcPJ1bAwTt
          source_id: s_1V595r477ySAj5GRMJ4Nqj
          stance: supports
          locator: 条文：条文识读（妃）
          quotation: 王灵宾：蕭綱當太子時的太子妃
          interpretation_note: null
          source:
            id: s_1V595r477ySAj5GRMJ4Nqj
            source_type: website
            title: 中文维基百科：梁简文帝
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%A2%81%E7%AE%80%E6%96%87%E5%B8%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:57.921Z
            metadata_json: null
        - id: cs_zgv9N2saX7VekqQU5o88jZ
          claim_id: c_iGCiLr8CZAMCzcPJ1bAwTt
          source_id: s_MV8zbyZAZx4FEXkjWLU8Ei
          stance: supports
          locator: 条文：条文识读（妃）
          quotation: 王灵宾：蕭綱當太子時的太子妃
          interpretation_note: null
          source:
            id: s_MV8zbyZAZx4FEXkjWLU8Ei
            source_type: website
            title: 中文维基百科：梁简文帝
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E6%A2%81%E7%AE%80%E6%96%87%E5%B8%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:59.343Z
            metadata_json: null
        - id: cs_ipvM1adQgYun6p9QJqN8fs
          claim_id: c_iGCiLr8CZAMCzcPJ1bAwTt
          source_id: s_mWynNs2CFFvmoAA7hEwaH9
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 為梁简文帝萧纲的正妻。
          interpretation_note: null
          source:
            id: s_mWynNs2CFFvmoAA7hEwaH9
            source_type: website
            title: 中文维基百科：王靈賓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9D%88%E8%B3%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:20.521Z
            metadata_json: null
        - id: cs_K9K6NZyduKps2JDUzeSLEj
          claim_id: c_iGCiLr8CZAMCzcPJ1bAwTt
          source_id: s_4xjA6GLrtNLzQ2KrAAUfRG
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 天监十一年（512年），嫁给萧纲，封為晋安王妃。
          interpretation_note: null
          source:
            id: s_4xjA6GLrtNLzQ2KrAAUfRG
            source_type: website
            title: 中文维基百科：王靈賓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9D%88%E8%B3%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:04.765Z
            metadata_json: null
      object_person:
        id: p_DhUjuywJqHsjzPd3dD2gmf
        status: active
        display_name: 王靈賓
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 萧纲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 萧纲（503—551），南梁人物。籍贯丹徒，入仕繼位。（中国历代人物传记资料库 CBDB 33251） | accepted |
| name.primary | 萧纲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DhUjuywJqHsjzPd3dD2gmf | 王靈賓 | accepted |

## 外部来源

- [维基数据：王靈賓（Q8257718）](https://www.wikidata.org/wiki/Q8257718)
- [维基数据：萧纲（Q1140994）](https://www.wikidata.org/wiki/Q1140994)
- [中文维基百科：梁简文帝](https://zh.wikipedia.org/wiki/%E6%A2%81%E7%AE%80%E6%96%87%E5%B8%9D)
- [中文维基百科：王靈賓](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9D%88%E8%B3%93)
- [CBDB 中国历代人物传记资料库：蕭綱（33251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33251&o=json)
