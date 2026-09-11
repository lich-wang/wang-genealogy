---
schema: wang-person/v1
id: p_ay7ZWq8iTSKoexQkJpXoz8
status: active
merged_into: null
display_name: 王槐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G37sQL889sE9wFbr5bSFqT
        subject_person_id: p_ay7ZWq8iTSKoexQkJpXoz8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bf9KRWZMSKPSt52nTmV83s
          claim_id: c_G37sQL889sE9wFbr5bSFqT
          source_id: s_M8LipiEiJ3iLWxCDWjc4qy
          stance: supports
          locator: CBDB:331798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331798）
          source: &a1
            id: s_M8LipiEiJ3iLWxCDWjc4qy
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 331798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331798&o=json
            external_identifier: CBDB:331798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eq1ej224eBDAidvvL1ihQv
        subject_person_id: p_ay7ZWq8iTSKoexQkJpXoz8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331798）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yRkKT4y4sIQtLcxYwwgc7-
          claim_id: c_eq1ej224eBDAidvvL1ihQv
          source_id: s_M8LipiEiJ3iLWxCDWjc4qy
          stance: supports
          locator: CBDB:331798
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
        id: c_fvG7h9FZSHRSbwrhr8fBBZ
        subject_person_id: p_ay7ZWq8iTSKoexQkJpXoz8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TugXusNFHFdTE5ayse4kLm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HOqEOH0G2bUNxLooFA-y_
          claim_id: c_fvG7h9FZSHRSbwrhr8fBBZ
          source_id: s_M8LipiEiJ3iLWxCDWjc4qy
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百五十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TugXusNFHFdTE5ayse4kLm
        status: active
        display_name: 王圻
        merged_into_person_id: null
  other: []
---

# 王槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐 | accepted |
| bio.summary | 王槐，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331798） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TugXusNFHFdTE5ayse4kLm | 王圻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王槐（CBDB 331798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331798&o=json)
