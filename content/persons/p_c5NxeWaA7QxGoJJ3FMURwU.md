---
schema: wang-person/v1
id: p_c5NxeWaA7QxGoJJ3FMURwU
status: active
merged_into: null
display_name: 王守愚
cbdb_id: 514451
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SFAaKRGWDp9PDHxQvSZHLA
        subject_person_id: p_c5NxeWaA7QxGoJJ3FMURwU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守愚，清人物。中国历代人物传记资料库（CBDB）以人物编号 514451 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_SmUGLGjFLUItouI3Z-zGlj
          claim_id: c_SFAaKRGWDp9PDHxQvSZHLA
          source_id: s_g4ad29hBMCnyeiw14UbDDs
          stance: supports
          locator: CBDB:514451
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_g4ad29hBMCnyeiw14UbDDs
            source_type: api_record
            title: 中国历代人物传记资料库：王守愚（CBDB 514451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514451&o=json
            external_identifier: CBDB:514451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_djqimcDzgYAfegXMgTeqAJ
        subject_person_id: p_c5NxeWaA7QxGoJJ3FMURwU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守愚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SboKaspxNX7FePjXT2WyTo
          claim_id: c_djqimcDzgYAfegXMgTeqAJ
          source_id: s_g4ad29hBMCnyeiw14UbDDs
          stance: supports
          locator: CBDB:514451
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_g4ad29hBMCnyeiw14UbDDs
            source_type: api_record
            title: 中国历代人物传记资料库：王守愚（CBDB 514451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514451&o=json
            external_identifier: CBDB:514451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
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
  ancestors:
    - claim:
        id: c_58IivdkIbKPwrI4daX6Atz
        subject_person_id: p_Py2jbUA79syka6JajgX2GH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_c5NxeWaA7QxGoJJ3FMURwU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O2OvBLjwzejCfvDsUXGh1c
          claim_id: c_58IivdkIbKPwrI4daX6Atz
          source_id: s_fFA9vAN1NmcpsBXnJbP6NV
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），441：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fFA9vAN1NmcpsBXnJbP6NV
            source_type: api_record
            title: 中国历代人物传记资料库：王懿德（CBDB 57222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57222&o=json
            external_identifier: CBDB:57222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Py2jbUA79syka6JajgX2GH
        status: active
        display_name: 王懿德
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王守愚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守愚，清人物。中国历代人物传记资料库（CBDB）以人物编号 514451 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王守愚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Py2jbUA79syka6JajgX2GH | 王懿德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守愚（CBDB 514451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514451&o=json)
- [中国历代人物传记资料库：王懿德（CBDB 57222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57222&o=json)
