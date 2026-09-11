---
schema: wang-person/v1
id: p_tqwNUi4YHEq3GLVvJB5D2K
status: active
merged_into: null
display_name: 王杏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HkNUHJj4HNoybLUKgmoXY8
        subject_person_id: p_tqwNUi4YHEq3GLVvJB5D2K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pg6CTp1eF9bJ59Ciyx9x84
          claim_id: c_HkNUHJj4HNoybLUKgmoXY8
          source_id: s_XcFWfJ9zEQyMnotQVMPhZC
          stance: supports
          locator: CBDB:202611
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202611）
          source: &a1
            id: s_XcFWfJ9zEQyMnotQVMPhZC
            source_type: api_record
            title: 中国历代人物传记资料库：王杏（CBDB 202611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202611&o=json
            external_identifier: CBDB:202611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zwgZb86iMm4DCqoLp6AJbr
        subject_person_id: p_tqwNUi4YHEq3GLVvJB5D2K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1496年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LEneQV86AJz2U1Y91wiMAM
          claim_id: c_zwgZb86iMm4DCqoLp6AJbr
          source_id: s_XcFWfJ9zEQyMnotQVMPhZC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FZ2drC1h2V5hvZbM6eNUgU
        subject_person_id: p_tqwNUi4YHEq3GLVvJB5D2K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZcP9YAoaAJwPkyeL4Lm747
          claim_id: c_FZ2drC1h2V5hvZbM6eNUgU
          source_id: s_XcFWfJ9zEQyMnotQVMPhZC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9UKoj1B4BeIZm_C2D1n55x
        subject_person_id: p_98yZgQvRBXf6iP69LRsUmh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tqwNUi4YHEq3GLVvJB5D2K
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wvb8C0_n_D3UwuZ3Fs-mbS
          claim_id: c_9UKoj1B4BeIZm_C2D1n55x
          source_id: s_eEGBNxbax4xVCuXQgHcdWo
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第二百二十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eEGBNxbax4xVCuXQgHcdWo
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 290694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290694&o=json
            external_identifier: CBDB:290694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_98yZgQvRBXf6iP69LRsUmh
        status: active
        display_name: 王綬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王杏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杏 | accepted |
| birth.date | 1496年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_98yZgQvRBXf6iP69LRsUmh | 王綬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綬（CBDB 290694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290694&o=json)
- [中国历代人物传记资料库：王杏（CBDB 202611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202611&o=json)
