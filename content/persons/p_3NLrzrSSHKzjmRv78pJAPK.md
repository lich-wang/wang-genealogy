---
schema: wang-person/v1
id: p_3NLrzrSSHKzjmRv78pJAPK
status: active
merged_into: null
display_name: 王士逵
cbdb_id: 336303
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eQTZa73tw77FnR4F8qHLSe
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士逵，明人物。中国历代人物传记资料库（CBDB）以人物编号 336303 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_2zhVrr5oasw1cWq19GpKPw
          claim_id: c_eQTZa73tw77FnR4F8qHLSe
          source_id: s_ZEzLzBt8XxPVyNeRGY1FvK
          stance: supports
          locator: CBDB:336303
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZEzLzBt8XxPVyNeRGY1FvK
            source_type: api_record
            title: 中国历代人物传记资料库：王士逵（CBDB 336303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336303&o=json
            external_identifier: CBDB:336303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1jTHU9znWxAk957dG85tbJ
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9B3pgr2Qjjhf38ynQQCp9S
          claim_id: c_1jTHU9znWxAk957dG85tbJ
          source_id: s_ZEzLzBt8XxPVyNeRGY1FvK
          stance: supports
          locator: CBDB:336303
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_ZEzLzBt8XxPVyNeRGY1FvK
            source_type: api_record
            title: 中国历代人物传记资料库：王士逵（CBDB 336303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336303&o=json
            external_identifier: CBDB:336303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_99crtNrT2UbTVX9pUi1G07
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huZLz-wVMycE4IhqPGd_SN
          claim_id: c_99crtNrT2UbTVX9pUi1G07
          source_id: s_ZEzLzBt8XxPVyNeRGY1FvK
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_viaM6m196hS8EVYS6L8gg8
        status: active
        display_name: 王宣化
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士逵，明人物。中国历代人物传记资料库（CBDB）以人物编号 336303 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王士逵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_viaM6m196hS8EVYS6L8gg8 | 王宣化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士逵（CBDB 336303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336303&o=json)
