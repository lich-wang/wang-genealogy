---
schema: wang-person/v1
id: p_5YsyuVGiCwb6EmockoodiK
status: active
merged_into: null
display_name: 蔡氏
revision: 1
cbdb_id: 557756
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gvHJXu-Pa8FsFumOb80HkQ
        subject_person_id: p_5YsyuVGiCwb6EmockoodiK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔡氏，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 557756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5zdTytic8n-U7j1WlsWn14
          claim_id: c_gvHJXu-Pa8FsFumOb80HkQ
          source_id: s_tuTrB7DJo0Wc6-QUx0Oj8W
          stance: supports
          locator: CBDB:557756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tuTrB7DJo0Wc6-QUx0Oj8W
            source_type: api_record
            title: 中国历代人物传记资料库：蔡氏(王榮妻)（CBDB 557756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557756&o=json
            external_identifier: CBDB:557756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gk-6p5MvvumnMqnhwFh6kj
        subject_person_id: p_5YsyuVGiCwb6EmockoodiK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔡氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uHDv7B-hj6dDvt3_uzD7KE
          claim_id: c_Gk-6p5MvvumnMqnhwFh6kj
          source_id: s_tuTrB7DJo0Wc6-QUx0Oj8W
          stance: supports
          locator: CBDB:557756
          quotation: null
          interpretation_note: CBDB 明确记录的王榮配偶
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
        id: c_sfs_xo8EA5awAyEMIiyKOV
        subject_person_id: p_VUK6iLnZPLmpCgGeKr9o2C
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5YsyuVGiCwb6EmockoodiK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YU0WLHEuJfRMEQumCu4bjU
          claim_id: c_sfs_xo8EA5awAyEMIiyKOV
          source_id: s_tuTrB7DJo0Wc6-QUx0Oj8W
          stance: supports
          locator: (乾隆)信陽州志，lgid=868520：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VUK6iLnZPLmpCgGeKr9o2C
        status: active
        display_name: 王榮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蔡氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蔡氏，清人物。籍贯信陽州。（中国历代人物传记资料库 CBDB 557756） | accepted |
| name.primary | 蔡氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_VUK6iLnZPLmpCgGeKr9o2C | 王榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡氏(王榮妻)（CBDB 557756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557756&o=json)
