---
schema: wang-person/v1
id: p_p9ZgpaMWe2Spo55Z6Q5EfJ
status: active
merged_into: null
display_name: 王玄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PTtEP3LeLyU4qxDtUA4jbs
        subject_person_id: p_p9ZgpaMWe2Spo55Z6Q5EfJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5jP2HZrvaeikA7825GiWCR
          claim_id: c_PTtEP3LeLyU4qxDtUA4jbs
          source_id: s_fj9gGUQDx496dK3VboCtH4
          stance: supports
          locator: CBDB:297192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297192）
          source: &a1
            id: s_fj9gGUQDx496dK3VboCtH4
            source_type: api_record
            title: 中国历代人物传记资料库：王玄（CBDB 297192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297192&o=json
            external_identifier: CBDB:297192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KKmhYSdq5sRDuw39BNC5hw
        subject_person_id: p_p9ZgpaMWe2Spo55Z6Q5EfJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297192）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BnuFvy5Bv2JTrpHICsx6sr
          claim_id: c_KKmhYSdq5sRDuw39BNC5hw
          source_id: s_fj9gGUQDx496dK3VboCtH4
          stance: supports
          locator: CBDB:297192
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_8X2jwENaFRxfcsOlxXNCKB
        subject_person_id: p_p9ZgpaMWe2Spo55Z6Q5EfJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TADfeLDMj_8uS-fH1Ha-86
          claim_id: c_8X2jwENaFRxfcsOlxXNCKB
          source_id: s_fj9gGUQDx496dK3VboCtH4
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ejkhqRyi6zguVhFhs63Ax7
        status: active
        display_name: 王鏜
        merged_into_person_id: null
  other: []
---

# 王玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄 | accepted |
| bio.summary | 王玄，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297192） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ejkhqRyi6zguVhFhs63Ax7 | 王鏜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玄（CBDB 297192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297192&o=json)
