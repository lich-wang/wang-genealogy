---
schema: wang-person/v1
id: p_REhAUkxNPe9bVz4f1yLUrW
status: active
merged_into: null
display_name: 王公素
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SUrUZWpah9DsrH9ZEkqDjq
        subject_person_id: p_REhAUkxNPe9bVz4f1yLUrW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_okY5jtAikiWAN4UQ3YKKem
          claim_id: c_SUrUZWpah9DsrH9ZEkqDjq
          source_id: s_w4FyHyFmT2Yh9GkqC1VyEG
          stance: supports
          locator: CBDB:146028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146028）
          source: &a1
            id: s_w4FyHyFmT2Yh9GkqC1VyEG
            source_type: api_record
            title: 中国历代人物传记资料库：王公素（CBDB 146028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146028&o=json
            external_identifier: CBDB:146028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MXcA3Ex4XKuM7gSh6JD8hi
        subject_person_id: p_REhAUkxNPe9bVz4f1yLUrW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 788年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vcApNLb5R5CE6G52fqVEhZ
          claim_id: c_MXcA3Ex4XKuM7gSh6JD8hi
          source_id: s_w4FyHyFmT2Yh9GkqC1VyEG
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
        id: c_oq93W6PuH2k8KWVQJJqPE5
        subject_person_id: p_REhAUkxNPe9bVz4f1yLUrW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 815年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vs1spCXRRwLaEmyoJXHxke
          claim_id: c_oq93W6PuH2k8KWVQJJqPE5
          source_id: s_w4FyHyFmT2Yh9GkqC1VyEG
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
        id: c_74XxVMGtn2K2ktKeU77W9X
        subject_person_id: p_REhAUkxNPe9bVz4f1yLUrW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ouN7V65NqhqoGBY8gMbCVz
          claim_id: c_74XxVMGtn2K2ktKeU77W9X
          source_id: s_w4FyHyFmT2Yh9GkqC1VyEG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王公素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公素 | accepted |
| birth.date | 788年 | accepted |
| death.date | 815年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公素（CBDB 146028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146028&o=json)
