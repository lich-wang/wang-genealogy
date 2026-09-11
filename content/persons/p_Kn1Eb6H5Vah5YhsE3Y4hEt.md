---
schema: wang-person/v1
id: p_Kn1Eb6H5Vah5YhsE3Y4hEt
status: active
merged_into: null
display_name: 王泰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jgBjxNRq3oF3tf3u6DQFy9
        subject_person_id: p_Kn1Eb6H5Vah5YhsE3Y4hEt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VhVpe7EDL29ufsYMbiXnRD
          claim_id: c_jgBjxNRq3oF3tf3u6DQFy9
          source_id: s_GFcWVzyPQf4Asa5tkNoZk6
          stance: supports
          locator: CBDB:297869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297869）
          source: &a1
            id: s_GFcWVzyPQf4Asa5tkNoZk6
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 297869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297869&o=json
            external_identifier: CBDB:297869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gAB6JoXPAQGkhSGsdhPT66
        subject_person_id: p_Kn1Eb6H5Vah5YhsE3Y4hEt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297869）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_48JC9N6GdQDQRolLv_zgQ5
          claim_id: c_gAB6JoXPAQGkhSGsdhPT66
          source_id: s_GFcWVzyPQf4Asa5tkNoZk6
          stance: supports
          locator: CBDB:297869
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
        id: c_onwKMqW7TUBrVW5jEwEKLo
        subject_person_id: p_Kn1Eb6H5Vah5YhsE3Y4hEt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7D1Y7WN5ERwLJ26e35fypo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fOWobxXaog050F8YtxX1as
          claim_id: c_onwKMqW7TUBrVW5jEwEKLo
          source_id: s_PMHJGMbGKztLxoRHDL7wWN
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百六十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PMHJGMbGKztLxoRHDL7wWN
            source_type: api_record
            title: 中国历代人物传记资料库：王希賢（CBDB 202984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202984&o=json
            external_identifier: CBDB:202984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.769Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7D1Y7WN5ERwLJ26e35fypo
        status: active
        display_name: 王希賢
        merged_into_person_id: null
  other: []
---

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| bio.summary | 王泰，明人物。嘉靖十四年進士。（中国历代人物传记资料库 CBDB 297869） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7D1Y7WN5ERwLJ26e35fypo | 王希賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 297869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297869&o=json)
- [中国历代人物传记资料库：王希賢（CBDB 202984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202984&o=json)
