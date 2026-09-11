---
schema: wang-person/v1
id: p_mvjMNdfTTwoLQPLYKCSTQr
status: active
merged_into: null
display_name: 王規
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oJ3YCsv2snekjnBjW2GeUV
        subject_person_id: p_mvjMNdfTTwoLQPLYKCSTQr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王規
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WnzPi6vyZ5PmEFh79Gb4CG
          claim_id: c_oJ3YCsv2snekjnBjW2GeUV
          source_id: s_qM3hu2KJqieQspo6CFRvHo
          stance: supports
          locator: CBDB:175745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175745）
          source: &a1
            id: s_qM3hu2KJqieQspo6CFRvHo
            source_type: api_record
            title: 中国历代人物传记资料库：王規（CBDB 175745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175745&o=json
            external_identifier: CBDB:175745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MRMs8SwmBA5vbNMdYN8MEp
        subject_person_id: p_mvjMNdfTTwoLQPLYKCSTQr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 595年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8eCvcK7AePw1FKLvaYNydX
          claim_id: c_MRMs8SwmBA5vbNMdYN8MEp
          source_id: s_qM3hu2KJqieQspo6CFRvHo
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
        id: c_71NXHfawHA3UhrH6FohBkp
        subject_person_id: p_mvjMNdfTTwoLQPLYKCSTQr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王規（卒于595年），南北朝人物。籍贯北芒山。（中国历代人物传记资料库 CBDB 175745）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bh1RayvwZXOpEiWJJs4xoo
          claim_id: c_71NXHfawHA3UhrH6FohBkp
          source_id: s_qM3hu2KJqieQspo6CFRvHo
          stance: supports
          locator: CBDB:175745
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jB0Taildr5WPM7tXZzv4m7
        subject_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mvjMNdfTTwoLQPLYKCSTQr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OF2jx5QifBrFaRMVsAHfc2
          claim_id: c_jB0Taildr5WPM7tXZzv4m7
          source_id: s_qM3hu2KJqieQspo6CFRvHo
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WPVAqcRtnt1HvYAsfmkMSQ
        status: active
        display_name: 王松年
        merged_into_person_id: null
  children:
    - claim:
        id: c_ub1rUkeRa9mf62d2ZOYIAM
        subject_person_id: p_mvjMNdfTTwoLQPLYKCSTQr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_woaKciykU5f6sViKiS8fnk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iG7cthJQz1UzQQoX8BmvbU
          claim_id: c_ub1rUkeRa9mf62d2ZOYIAM
          source_id: s_qM3hu2KJqieQspo6CFRvHo
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_woaKciykU5f6sViKiS8fnk
        status: active
        display_name: 王大觀
        merged_into_person_id: null
    - claim:
        id: c_Etw4uvwwidqaC9pHG0BVQm
        subject_person_id: p_mvjMNdfTTwoLQPLYKCSTQr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tzn8Vum4ZE9W6UNJt2URF7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F1JEydOYKVDFe1ckRNzTv2
          claim_id: c_Etw4uvwwidqaC9pHG0BVQm
          source_id: s_qM3hu2KJqieQspo6CFRvHo
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tzn8Vum4ZE9W6UNJt2URF7
        status: active
        display_name: 王元方
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王規

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王規 | accepted |
| death.date | 595年 | accepted |
| bio.summary | 王規（卒于595年），南北朝人物。籍贯北芒山。（中国历代人物传记资料库 CBDB 175745） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WPVAqcRtnt1HvYAsfmkMSQ | 王松年 | accepted |
| children | p_woaKciykU5f6sViKiS8fnk | 王大觀 | accepted |
| children | p_tzn8Vum4ZE9W6UNJt2URF7 | 王元方 | accepted |

## 外部来源

- [中国历代人物传记资料库：王規（CBDB 175745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175745&o=json)
