---
schema: wang-person/v1
id: p_Jmv52evRijFLLQxKz1ZDNL
status: active
merged_into: null
display_name: 邢氏
revision: 1
cbdb_id: 312872
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cbihFVLA51j-JtTNTNLFKR
        subject_person_id: p_Jmv52evRijFLLQxKz1ZDNL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 邢氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BwNnl8CdNewThdpH3rF55_
          claim_id: c_cbihFVLA51j-JtTNTNLFKR
          source_id: s_WeCBIhGNK1-EjBivtC4Epw
          stance: supports
          locator: CBDB:312872
          quotation: null
          interpretation_note: CBDB 明确记录的王極配偶
          source: &a1
            id: s_WeCBIhGNK1-EjBivtC4Epw
            source_type: api_record
            title: 中国历代人物传记资料库：邢氏(王極妻)（CBDB 312872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312872&o=json
            external_identifier: CBDB:312872
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
        id: c_mHDoexafn9QEIs9bys5LLr
        subject_person_id: p_3m7CP7DGKJ8uiCH5xxVdzo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Jmv52evRijFLLQxKz1ZDNL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_patu10jgEnWZFqqbg0hn04
          claim_id: c_mHDoexafn9QEIs9bys5LLr
          source_id: s_WeCBIhGNK1-EjBivtC4Epw
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3m7CP7DGKJ8uiCH5xxVdzo
        status: active
        display_name: 王極
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 邢氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 邢氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3m7CP7DGKJ8uiCH5xxVdzo | 王極 | accepted |

## 外部来源

- [中国历代人物传记资料库：邢氏(王極妻)（CBDB 312872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312872&o=json)
