---
schema: wang-person/v1
id: p_212CC4vHAJCoYHH3FiHRV8
status: active
merged_into: null
display_name: 王沿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yRF4SYWmnJ36M7FfJTaPzm
        subject_person_id: p_212CC4vHAJCoYHH3FiHRV8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2hDMLc9caHYS5ArQQ3ETAa
          claim_id: c_yRF4SYWmnJ36M7FfJTaPzm
          source_id: s_xbP3wLAt4UzWYxeJWswKm9
          stance: supports
          locator: CBDB:1922
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1922）
          source: &a1
            id: s_xbP3wLAt4UzWYxeJWswKm9
            source_type: api_record
            title: 中国历代人物传记资料库：王沿（CBDB 1922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1922&o=json
            external_identifier: CBDB:1922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_H8eCp914ekQN1cGn5ko9Ct
        subject_person_id: p_212CC4vHAJCoYHH3FiHRV8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1044年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DJRM72hC6sG8MkhFhJpEUK
          claim_id: c_H8eCp914ekQN1cGn5ko9Ct
          source_id: s_xbP3wLAt4UzWYxeJWswKm9
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
        id: c_T4gMRGEsMnwuvNMyEDDALp
        subject_person_id: p_212CC4vHAJCoYHH3FiHRV8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hk3Q4SvVEs4qWxQHC7JGQe
          claim_id: c_T4gMRGEsMnwuvNMyEDDALp
          source_id: s_xbP3wLAt4UzWYxeJWswKm9
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
  descendants:
    - claim:
        id: c_ewViePWaUZyldyMlKnrmym
        subject_person_id: p_212CC4vHAJCoYHH3FiHRV8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sA444B3a4dYXvHoCAbJHaF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bLzsaYUUQdVsEnzRlElV4Q
          claim_id: c_ewViePWaUZyldyMlKnrmym
          source_id: s_xbP3wLAt4UzWYxeJWswKm9
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1893：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sA444B3a4dYXvHoCAbJHaF
        status: active
        display_name: 王紹大
        merged_into_person_id: null
  other: []
---

# 王沿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沿 | accepted |
| death.date | 1044年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sA444B3a4dYXvHoCAbJHaF | 王紹大 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沿（CBDB 1922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1922&o=json)
