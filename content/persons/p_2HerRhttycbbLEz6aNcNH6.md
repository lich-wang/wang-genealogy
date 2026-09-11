---
schema: wang-person/v1
id: p_2HerRhttycbbLEz6aNcNH6
status: active
merged_into: null
display_name: 王瓊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DCtGdUqAy5V6cKecqeLMLW
        subject_person_id: p_2HerRhttycbbLEz6aNcNH6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RqhFTJpnQpaP4d6vw1Y3QG
          claim_id: c_DCtGdUqAy5V6cKecqeLMLW
          source_id: s_buwC6Xo3FSxnC2w51jBQzW
          stance: supports
          locator: CBDB:68264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68264）
          source: &a1
            id: s_buwC6Xo3FSxnC2w51jBQzW
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 68264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68264&o=json
            external_identifier: CBDB:68264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.063Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mrsRnscZ99MWebH3MxzRzt
        subject_person_id: p_2HerRhttycbbLEz6aNcNH6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1459年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vUynv7V1QGtuTv37AzvcLK
          claim_id: c_mrsRnscZ99MWebH3MxzRzt
          source_id: s_buwC6Xo3FSxnC2w51jBQzW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_t7H3AJoPfnVuBu9FmwpNbG
        subject_person_id: p_2HerRhttycbbLEz6aNcNH6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y4cvKXgsp676UjG2uSEiPe
          claim_id: c_t7H3AJoPfnVuBu9FmwpNbG
          source_id: s_buwC6Xo3FSxnC2w51jBQzW
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
        id: c_8hQdSn2TLHf1ZwRwThiLwA
        subject_person_id: p_2HerRhttycbbLEz6aNcNH6
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
        - id: cs_FSzQnq33EopWquPQGJi92k
          claim_id: c_8hQdSn2TLHf1ZwRwThiLwA
          source_id: s_buwC6Xo3FSxnC2w51jBQzW
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
        id: c_pbFrd-FnGct99th-DVwSIX
        subject_person_id: p_2HerRhttycbbLEz6aNcNH6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wrdhLZeCvH9L1aGLKPq3H1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y5NjVDcNJF7cs5r_849NlO
          claim_id: c_pbFrd-FnGct99th-DVwSIX
          source_id: s_buwC6Xo3FSxnC2w51jBQzW
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11927：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wrdhLZeCvH9L1aGLKPq3H1
        status: active
        display_name: 王如忠
        merged_into_person_id: null
    - claim:
        id: c_34jfSgblLZo4ShCXaGE2zC
        subject_person_id: p_2HerRhttycbbLEz6aNcNH6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r8YjNLhAQ8K3Eo5127r562
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X6jSgsBTYfkOn1UxFbnTzV
          claim_id: c_34jfSgblLZo4ShCXaGE2zC
          source_id: s_buwC6Xo3FSxnC2w51jBQzW
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11927：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_r8YjNLhAQ8K3Eo5127r562
        status: active
        display_name: 王胡翰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_duPbjlHZXC0ceWJ9tyNZeZ
        subject_person_id: p_2HerRhttycbbLEz6aNcNH6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FS8ShMXmMoG7guR1LeJDkz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KsFAADmFyjn7OOHmEQ0_Kj
          claim_id: c_duPbjlHZXC0ceWJ9tyNZeZ
          source_id: s_buwC6Xo3FSxnC2w51jBQzW
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11927：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FS8ShMXmMoG7guR1LeJDkz
        status: active
        display_name: 王壯
        merged_into_person_id: null
  other: []
---

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| birth.date | 1459年 | accepted |
| death.date | 1532年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wrdhLZeCvH9L1aGLKPq3H1 | 王如忠 | accepted |
| children | p_r8YjNLhAQ8K3Eo5127r562 | 王胡翰 | accepted |
| descendants | p_FS8ShMXmMoG7guR1LeJDkz | 王壯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 68264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68264&o=json)
