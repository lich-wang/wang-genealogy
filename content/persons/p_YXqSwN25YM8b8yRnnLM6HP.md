---
schema: wang-person/v1
id: p_YXqSwN25YM8b8yRnnLM6HP
status: active
merged_into: null
display_name: 王霂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZF2zhsCB5Lhyp2hm4y6Xyc
        subject_person_id: p_YXqSwN25YM8b8yRnnLM6HP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JbkaVmgxLDkwP9RsxHyVMG
          claim_id: c_ZF2zhsCB5Lhyp2hm4y6Xyc
          source_id: s_t2RVRJTi3QaeQUGZCDEeMA
          stance: supports
          locator: CBDB:341771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341771）
          source: &a1
            id: s_t2RVRJTi3QaeQUGZCDEeMA
            source_type: api_record
            title: 中国历代人物传记资料库：王霂（CBDB 341771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341771&o=json
            external_identifier: CBDB:341771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sH14dNA6YYGM3vb74dCkra
        subject_person_id: p_YXqSwN25YM8b8yRnnLM6HP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zT97YqJ8E4KoTmG4RTKzBf
          claim_id: c_sH14dNA6YYGM3vb74dCkra
          source_id: s_t2RVRJTi3QaeQUGZCDEeMA
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

# 王霂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霂 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霂（CBDB 341771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341771&o=json)
