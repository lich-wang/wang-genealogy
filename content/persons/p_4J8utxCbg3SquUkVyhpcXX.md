---
schema: wang-person/v1
id: p_4J8utxCbg3SquUkVyhpcXX
status: active
merged_into: null
display_name: 王化貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WLs12X9swFNCCbQ73XWzkz
        subject_person_id: p_4J8utxCbg3SquUkVyhpcXX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pNAPXNpkcnzDztwtts7rQF
          claim_id: c_WLs12X9swFNCCbQ73XWzkz
          source_id: s_oqWTo5Qf6gfhtMZUy4oejP
          stance: supports
          locator: CBDB:65714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65714）
          source: &a1
            id: s_oqWTo5Qf6gfhtMZUy4oejP
            source_type: api_record
            title: 中国历代人物传记资料库：王化貞（CBDB 65714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65714&o=json
            external_identifier: CBDB:65714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mZbM9G5DfmHE3CF7PCDeXp
        subject_person_id: p_4J8utxCbg3SquUkVyhpcXX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1632年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PokDDxuHCEzU271kABV96j
          claim_id: c_mZbM9G5DfmHE3CF7PCDeXp
          source_id: s_oqWTo5Qf6gfhtMZUy4oejP
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
        id: c_Xg4MXLAQEJeThdaiwnqr5c
        subject_person_id: p_4J8utxCbg3SquUkVyhpcXX
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
        - id: cs_n5UmtmyRLZ6sEXaSZ51BAc
          claim_id: c_Xg4MXLAQEJeThdaiwnqr5c
          source_id: s_oqWTo5Qf6gfhtMZUy4oejP
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

# 王化貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化貞 | accepted |
| death.date | 1632年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化貞（CBDB 65714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65714&o=json)
