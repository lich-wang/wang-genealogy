---
schema: wang-person/v1
id: p_9VzrkYZxmFttaqTv9f9WWZ
status: active
merged_into: null
display_name: 樊氏
revision: 1
cbdb_id: 164377
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o4aFxxHdpovcNKHauVjL_Y
        subject_person_id: p_9VzrkYZxmFttaqTv9f9WWZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 樊氏，史料所见人物。本项目依据《中国历代人物传记资料库：樊氏（CBDB 164377）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4p1tQtAU68UBwpornqP_q4
          claim_id: c_o4aFxxHdpovcNKHauVjL_Y
          source_id: s_HzzH8jE1FeaUQP13_0qWg9
          stance: supports
          locator: CBDB:164377
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_HzzH8jE1FeaUQP13_0qWg9
            source_type: api_record
            title: 中国历代人物传记资料库：樊氏（CBDB 164377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164377&o=json
            external_identifier: CBDB:164377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_V1bxb5rsqcKp527k-CmYZ2
        subject_person_id: p_9VzrkYZxmFttaqTv9f9WWZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 樊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4HWf4LsbTO8GxusA0w9aNh
          claim_id: c_V1bxb5rsqcKp527k-CmYZ2
          source_id: s_HzzH8jE1FeaUQP13_0qWg9
          stance: supports
          locator: CBDB:164377
          quotation: null
          interpretation_note: CBDB 明确记录的王方配偶
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
        id: c_GggQadSzea46uYcDh3SFrU
        subject_person_id: p_pi3jrpykNB14U478pgSEhq
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9VzrkYZxmFttaqTv9f9WWZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hxsrxx-_vRpIE20IThwX6r
          claim_id: c_GggQadSzea46uYcDh3SFrU
          source_id: s_HzzH8jE1FeaUQP13_0qWg9
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan160：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pi3jrpykNB14U478pgSEhq
        status: active
        display_name: 王方
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 樊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 樊氏，史料所见人物。本项目依据《中国历代人物传记资料库：樊氏（CBDB 164377）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 樊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_pi3jrpykNB14U478pgSEhq | 王方 | accepted |

## 外部来源

- [中国历代人物传记资料库：樊氏（CBDB 164377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164377&o=json)
