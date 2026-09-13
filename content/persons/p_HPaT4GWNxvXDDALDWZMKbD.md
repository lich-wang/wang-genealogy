---
schema: wang-person/v1
id: p_HPaT4GWNxvXDDALDWZMKbD
status: active
merged_into: null
display_name: 王仕恭
cbdb_id: 251782
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3PHgvK32C4bxk9TnEVJmtq
        subject_person_id: p_HPaT4GWNxvXDDALDWZMKbD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕恭，史料所见人物。本项目依据《中国历代人物传记资料库：王仕恭（CBDB 251782）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_lWLwC73V9ftnEURg2XjW9q
          claim_id: c_3PHgvK32C4bxk9TnEVJmtq
          source_id: s_7JpgQFCP53fA2J7hag69Yk
          stance: supports
          locator: CBDB:251782
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7JpgQFCP53fA2J7hag69Yk
            source_type: api_record
            title: 中国历代人物传记资料库：王仕恭（CBDB 251782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251782&o=json
            external_identifier: CBDB:251782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cbHqfCcv8T7Gw2FKWKEvMP
        subject_person_id: p_HPaT4GWNxvXDDALDWZMKbD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DcnimrU6PtnHyiLh2ZU8yb
          claim_id: c_cbHqfCcv8T7Gw2FKWKEvMP
          source_id: s_7JpgQFCP53fA2J7hag69Yk
          stance: supports
          locator: CBDB:251782
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
        id: c_pXFjDepD5gOSFSBSwKkWLi
        subject_person_id: p_HPaT4GWNxvXDDALDWZMKbD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kBqE6QprrhgLRYUsgfWdoz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uAElBjbu7DmsQ2jMgezSoz
          claim_id: c_pXFjDepD5gOSFSBSwKkWLi
          source_id: s_GVkM3ScQfpkZuNtBgD5koE
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GVkM3ScQfpkZuNtBgD5koE
            source_type: api_record
            title: 中国历代人物传记资料库：王建（CBDB 199946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199946&o=json
            external_identifier: CBDB:199946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kBqE6QprrhgLRYUsgfWdoz
        status: active
        display_name: 王建
        merged_into_person_id: null
  other: []
---

# 王仕恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仕恭，史料所见人物。本项目依据《中国历代人物传记资料库：王仕恭（CBDB 251782）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仕恭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kBqE6QprrhgLRYUsgfWdoz | 王建 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建（CBDB 199946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199946&o=json)
- [中国历代人物传记资料库：王仕恭（CBDB 251782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251782&o=json)
