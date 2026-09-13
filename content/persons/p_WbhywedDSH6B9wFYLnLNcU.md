---
schema: wang-person/v1
id: p_WbhywedDSH6B9wFYLnLNcU
status: active
merged_into: null
display_name: 王齡
cbdb_id: 324284
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6r89ALL2BwoZEfCfLqiXXN
        subject_person_id: p_WbhywedDSH6B9wFYLnLNcU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齡，史料所见人物。本项目依据《中国历代人物传记资料库：王齡（CBDB 324284）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_wSE82VOuuBwHlrvVx7mchG
          claim_id: c_6r89ALL2BwoZEfCfLqiXXN
          source_id: s_zsSbkk2AxA8WVH7cgf6v4C
          stance: supports
          locator: CBDB:324284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zsSbkk2AxA8WVH7cgf6v4C
            source_type: api_record
            title: 中国历代人物传记资料库：王齡（CBDB 324284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324284&o=json
            external_identifier: CBDB:324284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UEBFXarTvrUurdub7dFyTA
        subject_person_id: p_WbhywedDSH6B9wFYLnLNcU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jGMGVDnZBxsZu25X9rEVEF
          claim_id: c_UEBFXarTvrUurdub7dFyTA
          source_id: s_zsSbkk2AxA8WVH7cgf6v4C
          stance: supports
          locator: CBDB:324284
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
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
        id: c_whgf0xr7aAJFMfbNjqKK8L
        subject_person_id: p_WbhywedDSH6B9wFYLnLNcU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Mg9PgqsYuftinKZnQEScVa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vCjWRXmj7vxy1S-lkl9w9Q
          claim_id: c_whgf0xr7aAJFMfbNjqKK8L
          source_id: s_zsSbkk2AxA8WVH7cgf6v4C
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第三十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zsSbkk2AxA8WVH7cgf6v4C
            source_type: api_record
            title: 中国历代人物传记资料库：王齡（CBDB 324284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324284&o=json
            external_identifier: CBDB:324284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Mg9PgqsYuftinKZnQEScVa
        status: active
        display_name: 王友賢
        merged_into_person_id: null
  other: []
---

# 王齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王齡，史料所见人物。本项目依据《中国历代人物传记资料库：王齡（CBDB 324284）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王齡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Mg9PgqsYuftinKZnQEScVa | 王友賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王齡（CBDB 324284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324284&o=json)
