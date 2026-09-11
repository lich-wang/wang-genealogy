---
schema: wang-person/v1
id: p_QgR5d8ZWR6dYKnDC4BddJX
status: active
merged_into: null
display_name: 王震元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7MYY2qodC6tDUCmbHhz6fA
        subject_person_id: p_QgR5d8ZWR6dYKnDC4BddJX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6AcBtAJEpqpSLpiz17DyS1
          claim_id: c_7MYY2qodC6tDUCmbHhz6fA
          source_id: s_v1KCFZSKLSykabQQT8R6nh
          stance: supports
          locator: CBDB:640826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640826）
          source: &a1
            id: s_v1KCFZSKLSykabQQT8R6nh
            source_type: api_record
            title: 中国历代人物传记资料库：王震元（CBDB 640826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640826&o=json
            external_identifier: CBDB:640826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LFPTDiVRwuyhM93tVthtt2
        subject_person_id: p_QgR5d8ZWR6dYKnDC4BddJX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王震元，清人物。籍贯杭州府，入仕貢生: 副貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640826）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c7OIO2oBvKrRmzLFEwjZmk
          claim_id: c_LFPTDiVRwuyhM93tVthtt2
          source_id: s_v1KCFZSKLSykabQQT8R6nh
          stance: supports
          locator: CBDB:640826
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

# 王震元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震元 | accepted |
| bio.summary | 王震元，清人物。籍贯杭州府，入仕貢生: 副貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640826） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震元（CBDB 640826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640826&o=json)
