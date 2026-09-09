---
schema: wang-person/v1
id: p_AZjKZWPLdUawCFx5A3C5ZP
status: active
merged_into: null
display_name: 王渙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ntaBdNb6RqX4JVVst6FLud
        subject_person_id: p_AZjKZWPLdUawCFx5A3C5ZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mtjyZX1SanwaWDmCN4dUTp
          claim_id: c_ntaBdNb6RqX4JVVst6FLud
          source_id: s_fjVcFzLTWbYHxxvVrCN981
          stance: supports
          locator: CBDB:92068
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92068）
          source: &a1
            id: s_fjVcFzLTWbYHxxvVrCN981
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 92068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92068&o=json
            external_identifier: CBDB:92068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FbqdViYZ2YG6Lz2LFihNZc
        subject_person_id: p_AZjKZWPLdUawCFx5A3C5ZP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 859年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P94X3KVriPXCcFP8iAJGAF
          claim_id: c_FbqdViYZ2YG6Lz2LFihNZc
          source_id: s_fjVcFzLTWbYHxxvVrCN981
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
        id: c_ZJAKqXop6ReDTBvGqygAtw
        subject_person_id: p_AZjKZWPLdUawCFx5A3C5ZP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 901年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A9r5wVvHXkSH2fARW1ZKJ2
          claim_id: c_ZJAKqXop6ReDTBvGqygAtw
          source_id: s_fjVcFzLTWbYHxxvVrCN981
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
        id: c_1kKMTZF7ncAXzGXwpBSPLu
        subject_person_id: p_AZjKZWPLdUawCFx5A3C5ZP
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
        - id: cs_M2y2scD4oNWFXjSsnmUvc8
          claim_id: c_1kKMTZF7ncAXzGXwpBSPLu
          source_id: s_fjVcFzLTWbYHxxvVrCN981
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
  ancestors: []
  descendants: []
  other: []
---

# 王渙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渙 | accepted |
| birth.date | 859年 | accepted |
| death.date | 901年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渙（CBDB 92068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92068&o=json)
