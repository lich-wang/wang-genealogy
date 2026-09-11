---
schema: wang-person/v1
id: p_5S7FA1n8vFnm7L7uVG5FbH
status: active
merged_into: null
display_name: 連氏
revision: 1
cbdb_id: 216209
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_l-9yY7Ypxm1p-6cm2VUeuM
        subject_person_id: p_5S7FA1n8vFnm7L7uVG5FbH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 連氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2bAYy8Untku35Cw69qMx5Y
          claim_id: c_l-9yY7Ypxm1p-6cm2VUeuM
          source_id: s_H9clHjMsD2m_ncl7yPfrmb
          stance: supports
          locator: CBDB:216209
          quotation: null
          interpretation_note: CBDB 明确记录的王約配偶
          source: &a1
            id: s_H9clHjMsD2m_ncl7yPfrmb
            source_type: api_record
            title: 中国历代人物传记资料库：連氏(王約妻)（CBDB 216209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216209&o=json
            external_identifier: CBDB:216209
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
        id: c_YK9wlY54UAo2yaF_vAiw4R
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5S7FA1n8vFnm7L7uVG5FbH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P6lWUmYqudL_EFsw9BN26B
          claim_id: c_YK9wlY54UAo2yaF_vAiw4R
          source_id: s_H9clHjMsD2m_ncl7yPfrmb
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J55afBgCkqtPSYRig4M9VL
        status: active
        display_name: 王約
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 連氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 連氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_J55afBgCkqtPSYRig4M9VL | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：連氏(王約妻)（CBDB 216209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216209&o=json)
