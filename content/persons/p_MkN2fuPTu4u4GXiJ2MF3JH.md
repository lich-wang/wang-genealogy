---
schema: wang-person/v1
id: p_MkN2fuPTu4u4GXiJ2MF3JH
status: active
merged_into: null
display_name: 王貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_THamWh673Gz5wtfWP2VXPU
        subject_person_id: p_MkN2fuPTu4u4GXiJ2MF3JH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G5yXuyePuFYCjdySqHeJNK
          claim_id: c_THamWh673Gz5wtfWP2VXPU
          source_id: s_K65vwrvijEWXfkojfdefa8
          stance: supports
          locator: CBDB:91989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91989）
          source: &a1
            id: s_K65vwrvijEWXfkojfdefa8
            source_type: api_record
            title: 中国历代人物传记资料库：王貞（CBDB 91989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91989&o=json
            external_identifier: CBDB:91989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BkuyPajLX2corCfK6i9jWe
        subject_person_id: p_MkN2fuPTu4u4GXiJ2MF3JH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 625年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9uUiYf4Y6d9edHea91Wxb
          claim_id: c_BkuyPajLX2corCfK6i9jWe
          source_id: s_K65vwrvijEWXfkojfdefa8
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
        id: c_GuemLVVNFinVAyTSb3w4hX
        subject_person_id: p_MkN2fuPTu4u4GXiJ2MF3JH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 689年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YEaoq62C9PW1vEQxAMuPgg
          claim_id: c_GuemLVVNFinVAyTSb3w4hX
          source_id: s_K65vwrvijEWXfkojfdefa8
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
        id: c_J7P1BrwPH8xc87pfQiQ3bj
        subject_person_id: p_MkN2fuPTu4u4GXiJ2MF3JH
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
        - id: cs_awJGQP1714UgentynpBR1c
          claim_id: c_J7P1BrwPH8xc87pfQiQ3bj
          source_id: s_K65vwrvijEWXfkojfdefa8
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

# 王貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞 | accepted |
| birth.date | 625年 | accepted |
| death.date | 689年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貞（CBDB 91989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91989&o=json)
