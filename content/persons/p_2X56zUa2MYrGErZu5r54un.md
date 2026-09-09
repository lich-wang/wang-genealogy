---
schema: wang-person/v1
id: p_2X56zUa2MYrGErZu5r54un
status: active
merged_into: null
display_name: 王爕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cTgsRVCGWGHbGPefus1Sz9
        subject_person_id: p_2X56zUa2MYrGErZu5r54un
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hnSmKTs3FYuggW2yg6QQuj
          claim_id: c_cTgsRVCGWGHbGPefus1Sz9
          source_id: s_vJrdW9xMquKxDLAjo4S8K1
          stance: supports
          locator: CBDB:205106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205106）
          source: &a1
            id: s_vJrdW9xMquKxDLAjo4S8K1
            source_type: api_record
            title: 中国历代人物传记资料库：王爕（CBDB 205106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205106&o=json
            external_identifier: CBDB:205106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.853Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yJe68n2zFa7uFTvxdtw972
        subject_person_id: p_2X56zUa2MYrGErZu5r54un
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1529年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTcK5KabZMoNPeF8CjqvHo
          claim_id: c_yJe68n2zFa7uFTvxdtw972
          source_id: s_vJrdW9xMquKxDLAjo4S8K1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_huxJkhFioAzfDiqCkzP2B4
        subject_person_id: p_2X56zUa2MYrGErZu5r54un
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
        - id: cs_WiG75JiHifBNjuLHUECLLm
          claim_id: c_huxJkhFioAzfDiqCkzP2B4
          source_id: s_vJrdW9xMquKxDLAjo4S8K1
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

# 王爕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爕 | accepted |
| birth.date | 1529年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爕（CBDB 205106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205106&o=json)
