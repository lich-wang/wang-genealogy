---
schema: wang-person/v1
id: p_6nLYqdsTahTFStda3q5E9n
status: active
merged_into: null
display_name: 王滿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8iZa33PzMWwzYDoN3KM73p
        subject_person_id: p_6nLYqdsTahTFStda3q5E9n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PDeg9B1nX8W1cXwqkXNNMj
          claim_id: c_8iZa33PzMWwzYDoN3KM73p
          source_id: s_gJNT8WbDRePkKGEBiYs59L
          stance: supports
          locator: CBDB:223153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223153）
          source: &a1
            id: s_gJNT8WbDRePkKGEBiYs59L
            source_type: api_record
            title: 中国历代人物传记资料库：王滿（CBDB 223153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223153&o=json
            external_identifier: CBDB:223153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.400Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8mwybt9dNiZAxmTEA1Mwot
        subject_person_id: p_6nLYqdsTahTFStda3q5E9n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滿，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 223153）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ur1gLC86Ukl6UJH4-y51dy
          claim_id: c_8mwybt9dNiZAxmTEA1Mwot
          source_id: s_gJNT8WbDRePkKGEBiYs59L
          stance: supports
          locator: CBDB:223153
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
        id: c_d8HlVqqsh405qymqnoSYig
        subject_person_id: p_6nLYqdsTahTFStda3q5E9n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rHZA1vHL86M3xxNwokeU6D
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AMI-dI4hTuw2svSsqYqgnm
          claim_id: c_d8HlVqqsh405qymqnoSYig
          source_id: s_gJNT8WbDRePkKGEBiYs59L
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第二十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rHZA1vHL86M3xxNwokeU6D
        status: active
        display_name: 王時濟
        merged_into_person_id: null
  other: []
---

# 王滿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滿 | accepted |
| bio.summary | 王滿，明人物。萬曆十一年進士。（中国历代人物传记资料库 CBDB 223153） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rHZA1vHL86M3xxNwokeU6D | 王時濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王滿（CBDB 223153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223153&o=json)
