---
schema: wang-person/v1
id: p_kSaLSFJv26CRusQkp6QMsj
status: active
merged_into: null
display_name: 王恂
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zI1fxeaKgimKpdzbhZBACS
        subject_person_id: p_kSaLSFJv26CRusQkp6QMsj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂（1235年—1281年），字敬甫，祖籍中山唐县，元朝数学家。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YL5P_yNXuC6h6_WeBDUhmw
          claim_id: c_zI1fxeaKgimKpdzbhZBACS
          source_id: s_ymHzm_5l1uABFdZVH8gOo6
          stance: supports
          locator: 导言
          quotation: 王恂（1235年—1281年），字敬甫，祖籍中山唐县，元朝数学家
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_ymHzm_5l1uABFdZVH8gOo6
            source_type: website
            title: 中文维基百科：王恂 (元朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%82_(%E5%85%83%E6%9C%9D)
            external_identifier: Q11573072
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xt68hkpdb9XyoKhkXyPinY
        subject_person_id: p_kSaLSFJv26CRusQkp6QMsj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1235年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1235-01-01
            latest: 1235-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qbxGbB9RyegyinwLvJVu5W
          claim_id: c_xt68hkpdb9XyoKhkXyPinY
          source_id: s_5JsKoH93gordmDjAEdt3gr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5JsKoH93gordmDjAEdt3gr
            source_type: api_record
            title: 维基数据：王恂（Q11573072）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573072
            external_identifier: Q11573072
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:14.157Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wMk4GAFRKocpe5TY8hJWxA
        subject_person_id: p_kSaLSFJv26CRusQkp6QMsj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1281年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1281-01-01
            latest: 1281-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X6jndmdp1G4i3sSqs2aURE
          claim_id: c_wMk4GAFRKocpe5TY8hJWxA
          source_id: s_5JsKoH93gordmDjAEdt3gr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5JsKoH93gordmDjAEdt3gr
            source_type: api_record
            title: 维基数据：王恂（Q11573072）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573072
            external_identifier: Q11573072
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:14.157Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2RwXhmxCvE6ACMcEJYQR2v
        subject_person_id: p_kSaLSFJv26CRusQkp6QMsj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V3ZDjynipFqLAiFCzhs72w
          claim_id: c_2RwXhmxCvE6ACMcEJYQR2v
          source_id: s_5JsKoH93gordmDjAEdt3gr
          stance: supports
          locator: Q11573072
          quotation: null
          interpretation_note: null
          source:
            id: s_5JsKoH93gordmDjAEdt3gr
            source_type: api_record
            title: 维基数据：王恂（Q11573072）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573072
            external_identifier: Q11573072
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:14.157Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Bkr3e2gEzXD2KK7SuDN2Dc
        subject_person_id: p_Ko86R3TKut3FD1aGj75nhU
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_kSaLSFJv26CRusQkp6QMsj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dV4Vqi2t6guPhLKjd7UeQP
          claim_id: c_Bkr3e2gEzXD2KK7SuDN2Dc
          source_id: s_5JsKoH93gordmDjAEdt3gr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5JsKoH93gordmDjAEdt3gr
            source_type: api_record
            title: 维基数据：王恂（Q11573072）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573072
            external_identifier: Q11573072
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:14.157Z
            metadata_json: null
        - id: cs_gX5LuDE1Zi711dSunYg4v6
          claim_id: c_Bkr3e2gEzXD2KK7SuDN2Dc
          source_id: s_JCG85CP74FRaCDN1EnVFGE
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JCG85CP74FRaCDN1EnVFGE
            source_type: api_record
            title: 维基数据：王良（Q45649173）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45649173
            external_identifier: Q45649173
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:13.205Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%89%AF_(%E5%85%83%E6%9C%9D)
      object_person:
        id: p_Ko86R3TKut3FD1aGj75nhU
        status: active
        display_name: 王良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恂（1235年—1281年），字敬甫，祖籍中山唐县，元朝数学家。 | accepted |
| birth.date | 1235年 | accepted |
| death.date | 1281年 | accepted |
| name.primary | 王恂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ko86R3TKut3FD1aGj75nhU | 王良 | accepted |

## 外部来源

- [维基数据：王良（Q45649173）](https://www.wikidata.org/wiki/Q45649173)
- [维基数据：王恂（Q11573072）](https://www.wikidata.org/wiki/Q11573072)
- [中文维基百科：王恂 (元朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%82_(%E5%85%83%E6%9C%9D))
