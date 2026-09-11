---
schema: wang-person/v1
id: p_AC8R8KFQMBoroRTwELywt4
status: active
merged_into: null
display_name: 王舜臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zs7au37PyENrWi1JetKoaM
        subject_person_id: p_AC8R8KFQMBoroRTwELywt4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_utwXqHAsL9Bc27hz8mdXdH
          claim_id: c_zs7au37PyENrWi1JetKoaM
          source_id: s_T4xB72U1gceHHKHwb2UHKY
          stance: supports
          locator: CBDB:191814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191814）
          source: &a1
            id: s_T4xB72U1gceHHKHwb2UHKY
            source_type: api_record
            title: 中国历代人物传记资料库：王舜臣（CBDB 191814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191814&o=json
            external_identifier: CBDB:191814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_69BFJirEgdePJXucr9b863
        subject_person_id: p_AC8R8KFQMBoroRTwELywt4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 878年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u5PKUB9UeVrjaiBNHvETbJ
          claim_id: c_69BFJirEgdePJXucr9b863
          source_id: s_T4xB72U1gceHHKHwb2UHKY
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
        id: c_85BmqpFiHAk5vMRGv9RjFt
        subject_person_id: p_AC8R8KFQMBoroRTwELywt4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜臣（卒于878年），唐人物。籍贯滑州。（中国历代人物传记资料库 CBDB 191814）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MCykER95TdruYBj1YlZ4tA
          claim_id: c_85BmqpFiHAk5vMRGv9RjFt
          source_id: s_T4xB72U1gceHHKHwb2UHKY
          stance: supports
          locator: CBDB:191814
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Nw99H-mVdmtA0nxWaWJjA8
        subject_person_id: p_B66VrJAyU3hBdXV8CQML3u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AC8R8KFQMBoroRTwELywt4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jsESQ7JtZQgQFKejDWwR84
          claim_id: c_Nw99H-mVdmtA0nxWaWJjA8
          source_id: s_T4xB72U1gceHHKHwb2UHKY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_B66VrJAyU3hBdXV8CQML3u
        status: active
        display_name: 王渭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舜臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜臣 | accepted |
| death.date | 878年 | accepted |
| bio.summary | 王舜臣（卒于878年），唐人物。籍贯滑州。（中国历代人物传记资料库 CBDB 191814） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B66VrJAyU3hBdXV8CQML3u | 王渭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舜臣（CBDB 191814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191814&o=json)
