---
schema: wang-person/v1
id: p_PegFBQ8QQJ79Ew9RgWhWvv
status: active
merged_into: null
display_name: 王鎮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uDvNbnyY26U8QxFuzNgFpb
        subject_person_id: p_PegFBQ8QQJ79Ew9RgWhWvv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A9Mf5LiViKU3uv19epg6KZ
          claim_id: c_uDvNbnyY26U8QxFuzNgFpb
          source_id: s_QnhYN5PPjJyBfMWdofYW2C
          stance: supports
          locator: CBDB:175911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175911）
          source: &a1
            id: s_QnhYN5PPjJyBfMWdofYW2C
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 175911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175911&o=json
            external_identifier: CBDB:175911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_a2dXHte7BvXQaLm3Q6iCix
        subject_person_id: p_PegFBQ8QQJ79Ew9RgWhWvv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 855年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Dej6xN616Nwc3ZyFEv8eH
          claim_id: c_a2dXHte7BvXQaLm3Q6iCix
          source_id: s_QnhYN5PPjJyBfMWdofYW2C
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
        id: c_DtCHpyECmAAALkqLWTMrGs
        subject_person_id: p_PegFBQ8QQJ79Ew9RgWhWvv
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
        - id: cs_BaMC3djKASSdixm5EPR5Vi
          claim_id: c_DtCHpyECmAAALkqLWTMrGs
          source_id: s_QnhYN5PPjJyBfMWdofYW2C
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

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| death.date | 855年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮（CBDB 175911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175911&o=json)
