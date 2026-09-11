---
schema: wang-person/v1
id: p_m6EPDVJm31vYFqNffWhKzt
status: active
merged_into: null
display_name: 黃氏
revision: 1
cbdb_id: 271462
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o9UgBpz5Qo41gv-0nQC1aT
        subject_person_id: p_m6EPDVJm31vYFqNffWhKzt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃氏，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 271462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jfzw5lcLYYhOIHwxBOncgI
          claim_id: c_o9UgBpz5Qo41gv-0nQC1aT
          source_id: s_ecbczwB_rkJfdaqnJW3Kaa
          stance: supports
          locator: CBDB:271462
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ecbczwB_rkJfdaqnJW3Kaa
            source_type: api_record
            title: 中国历代人物传记资料库：黃氏(王稽妻)（CBDB 271462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271462&o=json
            external_identifier: CBDB:271462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ypfaPq-T147-d35JBoSUte
        subject_person_id: p_m6EPDVJm31vYFqNffWhKzt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 黃氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AMZjTvaDteObMIOkYyavFj
          claim_id: c_ypfaPq-T147-d35JBoSUte
          source_id: s_ecbczwB_rkJfdaqnJW3Kaa
          stance: supports
          locator: CBDB:271462
          quotation: null
          interpretation_note: CBDB 明确记录的王稽配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_OjqKuLC2dGpa4F2rrtBtMf
        subject_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_m6EPDVJm31vYFqNffWhKzt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J9b7Hpi6nC1a_nVFXcshdq
          claim_id: c_OjqKuLC2dGpa4F2rrtBtMf
          source_id: s_ecbczwB_rkJfdaqnJW3Kaa
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3vKgPJZPmMS9ZpS2a75EVV
        status: active
        display_name: 王稽
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 黃氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 黃氏，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 271462） | accepted |
| name.primary | 黃氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3vKgPJZPmMS9ZpS2a75EVV | 王稽 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃氏(王稽妻)（CBDB 271462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271462&o=json)
