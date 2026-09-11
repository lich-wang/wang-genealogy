---
schema: wang-person/v1
id: p_Lrg8CA8FD1SKX5BH3RgFHu
status: active
merged_into: null
display_name: 王聰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_srYHZ5M4rVAXXqGGoHQVY6
        subject_person_id: p_Lrg8CA8FD1SKX5BH3RgFHu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4ni1KF646FfN1nYi2KjhUj
          claim_id: c_srYHZ5M4rVAXXqGGoHQVY6
          source_id: s_w2fwbha1mVo5mF9JEecFLa
          stance: supports
          locator: CBDB:310362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310362）
          source: &a1
            id: s_w2fwbha1mVo5mF9JEecFLa
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 310362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310362&o=json
            external_identifier: CBDB:310362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GrTLv1hW6wEfKStjApM8a5
        subject_person_id: p_Lrg8CA8FD1SKX5BH3RgFHu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 310362）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hRXcFOLSa3W06UbB2rNlWQ
          claim_id: c_GrTLv1hW6wEfKStjApM8a5
          source_id: s_w2fwbha1mVo5mF9JEecFLa
          stance: supports
          locator: CBDB:310362
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
  descendants:
    - claim:
        id: c_S_zewHZ94Ek8Gk1PXdbOVn
        subject_person_id: p_Lrg8CA8FD1SKX5BH3RgFHu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iKV4rNK4kp_oWXOe7IsgTX
          claim_id: c_S_zewHZ94Ek8Gk1PXdbOVn
          source_id: s_w2fwbha1mVo5mF9JEecFLa
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SHuk9Lfw4VDtH93mbkHP9q
        status: active
        display_name: 王遴
        merged_into_person_id: null
  other: []
---

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| bio.summary | 王聰，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 310362） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_SHuk9Lfw4VDtH93mbkHP9q | 王遴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 310362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310362&o=json)
