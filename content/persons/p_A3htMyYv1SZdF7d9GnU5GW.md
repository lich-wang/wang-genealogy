---
schema: wang-person/v1
id: p_A3htMyYv1SZdF7d9GnU5GW
status: active
merged_into: null
display_name: 王德集
cbdb_id: 322371
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yCaKY4XE6sq665NFFeP8vm
        subject_person_id: p_A3htMyYv1SZdF7d9GnU5GW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德集，明人物。宣德五年進士。（中国历代人物传记资料库 CBDB 322371）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_BfNbgpHxIEEXaW4jVXaG-x
          claim_id: c_yCaKY4XE6sq665NFFeP8vm
          source_id: s_euYr38uZcFFBC3r82nVtbC
          stance: supports
          locator: CBDB:322371
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_euYr38uZcFFBC3r82nVtbC
            source_type: api_record
            title: 中国历代人物传记资料库：王德集（CBDB 322371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322371&o=json
            external_identifier: CBDB:322371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4RZM9WWKdkWzc3eXxZnmZL
        subject_person_id: p_A3htMyYv1SZdF7d9GnU5GW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德集
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2DMzE3uLmGJKAyrwGTPaJZ
          claim_id: c_4RZM9WWKdkWzc3eXxZnmZL
          source_id: s_euYr38uZcFFBC3r82nVtbC
          stance: supports
          locator: CBDB:322371
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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
        id: c_grjUh661Z05pEX-NxvM04y
        subject_person_id: p_A3htMyYv1SZdF7d9GnU5GW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lt4MQ464DWHGJk9hxD73Kf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ggwoEDVyyjP1T9sux-7zyG
          claim_id: c_grjUh661Z05pEX-NxvM04y
          source_id: s_oD9gKDpPboW2xg9Jhpaik1
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oD9gKDpPboW2xg9Jhpaik1
            source_type: api_record
            title: 中国历代人物传记资料库：王偡（CBDB 204670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204670&o=json
            external_identifier: CBDB:204670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Lt4MQ464DWHGJk9hxD73Kf
        status: active
        display_name: 王偡
        merged_into_person_id: null
  other: []
---

# 王德集

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德集，明人物。宣德五年進士。（中国历代人物传记资料库 CBDB 322371） | accepted |
| name.primary | 王德集 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Lt4MQ464DWHGJk9hxD73Kf | 王偡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德集（CBDB 322371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322371&o=json)
- [中国历代人物传记资料库：王偡（CBDB 204670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204670&o=json)
