---
schema: wang-person/v1
id: p_NPN1HCc8HN39xQCsFh3ViM
status: active
merged_into: null
display_name: 王霞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DWrdcDaNzXJR5N4rM58h5n
        subject_person_id: p_NPN1HCc8HN39xQCsFh3ViM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3WhyeFfTJ7yydyZtQvpnLE
          claim_id: c_DWrdcDaNzXJR5N4rM58h5n
          source_id: s_t6H9smwmYmLfetaq6x7ty4
          stance: supports
          locator: CBDB:160566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160566）
          source: &a1
            id: s_t6H9smwmYmLfetaq6x7ty4
            source_type: api_record
            title: 中国历代人物传记资料库：王霞（CBDB 160566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160566&o=json
            external_identifier: CBDB:160566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QqpRYEVgVMHJUDskm59VnH
        subject_person_id: p_NPN1HCc8HN39xQCsFh3ViM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霞，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 160566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qzrRp1F9KSyBhRFDN6-VBO
          claim_id: c_QqpRYEVgVMHJUDskm59VnH
          source_id: s_t6H9smwmYmLfetaq6x7ty4
          stance: supports
          locator: CBDB:160566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0PlgcC8KiKZcmTf_IMUmZF
        subject_person_id: p_omcnEPxMUJWQetwYnKCLjF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NPN1HCc8HN39xQCsFh3ViM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cNKAe9CmXH4552qdL6TKR3
          claim_id: c_0PlgcC8KiKZcmTf_IMUmZF
          source_id: s_t6H9smwmYmLfetaq6x7ty4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_omcnEPxMUJWQetwYnKCLjF
        status: active
        display_name: 王炅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王霞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霞 | accepted |
| bio.summary | 王霞，唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 160566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_omcnEPxMUJWQetwYnKCLjF | 王炅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霞（CBDB 160566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160566&o=json)
