---
schema: wang-person/v1
id: p_Yep3jv444A6aFd4NH6cndv
status: active
merged_into: null
display_name: 王幼貞
cbdb_id: 70002
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q56xS3cmfBaRJvL7FGChwU
        subject_person_id: p_Yep3jv444A6aFd4NH6cndv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幼貞，清人物。中国历代人物传记资料库（CBDB）以人物编号 70002 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_sBr4GiKmzGuTeJsPfySriL
          claim_id: c_q56xS3cmfBaRJvL7FGChwU
          source_id: s_Jg6kU1Exj5NrEytrJz4ncG
          stance: supports
          locator: CBDB:70002
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_Jg6kU1Exj5NrEytrJz4ncG
            source_type: api_record
            title: 中国历代人物传记资料库：王幼貞（CBDB 70002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70002&o=json
            external_identifier: CBDB:70002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YcJdfPmCYenYbqaCQsfK4n
        subject_person_id: p_Yep3jv444A6aFd4NH6cndv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幼貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tBATwdGSyKCDrpDGWAZFRd
          claim_id: c_YcJdfPmCYenYbqaCQsfK4n
          source_id: s_Jg6kU1Exj5NrEytrJz4ncG
          stance: supports
          locator: CBDB:70002
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_Jg6kU1Exj5NrEytrJz4ncG
            source_type: api_record
            title: 中国历代人物传记资料库：王幼貞（CBDB 70002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70002&o=json
            external_identifier: CBDB:70002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
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
        id: c_0DFmH3w0PK6W_p8rIwJTLp
        subject_person_id: p_Yep3jv444A6aFd4NH6cndv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FtizW54PniU6KVxX6tkpCC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tupdrJjRssnmQ0FhRHBv_P
          claim_id: c_0DFmH3w0PK6W_p8rIwJTLp
          source_id: s_CFfEHk-bK1giP5mItbjccW
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1346, HuWenKai #231：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CFfEHk-bK1giP5mItbjccW
            source_type: api_record
            title: 中国历代人物传记资料库：江鰲（CBDB 70003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70003&o=json
            external_identifier: CBDB:70003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FtizW54PniU6KVxX6tkpCC
        status: active
        display_name: 江鰲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王幼貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王幼貞，清人物。中国历代人物传记资料库（CBDB）以人物编号 70002 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王幼貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FtizW54PniU6KVxX6tkpCC | 江鰲 | accepted |

## 外部来源

- [中国历代人物传记资料库：江鰲（CBDB 70003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70003&o=json)
- [中国历代人物传记资料库：王幼貞（CBDB 70002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70002&o=json)
