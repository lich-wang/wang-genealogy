---
schema: wang-person/v1
id: p_9S2w6b4DijocJRcnior3mB
status: active
merged_into: null
display_name: 王翰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i1KYzrprRQLBvs1AasuTv8
        subject_person_id: p_9S2w6b4DijocJRcnior3mB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WuGmjk6BEtbRNbn76N1y3J
          claim_id: c_i1KYzrprRQLBvs1AasuTv8
          source_id: s_tLp46TzGTktUBoo9UBRr1N
          stance: supports
          locator: CBDB:34476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34476）
          source: &a1
            id: s_tLp46TzGTktUBoo9UBRr1N
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 34476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34476&o=json
            external_identifier: CBDB:34476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1caxCLXHHRrqKvBk3Uu1ER
        subject_person_id: p_9S2w6b4DijocJRcnior3mB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1378年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sXy4GBJs32yHNZZJATQEQM
          claim_id: c_1caxCLXHHRrqKvBk3Uu1ER
          source_id: s_tLp46TzGTktUBoo9UBRr1N
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
        id: c_k4rEysa4o3NZTAcx1t4h2v
        subject_person_id: p_9S2w6b4DijocJRcnior3mB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qkRpsSAgX6iPnQA2re74fm
          claim_id: c_k4rEysa4o3NZTAcx1t4h2v
          source_id: s_tLp46TzGTktUBoo9UBRr1N
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
        id: c_8ZLUOkULNfx2w7RE4qcTDO
        subject_person_id: p_9S2w6b4DijocJRcnior3mB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q15taJ6Qzyfthom297Zfcv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K0DlItJtVNng1F3jqsWrZS
          claim_id: c_8ZLUOkULNfx2w7RE4qcTDO
          source_id: s_tLp46TzGTktUBoo9UBRr1N
          stance: supports
          locator: CBDB 双向互证（子 王稱 ⇄ 父 王翰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Q15taJ6Qzyfthom297Zfcv
        status: active
        display_name: 王稱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| death.date | 1378年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Q15taJ6Qzyfthom297Zfcv | 王稱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 34476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34476&o=json)
