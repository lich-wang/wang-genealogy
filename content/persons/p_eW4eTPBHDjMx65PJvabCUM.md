---
schema: wang-person/v1
id: p_eW4eTPBHDjMx65PJvabCUM
status: active
merged_into: null
display_name: 王錦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RcJj9418MkTcd2s23PM4xC
        subject_person_id: p_eW4eTPBHDjMx65PJvabCUM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bty5ZCFns85KonAAECoh76
          claim_id: c_RcJj9418MkTcd2s23PM4xC
          source_id: s_PohLVM5c7JpNSHE8Lz3a88
          stance: supports
          locator: CBDB:227726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227726）
          source: &a1
            id: s_PohLVM5c7JpNSHE8Lz3a88
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 227726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227726&o=json
            external_identifier: CBDB:227726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DSGurWqBLbLH4mFn2M7YR4
        subject_person_id: p_eW4eTPBHDjMx65PJvabCUM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦，明人物。萬曆丙戌科進士進士，籍贯蒙陰。（中国历代人物传记资料库 CBDB 227726）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ihJQee9RKGXUOBkPGlH_Gw
          claim_id: c_DSGurWqBLbLH4mFn2M7YR4
          source_id: s_PohLVM5c7JpNSHE8Lz3a88
          stance: supports
          locator: CBDB:227726
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FJo91YjssiylrJIw9wngGB
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eW4eTPBHDjMx65PJvabCUM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQf_eJoQcLM2ycsPZyZVcL
          claim_id: c_FJo91YjssiylrJIw9wngGB
          source_id: s_PohLVM5c7JpNSHE8Lz3a88
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UehS2yfTZaFGBh7uxhHFCE
        status: active
        display_name: 王之翰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| bio.summary | 王錦，明人物。萬曆丙戌科進士進士，籍贯蒙陰。（中国历代人物传记资料库 CBDB 227726） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UehS2yfTZaFGBh7uxhHFCE | 王之翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 227726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227726&o=json)
