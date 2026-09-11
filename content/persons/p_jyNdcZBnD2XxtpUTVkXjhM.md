---
schema: wang-person/v1
id: p_jyNdcZBnD2XxtpUTVkXjhM
status: active
merged_into: null
display_name: 王續友
cbdb_id: 308734
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6pVn9hYot6fmG1fjh5Pqkq
        subject_person_id: p_jyNdcZBnD2XxtpUTVkXjhM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續友，明人物。中国历代人物传记资料库（CBDB）以人物编号 308734 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_yPszDFk20PzyBEWwVgpIby
          claim_id: c_6pVn9hYot6fmG1fjh5Pqkq
          source_id: s_pZLMkH392WhsS13vtFdL6a
          stance: supports
          locator: CBDB:308734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pZLMkH392WhsS13vtFdL6a
            source_type: api_record
            title: 中国历代人物传记资料库：王續友（CBDB 308734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308734&o=json
            external_identifier: CBDB:308734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AMJHZ8qShMEzjFmpVEPwFU
        subject_person_id: p_jyNdcZBnD2XxtpUTVkXjhM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續友
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XBd4vPiV1JxD8Cn5ncRYHP
          claim_id: c_AMJHZ8qShMEzjFmpVEPwFU
          source_id: s_pZLMkH392WhsS13vtFdL6a
          stance: supports
          locator: CBDB:308734
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_pZLMkH392WhsS13vtFdL6a
            source_type: api_record
            title: 中国历代人物传记资料库：王續友（CBDB 308734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308734&o=json
            external_identifier: CBDB:308734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
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
        id: c_kX6mIZaNXAGu-nMkm4dY8b
        subject_person_id: p_jyNdcZBnD2XxtpUTVkXjhM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LPzYRgFrvHZtoR8m7zKq9v
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FtyUeyR6PsEToydEJry05O
          claim_id: c_kX6mIZaNXAGu-nMkm4dY8b
          source_id: s_pZLMkH392WhsS13vtFdL6a
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第二十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LPzYRgFrvHZtoR8m7zKq9v
        status: active
        display_name: 王時槐
        merged_into_person_id: null
  other: []
---

# 王續友

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王續友，明人物。中国历代人物传记资料库（CBDB）以人物编号 308734 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王續友 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_LPzYRgFrvHZtoR8m7zKq9v | 王時槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王續友（CBDB 308734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308734&o=json)
