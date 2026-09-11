---
schema: wang-person/v1
id: p_V8Q7bF4yYCidbvL7eSahbi
status: active
merged_into: null
display_name: 王同愈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f7wMFaTkdP6hUjq9gdvd2q
        subject_person_id: p_V8Q7bF4yYCidbvL7eSahbi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同愈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ivwjHPsMp15o658AgA5CVo
          claim_id: c_f7wMFaTkdP6hUjq9gdvd2q
          source_id: s_81oeGVYsgwbqkZLTJTkm6D
          stance: supports
          locator: CBDB:61475
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61475）
          source: &a1
            id: s_81oeGVYsgwbqkZLTJTkm6D
            source_type: api_record
            title: 中国历代人物传记资料库：王同愈（CBDB 61475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61475&o=json
            external_identifier: CBDB:61475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kR8oiMs2nJ9J38LzTNK3EM
        subject_person_id: p_V8Q7bF4yYCidbvL7eSahbi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1856年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i44ajnwh92C7XPBMYKArF4
          claim_id: c_kR8oiMs2nJ9J38LzTNK3EM
          source_id: s_81oeGVYsgwbqkZLTJTkm6D
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
        id: c_b2wAWVdovuPsyvYRejw5Fy
        subject_person_id: p_V8Q7bF4yYCidbvL7eSahbi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1941年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCfaHY2gY8w2HFbAMkAuPb
          claim_id: c_b2wAWVdovuPsyvYRejw5Fy
          source_id: s_81oeGVYsgwbqkZLTJTkm6D
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
        id: c_Ro3woSE7UfLq52cCmGYs3F
        subject_person_id: p_V8Q7bF4yYCidbvL7eSahbi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同愈（1856年—1941年），中華民國人物。明清進士進士，籍贯元和，入仕進士，曾任編修、同考官、學政。（中国历代人物传记资料库 CBDB 61475）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZfXyqfaGJxS13KEdSHzcFE
          claim_id: c_Ro3woSE7UfLq52cCmGYs3F
          source_id: s_81oeGVYsgwbqkZLTJTkm6D
          stance: supports
          locator: CBDB:61475
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

# 王同愈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同愈 | accepted |
| birth.date | 1856年 | accepted |
| death.date | 1941年 | accepted |
| bio.summary | 王同愈（1856年—1941年），中華民國人物。明清進士進士，籍贯元和，入仕進士，曾任編修、同考官、學政。（中国历代人物传记资料库 CBDB 61475） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同愈（CBDB 61475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61475&o=json)
