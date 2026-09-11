---
schema: wang-person/v1
id: p_peuBtCBGiGHrwbTwEdkk4p
status: active
merged_into: null
display_name: 王羽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JtYDJPKtoqFc9BhW1MHBcT
        subject_person_id: p_peuBtCBGiGHrwbTwEdkk4p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LS8z9etgDVkUhBkPWvTtPQ
          claim_id: c_JtYDJPKtoqFc9BhW1MHBcT
          source_id: s_vHJ5c55CAMypuBeucAYWyz
          stance: supports
          locator: CBDB:342020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342020）
          source: &a1
            id: s_vHJ5c55CAMypuBeucAYWyz
            source_type: api_record
            title: 中国历代人物传记资料库：王羽（CBDB 342020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342020&o=json
            external_identifier: CBDB:342020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hQ8PrFxJv3HbcfqddoMHZr
        subject_person_id: p_peuBtCBGiGHrwbTwEdkk4p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羽，明人物。明清進士進士，籍贯仁和，入仕進士。（中国历代人物传记资料库 CBDB 342020）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_STgUIyVTLFaxFNWb8CnYG2
          claim_id: c_hQ8PrFxJv3HbcfqddoMHZr
          source_id: s_vHJ5c55CAMypuBeucAYWyz
          stance: supports
          locator: CBDB:342020
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_sLfIThaSVDTm0ROG7z0w2W
        subject_person_id: p_peuBtCBGiGHrwbTwEdkk4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M1Vqh9qSK441cRUme92V1P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JOgULWM2EjMQUlJxgBx6dI
          claim_id: c_sLfIThaSVDTm0ROG7z0w2W
          source_id: s_KGADDmCCKinrEPsqPiphZg
          stance: supports
          locator: 錢塘縣志，lgid=219756：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KGADDmCCKinrEPsqPiphZg
            source_type: api_record
            title: 中国历代人物传记资料库：王宗賢（CBDB 700439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700439&o=json
            external_identifier: CBDB:700439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_M1Vqh9qSK441cRUme92V1P
        status: active
        display_name: 王宗賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王羽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羽 | accepted |
| bio.summary | 王羽，明人物。明清進士進士，籍贯仁和，入仕進士。（中国历代人物传记资料库 CBDB 342020） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_M1Vqh9qSK441cRUme92V1P | 王宗賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王羽（CBDB 342020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342020&o=json)
- [中国历代人物传记资料库：王宗賢（CBDB 700439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700439&o=json)
