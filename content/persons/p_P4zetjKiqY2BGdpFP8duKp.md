---
schema: wang-person/v1
id: p_P4zetjKiqY2BGdpFP8duKp
status: active
merged_into: null
display_name: 王之麒
cbdb_id: 216057
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v9vVHnKQg2BRoEKMmhkDuL
        subject_person_id: p_P4zetjKiqY2BGdpFP8duKp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之麒，明人物。萬曆五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 216057）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_t658pv_BoE6idW4cP2Cc8e
          claim_id: c_v9vVHnKQg2BRoEKMmhkDuL
          source_id: s_pHpYDCpok48bkR6F2ckmNn
          stance: supports
          locator: CBDB:216057
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pHpYDCpok48bkR6F2ckmNn
            source_type: api_record
            title: 中国历代人物传记资料库：王之麒（CBDB 216057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216057&o=json
            external_identifier: CBDB:216057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Mux7UjJG3Q21QD2ZqGPkR
        subject_person_id: p_P4zetjKiqY2BGdpFP8duKp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eTdy83EXzmRjZM4PwPwna6
          claim_id: c_3Mux7UjJG3Q21QD2ZqGPkR
          source_id: s_pHpYDCpok48bkR6F2ckmNn
          stance: supports
          locator: CBDB:216057
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5zmHsLUxIwkOlQEGgrtF0E
        subject_person_id: p_ACyEmNR3JYfTVCeFjd3Md9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P4zetjKiqY2BGdpFP8duKp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJ-3sNYvhOwjOm5wHUw8H9
          claim_id: c_5zmHsLUxIwkOlQEGgrtF0E
          source_id: s_bhOMx88nSv8iEbWbbKwclu
          stance: supports
          locator: CBDB：兄弟 王之麟（338691）之父／母 王萬齡
          quotation: null
          interpretation_note: 由兄弟关系推断：王之麒 与 王之麟 为同胞（CBDB 记「弟」），王之麟 之父／母即 王之麒 之父／母。
          source:
            id: s_bhOMx88nSv8iEbWbbKwclu
            source_type: api_record
            title: 中国历代人物传记资料库：王之麒（CBDB 216057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216057&o=json
            external_identifier: CBDB:216057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ACyEmNR3JYfTVCeFjd3Md9
        status: active
        display_name: 王萬齡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Bm1gzhOr6H24cONyYbxVG1
        subject_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P4zetjKiqY2BGdpFP8duKp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XjpcQeRnW8hdC10Gas9en8
          claim_id: c_Bm1gzhOr6H24cONyYbxVG1
          source_id: s_bhOMx88nSv8iEbWbbKwclu
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 338691 王之麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bhOMx88nSv8iEbWbbKwclu
            source_type: api_record
            title: 中国历代人物传记资料库：王之麒（CBDB 216057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216057&o=json
            external_identifier: CBDB:216057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EbU5HxFXjQt3D8gkdNvhGE
        status: active
        display_name: 王之麟
        merged_into_person_id: null
---

# 王之麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之麒，明人物。萬曆五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 216057） | accepted |
| name.primary | 王之麒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ACyEmNR3JYfTVCeFjd3Md9 | 王萬齡 | accepted |
| other | p_EbU5HxFXjQt3D8gkdNvhGE | 王之麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之麒（CBDB 216057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216057&o=json)
