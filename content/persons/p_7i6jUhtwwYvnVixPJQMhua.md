---
schema: wang-person/v1
id: p_7i6jUhtwwYvnVixPJQMhua
status: active
merged_into: null
display_name: 王元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yxx2C5wPvJnKqNihFZHfSi
        subject_person_id: p_7i6jUhtwwYvnVixPJQMhua
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ibMWJWJhHYcHFpumVux4vZ
          claim_id: c_yxx2C5wPvJnKqNihFZHfSi
          source_id: s_1yLodTmhzxnNz5wL4LyVXp
          stance: supports
          locator: CBDB:7385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7385）
          source: &a1
            id: s_1yLodTmhzxnNz5wL4LyVXp
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 7385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7385&o=json
            external_identifier: CBDB:7385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2V6n3gMTey2h9w17R9HhLc
        subject_person_id: p_7i6jUhtwwYvnVixPJQMhua
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1029年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5YKBmbC1W5HtdPpPunRwBF
          claim_id: c_2V6n3gMTey2h9w17R9HhLc
          source_id: s_1yLodTmhzxnNz5wL4LyVXp
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
        id: c_yD5SRecmBYAWegqf2dpjeH
        subject_person_id: p_7i6jUhtwwYvnVixPJQMhua
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1097年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JBsYu45ivcvk3PHnFe3HsQ
          claim_id: c_yD5SRecmBYAWegqf2dpjeH
          source_id: s_1yLodTmhzxnNz5wL4LyVXp
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
        id: c_QKrZBF7Knaw7g2RUKhSY89
        subject_person_id: p_7i6jUhtwwYvnVixPJQMhua
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元（1029年—1097年），宋人物。籍贯開封，入仕恩蔭、蔭補，曾任朝請郎、大理寺丞、縣主簿。（中国历代人物传记资料库 CBDB 7385）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oBT8B5L_eqqXrIBhKVCPwV
          claim_id: c_QKrZBF7Knaw7g2RUKhSY89
          source_id: s_1yLodTmhzxnNz5wL4LyVXp
          stance: supports
          locator: CBDB:7385
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4A2fWvIIjVzCsmioZXJwEA
        subject_person_id: p_J5cLZQsDGVKrGtwL2oZ5ex
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7i6jUhtwwYvnVixPJQMhua
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZX-X56lCSezhWtCTZVNTPN
          claim_id: c_4A2fWvIIjVzCsmioZXJwEA
          source_id: s_1yLodTmhzxnNz5wL4LyVXp
          stance: supports
          locator: CBDB 双向互证（父 王端 ⇄ 子 王元）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_J5cLZQsDGVKrGtwL2oZ5ex
        status: active
        display_name: 王端
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元 | accepted |
| birth.date | 1029年 | accepted |
| death.date | 1097年 | accepted |
| bio.summary | 王元（1029年—1097年），宋人物。籍贯開封，入仕恩蔭、蔭補，曾任朝請郎、大理寺丞、縣主簿。（中国历代人物传记资料库 CBDB 7385） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J5cLZQsDGVKrGtwL2oZ5ex | 王端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元（CBDB 7385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7385&o=json)
