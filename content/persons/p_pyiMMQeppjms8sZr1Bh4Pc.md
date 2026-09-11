---
schema: wang-person/v1
id: p_pyiMMQeppjms8sZr1Bh4Pc
status: active
merged_into: null
display_name: 王應麟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WC4UN5LZ4JT2rjSyiuJegq
        subject_person_id: p_pyiMMQeppjms8sZr1Bh4Pc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2aGrinZiYcjSpCEZMW6v2C
          claim_id: c_WC4UN5LZ4JT2rjSyiuJegq
          source_id: s_uY4yrHNDmKu8LRV9wWFXqZ
          stance: supports
          locator: CBDB:19880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19880）
          source: &a1
            id: s_uY4yrHNDmKu8LRV9wWFXqZ
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 19880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19880&o=json
            external_identifier: CBDB:19880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZS1KgZwBkED9HLyUYyizWK
        subject_person_id: p_pyiMMQeppjms8sZr1Bh4Pc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1223年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eQi15196bPTe9UAmNbVvaY
          claim_id: c_ZS1KgZwBkED9HLyUYyizWK
          source_id: s_uY4yrHNDmKu8LRV9wWFXqZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WGgsrE3GVUe2VNd9cTS339
        subject_person_id: p_pyiMMQeppjms8sZr1Bh4Pc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1296年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RJ38G6cQznCntZEBZgR6Bx
          claim_id: c_WGgsrE3GVUe2VNd9cTS339
          source_id: s_uY4yrHNDmKu8LRV9wWFXqZ
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
        id: c_aLGVNFdnebXBQMiv7Qxgk2
        subject_person_id: p_pyiMMQeppjms8sZr1Bh4Pc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麟（1223年—1296年），宋人物。籍贯鄞縣，身份为經學家、經學家—尚書，入仕進士，曾任騎都尉、殿中省尚輦奉御、太史局天文官。（中国历代人物传记资料库 CBDB 19880）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J0vgkBmzqvHP3IwxEXlG5c
          claim_id: c_aLGVNFdnebXBQMiv7Qxgk2
          source_id: s_uY4yrHNDmKu8LRV9wWFXqZ
          stance: supports
          locator: CBDB:19880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mx_L2N6MfJp1sbR4blS8D5
        subject_person_id: p_UKZ9JENMUQXopMywb8jsK4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pyiMMQeppjms8sZr1Bh4Pc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_57pTXqfVIc1z29EJwS7YQC
          claim_id: c_mx_L2N6MfJp1sbR4blS8D5
          source_id: s_uY4yrHNDmKu8LRV9wWFXqZ
          stance: supports
          locator: CBDB 双向互证（父 王撝 ⇄ 子 王應麟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UKZ9JENMUQXopMywb8jsK4
        status: active
        display_name: 王撝
        merged_into_person_id: null
  children:
    - claim:
        id: c_7AWt6wykD1bqvNAQrlAJ71
        subject_person_id: p_pyiMMQeppjms8sZr1Bh4Pc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t4oJJoq5VUoSCrFbsBSSMm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hkvbrqVNca-PudHfOa3uR6
          claim_id: c_7AWt6wykD1bqvNAQrlAJ71
          source_id: s_uY4yrHNDmKu8LRV9wWFXqZ
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1738：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t4oJJoq5VUoSCrFbsBSSMm
        status: active
        display_name: 王昌世
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應麟 | accepted |
| birth.date | 1223年 | accepted |
| death.date | 1296年 | accepted |
| bio.summary | 王應麟（1223年—1296年），宋人物。籍贯鄞縣，身份为經學家、經學家—尚書，入仕進士，曾任騎都尉、殿中省尚輦奉御、太史局天文官。（中国历代人物传记资料库 CBDB 19880） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UKZ9JENMUQXopMywb8jsK4 | 王撝 | accepted |
| children | p_t4oJJoq5VUoSCrFbsBSSMm | 王昌世 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應麟（CBDB 19880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19880&o=json)
