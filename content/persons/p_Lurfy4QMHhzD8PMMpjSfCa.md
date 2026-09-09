---
schema: wang-person/v1
id: p_Lurfy4QMHhzD8PMMpjSfCa
status: active
merged_into: null
display_name: 王宗會
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1YBJW4wGGDG87H7zJG2rG1
        subject_person_id: p_Lurfy4QMHhzD8PMMpjSfCa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9bp1VeE83QmDRnf5Ztu1Bd
          claim_id: c_1YBJW4wGGDG87H7zJG2rG1
          source_id: s_8FmYQpg2YQmE9T4qGDeQ4D
          stance: supports
          locator: CBDB:204306
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204306）
          source: &a1
            id: s_8FmYQpg2YQmE9T4qGDeQ4D
            source_type: api_record
            title: 中国历代人物传记资料库：王宗會（CBDB 204306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204306&o=json
            external_identifier: CBDB:204306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rhxvvNFhBAXpnzEBwkRN4g
        subject_person_id: p_Lurfy4QMHhzD8PMMpjSfCa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CevCCSaeAN6h88ed5gtYHo
          claim_id: c_rhxvvNFhBAXpnzEBwkRN4g
          source_id: s_8FmYQpg2YQmE9T4qGDeQ4D
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
        id: c_R1Bis1m1h4VfPusLUMCN98
        subject_person_id: p_Lurfy4QMHhzD8PMMpjSfCa
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
        - id: cs_pYhjF39vWdxQh6ZTjZagvL
          claim_id: c_R1Bis1m1h4VfPusLUMCN98
          source_id: s_8FmYQpg2YQmE9T4qGDeQ4D
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

# 王宗會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗會 | accepted |
| birth.date | 1517年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗會（CBDB 204306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204306&o=json)
