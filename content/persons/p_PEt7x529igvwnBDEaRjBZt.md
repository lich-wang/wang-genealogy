---
schema: wang-person/v1
id: p_PEt7x529igvwnBDEaRjBZt
status: active
merged_into: null
display_name: 王玘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tmPBtc16iJVsLBy4GsHMSK
        subject_person_id: p_PEt7x529igvwnBDEaRjBZt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xwu5ejEABuMGHPMF6qDHEF
          claim_id: c_tmPBtc16iJVsLBy4GsHMSK
          source_id: s_v3VAH59R5prFHTrBaLk33k
          stance: supports
          locator: CBDB:248664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248664）
          source: &a1
            id: s_v3VAH59R5prFHTrBaLk33k
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 248664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248664&o=json
            external_identifier: CBDB:248664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_goXYYMokABH54ZBBt7DDhh
        subject_person_id: p_PEt7x529igvwnBDEaRjBZt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘，明人物。成化十一年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 248664）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jr7DA7-j084G7tgDmxej6Q
          claim_id: c_goXYYMokABH54ZBBt7DDhh
          source_id: s_v3VAH59R5prFHTrBaLk33k
          stance: supports
          locator: CBDB:248664
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Wze8afH02p_mNB6gt7wRgE
        subject_person_id: p_PEt7x529igvwnBDEaRjBZt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xTwQsV9XKSmsGQePeW7Ut1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gRKJ1bH5gakDP8eh2RHm_T
          claim_id: c_Wze8afH02p_mNB6gt7wRgE
          source_id: s_v3VAH59R5prFHTrBaLk33k
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xTwQsV9XKSmsGQePeW7Ut1
        status: active
        display_name: 王懋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| bio.summary | 王玘，明人物。成化十一年進士，籍贯沂州。（中国历代人物传记资料库 CBDB 248664） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xTwQsV9XKSmsGQePeW7Ut1 | 王懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玘（CBDB 248664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248664&o=json)
