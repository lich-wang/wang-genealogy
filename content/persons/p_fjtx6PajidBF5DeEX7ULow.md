---
schema: wang-person/v1
id: p_fjtx6PajidBF5DeEX7ULow
status: active
merged_into: null
display_name: 王祖道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tRLmreU5i4QUeygPdZaJK1
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CsBzJuzohNFC7Xi5FAJnqK
          claim_id: c_tRLmreU5i4QUeygPdZaJK1
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: CBDB:1902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1902）
          source: &a1
            id: s_DKwEihoKaeDdokgXg515QL
            source_type: api_record
            title: 中国历代人物传记资料库：王祖道（CBDB 1902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json
            external_identifier: CBDB:1902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QGZFrC316Nz4Mda6L5j3o4
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1108年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ANz4y2G4fCaCjE5NsAPp3
          claim_id: c_QGZFrC316Nz4Mda6L5j3o4
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pBarY6ACEd4D8JXZQhXzNi
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1PeDphUMWkJ9EYpd2B9X5b
          claim_id: c_pBarY6ACEd4D8JXZQhXzNi
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-LGpBOhsFSbjhTpNboMs8W
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z5u3jCA88DDJrzfkRCxrEK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_epbFr9kZN67k7AsmDtW61j
          claim_id: c_-LGpBOhsFSbjhTpNboMs8W
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1627：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z5u3jCA88DDJrzfkRCxrEK
        status: active
        display_name: 王孝先
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_55Gw-J8ANHaC8DUVloT-1Q
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Qa61NZVoSxfEH9opac7xGu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E0DLutYDx1zy0LjqGJxfLB
          claim_id: c_55Gw-J8ANHaC8DUVloT-1Q
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王西應 ⇄ 曾祖 王祖道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Qa61NZVoSxfEH9opac7xGu
        status: active
        display_name: 王西應
        merged_into_person_id: null
    - claim:
        id: c_h5wQfhGPVVLshqKkYdcyJk
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yJlnOvMQ041D6t8jmBB0kl
          claim_id: c_h5wQfhGPVVLshqKkYdcyJk
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王禔 ⇄ 高祖;四世祖 王祖道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_hEEpn7U7EKTTeFP3ixWWbm
        status: active
        display_name: 王禔
        merged_into_person_id: null
    - claim:
        id: c_nf3ctKDf1ZTjblo6kVtu6I
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dimTrX27PvxL2MX3Rq63kM
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rapuYx8BFS-ys-ccmC99Wf
          claim_id: c_nf3ctKDf1ZTjblo6kVtu6I
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王龍從 ⇄ 高祖;四世祖 王祖道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_dimTrX27PvxL2MX3Rq63kM
        status: active
        display_name: 王龍從
        merged_into_person_id: null
    - claim:
        id: c_TQHG2ye5GtlwLWjunv9SQI
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_y2SSgfQnNofghB5exGpzn6
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XyQcmJ_ny0ZZ1IyqXO5ief
          claim_id: c_TQHG2ye5GtlwLWjunv9SQI
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王龍應 ⇄ 高祖;四世祖 王祖道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_y2SSgfQnNofghB5exGpzn6
        status: active
        display_name: 王龍應
        merged_into_person_id: null
  other: []
---

# 王祖道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖道 | accepted |
| death.date | 1108年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_z5u3jCA88DDJrzfkRCxrEK | 王孝先 | accepted |
| descendants | p_Qa61NZVoSxfEH9opac7xGu | 王西應 | accepted |
| descendants | p_hEEpn7U7EKTTeFP3ixWWbm | 王禔 | accepted |
| descendants | p_dimTrX27PvxL2MX3Rq63kM | 王龍從 | accepted |
| descendants | p_y2SSgfQnNofghB5exGpzn6 | 王龍應 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祖道（CBDB 1902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json)
