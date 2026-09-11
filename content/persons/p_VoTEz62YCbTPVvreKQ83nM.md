---
schema: wang-person/v1
id: p_VoTEz62YCbTPVvreKQ83nM
status: active
merged_into: null
display_name: 王价
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QcZ4ptJYQVajnTMKQZLvuB
        subject_person_id: p_VoTEz62YCbTPVvreKQ83nM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uWSyLsReZJWmSDLkqq7vmu
          claim_id: c_QcZ4ptJYQVajnTMKQZLvuB
          source_id: s_uSjEH62JT2VHw1xKmMVo3i
          stance: supports
          locator: CBDB:222533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222533）
          source: &a1
            id: s_uSjEH62JT2VHw1xKmMVo3i
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 222533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222533&o=json
            external_identifier: CBDB:222533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sGaAMoJvL24FmENUw7mLHu
        subject_person_id: p_VoTEz62YCbTPVvreKQ83nM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价，明人物。萬曆十一年進士，籍贯膠州，曾任知府。（中国历代人物传记资料库 CBDB 222533）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vLAulDLOPDYROk8rSqPQGK
          claim_id: c_sGaAMoJvL24FmENUw7mLHu
          source_id: s_uSjEH62JT2VHw1xKmMVo3i
          stance: supports
          locator: CBDB:222533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UBO4bXn0hj--TaAT0Ftccl
        subject_person_id: p_VoTEz62YCbTPVvreKQ83nM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RKkqJtmY8xpK68H9TU7V2h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FVoI0yTUd7c9NwKgO8jsMN
          claim_id: c_UBO4bXn0hj--TaAT0Ftccl
          source_id: s_uSjEH62JT2VHw1xKmMVo3i
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RKkqJtmY8xpK68H9TU7V2h
        status: active
        display_name: 王岳錫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王价

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王价 | accepted |
| bio.summary | 王价，明人物。萬曆十一年進士，籍贯膠州，曾任知府。（中国历代人物传记资料库 CBDB 222533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RKkqJtmY8xpK68H9TU7V2h | 王岳錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王价（CBDB 222533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222533&o=json)
