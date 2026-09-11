---
schema: wang-person/v1
id: p_cen6CGnbrNWM2fBn9EwD5L
status: active
merged_into: null
display_name: 王釗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ap72Uu6aLXxGnGDu5G3CF9
        subject_person_id: p_cen6CGnbrNWM2fBn9EwD5L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DtzPsG6HAKVGwyiaA9o68W
          claim_id: c_Ap72Uu6aLXxGnGDu5G3CF9
          source_id: s_E14qDM7qQ84s51kCMHP6Nn
          stance: supports
          locator: CBDB:228972
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228972）
          source: &a1
            id: s_E14qDM7qQ84s51kCMHP6Nn
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 228972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228972&o=json
            external_identifier: CBDB:228972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F3yTRmoQ6dpHTrb1cnAE5W
        subject_person_id: p_cen6CGnbrNWM2fBn9EwD5L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 228972）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oxFvEUv6jLUvZdUwZPsiUk
          claim_id: c_F3yTRmoQ6dpHTrb1cnAE5W
          source_id: s_E14qDM7qQ84s51kCMHP6Nn
          stance: supports
          locator: CBDB:228972
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants:
    - claim:
        id: c_alw_XEMlo1AfOAc1Ms94eE
        subject_person_id: p_cen6CGnbrNWM2fBn9EwD5L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RmcPLrzSEzw9YLSpR61Aoj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fv7UIXaBESK0CVuSCUjggs
          claim_id: c_alw_XEMlo1AfOAc1Ms94eE
          source_id: s_E14qDM7qQ84s51kCMHP6Nn
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RmcPLrzSEzw9YLSpR61Aoj
        status: active
        display_name: 王志
        merged_into_person_id: null
  other: []
---

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| bio.summary | 王釗，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 228972） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RmcPLrzSEzw9YLSpR61Aoj | 王志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王釗（CBDB 228972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228972&o=json)
