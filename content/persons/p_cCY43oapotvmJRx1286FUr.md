---
schema: wang-person/v1
id: p_cCY43oapotvmJRx1286FUr
status: active
merged_into: null
display_name: 王一夔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zoJAFHJcMvDVnhGAa2T8SA
        subject_person_id: p_cCY43oapotvmJRx1286FUr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一夔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hogbH1qX3xmWhZwj68FGY6
          claim_id: c_zoJAFHJcMvDVnhGAa2T8SA
          source_id: s_bHxJyA1d222N1TxgoEft1L
          stance: supports
          locator: CBDB:306153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306153）
          source: &a1
            id: s_bHxJyA1d222N1TxgoEft1L
            source_type: api_record
            title: 中国历代人物传记资料库：王一夔（CBDB 306153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306153&o=json
            external_identifier: CBDB:306153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5YjjhCyCn8ozkEMKkbN4jF
        subject_person_id: p_cCY43oapotvmJRx1286FUr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一夔，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306153）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4vr1N_vZSj4tFvh-BeBEN1
          claim_id: c_5YjjhCyCn8ozkEMKkbN4jF
          source_id: s_bHxJyA1d222N1TxgoEft1L
          stance: supports
          locator: CBDB:306153
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

# 王一夔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一夔 | accepted |
| bio.summary | 王一夔，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306153） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一夔（CBDB 306153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306153&o=json)
