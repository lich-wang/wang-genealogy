---
schema: wang-person/v1
id: p_gEwBCxKYGoUawLa1CSN7oS
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 38770
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JA0JWjA6-Y8eVHN4GpaGm9
        subject_person_id: p_gEwBCxKYGoUawLa1CSN7oS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏，宋人物。曾任郡君。（中国历代人物传记资料库 CBDB 38770）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qEl-tZWyEpElgdmIMfduTX
          claim_id: c_JA0JWjA6-Y8eVHN4GpaGm9
          source_id: s_BCMCSPT2ss9pcNU1t4pKFM
          stance: supports
          locator: CBDB:38770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BCMCSPT2ss9pcNU1t4pKFM
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王克基妻)（CBDB 38770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38770&o=json
            external_identifier: CBDB:38770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rfNgA3ETEonh53vK5SsPEc
        subject_person_id: p_gEwBCxKYGoUawLa1CSN7oS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c3D_Kjf21_PRcVqrGX3B_w
          claim_id: c_rfNgA3ETEonh53vK5SsPEc
          source_id: s_BCMCSPT2ss9pcNU1t4pKFM
          stance: supports
          locator: CBDB:38770
          quotation: null
          interpretation_note: CBDB 明确记录的王克基配偶
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
        id: c_R5Vu33jopSZR9HYdO2Q9fr
        subject_person_id: p_8M1i94w3acDzg1kYhCgGjB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gEwBCxKYGoUawLa1CSN7oS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A3CtbUVCjJkvbKTQKxWdRz
          claim_id: c_R5Vu33jopSZR9HYdO2Q9fr
          source_id: s_BCMCSPT2ss9pcNU1t4pKFM
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1619;1620：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8M1i94w3acDzg1kYhCgGjB
        status: active
        display_name: 王克基
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張氏，宋人物。曾任郡君。（中国历代人物传记资料库 CBDB 38770） | accepted |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8M1i94w3acDzg1kYhCgGjB | 王克基 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王克基妻)（CBDB 38770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38770&o=json)
