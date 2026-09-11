---
schema: wang-person/v1
id: p_XG6K9t9wK6K8A9gnb8zgyk
status: active
merged_into: null
display_name: 張萬策
revision: 1
cbdb_id: 69790
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ixClrZbGmATXc97rzbRd-Z
        subject_person_id: p_XG6K9t9wK6K8A9gnb8zgyk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張萬策
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z4mNSRFxly8rkYgs65BgJy
          claim_id: c_ixClrZbGmATXc97rzbRd-Z
          source_id: s_bAyGZvtmUqZX7GYdR2FwXB
          stance: supports
          locator: CBDB:69790
          quotation: null
          interpretation_note: CBDB 明确记录的王演之配偶
          source: &a1
            id: s_bAyGZvtmUqZX7GYdR2FwXB
            source_type: api_record
            title: 中国历代人物传记资料库：張萬策（CBDB 69790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69790&o=json
            external_identifier: CBDB:69790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_-lSLsoeFyBj2agNTFYEU7x
        subject_person_id: p_KoNAR72gTJQfz6MsFMPqCS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XG6K9t9wK6K8A9gnb8zgyk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1IRTzdHDvn9qpOi_jLzPc7
          claim_id: c_-lSLsoeFyBj2agNTFYEU7x
          source_id: s_bAyGZvtmUqZX7GYdR2FwXB
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #704, HuWenKai #247：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KoNAR72gTJQfz6MsFMPqCS
        status: active
        display_name: 王演之
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張萬策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張萬策 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KoNAR72gTJQfz6MsFMPqCS | 王演之 | accepted |

## 外部来源

- [中国历代人物传记资料库：張萬策（CBDB 69790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69790&o=json)
