---
schema: wang-person/v1
id: p_CQ1KyJY837q7EWfjdLbmfj
status: active
merged_into: null
display_name: 王殷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7F5C6d1YX7JYGTMZ2KYGF7
        subject_person_id: p_CQ1KyJY837q7EWfjdLbmfj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wt4NmXVEx5ZUwxz6USG8Ex
          claim_id: c_7F5C6d1YX7JYGTMZ2KYGF7
          source_id: s_zBLxbpy2E2g79M9edo3M6q
          stance: supports
          locator: CBDB:185025
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185025）
          source: &a1
            id: s_zBLxbpy2E2g79M9edo3M6q
            source_type: api_record
            title: 中国历代人物传记资料库：王殷（CBDB 185025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185025&o=json
            external_identifier: CBDB:185025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FPSNW6pHJQTYAAQ49yiGUQ
        subject_person_id: p_CQ1KyJY837q7EWfjdLbmfj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 906年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F5578B44v7P5QZfn3qdpbc
          claim_id: c_FPSNW6pHJQTYAAQ49yiGUQ
          source_id: s_zBLxbpy2E2g79M9edo3M6q
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
        id: c_66kBVdsXkDUCdidzSr7XQe
        subject_person_id: p_CQ1KyJY837q7EWfjdLbmfj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殷（卒于906年），唐人物。籍贯新鄉。（中国历代人物传记资料库 CBDB 185025）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BTKuBG6F4Vx_0ZVruqhJU2
          claim_id: c_66kBVdsXkDUCdidzSr7XQe
          source_id: s_zBLxbpy2E2g79M9edo3M6q
          stance: supports
          locator: CBDB:185025
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MMTctieHkzYrtUZajxlPfJ
        subject_person_id: p_EwNPNustBQxxCU5PjvQLo4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CQ1KyJY837q7EWfjdLbmfj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kXzCSKAiKLstffVIpRGfpi
          claim_id: c_MMTctieHkzYrtUZajxlPfJ
          source_id: s_zBLxbpy2E2g79M9edo3M6q
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EwNPNustBQxxCU5PjvQLo4
        status: active
        display_name: 王睿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王殷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殷 | accepted |
| death.date | 906年 | accepted |
| bio.summary | 王殷（卒于906年），唐人物。籍贯新鄉。（中国历代人物传记资料库 CBDB 185025） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EwNPNustBQxxCU5PjvQLo4 | 王睿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王殷（CBDB 185025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185025&o=json)
