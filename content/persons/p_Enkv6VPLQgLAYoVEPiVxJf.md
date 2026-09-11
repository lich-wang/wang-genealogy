---
schema: wang-person/v1
id: p_Enkv6VPLQgLAYoVEPiVxJf
status: active
merged_into: null
display_name: 王明
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_REWVJKLEhwNEbEdXUN2kp3
        subject_person_id: p_Enkv6VPLQgLAYoVEPiVxJf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EGrFdmLbcrH598c5Rxd7Bz
          claim_id: c_REWVJKLEhwNEbEdXUN2kp3
          source_id: s_7PENGV3jgRQN61G67J36Jo
          stance: supports
          locator: CBDB:329112
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329112）
          source: &a1
            id: s_7PENGV3jgRQN61G67J36Jo
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 329112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329112&o=json
            external_identifier: CBDB:329112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q9AuWAYZDL6QLss1TbhuCa
        subject_person_id: p_Enkv6VPLQgLAYoVEPiVxJf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明，明人物。嘉靖四十一年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 329112）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tc8n0xM_9Zos7qOtub1L0D
          claim_id: c_Q9AuWAYZDL6QLss1TbhuCa
          source_id: s_7PENGV3jgRQN61G67J36Jo
          stance: supports
          locator: CBDB:329112
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_O6SY3vEO07NPh4ZDmiheEV
        subject_person_id: p_Enkv6VPLQgLAYoVEPiVxJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q8kfUyHi4DSEJ6L6oLkg4M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m2Y63KsgfxMHs3R7gt5kfV
          claim_id: c_O6SY3vEO07NPh4ZDmiheEV
          source_id: s_7PENGV3jgRQN61G67J36Jo
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_q8kfUyHi4DSEJ6L6oLkg4M
        status: active
        display_name: 王問臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | 王明，明人物。嘉靖四十一年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 329112） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_q8kfUyHi4DSEJ6L6oLkg4M | 王問臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明（CBDB 329112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329112&o=json)
