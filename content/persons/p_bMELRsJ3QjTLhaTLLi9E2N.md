---
schema: wang-person/v1
id: p_bMELRsJ3QjTLhaTLLi9E2N
status: active
merged_into: null
display_name: 李氏
cbdb_id: 135652
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_-bum2MxmP7yyH_pYTsvQLA
        subject_person_id: p_bMELRsJ3QjTLhaTLLi9E2N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，史料所见人物。本项目依据《李氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vWI4V9Q0kBySbOVvlbCQzT
          claim_id: c_-bum2MxmP7yyH_pYTsvQLA
          source_id: s_95bXKPpoB2a5jQjTK4kvvP
          stance: supports
          locator: Q65801416
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_95bXKPpoB2a5jQjTK4kvvP
            source_type: api_record
            title: 维基数据：李氏（Q65801416）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65801416
            external_identifier: Q65801416
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZEUaVgzaTbsDtNWpB9pCQK
        subject_person_id: p_bMELRsJ3QjTLhaTLLi9E2N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oTu6sh7ZXE3L64315xSoNo
          claim_id: c_ZEUaVgzaTbsDtNWpB9pCQK
          source_id: s_95bXKPpoB2a5jQjTK4kvvP
          stance: supports
          locator: Q65801416
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
        - id: cs_gqX4BGEAmvxRn7oP5zhxRN
          claim_id: c_ZEUaVgzaTbsDtNWpB9pCQK
          source_id: s_fdsV8tkVtKvNdGKmeGdswW
          stance: supports
          locator: CBDB:135652
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_fdsV8tkVtKvNdGKmeGdswW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（135652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135652&o=json
            external_identifier: CBDB:135652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nZu7PUgc8nTFWtKNBq51MZ
        subject_person_id: p_bMELRsJ3QjTLhaTLLi9E2N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dpxJ79yjeoZcbwCdkzQmv6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bXrAdQysj2C0TBdF9Oi92g
          claim_id: c_nZu7PUgc8nTFWtKNBq51MZ
          source_id: s_fdsV8tkVtKvNdGKmeGdswW
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3251：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_dpxJ79yjeoZcbwCdkzQmv6
        status: active
        display_name: 王珪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_42HjzJdcdWhiVfKre74hcj
        subject_person_id: p_bMELRsJ3QjTLhaTLLi9E2N
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HSq6viRBnzj6LqF76CNxvY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9eeueDRAk519LrWwPiG1CJ
          claim_id: c_42HjzJdcdWhiVfKre74hcj
          source_id: s_95bXKPpoB2a5jQjTK4kvvP
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_oxCMKoEa5ttJg9TwyFraVp
          claim_id: c_42HjzJdcdWhiVfKre74hcj
          source_id: s_5364Pc1QEFgx1FqUbtfHiC
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_5364Pc1QEFgx1FqUbtfHiC
            source_type: api_record
            title: 维基数据：王𫖮（Q28413506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q28413506
            external_identifier: Q28413506
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:08.871Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%A1%97
        - id: cs_8qNi8gEX7RVwEwft2zctZp
          claim_id: c_42HjzJdcdWhiVfKre74hcj
          source_id: s_GBLgewUNbb4a3CY2AFxH46
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_GBLgewUNbb4a3CY2AFxH46
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王顗（33012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33012&o=json
            external_identifier: CBDB:33012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:09.022Z
            metadata_json: null
      object_person:
        id: p_HSq6viRBnzj6LqF76CNxvY
        status: active
        display_name: 王𫖮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，史料所见人物。本项目依据《李氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dpxJ79yjeoZcbwCdkzQmv6 | 王珪 | accepted |
| spouses | p_HSq6viRBnzj6LqF76CNxvY | 王𫖮 | accepted |

## 外部来源

- [维基数据：李氏（Q65801416）](https://www.wikidata.org/wiki/Q65801416)
- [维基数据：王𫖮（Q28413506）](https://www.wikidata.org/wiki/Q28413506)
- [CBDB 中国历代人物传记资料库：李氏（135652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135652&o=json)
- [CBDB 中国历代人物传记资料库：王顗（33012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33012&o=json)
