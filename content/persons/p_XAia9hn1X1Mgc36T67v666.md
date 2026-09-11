---
schema: wang-person/v1
id: p_XAia9hn1X1Mgc36T67v666
status: active
merged_into: null
display_name: 王沂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4hyqvk8gHpDJnFtDkckFoz
        subject_person_id: p_XAia9hn1X1Mgc36T67v666
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wDhAn6Mn19eig7iS8U5p8y
          claim_id: c_4hyqvk8gHpDJnFtDkckFoz
          source_id: s_zBSrBeH33q2DPVysFse7Rz
          stance: supports
          locator: CBDB:386293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386293）
          source: &a1
            id: s_zBSrBeH33q2DPVysFse7Rz
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 386293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386293&o=json
            external_identifier: CBDB:386293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gE4a8EaHY72tb1Jg7AoWqr
        subject_person_id: p_XAia9hn1X1Mgc36T67v666
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ghyZnHHr7aTc2q5QfcAYLK
          claim_id: c_gE4a8EaHY72tb1Jg7AoWqr
          source_id: s_zBSrBeH33q2DPVysFse7Rz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bFGtjHSYinqYeadw90wgeW
        subject_person_id: p_yPaZGPPMfNV1vZCbGnNijM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XAia9hn1X1Mgc36T67v666
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_00a3ZdGQ2YoTgNtqAml0B6
          claim_id: c_bFGtjHSYinqYeadw90wgeW
          source_id: s_zBSrBeH33q2DPVysFse7Rz
          stance: supports
          locator: CBDB 双向互证（父 王囦金 ⇄ 子 王沂）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_yPaZGPPMfNV1vZCbGnNijM
        status: active
        display_name: 王囦金
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沂 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yPaZGPPMfNV1vZCbGnNijM | 王囦金 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沂（CBDB 386293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386293&o=json)
