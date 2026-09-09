---
schema: wang-person/v1
id: p_pCHzaxXTgfJX3Gi22NNtgi
status: active
merged_into: null
display_name: 王賁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GuGtXFQFwFyRp3FHPi5yVC
        subject_person_id: p_pCHzaxXTgfJX3Gi22NNtgi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EffETNwg2oor2FyFPJRKUT
          claim_id: c_GuGtXFQFwFyRp3FHPi5yVC
          source_id: s_X1JCdawcnKwo6B3mrPPWea
          stance: supports
          locator: CBDB:169516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169516）
          source: &a1
            id: s_X1JCdawcnKwo6B3mrPPWea
            source_type: api_record
            title: 中国历代人物传记资料库：王賁（CBDB 169516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169516&o=json
            external_identifier: CBDB:169516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vGFgZCE6eLwrUCCPJkso4G
        subject_person_id: p_pCHzaxXTgfJX3Gi22NNtgi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 803年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qX4x3TLzNZoVBTuPo3ibz6
          claim_id: c_vGFgZCE6eLwrUCCPJkso4G
          source_id: s_X1JCdawcnKwo6B3mrPPWea
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
        id: c_xqitQSrsyQfU6wy6hGXRzf
        subject_person_id: p_pCHzaxXTgfJX3Gi22NNtgi
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
        - id: cs_8FckJCr8k5yownau4b7p9T
          claim_id: c_xqitQSrsyQfU6wy6hGXRzf
          source_id: s_X1JCdawcnKwo6B3mrPPWea
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

# 王賁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賁 | accepted |
| death.date | 803年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賁（CBDB 169516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169516&o=json)
