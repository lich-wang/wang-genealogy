---
schema: wang-person/v1
id: p_7sc6BnQ7qa6EEb1N1Hgr1C
status: active
merged_into: null
display_name: 王士寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ijrPfP11QRRcFZgPtrUcfT
        subject_person_id: p_7sc6BnQ7qa6EEb1N1Hgr1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y74mHiVZ711z7GVJyXDtNN
          claim_id: c_ijrPfP11QRRcFZgPtrUcfT
          source_id: s_1Z4ndMzgxvMwWP8dj5GrkH
          stance: supports
          locator: CBDB:192495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192495）
          source: &a1
            id: s_1Z4ndMzgxvMwWP8dj5GrkH
            source_type: api_record
            title: 中国历代人物传记资料库：王士寧（CBDB 192495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192495&o=json
            external_identifier: CBDB:192495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_APytiveBHb6HMuZ6xaXJEd
        subject_person_id: p_7sc6BnQ7qa6EEb1N1Hgr1C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_54QyL6Z7ajZ3spS9145cTA
          claim_id: c_APytiveBHb6HMuZ6xaXJEd
          source_id: s_1Z4ndMzgxvMwWP8dj5GrkH
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
        id: c_fxCp85Sss5zrNxVovEXh9K
        subject_person_id: p_7sc6BnQ7qa6EEb1N1Hgr1C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士寧（卒于820年），史料所见人物。本项目依据《中国历代人物传记资料库：王士寧（CBDB 192495）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g5zktKK4rgpKRGoAZuQjPc
          claim_id: c_fxCp85Sss5zrNxVovEXh9K
          source_id: s_1Z4ndMzgxvMwWP8dj5GrkH
          stance: supports
          locator: CBDB:192495
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_clPpEphMhKhKZXMhnNFKi2
        subject_person_id: p_GyDFNM8h3KCT9MHvDUXLC2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7sc6BnQ7qa6EEb1N1Hgr1C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TSlE7zhEVgco2cawd6_Sb_
          claim_id: c_clPpEphMhKhKZXMhnNFKi2
          source_id: s_1Z4ndMzgxvMwWP8dj5GrkH
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GyDFNM8h3KCT9MHvDUXLC2
        status: active
        display_name: 王惟誠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士寧 | accepted |
| death.date | 820年 | accepted |
| bio.summary | 王士寧（卒于820年），史料所见人物。本项目依据《中国历代人物传记资料库：王士寧（CBDB 192495）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GyDFNM8h3KCT9MHvDUXLC2 | 王惟誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士寧（CBDB 192495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192495&o=json)
