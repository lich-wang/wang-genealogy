---
schema: wang-person/v1
id: p_4FYUq8fdEyD1ykW4CP1nsJ
status: active
merged_into: null
display_name: 王處溫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zccoQCYMhCVL6gLsDcwwt3
        subject_person_id: p_4FYUq8fdEyD1ykW4CP1nsJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處溫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_54e97WGwExogJGRuNnXbTy
          claim_id: c_zccoQCYMhCVL6gLsDcwwt3
          source_id: s_K7GzGB34y9LV38gWsSGe88
          stance: supports
          locator: CBDB:160572
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160572）
          source: &a1
            id: s_K7GzGB34y9LV38gWsSGe88
            source_type: api_record
            title: 中国历代人物传记资料库：王處溫（CBDB 160572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160572&o=json
            external_identifier: CBDB:160572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_76yvmHSzvfHWgCgRqw4f2j
        subject_person_id: p_4FYUq8fdEyD1ykW4CP1nsJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處溫，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 160572）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8Amh7VR19CHGRvplE3A8Qk
          claim_id: c_76yvmHSzvfHWgCgRqw4f2j
          source_id: s_K7GzGB34y9LV38gWsSGe88
          stance: supports
          locator: CBDB:160572
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LbD1Yf5DjeRPkGFZCjlSTy
        subject_person_id: p_Ggn2t8z4X4B4wro6LB38G3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4FYUq8fdEyD1ykW4CP1nsJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jKdIvo7skFgPOklvruVhP_
          claim_id: c_LbD1Yf5DjeRPkGFZCjlSTy
          source_id: s_K7GzGB34y9LV38gWsSGe88
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 56：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ggn2t8z4X4B4wro6LB38G3
        status: active
        display_name: 王虔暢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王處溫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處溫 | accepted |
| bio.summary | 王處溫，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 160572） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ggn2t8z4X4B4wro6LB38G3 | 王虔暢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處溫（CBDB 160572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160572&o=json)
