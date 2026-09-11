---
schema: wang-person/v1
id: p_G2nFDbvnbsRwbtBHUM7UBY
status: active
merged_into: null
display_name: 王永昌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ssZZDMNAqTy1H74GC8PQn8
        subject_person_id: p_G2nFDbvnbsRwbtBHUM7UBY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MyCuED3xMQxREDQSon8kKx
          claim_id: c_ssZZDMNAqTy1H74GC8PQn8
          source_id: s_5X9rvCY3C5oEeiEJxBUPxN
          stance: supports
          locator: CBDB:17242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17242）
          source: &a1
            id: s_5X9rvCY3C5oEeiEJxBUPxN
            source_type: api_record
            title: 中国历代人物传记资料库：王永昌（CBDB 17242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17242&o=json
            external_identifier: CBDB:17242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xynXDMDB9mhswwNA61LDyS
        subject_person_id: p_G2nFDbvnbsRwbtBHUM7UBY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永昌，宋人物。籍贯陽曲，入仕恩蔭、蔭補，曾任殿中省。（中国历代人物传记资料库 CBDB 17242）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VbLE-5QT3lgApfj7A5U8mC
          claim_id: c_xynXDMDB9mhswwNA61LDyS
          source_id: s_5X9rvCY3C5oEeiEJxBUPxN
          stance: supports
          locator: CBDB:17242
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3oOaVa-EBf6gaMYttbh0nf
        subject_person_id: p_g1Zwm5njGBgG9tiNz4CK8m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G2nFDbvnbsRwbtBHUM7UBY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_36Wb3W1PUbhY8hQNhMIMij
          claim_id: c_3oOaVa-EBf6gaMYttbh0nf
          source_id: s_5X9rvCY3C5oEeiEJxBUPxN
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1477：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_g1Zwm5njGBgG9tiNz4CK8m
        status: active
        display_name: 王全斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王永昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永昌 | accepted |
| bio.summary | 王永昌，宋人物。籍贯陽曲，入仕恩蔭、蔭補，曾任殿中省。（中国历代人物传记资料库 CBDB 17242） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g1Zwm5njGBgG9tiNz4CK8m | 王全斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永昌（CBDB 17242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17242&o=json)
