---
schema: wang-person/v1
id: p_omcnEPxMUJWQetwYnKCLjF
status: active
merged_into: null
display_name: 王炅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FAeLBPtvvQVQH15pRsNkXv
        subject_person_id: p_omcnEPxMUJWQetwYnKCLjF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5GvvPSfGAwqCn15KmTfeRT
          claim_id: c_FAeLBPtvvQVQH15pRsNkXv
          source_id: s_cCzKSa17QMxMtnFYQLNKef
          stance: supports
          locator: CBDB:157068
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157068）
          source: &a1
            id: s_cCzKSa17QMxMtnFYQLNKef
            source_type: api_record
            title: 中国历代人物传记资料库：王炅（CBDB 157068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157068&o=json
            external_identifier: CBDB:157068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4hVFZhzNGWYnjtrc2295pU
        subject_person_id: p_omcnEPxMUJWQetwYnKCLjF
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
        - id: cs_i5pfUMzWmmCAT1C75uaDXq
          claim_id: c_4hVFZhzNGWYnjtrc2295pU
          source_id: s_cCzKSa17QMxMtnFYQLNKef
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZiQ280jupInGBEaNpR7cse
        subject_person_id: p_omcnEPxMUJWQetwYnKCLjF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BzEC3FxQZmQshcKpSR8HHx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v2HHSmq5M1aLGr1DcdMVVH
          claim_id: c_ZiQ280jupInGBEaNpR7cse
          source_id: s_6tg181GfEavpwsgSRrvE1t
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6tg181GfEavpwsgSRrvE1t
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 160565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160565&o=json
            external_identifier: CBDB:160565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BzEC3FxQZmQshcKpSR8HHx
        status: active
        display_name: 王雲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王炅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炅 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BzEC3FxQZmQshcKpSR8HHx | 王雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炅（CBDB 157068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157068&o=json)
- [中国历代人物传记资料库：王雲（CBDB 160565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160565&o=json)
