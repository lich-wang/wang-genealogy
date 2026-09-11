---
schema: wang-person/v1
id: p_kk5sE8tUMGDNiS98Q9q7LN
status: active
merged_into: null
display_name: 王景崇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_baX7wsq6CFjKnhegno6ABn
        subject_person_id: p_kk5sE8tUMGDNiS98Q9q7LN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gcu41jft7GRuwkvXBoEq7Q
          claim_id: c_baX7wsq6CFjKnhegno6ABn
          source_id: s_PbgBhDfMtSc7nWXPvtXB7F
          stance: supports
          locator: CBDB:169310
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169310）
          source: &a1
            id: s_PbgBhDfMtSc7nWXPvtXB7F
            source_type: api_record
            title: 中国历代人物传记资料库：王景崇（CBDB 169310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169310&o=json
            external_identifier: CBDB:169310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vwTT93Ph5yLD35fvNA9sru
        subject_person_id: p_kk5sE8tUMGDNiS98Q9q7LN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 845年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AoQJdiTfjQC5Ms7urb7JC9
          claim_id: c_vwTT93Ph5yLD35fvNA9sru
          source_id: s_PbgBhDfMtSc7nWXPvtXB7F
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
        id: c_8YwMEnHsXm4eSKi3AJqSBb
        subject_person_id: p_kk5sE8tUMGDNiS98Q9q7LN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 882年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QAfd1AKFXQzPFAqozBB25z
          claim_id: c_8YwMEnHsXm4eSKi3AJqSBb
          source_id: s_PbgBhDfMtSc7nWXPvtXB7F
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
        id: c_WQqg7M9FjYRcGB6z5m9LiV
        subject_person_id: p_kk5sE8tUMGDNiS98Q9q7LN
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
        - id: cs_PqbAKAbXUNoFLTat15Maq7
          claim_id: c_WQqg7M9FjYRcGB6z5m9LiV
          source_id: s_PbgBhDfMtSc7nWXPvtXB7F
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
        id: c_nGCzA0_SDF32S_IZrgS89-
        subject_person_id: p_BGZ3Xya3EBe2Q1KNp6DVk3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kk5sE8tUMGDNiS98Q9q7LN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-JDhhhNATYqxbRO5KcAlKL
          claim_id: c_nGCzA0_SDF32S_IZrgS89-
          source_id: s_8Qx7mCtqguJx1LnrSReN3k
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8Qx7mCtqguJx1LnrSReN3k
            source_type: api_record
            title: 中国历代人物传记资料库：王紹鼎（CBDB 159540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159540&o=json
            external_identifier: CBDB:159540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BGZ3Xya3EBe2Q1KNp6DVk3
        status: active
        display_name: 王紹鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景崇 | accepted |
| birth.date | 845年 | accepted |
| death.date | 882年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGZ3Xya3EBe2Q1KNp6DVk3 | 王紹鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景崇（CBDB 169310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169310&o=json)
- [中国历代人物传记资料库：王紹鼎（CBDB 159540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159540&o=json)
