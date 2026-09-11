---
schema: wang-person/v1
id: p_jeL1MqkEmjhjcF65DnMTWB
status: active
merged_into: null
display_name: 王貴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E3Gbj8WAKjcYzy3tsNQZj6
        subject_person_id: p_jeL1MqkEmjhjcF65DnMTWB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i17V96dWQng2LMUAhFiGDy
          claim_id: c_E3Gbj8WAKjcYzy3tsNQZj6
          source_id: s_swifxK2L5m9nN2MegYCQAr
          stance: supports
          locator: CBDB:288209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288209）
          source: &a1
            id: s_swifxK2L5m9nN2MegYCQAr
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 288209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288209&o=json
            external_identifier: CBDB:288209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YFanDXJKDzbE43Ct3apTog
        subject_person_id: p_jeL1MqkEmjhjcF65DnMTWB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_47TJRK1gI7hAcmdteFCXsh
          claim_id: c_YFanDXJKDzbE43Ct3apTog
          source_id: s_swifxK2L5m9nN2MegYCQAr
          stance: supports
          locator: CBDB:288209
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
        id: c_e1v-mbd6OLDjiFPGO2DsPQ
        subject_person_id: p_jeL1MqkEmjhjcF65DnMTWB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TTntK269568eA9RALQmA43
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p7PxBCDvk0WtmSkZq6DbmP
          claim_id: c_e1v-mbd6OLDjiFPGO2DsPQ
          source_id: s_swifxK2L5m9nN2MegYCQAr
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TTntK269568eA9RALQmA43
        status: active
        display_name: 王納言
        merged_into_person_id: null
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | 王貴，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288209） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TTntK269568eA9RALQmA43 | 王納言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 288209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288209&o=json)
