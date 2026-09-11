---
schema: wang-person/v1
id: p_qJM7h8dFu3we6W3CZKZQQr
status: active
merged_into: null
display_name: 王瀹
cbdb_id: 437903
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xdXZMbHqQfw5s9JnpWpp7x
        subject_person_id: p_qJM7h8dFu3we6W3CZKZQQr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀹
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rt6DmP11CGDPahJy1rfJg4
          claim_id: c_xdXZMbHqQfw5s9JnpWpp7x
          source_id: s_RZpxiNzearwSZRREZr91Tc
          stance: supports
          locator: Q65904230
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_RZpxiNzearwSZRREZr91Tc
            source_type: api_record
            title: 维基数据：王瀹（Q65904230）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65904230
            external_identifier: Q65904230
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_WdTLLE7Ns7m3Q5D2wrCpxs
          claim_id: c_xdXZMbHqQfw5s9JnpWpp7x
          source_id: s_EVEP16JcvNCcz13YM9cWLm
          stance: supports
          locator: CBDB:437903
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_EVEP16JcvNCcz13YM9cWLm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瀹（437903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437903&o=json
            external_identifier: CBDB:437903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J7r3cMgTRE2wH3ijPESBC6
        subject_person_id: p_qJM7h8dFu3we6W3CZKZQQr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀹，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 437903）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q3PmvxLAyYd5XvW8d4adYs
          claim_id: c_J7r3cMgTRE2wH3ijPESBC6
          source_id: s_RZpxiNzearwSZRREZr91Tc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_tCrxd8Qnx0oPyMLSuLLLPH
          claim_id: c_J7r3cMgTRE2wH3ijPESBC6
          source_id: s_EVEP16JcvNCcz13YM9cWLm
          stance: supports
          locator: CBDB:437903
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yofUyGuoo5HcYsA6yRwzd6
        subject_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qJM7h8dFu3we6W3CZKZQQr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QdB88t8B7cS7B4LPiEkVXN
          claim_id: c_yofUyGuoo5HcYsA6yRwzd6
          source_id: s_RZpxiNzearwSZRREZr91Tc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_VQoFj62rQCLhf8tuKgGqRh
          claim_id: c_yofUyGuoo5HcYsA6yRwzd6
          source_id: s_LPKamJ78vzJUu4765xEYKj
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_LPKamJ78vzJUu4765xEYKj
            source_type: api_record
            title: 维基数据：王稌（Q65903516）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903516
            external_identifier: Q65903516
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json: null
        - id: cs_KNTNsjwu2zav2EBVLG2p8n
          claim_id: c_yofUyGuoo5HcYsA6yRwzd6
          source_id: s_DifVCfdMFb5K6Mo67xCm1z
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_DifVCfdMFb5K6Mo67xCm1z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王稌（437664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437664&o=json
            external_identifier: CBDB:437664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:09.885Z
            metadata_json: null
      object_person:
        id: p_Djkmc4uicJBuT6DjuX7m7t
        status: active
        display_name: 王稌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瀹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀹 | accepted |
| bio.summary | 王瀹，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 437903） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Djkmc4uicJBuT6DjuX7m7t | 王稌 | accepted |

## 外部来源

- [维基数据：王稌（Q65903516）](https://www.wikidata.org/wiki/Q65903516)
- [维基数据：王瀹（Q65904230）](https://www.wikidata.org/wiki/Q65904230)
- [CBDB 中国历代人物传记资料库：王稌（437664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437664&o=json)
- [CBDB 中国历代人物传记资料库：王瀹（437903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437903&o=json)
