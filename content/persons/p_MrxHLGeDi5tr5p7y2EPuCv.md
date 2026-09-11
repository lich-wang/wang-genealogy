---
schema: wang-person/v1
id: p_MrxHLGeDi5tr5p7y2EPuCv
status: active
merged_into: null
display_name: 王山
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Na5sGHteTG2aC3V7MyJUs8
        subject_person_id: p_MrxHLGeDi5tr5p7y2EPuCv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7RZvFpEZk7vEDxfhdcUbm3
          claim_id: c_Na5sGHteTG2aC3V7MyJUs8
          source_id: s_5h9Gdhhiw7L33Ujo7HV58k
          stance: supports
          locator: CBDB:211979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211979）
          source: &a1
            id: s_5h9Gdhhiw7L33Ujo7HV58k
            source_type: api_record
            title: 中国历代人物传记资料库：王山（CBDB 211979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211979&o=json
            external_identifier: CBDB:211979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oVscVgqVQ9LcQRb9XDFVE2
        subject_person_id: p_MrxHLGeDi5tr5p7y2EPuCv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王山，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 211979）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ryxQUysf_j4yQSrlV3KMnf
          claim_id: c_oVscVgqVQ9LcQRb9XDFVE2
          source_id: s_5h9Gdhhiw7L33Ujo7HV58k
          stance: supports
          locator: CBDB:211979
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_RksMyzDz9Ely0Tb-nd9ofU
        subject_person_id: p_MrxHLGeDi5tr5p7y2EPuCv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_s3BG2bed1QUGktV4Jrg4UH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-njGGN1gDpn2cwesg3CpK7
          claim_id: c_RksMyzDz9Ely0Tb-nd9ofU
          source_id: s_5h9Gdhhiw7L33Ujo7HV58k
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s3BG2bed1QUGktV4Jrg4UH
        status: active
        display_name: 王學書
        merged_into_person_id: null
  other: []
---

# 王山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王山 | accepted |
| bio.summary | 王山，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 211979） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_s3BG2bed1QUGktV4Jrg4UH | 王學書 | accepted |

## 外部来源

- [中国历代人物传记资料库：王山（CBDB 211979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211979&o=json)
