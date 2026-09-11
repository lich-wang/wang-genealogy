---
schema: wang-person/v1
id: p_gz7GQXBMKSZCnPJr5rqi7r
status: active
merged_into: null
display_name: 李塨
revision: 2
cbdb_id: 33498
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_byuxryUz40-awiNCNpBe3J
        subject_person_id: p_gz7GQXBMKSZCnPJr5rqi7r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李塨（1659—1733），清人物。籍贯蠡縣，身份为行醫、史學家，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 33498）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q_Kqc_gXk9uZjba_CB1mgh
          claim_id: c_byuxryUz40-awiNCNpBe3J
          source_id: s_N4pCtILVdfn2D3tmxaBbvR
          stance: supports
          locator: CBDB:33498
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N4pCtILVdfn2D3tmxaBbvR
            source_type: api_record
            title: 中国历代人物传记资料库：李塨（CBDB 33498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33498&o=json
            external_identifier: CBDB:33498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_I9HNjVS164PX3lQ8-T18JO
        subject_person_id: p_gz7GQXBMKSZCnPJr5rqi7r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李塨
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PSjf__l2cOwo9dX0WuBRZH
          claim_id: c_I9HNjVS164PX3lQ8-T18JO
          source_id: s_N4pCtILVdfn2D3tmxaBbvR
          stance: supports
          locator: CBDB:33498
          quotation: null
          interpretation_note: CBDB 明确记录的王鳳姑配偶
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
        id: c_beZbojbGPc0quk2cgSwC6a
        subject_person_id: p_3bMUb4yEGkZLn5QqmetS3F
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gz7GQXBMKSZCnPJr5rqi7r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_In8af0yB722Ms_X2KkFNVu
          claim_id: c_beZbojbGPc0quk2cgSwC6a
          source_id: s_N4pCtILVdfn2D3tmxaBbvR
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9180：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3bMUb4yEGkZLn5QqmetS3F
        status: active
        display_name: 王鳳姑
        merged_into_person_id: null
    - claim:
        id: c_r6ie_47kQgDvOrdJ_tBpv0
        subject_person_id: p_p2Vco3UuFzayHpCDZH7vRR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gz7GQXBMKSZCnPJr5rqi7r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0RVAe4y3W-SqMzMTDhCDnw
          claim_id: c_r6ie_47kQgDvOrdJ_tBpv0
          source_id: s_TTdGbJ5qpdF7fU2qPfqfNv
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9180：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TTdGbJ5qpdF7fU2qPfqfNv
            source_type: api_record
            title: 中国历代人物传记资料库：王至順（CBDB 522152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522152&o=json
            external_identifier: CBDB:522152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_p2Vco3UuFzayHpCDZH7vRR
        status: active
        display_name: 王至順
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李塨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李塨（1659—1733），清人物。籍贯蠡縣，身份为行醫、史學家，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 33498） | accepted |
| name.primary | 李塨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3bMUb4yEGkZLn5QqmetS3F | 王鳳姑 | accepted |
| spouses | p_p2Vco3UuFzayHpCDZH7vRR | 王至順 | accepted |

## 外部来源

- [中国历代人物传记资料库：李塨（CBDB 33498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33498&o=json)
- [中国历代人物传记资料库：王至順（CBDB 522152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522152&o=json)
