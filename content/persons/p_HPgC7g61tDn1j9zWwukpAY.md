---
schema: wang-person/v1
id: p_HPgC7g61tDn1j9zWwukpAY
status: active
merged_into: null
display_name: 馬氏
revision: 1
cbdb_id: 253906
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c__1WoKN-mWaOhu50VGlSLe5
        subject_person_id: p_HPgC7g61tDn1j9zWwukpAY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馬氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qa-EYEeeYZewAOB00IgoO7
          claim_id: c__1WoKN-mWaOhu50VGlSLe5
          source_id: s_-PHRpKCpiqMQP_kBCfHcRJ
          stance: supports
          locator: CBDB:253906
          quotation: null
          interpretation_note: CBDB 明确记录的王佐配偶
          source: &a1
            id: s_-PHRpKCpiqMQP_kBCfHcRJ
            source_type: api_record
            title: 中国历代人物传记资料库：馬氏(王佐妻)（CBDB 253906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253906&o=json
            external_identifier: CBDB:253906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_jctCOn87jvPbxqe5d6QJeX
        subject_person_id: p_2yQZFqgpXJgeoQtn7WfsC5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HPgC7g61tDn1j9zWwukpAY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nGKOy_PvfHTzJPGaB1No63
          claim_id: c_jctCOn87jvPbxqe5d6QJeX
          source_id: s_-PHRpKCpiqMQP_kBCfHcRJ
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第二百三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2yQZFqgpXJgeoQtn7WfsC5
        status: active
        display_name: 王佐
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 馬氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 馬氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2yQZFqgpXJgeoQtn7WfsC5 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：馬氏(王佐妻)（CBDB 253906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253906&o=json)
