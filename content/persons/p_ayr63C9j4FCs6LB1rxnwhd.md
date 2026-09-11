---
schema: wang-person/v1
id: p_ayr63C9j4FCs6LB1rxnwhd
status: active
merged_into: null
display_name: 王季卿
cbdb_id: 232797
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5tAHnQy91ktmoxBFjgG9eh
        subject_person_id: p_ayr63C9j4FCs6LB1rxnwhd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季卿，明人物。中国历代人物传记资料库（CBDB）以人物编号 232797 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Tg6AZsIwEL-SwCJMvnMyA-
          claim_id: c_5tAHnQy91ktmoxBFjgG9eh
          source_id: s_vGnnELESJEYGSZJYfYyxsG
          stance: supports
          locator: CBDB:232797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vGnnELESJEYGSZJYfYyxsG
            source_type: api_record
            title: 中国历代人物传记资料库：王季卿（CBDB 232797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232797&o=json
            external_identifier: CBDB:232797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WPbdJCuoe4PWGMDak6BdxQ
        subject_person_id: p_ayr63C9j4FCs6LB1rxnwhd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FjtAPifGh6dvBCn6UjJP8p
          claim_id: c_WPbdJCuoe4PWGMDak6BdxQ
          source_id: s_vGnnELESJEYGSZJYfYyxsG
          stance: supports
          locator: CBDB:232797
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_vGnnELESJEYGSZJYfYyxsG
            source_type: api_record
            title: 中国历代人物传记资料库：王季卿（CBDB 232797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232797&o=json
            external_identifier: CBDB:232797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_HQpoRit5A7ZVPEuDn2QkMT
        subject_person_id: p_ayr63C9j4FCs6LB1rxnwhd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DvVKW3AUxK5cCLW8rtgfB4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oGCnaOkACxIIb5Qk2-_KmM
          claim_id: c_HQpoRit5A7ZVPEuDn2QkMT
          source_id: s_vGnnELESJEYGSZJYfYyxsG
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DvVKW3AUxK5cCLW8rtgfB4
        status: active
        display_name: 王湯孫
        merged_into_person_id: null
  other: []
---

# 王季卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王季卿，明人物。中国历代人物传记资料库（CBDB）以人物编号 232797 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王季卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DvVKW3AUxK5cCLW8rtgfB4 | 王湯孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王季卿（CBDB 232797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232797&o=json)
