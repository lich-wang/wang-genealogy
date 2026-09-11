---
schema: wang-person/v1
id: p_VfQNCNVNuU76fL8YzfFQXy
status: active
merged_into: null
display_name: 王元素
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ab3re7k7xba9mTNUkjU8v3
        subject_person_id: p_VfQNCNVNuU76fL8YzfFQXy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Asv6GamnsxPiX3hLmNyH9Z
          claim_id: c_Ab3re7k7xba9mTNUkjU8v3
          source_id: s_WhX7nYf4iEzcRLfQ1zpL5o
          stance: supports
          locator: CBDB:190304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190304）
          source: &a1
            id: s_WhX7nYf4iEzcRLfQ1zpL5o
            source_type: api_record
            title: 中国历代人物传记资料库：王元素（CBDB 190304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190304&o=json
            external_identifier: CBDB:190304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oD9CBdrunGrYbAFL7qpqgT
        subject_person_id: p_VfQNCNVNuU76fL8YzfFQXy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 869年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGPQhBoAojmAouE62T6jEi
          claim_id: c_oD9CBdrunGrYbAFL7qpqgT
          source_id: s_WhX7nYf4iEzcRLfQ1zpL5o
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
        id: c_T2HUNc269zo57Dj7H3ykU4
        subject_person_id: p_VfQNCNVNuU76fL8YzfFQXy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元素（卒于869年），唐人物。籍贯新鄉。（中国历代人物传记资料库 CBDB 190304）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QQcpRpufBFQzElr7AswaUt
          claim_id: c_T2HUNc269zo57Dj7H3ykU4
          source_id: s_WhX7nYf4iEzcRLfQ1zpL5o
          stance: supports
          locator: CBDB:190304
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yJSDg09XIeZGr-_KDZ3f4N
        subject_person_id: p_iExwTUSihbBvbcDkEjipqk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VfQNCNVNuU76fL8YzfFQXy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xT2DC3YELuDr-shYEiOIWC
          claim_id: c_yJSDg09XIeZGr-_KDZ3f4N
          source_id: s_FyVQHAEjUHhRAeQdCcqEyU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FyVQHAEjUHhRAeQdCcqEyU
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 169475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169475&o=json
            external_identifier: CBDB:169475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iExwTUSihbBvbcDkEjipqk
        status: active
        display_name: 王珍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元素 | accepted |
| death.date | 869年 | accepted |
| bio.summary | 王元素（卒于869年），唐人物。籍贯新鄉。（中国历代人物传记资料库 CBDB 190304） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iExwTUSihbBvbcDkEjipqk | 王珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元素（CBDB 190304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190304&o=json)
- [中国历代人物传记资料库：王珍（CBDB 169475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169475&o=json)
