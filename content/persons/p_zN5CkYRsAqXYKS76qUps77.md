---
schema: wang-person/v1
id: p_zN5CkYRsAqXYKS76qUps77
status: active
merged_into: null
display_name: 王宗果
cbdb_id: 217868
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jsK5vvjHszz6XMw2y6L91F
        subject_person_id: p_zN5CkYRsAqXYKS76qUps77
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗果，明人物。萬曆五年進士，籍贯臨海，曾任王府典膳。（中国历代人物传记资料库 CBDB 217868）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_BL5B8ErzUybzCUScHpYWDJ
          claim_id: c_jsK5vvjHszz6XMw2y6L91F
          source_id: s_V4mjvnm9jPY7ciAUaiPPTh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_V4mjvnm9jPY7ciAUaiPPTh
            source_type: api_record
            title: 维基数据：王宗果（Q45614499）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614499
            external_identifier: Q45614499
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.983Z
            metadata_json: null
        - id: cs_SwyHpbveYtVTEauxjmPo6c
          claim_id: c_jsK5vvjHszz6XMw2y6L91F
          source_id: s_dfhF9ye4VCGanMLbAtkYJK
          stance: supports
          locator: CBDB:217868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dfhF9ye4VCGanMLbAtkYJK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗果（217868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217868&o=json
            external_identifier: CBDB:217868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:35.149Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yYUGayD8DhQXq4S8Aqw55Q
        subject_person_id: p_zN5CkYRsAqXYKS76qUps77
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗果
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CbqJWqTYjjZGQhbHSWELvE
          claim_id: c_yYUGayD8DhQXq4S8Aqw55Q
          source_id: s_dfhF9ye4VCGanMLbAtkYJK
          stance: supports
          locator: Q45614499
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Gv5qmeGKP22Bs4vXBJY8an
          claim_id: c_yYUGayD8DhQXq4S8Aqw55Q
          source_id: s_V4mjvnm9jPY7ciAUaiPPTh
          stance: supports
          locator: Q45614499
          quotation: null
          interpretation_note: null
          source:
            id: s_V4mjvnm9jPY7ciAUaiPPTh
            source_type: api_record
            title: 维基数据：王宗果（Q45614499）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614499
            external_identifier: Q45614499
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.983Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qEXwpa7cE9Mvzw64eSoNWu
        subject_person_id: p_tc8tLCyEu49sXcAYbw2GP6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zN5CkYRsAqXYKS76qUps77
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PdWKsiMrJ31x8MVgAN54SK
          claim_id: c_qEXwpa7cE9Mvzw64eSoNWu
          source_id: s_V4mjvnm9jPY7ciAUaiPPTh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_V4mjvnm9jPY7ciAUaiPPTh
            source_type: api_record
            title: 维基数据：王宗果（Q45614499）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614499
            external_identifier: Q45614499
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.983Z
            metadata_json: null
        - id: cs_joXzdtTNLDXUE9wZWJ2TMC
          claim_id: c_qEXwpa7cE9Mvzw64eSoNWu
          source_id: s_w14uGT4Ny4mX3owuAhJBBW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_w14uGT4Ny4mX3owuAhJBBW
            source_type: api_record
            title: 维基数据：王訚（Q45614438）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614438
            external_identifier: Q45614438
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
      object_person:
        id: p_tc8tLCyEu49sXcAYbw2GP6
        status: active
        display_name: 王訚
        merged_into_person_id: null
  children:
    - claim:
        id: c_u7DVp81f6maoFKKQgUxios
        subject_person_id: p_zN5CkYRsAqXYKS76qUps77
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ZHWKRzPsbezhFJuM1r6DbE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M9sR4fVGDG3nHED4oadDry
          claim_id: c_u7DVp81f6maoFKKQgUxios
          source_id: s_J42Tsy6ZSB9mSGJrACGUgt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_J42Tsy6ZSB9mSGJrACGUgt
            source_type: api_record
            title: 维基数据：王士性（Q15711200）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15711200
            external_identifier: Q15711200
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:23.438Z
            metadata_json: null
        - id: cs_k71TZkxJGCc549ajk8WR91
          claim_id: c_u7DVp81f6maoFKKQgUxios
          source_id: s_V4mjvnm9jPY7ciAUaiPPTh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_V4mjvnm9jPY7ciAUaiPPTh
            source_type: api_record
            title: 维基数据：王宗果（Q45614499）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614499
            external_identifier: Q45614499
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.983Z
            metadata_json: null
      object_person:
        id: p_ZHWKRzPsbezhFJuM1r6DbE
        status: active
        display_name: 王士性
        merged_into_person_id: null
    - claim:
        id: c_LiBwiD3Uc83gv8s5pZOEf0
        subject_person_id: p_zN5CkYRsAqXYKS76qUps77
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K23baGuNzCVmxSWXhhYJ4B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xq4BSZaTPGN0nXdUuTcYOQ
          claim_id: c_LiBwiD3Uc83gv8s5pZOEf0
          source_id: s_dfhF9ye4VCGanMLbAtkYJK
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_K23baGuNzCVmxSWXhhYJ4B
        status: active
        display_name: 王士性
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗果，明人物。萬曆五年進士，籍贯臨海，曾任王府典膳。（中国历代人物传记资料库 CBDB 217868） | accepted |
| name.primary | 王宗果 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tc8tLCyEu49sXcAYbw2GP6 | 王訚 | accepted |
| children | p_ZHWKRzPsbezhFJuM1r6DbE | 王士性 | accepted |
| children | p_K23baGuNzCVmxSWXhhYJ4B | 王士性 | accepted |

## 外部来源

- [维基数据：王士性（Q15711200）](https://www.wikidata.org/wiki/Q15711200)
- [维基数据：王訚（Q45614438）](https://www.wikidata.org/wiki/Q45614438)
- [维基数据：王宗果（Q45614499）](https://www.wikidata.org/wiki/Q45614499)
- [CBDB 中国历代人物传记资料库：王宗果（217868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217868&o=json)
