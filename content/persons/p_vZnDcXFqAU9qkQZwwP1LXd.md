---
schema: wang-person/v1
id: p_vZnDcXFqAU9qkQZwwP1LXd
status: active
merged_into: null
display_name: 王鍊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zn1w9DEBdJuVqy8jn4cZGM
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n7bbiSMBLf589Sp4en7TyU
          claim_id: c_Zn1w9DEBdJuVqy8jn4cZGM
          source_id: s_P67Y16BEWzE4zuobsuwyvG
          stance: supports
          locator: CBDB:141786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141786）
          source: &a1
            id: s_P67Y16BEWzE4zuobsuwyvG
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 141786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141786&o=json
            external_identifier: CBDB:141786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dr52ECxt1d69XuR9pTzKJ5
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 778年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5q3kiurzMGCsRWeT3uMcM9
          claim_id: c_dr52ECxt1d69XuR9pTzKJ5
          source_id: s_P67Y16BEWzE4zuobsuwyvG
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
        id: c_SKxgMp2g3RrpTAjQWdLqTU
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 840年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ptFCLP5H9sRRu4UhfDb5rb
          claim_id: c_SKxgMp2g3RrpTAjQWdLqTU
          source_id: s_P67Y16BEWzE4zuobsuwyvG
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
        id: c_7PMSdmWfHizHH4bDM1xCLG
        subject_person_id: p_vZnDcXFqAU9qkQZwwP1LXd
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
        - id: cs_cG7zQkRuWwNzhckevaGW3h
          claim_id: c_7PMSdmWfHizHH4bDM1xCLG
          source_id: s_P67Y16BEWzE4zuobsuwyvG
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

# 王鍊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍊 | accepted |
| birth.date | 778年 | accepted |
| death.date | 840年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍊（CBDB 141786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141786&o=json)
