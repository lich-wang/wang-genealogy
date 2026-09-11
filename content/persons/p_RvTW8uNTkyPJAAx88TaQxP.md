---
schema: wang-person/v1
id: p_RvTW8uNTkyPJAAx88TaQxP
status: active
merged_into: null
display_name: 王崇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DuwtfjxAkHK5hoN1yBxesm
        subject_person_id: p_RvTW8uNTkyPJAAx88TaQxP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q6dNLMFfSHJ5FTWNdSQAbZ
          claim_id: c_DuwtfjxAkHK5hoN1yBxesm
          source_id: s_kB3W2yNxf43r1PskB2MwDM
          stance: supports
          locator: CBDB:151072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151072）
          source: &a1
            id: s_kB3W2yNxf43r1PskB2MwDM
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 151072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151072&o=json
            external_identifier: CBDB:151072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XnuteEg9nbSQBkyQMhXDkn
        subject_person_id: p_RvTW8uNTkyPJAAx88TaQxP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇，唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 151072）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fOO3b4yLXMTiMNYgCRglaF
          claim_id: c_XnuteEg9nbSQBkyQMhXDkn
          source_id: s_kB3W2yNxf43r1PskB2MwDM
          stance: supports
          locator: CBDB:151072
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NcM4CrYsMmIRdZm4OOdo6l
        subject_person_id: p_Fqf98231G66GDJtjxHT3fS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RvTW8uNTkyPJAAx88TaQxP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XkCI8snU03Lo-OHRoTy6AF
          claim_id: c_NcM4CrYsMmIRdZm4OOdo6l
          source_id: s_kB3W2yNxf43r1PskB2MwDM
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Fqf98231G66GDJtjxHT3fS
        status: active
        display_name: 王孝遠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| bio.summary | 王崇，唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 151072） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Fqf98231G66GDJtjxHT3fS | 王孝遠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 151072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151072&o=json)
