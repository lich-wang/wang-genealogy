---
schema: wang-person/v1
id: p_wHnyGphZwG2NFHycQnmcYd
status: active
merged_into: null
display_name: 王政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GbyFAqE3a4DWoHZtzEk9xq
        subject_person_id: p_wHnyGphZwG2NFHycQnmcYd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jMoeAHSdhjURbZhGUpSrRA
          claim_id: c_GbyFAqE3a4DWoHZtzEk9xq
          source_id: s_h62daQy4r4nGgedwAoukVP
          stance: supports
          locator: CBDB:192580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192580）
          source: &a1
            id: s_h62daQy4r4nGgedwAoukVP
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 192580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192580&o=json
            external_identifier: CBDB:192580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9itBKXTzdncbJMVka6bb9q
        subject_person_id: p_wHnyGphZwG2NFHycQnmcYd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 794年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XndzRs1hHpnTJzebXM5ntN
          claim_id: c_9itBKXTzdncbJMVka6bb9q
          source_id: s_h62daQy4r4nGgedwAoukVP
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
        id: c_PnSryvVLF7iLCPMnQV2BQx
        subject_person_id: p_wHnyGphZwG2NFHycQnmcYd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fN7gJTNpPff8y11Bsv6QS8
          claim_id: c_PnSryvVLF7iLCPMnQV2BQx
          source_id: s_h62daQy4r4nGgedwAoukVP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qH7Bi3thRDdWvWRPtjSwRu
        subject_person_id: p_4BBQzzVNJqj1Nf5oECPahN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wHnyGphZwG2NFHycQnmcYd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_orKPvXZKnrocKi9iKyFMBQ
          claim_id: c_qH7Bi3thRDdWvWRPtjSwRu
          source_id: s_snT685Q9rjzSHo8C5f6pNq
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_snT685Q9rjzSHo8C5f6pNq
            source_type: api_record
            title: 中国历代人物传记资料库：王鍔（CBDB 192581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192581&o=json
            external_identifier: CBDB:192581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4BBQzzVNJqj1Nf5oECPahN
        status: active
        display_name: 王鍔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| death.date | 794年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4BBQzzVNJqj1Nf5oECPahN | 王鍔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍔（CBDB 192581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192581&o=json)
- [中国历代人物传记资料库：王政（CBDB 192580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192580&o=json)
