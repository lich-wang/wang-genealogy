---
schema: wang-person/v1
id: p_xkR2JVaQE9hnma1HpccwBd
status: active
merged_into: null
display_name: 王得君
cbdb_id: 1891
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K7gPukRe92BCekKsPfxxKc
        subject_person_id: p_xkR2JVaQE9hnma1HpccwBd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得君
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J3HftFkSY3TY2tA1pE3B6V
          claim_id: c_K7gPukRe92BCekKsPfxxKc
          source_id: s_LLGGHBZDikRCDoCwrZZbXN
          stance: supports
          locator: Q45359707
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_LLGGHBZDikRCDoCwrZZbXN
            source_type: api_record
            title: 维基数据：王得君（Q45359707）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359707
            external_identifier: Q45359707
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_kHXizJQs6fiaZXtSGDWder
          claim_id: c_K7gPukRe92BCekKsPfxxKc
          source_id: s_hYdSZyNoP7asvhZjKM9DQP
          stance: supports
          locator: CBDB:1891
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_hYdSZyNoP7asvhZjKM9DQP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王得君（1891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1891&o=json
            external_identifier: CBDB:1891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RyKd5i1Ghjr7pGtXgcVF27
        subject_person_id: p_xkR2JVaQE9hnma1HpccwBd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person CBDB = 1891
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aZYGBjQ2Pvaw4S5Jtz6UzA
          claim_id: c_RyKd5i1Ghjr7pGtXgcVF27
          source_id: s_LLGGHBZDikRCDoCwrZZbXN
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
        id: c_aesVL5Rnd2ddpmT1ENKbJp
        subject_person_id: p_LFjdt9p5AsmDgzGet1fXc3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xkR2JVaQE9hnma1HpccwBd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UEUPWgDYQSSSjL92Xm37Jm
          claim_id: c_aesVL5Rnd2ddpmT1ENKbJp
          source_id: s_T6H6sPc3RUeyvZvXaoJNdt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_T6H6sPc3RUeyvZvXaoJNdt
            source_type: api_record
            title: 维基数据：王广渊（Q45359566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359566
            external_identifier: Q45359566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:31.440Z
            metadata_json: null
        - id: cs_b2BtetDmsNFSesKf8PY8ar
          claim_id: c_aesVL5Rnd2ddpmT1ENKbJp
          source_id: s_LLGGHBZDikRCDoCwrZZbXN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_4qQE7gNibCuoqJJ6YEfLG8
          claim_id: c_aesVL5Rnd2ddpmT1ENKbJp
          source_id: s_QjoVfXquRF7d1NQKdvr5zA
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_QjoVfXquRF7d1NQKdvr5zA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王廣淵（1844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1844&o=json
            external_identifier: CBDB:1844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:31.622Z
            metadata_json: null
      object_person:
        id: p_LFjdt9p5AsmDgzGet1fXc3
        status: active
        display_name: 王广渊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王得君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得君 | accepted |
| bio.summary | Song dynasty person CBDB = 1891 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LFjdt9p5AsmDgzGet1fXc3 | 王广渊 | accepted |

## 外部来源

- [维基数据：王得君（Q45359707）](https://www.wikidata.org/wiki/Q45359707)
- [维基数据：王广渊（Q45359566）](https://www.wikidata.org/wiki/Q45359566)
- [CBDB 中国历代人物传记资料库：王得君（1891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1891&o=json)
- [CBDB 中国历代人物传记资料库：王廣淵（1844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1844&o=json)
