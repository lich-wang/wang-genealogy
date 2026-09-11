---
schema: wang-person/v1
id: p_YJmBrFyhvA7UtWupQ2PBwG
status: active
merged_into: null
display_name: 王偉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PvoRmpTQccfZA7idkAZtdD
        subject_person_id: p_YJmBrFyhvA7UtWupQ2PBwG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kyUk7hiXpNWqLZi7scF1eE
          claim_id: c_PvoRmpTQccfZA7idkAZtdD
          source_id: s_orYDrZc1EsGnFMPba6NSWA
          stance: supports
          locator: CBDB:313193
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313193）
          source: &a1
            id: s_orYDrZc1EsGnFMPba6NSWA
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 313193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313193&o=json
            external_identifier: CBDB:313193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gevG6mNE8q8oDvLaC5jq9q
        subject_person_id: p_YJmBrFyhvA7UtWupQ2PBwG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 313193）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZYZ2YU_vOcAzZpecbddgO6
          claim_id: c_gevG6mNE8q8oDvLaC5jq9q
          source_id: s_orYDrZc1EsGnFMPba6NSWA
          stance: supports
          locator: CBDB:313193
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
        id: c_T8wmbOUKN8ZtFZR2JJkEfk
        subject_person_id: p_YJmBrFyhvA7UtWupQ2PBwG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rkwUCxJkarsqGGHssHtTdk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1QUpLtejYOoF76bhOs-mUi
          claim_id: c_T8wmbOUKN8ZtFZR2JJkEfk
          source_id: s_orYDrZc1EsGnFMPba6NSWA
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第五十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rkwUCxJkarsqGGHssHtTdk
        status: active
        display_name: 王用賢
        merged_into_person_id: null
  other: []
---

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| bio.summary | 王偉，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 313193） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rkwUCxJkarsqGGHssHtTdk | 王用賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王偉（CBDB 313193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313193&o=json)
