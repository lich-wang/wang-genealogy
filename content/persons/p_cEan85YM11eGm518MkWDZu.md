---
schema: wang-person/v1
id: p_cEan85YM11eGm518MkWDZu
status: active
merged_into: null
display_name: 王墀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EHQdXyA6XFS2ecokxyGY7c
        subject_person_id: p_cEan85YM11eGm518MkWDZu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bBsceZppPHihhtenz75spj
          claim_id: c_EHQdXyA6XFS2ecokxyGY7c
          source_id: s_22d2d6qPmQvBDcmZNjCzF4
          stance: supports
          locator: CBDB:702186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702186）
          source: &a1
            id: s_22d2d6qPmQvBDcmZNjCzF4
            source_type: api_record
            title: 中国历代人物传记资料库：王墀（CBDB 702186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702186&o=json
            external_identifier: CBDB:702186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P2F1sz9j2ieagYQQdMRsGj
        subject_person_id: p_cEan85YM11eGm518MkWDZu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墀，明人物。籍贯平陰，入仕監生。（中国历代人物传记资料库 CBDB 702186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YxT2mUvuGQTypO6Zpiq1GS
          claim_id: c_P2F1sz9j2ieagYQQdMRsGj
          source_id: s_22d2d6qPmQvBDcmZNjCzF4
          stance: supports
          locator: CBDB:702186
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
  spouses:
    - claim:
        id: c__H0wmCCe46dbwx0xB9P-jY
        subject_person_id: p_cEan85YM11eGm518MkWDZu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_K5Ff5petyUyMEBhnbniq23
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5TCDnkHdB-j_hKlQ5eS-Ln
          claim_id: c__H0wmCCe46dbwx0xB9P-jY
          source_id: s_MX4AWBJfgkNVhoYy2CPWfI
          stance: supports
          locator: 平陰縣志，lgid=630873：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MX4AWBJfgkNVhoYy2CPWfI
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王墀妻)（CBDB 702187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702187&o=json
            external_identifier: CBDB:702187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K5Ff5petyUyMEBhnbniq23
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王墀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王墀 | accepted |
| bio.summary | 王墀，明人物。籍贯平陰，入仕監生。（中国历代人物传记资料库 CBDB 702186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_K5Ff5petyUyMEBhnbniq23 | 郭氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王墀妻)（CBDB 702187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702187&o=json)
- [中国历代人物传记资料库：王墀（CBDB 702186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702186&o=json)
