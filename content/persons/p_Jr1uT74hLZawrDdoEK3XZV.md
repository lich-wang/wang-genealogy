---
schema: wang-person/v1
id: p_Jr1uT74hLZawrDdoEK3XZV
status: active
merged_into: null
display_name: 王舉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wd4nEV2uXfzg263fmqNKHN
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xr8AsNLJhSPqMUtKKbED9x
          claim_id: c_wd4nEV2uXfzg263fmqNKHN
          source_id: s_93CadBC6FxAXmjJx1iJvy8
          stance: supports
          locator: CBDB:313768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313768）
          source: &a1
            id: s_93CadBC6FxAXmjJx1iJvy8
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 313768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313768&o=json
            external_identifier: CBDB:313768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7EgsxhTTCi8Q8SuYpiHrrJ
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉，明人物。嘉靖二十九年進士，籍贯雄縣。（中国历代人物传记资料库 CBDB 313768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oGlQgWaTytvQrunsoW3R3V
          claim_id: c_7EgsxhTTCi8Q8SuYpiHrrJ
          source_id: s_93CadBC6FxAXmjJx1iJvy8
          stance: supports
          locator: CBDB:313768
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_eqKgJ32HumT_DsNLBhPQQ-
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78GMZISwmpjxC39LEL2jWt
          claim_id: c_eqKgJ32HumT_DsNLBhPQQ-
          source_id: s_93CadBC6FxAXmjJx1iJvy8
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百零九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LuGtcLnNAnJs1yiVnMjgcK
        status: active
        display_name: 王汝安
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉 | accepted |
| bio.summary | 王舉，明人物。嘉靖二十九年進士，籍贯雄縣。（中国历代人物传记资料库 CBDB 313768） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LuGtcLnNAnJs1yiVnMjgcK | 王汝安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舉（CBDB 313768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313768&o=json)
