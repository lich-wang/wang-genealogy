---
schema: wang-person/v1
id: p_3VtwA47iQeQky7CG25jomj
status: active
merged_into: null
display_name: 王選第
cbdb_id: 228980
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P4ia5mWc8JA7P8QeVU4xE2
        subject_person_id: p_3VtwA47iQeQky7CG25jomj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選第，明人物。中国历代人物传记资料库（CBDB）以人物编号 228980 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_uS8xvtL5rcxeBDwFW1mgGf
          claim_id: c_P4ia5mWc8JA7P8QeVU4xE2
          source_id: s_ukrFC9SbiKhkTtfvaAs7xA
          stance: supports
          locator: CBDB:228980
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ukrFC9SbiKhkTtfvaAs7xA
            source_type: api_record
            title: 中国历代人物传记资料库：王選第（CBDB 228980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228980&o=json
            external_identifier: CBDB:228980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jTAWfyoEVZJAiouvKJqvHY
        subject_person_id: p_3VtwA47iQeQky7CG25jomj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選第
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5J7yze4Lgp1gEBD1Po9fQE
          claim_id: c_jTAWfyoEVZJAiouvKJqvHY
          source_id: s_ukrFC9SbiKhkTtfvaAs7xA
          stance: supports
          locator: CBDB:228980
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_ukrFC9SbiKhkTtfvaAs7xA
            source_type: api_record
            title: 中国历代人物传记资料库：王選第（CBDB 228980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228980&o=json
            external_identifier: CBDB:228980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Lff6ZWz6KVCZ2RPDOvGdt6
        subject_person_id: p_RmcPLrzSEzw9YLSpR61Aoj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3VtwA47iQeQky7CG25jomj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fQa4xPbtqCX77at3F5KRnU
          claim_id: c_Lff6ZWz6KVCZ2RPDOvGdt6
          source_id: s_ukrFC9SbiKhkTtfvaAs7xA
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RmcPLrzSEzw9YLSpR61Aoj
        status: active
        display_name: 王志
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王選第

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王選第，明人物。中国历代人物传记资料库（CBDB）以人物编号 228980 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王選第 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RmcPLrzSEzw9YLSpR61Aoj | 王志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王選第（CBDB 228980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228980&o=json)
