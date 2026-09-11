---
schema: wang-person/v1
id: p_WZhbbHJkMSdRjeeuQou9DY
status: active
merged_into: null
display_name: 王用章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cJwbg1tWnZSPKZHsTotJi6
        subject_person_id: p_WZhbbHJkMSdRjeeuQou9DY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8WYufiWUhD1GZR8w1WtadF
          claim_id: c_cJwbg1tWnZSPKZHsTotJi6
          source_id: s_AUt59Pg8JkfmSaJnQ231PQ
          stance: supports
          locator: CBDB:324572
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324572）
          source: &a1
            id: s_AUt59Pg8JkfmSaJnQ231PQ
            source_type: api_record
            title: 中国历代人物传记资料库：王用章（CBDB 324572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324572&o=json
            external_identifier: CBDB:324572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pAjwdXSiL3b7i8H9ddRN85
        subject_person_id: p_WZhbbHJkMSdRjeeuQou9DY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用章，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324572）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R84psQKYttZKtxp2KrmLek
          claim_id: c_pAjwdXSiL3b7i8H9ddRN85
          source_id: s_AUt59Pg8JkfmSaJnQ231PQ
          stance: supports
          locator: CBDB:324572
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
  descendants: []
  other: []
---

# 王用章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用章 | accepted |
| bio.summary | 王用章，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324572） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用章（CBDB 324572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324572&o=json)
