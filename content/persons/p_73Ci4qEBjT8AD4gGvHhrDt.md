---
schema: wang-person/v1
id: p_73Ci4qEBjT8AD4gGvHhrDt
status: active
merged_into: null
display_name: 王植
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ahgYZE8hCdXeRvgBpmnfMH
        subject_person_id: p_73Ci4qEBjT8AD4gGvHhrDt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vwfkTMy4kfzKYax6zPhMZK
          claim_id: c_ahgYZE8hCdXeRvgBpmnfMH
          source_id: s_tUcNwV564phkHaa2EkAQds
          stance: supports
          locator: CBDB:142524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142524）
          source: &a1
            id: s_tUcNwV564phkHaa2EkAQds
            source_type: api_record
            title: 中国历代人物传记资料库：王植（CBDB 142524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142524&o=json
            external_identifier: CBDB:142524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_g1q3S8gWehY6b61YJua5K5
        subject_person_id: p_73Ci4qEBjT8AD4gGvHhrDt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 603年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EfxAncdqdPMJ79p6NMNvPC
          claim_id: c_g1q3S8gWehY6b61YJua5K5
          source_id: s_tUcNwV564phkHaa2EkAQds
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
        id: c_aucP7Do6jLL9MKrxiB4VPt
        subject_person_id: p_73Ci4qEBjT8AD4gGvHhrDt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 662年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1d5ZDTTYUiT9ZjmxyPqYAA
          claim_id: c_aucP7Do6jLL9MKrxiB4VPt
          source_id: s_tUcNwV564phkHaa2EkAQds
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
        id: c_7RLwjHHKGnVgkWRzJ6XjgB
        subject_person_id: p_73Ci4qEBjT8AD4gGvHhrDt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植（603年—662年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 142524）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XH6fSprFRXuOzT3a_BZJYE
          claim_id: c_7RLwjHHKGnVgkWRzJ6XjgB
          source_id: s_tUcNwV564phkHaa2EkAQds
          stance: supports
          locator: CBDB:142524
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LFU50a725is0Rqd__SLpNh
        subject_person_id: p_Y5zeDArc8FS9pBtqA8eJLH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_73Ci4qEBjT8AD4gGvHhrDt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3lTkYfPv0RdMsXXt1OZUFz
          claim_id: c_LFU50a725is0Rqd__SLpNh
          source_id: s_tUcNwV564phkHaa2EkAQds
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Longshuo17：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y5zeDArc8FS9pBtqA8eJLH
        status: active
        display_name: 王興
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王植 | accepted |
| birth.date | 603年 | accepted |
| death.date | 662年 | accepted |
| bio.summary | 王植（603年—662年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 142524） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y5zeDArc8FS9pBtqA8eJLH | 王興 | accepted |

## 外部来源

- [中国历代人物传记资料库：王植（CBDB 142524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142524&o=json)
