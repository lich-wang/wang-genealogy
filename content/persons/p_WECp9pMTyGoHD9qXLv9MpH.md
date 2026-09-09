---
schema: wang-person/v1
id: p_WECp9pMTyGoHD9qXLv9MpH
status: active
merged_into: null
display_name: 王世俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5BM5bLusZZw43Xi5K6p9iE
        subject_person_id: p_WECp9pMTyGoHD9qXLv9MpH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SJi3M3L8JxfytupYHdAHAR
          claim_id: c_5BM5bLusZZw43Xi5K6p9iE
          source_id: s_3wGBksqA667b8wu6uAKKVx
          stance: supports
          locator: CBDB:69155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69155）
          source: &a1
            id: s_3wGBksqA667b8wu6uAKKVx
            source_type: api_record
            title: 中国历代人物传记资料库：王世俊（CBDB 69155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69155&o=json
            external_identifier: CBDB:69155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.129Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2HYQX12AtMYMCceCuXLrkh
        subject_person_id: p_WECp9pMTyGoHD9qXLv9MpH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YQ3TeH6gKvhrc8KaKXRBQz
          claim_id: c_2HYQX12AtMYMCceCuXLrkh
          source_id: s_3wGBksqA667b8wu6uAKKVx
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
        id: c_vjK43PFnF3YXnhyL1dqAKj
        subject_person_id: p_WECp9pMTyGoHD9qXLv9MpH
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
        - id: cs_pDwBRVY7yLz2bVf1wDaED1
          claim_id: c_vjK43PFnF3YXnhyL1dqAKj
          source_id: s_3wGBksqA667b8wu6uAKKVx
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

# 王世俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世俊 | accepted |
| death.date | 1841年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世俊（CBDB 69155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69155&o=json)
