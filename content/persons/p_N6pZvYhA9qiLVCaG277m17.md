---
schema: wang-person/v1
id: p_N6pZvYhA9qiLVCaG277m17
status: active
merged_into: null
display_name: 王鋋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C6ngxD5akDKD3Bo8SD7XU5
        subject_person_id: p_N6pZvYhA9qiLVCaG277m17
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HQwTHmWjJkuNS7tXxrM1Sc
          claim_id: c_C6ngxD5akDKD3Bo8SD7XU5
          source_id: s_4YQGDQbvZwW5ZrwqJFwPa4
          stance: supports
          locator: CBDB:169160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169160）
          source: &a1
            id: s_4YQGDQbvZwW5ZrwqJFwPa4
            source_type: api_record
            title: 中国历代人物传记资料库：王鋋（CBDB 169160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169160&o=json
            external_identifier: CBDB:169160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_397JhqUFyfMD5rLGKDfRhb
        subject_person_id: p_N6pZvYhA9qiLVCaG277m17
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_94AkEyNKiU5AbrAB74ZHTM
          claim_id: c_397JhqUFyfMD5rLGKDfRhb
          source_id: s_4YQGDQbvZwW5ZrwqJFwPa4
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
        id: c_bXqRF3yX71WNkgBq31mUw7
        subject_person_id: p_N6pZvYhA9qiLVCaG277m17
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
        - id: cs_rX9dfdnjrwPAsF64Y5CzUi
          claim_id: c_bXqRF3yX71WNkgBq31mUw7
          source_id: s_4YQGDQbvZwW5ZrwqJFwPa4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5LE7-z9RR6Nof8zB98dmYf
        subject_person_id: p_2BHkEYekoT1S8S2R49LZgW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N6pZvYhA9qiLVCaG277m17
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xfjqzdW2h4133HrGn_8OEG
          claim_id: c_5LE7-z9RR6Nof8zB98dmYf
          source_id: s_4DY5qh6wfzSJyo6PBzSVxU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4DY5qh6wfzSJyo6PBzSVxU
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 175822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175822&o=json
            external_identifier: CBDB:175822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2BHkEYekoT1S8S2R49LZgW
        status: active
        display_name: 王晤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鋋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鋋 | accepted |
| death.date | 858年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2BHkEYekoT1S8S2R49LZgW | 王晤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鋋（CBDB 169160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169160&o=json)
- [中国历代人物传记资料库：王晤（CBDB 175822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175822&o=json)
