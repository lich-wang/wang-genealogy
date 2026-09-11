---
schema: wang-person/v1
id: p_bL6RtEarbpBgwtUf32Pksp
status: active
merged_into: null
display_name: 王家楨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q74iC9bYx62ypdPZu9icZw
        subject_person_id: p_bL6RtEarbpBgwtUf32Pksp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3xQDCyMB927MbBo93rn2fA
          claim_id: c_q74iC9bYx62ypdPZu9icZw
          source_id: s_Jb61znomWpBh1BCbUzoB6b
          stance: supports
          locator: CBDB:35031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35031）
          source: &a1
            id: s_Jb61znomWpBh1BCbUzoB6b
            source_type: api_record
            title: 中国历代人物传记资料库：王家楨（CBDB 35031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35031&o=json
            external_identifier: CBDB:35031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KM3xAtXTG5yTsisT36Tkak
        subject_person_id: p_bL6RtEarbpBgwtUf32Pksp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1644年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HQKJ3pCmFRag7pDgwjKBEP
          claim_id: c_KM3xAtXTG5yTsisT36Tkak
          source_id: s_Jb61znomWpBh1BCbUzoB6b
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CDm4RxmCqE1rnBQs2JDNJ8
        subject_person_id: p_bL6RtEarbpBgwtUf32Pksp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wwqQgkpEUehos72oJFFRR5
          claim_id: c_CDm4RxmCqE1rnBQs2JDNJ8
          source_id: s_Jb61znomWpBh1BCbUzoB6b
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OAgBPhC-b-sxW2nIpFvgdc
        subject_person_id: p_bL6RtEarbpBgwtUf32Pksp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5NfPimi3vZT5CJRvWzsC5Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gbi4uSzqzixfZSGXyerFog
          claim_id: c_OAgBPhC-b-sxW2nIpFvgdc
          source_id: s_E9tVULtwBFQqdk3WBHbfwp
          stance: supports
          locator: CBDB 双向互证（父 王家楨 ⇄ 子 王）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_E9tVULtwBFQqdk3WBHbfwp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王（35032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35032&o=json
            external_identifier: CBDB:35032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:39.120Z
            metadata_json: null
      object_person:
        id: p_5NfPimi3vZT5CJRvWzsC5Y
        status: active
        display_name: 王
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王家楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家楨 | accepted |
| death.date | 1644年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5NfPimi3vZT5CJRvWzsC5Y | 王 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家楨（CBDB 35031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35031&o=json)
- [CBDB 中国历代人物传记资料库：王（35032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35032&o=json)
