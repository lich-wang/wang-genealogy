---
schema: wang-person/v1
id: p_itRuYcr7YNktisBRNe8RYG
status: active
merged_into: null
display_name: 王懋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sjWoQgQoGtJSpHUBKzjJpP
        subject_person_id: p_itRuYcr7YNktisBRNe8RYG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3pSwEdWrv4Y2nJQ8z6unLF
          claim_id: c_sjWoQgQoGtJSpHUBKzjJpP
          source_id: s_rCfrCB7EUwTq8pQjCadQRV
          stance: supports
          locator: CBDB:68131
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68131）
          source: &a1
            id: s_rCfrCB7EUwTq8pQjCadQRV
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 68131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68131&o=json
            external_identifier: CBDB:68131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.054Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1o8jhR6gLotohJzkNuE98q
        subject_person_id: p_itRuYcr7YNktisBRNe8RYG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1538年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lw17gYGkxswwriaKACJm4K
          claim_id: c_1o8jhR6gLotohJzkNuE98q
          source_id: s_rCfrCB7EUwTq8pQjCadQRV
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
        id: c_GY5DwocDL73SXFNBJCTzxk
        subject_person_id: p_itRuYcr7YNktisBRNe8RYG
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
        - id: cs_DYMoB5KLRModFcGSLeqyK9
          claim_id: c_GY5DwocDL73SXFNBJCTzxk
          source_id: s_rCfrCB7EUwTq8pQjCadQRV
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
        id: c_zpBqGOSRMAx0ZFt1aAjATm
        subject_person_id: p_336medc3oE8zgTL1a4nnES
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_itRuYcr7YNktisBRNe8RYG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZsvmolHDVlwgmdrkKt3bg9
          claim_id: c_zpBqGOSRMAx0ZFt1aAjATm
          source_id: s_7CxzdVGGUcd17QFAyphQsA
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百一十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7CxzdVGGUcd17QFAyphQsA
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 281884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281884&o=json
            external_identifier: CBDB:281884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_336medc3oE8zgTL1a4nnES
        status: active
        display_name: 王福
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| death.date | 1538年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_336medc3oE8zgTL1a4nnES | 王福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 281884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281884&o=json)
- [中国历代人物传记资料库：王懋（CBDB 68131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68131&o=json)
