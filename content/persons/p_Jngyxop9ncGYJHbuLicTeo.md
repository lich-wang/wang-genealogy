---
schema: wang-person/v1
id: p_Jngyxop9ncGYJHbuLicTeo
status: active
merged_into: null
display_name: 王寍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RpFek54xDSgE6L89S4XNwo
        subject_person_id: p_Jngyxop9ncGYJHbuLicTeo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hG3issSN8r3h9F2WQL4B16
          claim_id: c_RpFek54xDSgE6L89S4XNwo
          source_id: s_8WuZf9XXDk1hZjgaUhAxc5
          stance: supports
          locator: CBDB:334170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334170）
          source: &a1
            id: s_8WuZf9XXDk1hZjgaUhAxc5
            source_type: api_record
            title: 中国历代人物传记资料库：王寍（CBDB 334170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334170&o=json
            external_identifier: CBDB:334170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v8gkE5YUsnEdMCN356ZUr5
        subject_person_id: p_Jngyxop9ncGYJHbuLicTeo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寍，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 334170）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Shx2gTmGBMxIndJhj7bg2d
          claim_id: c_v8gkE5YUsnEdMCN356ZUr5
          source_id: s_8WuZf9XXDk1hZjgaUhAxc5
          stance: supports
          locator: CBDB:334170
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
        id: c_7gtsHnmzqbjgm9bB-LRelx
        subject_person_id: p_Jngyxop9ncGYJHbuLicTeo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Que1Sc9ugp524zabUcC6Bk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IhLzT6mxeBeGnPViemSGNW
          claim_id: c_7gtsHnmzqbjgm9bB-LRelx
          source_id: s_8WuZf9XXDk1hZjgaUhAxc5
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Que1Sc9ugp524zabUcC6Bk
        status: active
        display_name: 王體復
        merged_into_person_id: null
  other: []
---

# 王寍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寍 | accepted |
| bio.summary | 王寍，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 334170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Que1Sc9ugp524zabUcC6Bk | 王體復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寍（CBDB 334170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334170&o=json)
