---
schema: wang-person/v1
id: p_f2ian49TRCzGHc7hjV3RDc
status: active
merged_into: null
display_name: 王子芳
cbdb_id: 54481
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MLShwMBcv6CE2vmBdXw4bP
        subject_person_id: p_f2ian49TRCzGHc7hjV3RDc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子芳，清人物。中国历代人物传记资料库（CBDB）以人物编号 54481 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_LVwv2ksFtitQ37QJUc4xDx
          claim_id: c_MLShwMBcv6CE2vmBdXw4bP
          source_id: s_DriGLriGUvDkNEN2d5Veui
          stance: supports
          locator: CBDB:54481
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DriGLriGUvDkNEN2d5Veui
            source_type: api_record
            title: 中国历代人物传记资料库：王子芳（CBDB 54481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54481&o=json
            external_identifier: CBDB:54481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_y8B8NHNFaVnP7qewcaq86J
        subject_person_id: p_f2ian49TRCzGHc7hjV3RDc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iDb81nV5jireTSBPWM9cP1
          claim_id: c_y8B8NHNFaVnP7qewcaq86J
          source_id: s_DriGLriGUvDkNEN2d5Veui
          stance: supports
          locator: CBDB:54481
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_DriGLriGUvDkNEN2d5Veui
            source_type: api_record
            title: 中国历代人物传记资料库：王子芳（CBDB 54481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54481&o=json
            external_identifier: CBDB:54481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_eWF4KXW_Jq3mw7lLSDC-wi
        subject_person_id: p_f2ian49TRCzGHc7hjV3RDc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cqedeQVYGL1qvgfyh6GuwW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SMnx6KoYA8G_qHHX7NpB3_
          claim_id: c_eWF4KXW_Jq3mw7lLSDC-wi
          source_id: s_DriGLriGUvDkNEN2d5Veui
          stance: supports
          locator: 明清婦女著作數據庫：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cqedeQVYGL1qvgfyh6GuwW
        status: active
        display_name: 秋瑾
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王子芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子芳，清人物。中国历代人物传记资料库（CBDB）以人物编号 54481 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王子芳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cqedeQVYGL1qvgfyh6GuwW | 秋瑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子芳（CBDB 54481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54481&o=json)
