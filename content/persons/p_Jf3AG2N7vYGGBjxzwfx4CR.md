---
schema: wang-person/v1
id: p_Jf3AG2N7vYGGBjxzwfx4CR
status: active
merged_into: null
display_name: 王珌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_prZnR9wL1d8Db9Xww93GKQ
        subject_person_id: p_Jf3AG2N7vYGGBjxzwfx4CR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BomPXwAdADDLL6X9jjDe6D
          claim_id: c_prZnR9wL1d8Db9Xww93GKQ
          source_id: s_wRFnMZrFNaAbXrXLDLeCsv
          stance: supports
          locator: Q45602523
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_wRFnMZrFNaAbXrXLDLeCsv
            source_type: api_record
            title: 维基数据：王珌（Q45602523）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45602523
            external_identifier: Q45602523
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_9xagZvHy6LTBxD6Nu1yeGC
          claim_id: c_prZnR9wL1d8Db9Xww93GKQ
          source_id: s_QVkPkA9qZa3Ag7HLx94SRg
          stance: supports
          locator: CBDB:164582
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_QVkPkA9qZa3Ag7HLx94SRg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珌（164582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164582&o=json
            external_identifier: CBDB:164582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gEaPKbZkWScBFsy2VA479N
        subject_person_id: p_Jf3AG2N7vYGGBjxzwfx4CR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: person, CBDB = 164582
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Tm6NfudAAxAKFkZ4X8tLP
          claim_id: c_gEaPKbZkWScBFsy2VA479N
          source_id: s_wRFnMZrFNaAbXrXLDLeCsv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NVKeAibwdHSEyEXZSj5tM6
        subject_person_id: p_HSq6viRBnzj6LqF76CNxvY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jf3AG2N7vYGGBjxzwfx4CR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fbQX11jHdsLtPSXEErLS8A
          claim_id: c_NVKeAibwdHSEyEXZSj5tM6
          source_id: s_5364Pc1QEFgx1FqUbtfHiC
          stance: supports
          locator: P40（子女）
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
        - id: cs_QvLLoJXeyq3S23TJLMQfzp
          claim_id: c_NVKeAibwdHSEyEXZSj5tM6
          source_id: s_wRFnMZrFNaAbXrXLDLeCsv
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_1L7aAnPP67fgWxSnZByF1v
          claim_id: c_NVKeAibwdHSEyEXZSj5tM6
          source_id: s_GBLgewUNbb4a3CY2AFxH46
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珌 | accepted |
| bio.summary | person, CBDB = 164582 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HSq6viRBnzj6LqF76CNxvY | 王𫖮 | accepted |

## 外部来源

- [维基数据：王珌（Q45602523）](https://www.wikidata.org/wiki/Q45602523)
- [维基数据：王𫖮（Q28413506）](https://www.wikidata.org/wiki/Q28413506)
- [CBDB 中国历代人物传记资料库：王珌（164582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164582&o=json)
- [CBDB 中国历代人物传记资料库：王顗（33012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33012&o=json)
