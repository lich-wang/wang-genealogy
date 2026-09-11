---
schema: wang-person/v1
id: p_EJoYUDSpGy9qXR9GD9MGoz
status: active
merged_into: null
display_name: 王偊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E9Fe5KboxyMYJ6q4nWBvBY
        subject_person_id: p_EJoYUDSpGy9qXR9GD9MGoz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qWPCjC4C8T9NfzGS6VsU1v
          claim_id: c_E9Fe5KboxyMYJ6q4nWBvBY
          source_id: s_2K5VR8nCLCEAuGANyaiK6H
          stance: supports
          locator: CBDB:437515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437515）
          source: &a1
            id: s_2K5VR8nCLCEAuGANyaiK6H
            source_type: api_record
            title: 中国历代人物传记资料库：王偊（CBDB 437515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437515&o=json
            external_identifier: CBDB:437515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BpZgrCmPg1r17FeZx4HLoM
        subject_person_id: p_EJoYUDSpGy9qXR9GD9MGoz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偊，宋人物。籍贯分水，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 437515）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q5UZGhg0B4CCXB3AeOM2U6
          claim_id: c_BpZgrCmPg1r17FeZx4HLoM
          source_id: s_2K5VR8nCLCEAuGANyaiK6H
          stance: supports
          locator: CBDB:437515
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gDmYixlsQ-TOfCu4aTAIW9
        subject_person_id: p_7MpLgUGSue2W6Ccsh9gfNb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EJoYUDSpGy9qXR9GD9MGoz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n1IcJqN8kSYUqxqAvJ_JRG
          claim_id: c_gDmYixlsQ-TOfCu4aTAIW9
          source_id: s_rZJWnUa2z8Emu46wDh3zmm
          stance: supports
          locator: 呂祖謙全集，11.175：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rZJWnUa2z8Emu46wDh3zmm
            source_type: api_record
            title: 中国历代人物传记资料库：王日就（CBDB 38137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38137&o=json
            external_identifier: CBDB:38137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.077Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7MpLgUGSue2W6Ccsh9gfNb
        status: active
        display_name: 王日就
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王偊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偊 | accepted |
| bio.summary | 王偊，宋人物。籍贯分水，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 437515） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7MpLgUGSue2W6Ccsh9gfNb | 王日就 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日就（CBDB 38137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38137&o=json)
- [中国历代人物传记资料库：王偊（CBDB 437515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437515&o=json)
