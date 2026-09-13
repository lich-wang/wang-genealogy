---
schema: wang-person/v1
id: p_2jLF8Z5zHXYNSfB95H7d2Z
status: active
merged_into: null
display_name: 王義瓚
cbdb_id: 170220
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6ZYGBJeSbxgop1J9rKZrWG
        subject_person_id: p_2jLF8Z5zHXYNSfB95H7d2Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義瓚（卒于716年），史料所见人物。本项目依据《中国历代人物传记资料库：王義瓚（CBDB 170220）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_RqNb4TutbRUe7vrg2MU0Pp
          claim_id: c_6ZYGBJeSbxgop1J9rKZrWG
          source_id: s_5DjbixCJAQQzZ6RHGW5Wit
          stance: supports
          locator: CBDB:170220
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5DjbixCJAQQzZ6RHGW5Wit
            source_type: api_record
            title: 中国历代人物传记资料库：王義瓚（CBDB 170220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170220&o=json
            external_identifier: CBDB:170220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Va5hvqsBXK8cWFKzYdYTFx
        subject_person_id: p_2jLF8Z5zHXYNSfB95H7d2Z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 716年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0716-01-01
            latest: 0716-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DF9zRBGgVSGUag7i8FP26R
          claim_id: c_Va5hvqsBXK8cWFKzYdYTFx
          source_id: s_5DjbixCJAQQzZ6RHGW5Wit
          stance: supports
          locator: CBDB:170220
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 716
          source:
            id: s_5DjbixCJAQQzZ6RHGW5Wit
            source_type: api_record
            title: 中国历代人物传记资料库：王義瓚（CBDB 170220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170220&o=json
            external_identifier: CBDB:170220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JARESVwG6FJ87vmjmJ3iVy
        subject_person_id: p_2jLF8Z5zHXYNSfB95H7d2Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zsyxSEiwMKYyYFyfLUKWkf
          claim_id: c_JARESVwG6FJ87vmjmJ3iVy
          source_id: s_5DjbixCJAQQzZ6RHGW5Wit
          stance: supports
          locator: CBDB:170220
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 716
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_49GJz17NvYeG9moVBH52SL
        subject_person_id: p_eYp6a5L6qiuFo9jgfnuifM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2jLF8Z5zHXYNSfB95H7d2Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kpIY4FCbY7hXWP3tLYiq0m
          claim_id: c_49GJz17NvYeG9moVBH52SL
          source_id: s_QykoE5m8efNqAuzo1FDfvi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QykoE5m8efNqAuzo1FDfvi
            source_type: api_record
            title: 中国历代人物传记资料库：王并（CBDB 170487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170487&o=json
            external_identifier: CBDB:170487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eYp6a5L6qiuFo9jgfnuifM
        status: active
        display_name: 王并
        merged_into_person_id: null
  children:
    - claim:
        id: c_m65h2yzmf_8Wbj2h6rT80B
        subject_person_id: p_2jLF8Z5zHXYNSfB95H7d2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nksXewUDBw3udNfmxGGtci
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mGrcGchLkuTOEDyUwIJMjD
          claim_id: c_m65h2yzmf_8Wbj2h6rT80B
          source_id: s_fPp6GSwVhpaM7ErTmEFTej
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fPp6GSwVhpaM7ErTmEFTej
            source_type: api_record
            title: 中国历代人物传记资料库：王立楷（CBDB 169731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169731&o=json
            external_identifier: CBDB:169731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nksXewUDBw3udNfmxGGtci
        status: active
        display_name: 王立楷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王義瓚（卒于716年），史料所见人物。本项目依据《中国历代人物传记资料库：王義瓚（CBDB 170220）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 716年 | accepted |
| name.primary | 王義瓚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eYp6a5L6qiuFo9jgfnuifM | 王并 | accepted |
| children | p_nksXewUDBw3udNfmxGGtci | 王立楷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王并（CBDB 170487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170487&o=json)
- [中国历代人物传记资料库：王立楷（CBDB 169731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169731&o=json)
- [中国历代人物传记资料库：王義瓚（CBDB 170220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170220&o=json)
