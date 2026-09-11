---
schema: wang-person/v1
id: p_ramuB4N2su47ggG9EJiUkB
status: active
merged_into: null
display_name: 王式通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FNhuN1kPGzooLJ17fRFRW3
        subject_person_id: p_ramuB4N2su47ggG9EJiUkB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5p3kWWS8dE5FfBNUV4nqHx
          claim_id: c_FNhuN1kPGzooLJ17fRFRW3
          source_id: s_VLeNgZ6EmRNTsaM1V2wF1L
          stance: supports
          locator: CBDB:71523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71523）
          source: &a1
            id: s_VLeNgZ6EmRNTsaM1V2wF1L
            source_type: api_record
            title: 中国历代人物传记资料库：王式通（CBDB 71523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71523&o=json
            external_identifier: CBDB:71523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.733Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gRfMAenUyFDTRMRB3wNBN2
        subject_person_id: p_ramuB4N2su47ggG9EJiUkB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1864年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tr6pGx6rUB5M28Bu9rP6ZX
          claim_id: c_gRfMAenUyFDTRMRB3wNBN2
          source_id: s_VLeNgZ6EmRNTsaM1V2wF1L
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
        id: c_nKFy6drx9tVTE7tNiFZhyR
        subject_person_id: p_ramuB4N2su47ggG9EJiUkB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1931年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a19Py6D4WSNtMB9r3U7CvZ
          claim_id: c_nKFy6drx9tVTE7tNiFZhyR
          source_id: s_VLeNgZ6EmRNTsaM1V2wF1L
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
        id: c_sZL129Nw96TJmTgAbnfN6s
        subject_person_id: p_ramuB4N2su47ggG9EJiUkB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式通（1864年—1931年），中華民國人物。籍贯汾陽。（中国历代人物传记资料库 CBDB 71523）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4UqqTEK7Bb_K6EUEXEFc5r
          claim_id: c_sZL129Nw96TJmTgAbnfN6s
          source_id: s_VLeNgZ6EmRNTsaM1V2wF1L
          stance: supports
          locator: CBDB:71523
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
  descendants: []
  other: []
---

# 王式通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式通 | accepted |
| birth.date | 1864年 | accepted |
| death.date | 1931年 | accepted |
| bio.summary | 王式通（1864年—1931年），中華民國人物。籍贯汾陽。（中国历代人物传记资料库 CBDB 71523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王式通（CBDB 71523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71523&o=json)
