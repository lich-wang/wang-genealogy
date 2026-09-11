---
schema: wang-person/v1
id: p_1sgLY8GRCmd3M3v1yxwDb9
status: active
merged_into: null
display_name: 王卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FYioabA2rWaNRXgo8iuUgH
        subject_person_id: p_1sgLY8GRCmd3M3v1yxwDb9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a7EiBeuVX2puBveFdZ12Du
          claim_id: c_FYioabA2rWaNRXgo8iuUgH
          source_id: s_kXka867YuaeGDGzwfZanrJ
          stance: supports
          locator: CBDB:381059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381059）
          source: &a1
            id: s_kXka867YuaeGDGzwfZanrJ
            source_type: api_record
            title: 中国历代人物传记资料库：王卿（CBDB 381059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381059&o=json
            external_identifier: CBDB:381059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tQPo4pK8Kdr29CVjYDFbbC
        subject_person_id: p_1sgLY8GRCmd3M3v1yxwDb9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王卿，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381059）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7bBtdpK8YVKeWdbNZ7vsC0
          claim_id: c_tQPo4pK8Kdr29CVjYDFbbC
          source_id: s_kXka867YuaeGDGzwfZanrJ
          stance: supports
          locator: CBDB:381059
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

# 王卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王卿 | accepted |
| bio.summary | 王卿，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381059） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王卿（CBDB 381059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381059&o=json)
