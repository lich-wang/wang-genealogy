---
schema: wang-person/v1
id: p_VE3g4LsZqpKR3uB35Wnvxt
status: active
merged_into: null
display_name: 王忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d2uGd8YbNrSAM8AMuAzYf9
        subject_person_id: p_VE3g4LsZqpKR3uB35Wnvxt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_My2PPmDasTQ22CpruVqeyW
          claim_id: c_d2uGd8YbNrSAM8AMuAzYf9
          source_id: s_x3FYJNB7SpFkeHncpKMsgD
          stance: supports
          locator: CBDB:298680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298680）
          source: &a1
            id: s_x3FYJNB7SpFkeHncpKMsgD
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 298680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298680&o=json
            external_identifier: CBDB:298680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Kz1R9PvYo9W8vnVCoqQ19
        subject_person_id: p_VE3g4LsZqpKR3uB35Wnvxt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CG87pSbaCSSBgUbVhdUDc3
          claim_id: c_7Kz1R9PvYo9W8vnVCoqQ19
          source_id: s_x3FYJNB7SpFkeHncpKMsgD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_3VAN07NVVnoDm9E24q5A-k
        subject_person_id: p_VE3g4LsZqpKR3uB35Wnvxt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KJDrc1krfKZE4DlZSltCea
          claim_id: c_3VAN07NVVnoDm9E24q5A-k
          source_id: s_T83fogLUrutThepXCGjKi8
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第八十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T83fogLUrutThepXCGjKi8
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 198648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198648&o=json
            external_identifier: CBDB:198648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26otXuRvyNkWGBZaSdCQ3z
        status: active
        display_name: 王翰
        merged_into_person_id: null
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_26otXuRvyNkWGBZaSdCQ3z | 王翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 198648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198648&o=json)
- [中国历代人物传记资料库：王忠（CBDB 298680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298680&o=json)
