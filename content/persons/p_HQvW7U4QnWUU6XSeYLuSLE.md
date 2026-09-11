---
schema: wang-person/v1
id: p_HQvW7U4QnWUU6XSeYLuSLE
status: active
merged_into: null
display_name: 王雅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xFuGwgN3W4t5a41qEym8Z9
        subject_person_id: p_HQvW7U4QnWUU6XSeYLuSLE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wQ8q8pA4LEgjJCCvshj35j
          claim_id: c_xFuGwgN3W4t5a41qEym8Z9
          source_id: s_TZUJBUv45shtyPKrPPWKA8
          stance: supports
          locator: CBDB:466612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466612）
          source: &a1
            id: s_TZUJBUv45shtyPKrPPWKA8
            source_type: api_record
            title: 中国历代人物传记资料库：王雅（CBDB 466612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466612&o=json
            external_identifier: CBDB:466612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kkeG6b9QFPH8qJQmJ4MGip
        subject_person_id: p_HQvW7U4QnWUU6XSeYLuSLE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王雅，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 466612）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i_bIaZ_Iq1QVZz9k6pttUx
          claim_id: c_kkeG6b9QFPH8qJQmJ4MGip
          source_id: s_TZUJBUv45shtyPKrPPWKA8
          stance: supports
          locator: CBDB:466612
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

# 王雅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雅 | accepted |
| bio.summary | 王雅，清人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 466612） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雅（CBDB 466612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466612&o=json)
