---
schema: wang-person/v1
id: p_yzDt1ovHeaDQuvCkVxdt7m
status: active
merged_into: null
display_name: 王從規
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MDJ2VAnvxaEL89yWUQb4eu
        subject_person_id: p_yzDt1ovHeaDQuvCkVxdt7m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從規
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DRtPBukuTgTPjvVkp8iSq1
          claim_id: c_MDJ2VAnvxaEL89yWUQb4eu
          source_id: s_MoidEFpKsGCeoSJUC9f3Y2
          stance: supports
          locator: CBDB:192937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192937）
          source: &a1
            id: s_MoidEFpKsGCeoSJUC9f3Y2
            source_type: api_record
            title: 中国历代人物传记资料库：王從規（CBDB 192937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192937&o=json
            external_identifier: CBDB:192937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rYTLde3tBM86zez9vEs8vQ
        subject_person_id: p_yzDt1ovHeaDQuvCkVxdt7m
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 922年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nb1P13LXJ3pjQbmVtbTLyE
          claim_id: c_rYTLde3tBM86zez9vEs8vQ
          source_id: s_MoidEFpKsGCeoSJUC9f3Y2
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
        id: c_JRcbPCZRQU4KQ7ifQ7gk6D
        subject_person_id: p_yzDt1ovHeaDQuvCkVxdt7m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從規（卒于922年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 192937）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eAiizoSOozoBjBERDgiX_o
          claim_id: c_JRcbPCZRQU4KQ7ifQ7gk6D
          source_id: s_MoidEFpKsGCeoSJUC9f3Y2
          stance: supports
          locator: CBDB:192937
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZT-gRgo99UQMkXCL4J9ATH
        subject_person_id: p_G39AdG1FxMEPRoXpdeTZVZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yzDt1ovHeaDQuvCkVxdt7m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DMhDuLHupgOiqg6YMZk6yd
          claim_id: c_ZT-gRgo99UQMkXCL4J9ATH
          source_id: s_MoidEFpKsGCeoSJUC9f3Y2
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G39AdG1FxMEPRoXpdeTZVZ
        status: active
        display_name: 王季初
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王從規

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從規 | accepted |
| death.date | 922年 | accepted |
| bio.summary | 王從規（卒于922年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 192937） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_G39AdG1FxMEPRoXpdeTZVZ | 王季初 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從規（CBDB 192937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192937&o=json)
