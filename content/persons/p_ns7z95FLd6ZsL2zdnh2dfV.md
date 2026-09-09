---
schema: wang-person/v1
id: p_ns7z95FLd6ZsL2zdnh2dfV
status: active
merged_into: null
display_name: 王楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ALg47YVYcVguwy7vFgpXFx
        subject_person_id: p_ns7z95FLd6ZsL2zdnh2dfV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o9ttH3ppkRbwtitAHHW8Km
          claim_id: c_ALg47YVYcVguwy7vFgpXFx
          source_id: s_fS5zJYQkA3FzUycUaGnLbL
          stance: supports
          locator: CBDB:139308
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139308）
          source: &a1
            id: s_fS5zJYQkA3FzUycUaGnLbL
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 139308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139308&o=json
            external_identifier: CBDB:139308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FZruh1qoUL5h5Tr3BRTsoi
        subject_person_id: p_ns7z95FLd6ZsL2zdnh2dfV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 590年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3n16PXAa3wu8jpXEWAdDPX
          claim_id: c_FZruh1qoUL5h5Tr3BRTsoi
          source_id: s_fS5zJYQkA3FzUycUaGnLbL
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
        id: c_PswTEXC2b2ZAJGCSqVEk5Z
        subject_person_id: p_ns7z95FLd6ZsL2zdnh2dfV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 663年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KRKpNPZMvkk59u9RFgDeXZ
          claim_id: c_PswTEXC2b2ZAJGCSqVEk5Z
          source_id: s_fS5zJYQkA3FzUycUaGnLbL
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
        id: c_DdEfJCSVLKDLVg9kQsoX7z
        subject_person_id: p_ns7z95FLd6ZsL2zdnh2dfV
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
        - id: cs_khuKbnp4MrMhjv5E7dbTgv
          claim_id: c_DdEfJCSVLKDLVg9kQsoX7z
          source_id: s_fS5zJYQkA3FzUycUaGnLbL
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

# 王楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楷 | accepted |
| birth.date | 590年 | accepted |
| death.date | 663年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楷（CBDB 139308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139308&o=json)
