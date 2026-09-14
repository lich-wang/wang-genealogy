---
schema: wang-person/v1
id: p_pZvZDWqN8fXFnFhqGjtXXD
status: active
merged_into: null
display_name: 王樽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5HqJWHaoLCm2ZGuojebcKZ
        subject_person_id: p_pZvZDWqN8fXFnFhqGjtXXD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4BEeeX3wD8FQ9nDX1FPBqB
          claim_id: c_5HqJWHaoLCm2ZGuojebcKZ
          source_id: s_K59U82CDPsS1ttf3vA52EQ
          stance: supports
          locator: CBDB:264280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264280）
          source: &a1
            id: s_K59U82CDPsS1ttf3vA52EQ
            source_type: api_record
            title: 中国历代人物传记资料库：王樽（CBDB 264280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264280&o=json
            external_identifier: CBDB:264280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Be8nEbJjVWFryYzc7kLHC9
        subject_person_id: p_pZvZDWqN8fXFnFhqGjtXXD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樽，明人物。景泰五年進士，籍贯太原。（中国历代人物传记资料库 CBDB 264280）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eZKXYQw2tKoSh-zBXLw4XL
          claim_id: c_Be8nEbJjVWFryYzc7kLHC9
          source_id: s_K59U82CDPsS1ttf3vA52EQ
          stance: supports
          locator: CBDB:264280
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nZLUA2hkcWvEBGokCcPeqD
        subject_person_id: p_58T6FS2HPdsESXyAWQ5HsZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pZvZDWqN8fXFnFhqGjtXXD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZqZDlO4TTy27q03E1C2MF1
          claim_id: c_nZLUA2hkcWvEBGokCcPeqD
          source_id: s_Kd2o05297TgdeYBezwvBN9
          stance: supports
          locator: CBDB：兄弟 王鑑（68835）之父／母 王吉甫
          quotation: null
          interpretation_note: 由兄弟关系推断：王樽 与 王鑑 为同胞（CBDB 记「兄」），王鑑 之父／母即 王樽 之父／母。
          source:
            id: s_Kd2o05297TgdeYBezwvBN9
            source_type: api_record
            title: 中国历代人物传记资料库：王樽（CBDB 264280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264280&o=json
            external_identifier: CBDB:264280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_58T6FS2HPdsESXyAWQ5HsZ
        status: active
        display_name: 王吉甫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rC6LCNv6u-VfFKvIE2EZDr
        subject_person_id: p_GBJny92BjTJrCUatL2dF1X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pZvZDWqN8fXFnFhqGjtXXD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7SeDBxHKt-4YzqVD4slguf
          claim_id: c_rC6LCNv6u-VfFKvIE2EZDr
          source_id: s_Kd2o05297TgdeYBezwvBN9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68835 王鑑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Kd2o05297TgdeYBezwvBN9
            source_type: api_record
            title: 中国历代人物传记资料库：王樽（CBDB 264280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264280&o=json
            external_identifier: CBDB:264280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GBJny92BjTJrCUatL2dF1X
        status: active
        display_name: 王鑑
        merged_into_person_id: null
---

# 王樽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樽 | accepted |
| bio.summary | 王樽，明人物。景泰五年進士，籍贯太原。（中国历代人物传记资料库 CBDB 264280） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_58T6FS2HPdsESXyAWQ5HsZ | 王吉甫 | accepted |
| other | p_GBJny92BjTJrCUatL2dF1X | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樽（CBDB 264280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264280&o=json)
