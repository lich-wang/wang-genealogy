---
schema: wang-person/v1
id: p_xPMcLgCawstxHLrk7HL4Nq
status: active
merged_into: null
display_name: 王本立
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ggzhd1qCZ2KHmmB3SVAMrG
        subject_person_id: p_xPMcLgCawstxHLrk7HL4Nq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eLFy8FzC1ptTZpS6f2c8cp
          claim_id: c_ggzhd1qCZ2KHmmB3SVAMrG
          source_id: s_XTYSwhwhHUjdqH6sCneteM
          stance: supports
          locator: CBDB:237458
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237458）
          source: &a1
            id: s_XTYSwhwhHUjdqH6sCneteM
            source_type: api_record
            title: 中国历代人物传记资料库：王本立（CBDB 237458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237458&o=json
            external_identifier: CBDB:237458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sbt1x3eFrePZxShY9ScPsF
        subject_person_id: p_xPMcLgCawstxHLrk7HL4Nq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本立，明人物。正統四年進士，籍贯海州，入仕進士，曾任同知。（中国历代人物传记资料库 CBDB 237458）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5W2HeDf9SuZgi_js9vrEi0
          claim_id: c_sbt1x3eFrePZxShY9ScPsF
          source_id: s_XTYSwhwhHUjdqH6sCneteM
          stance: supports
          locator: CBDB:237458
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wBKFHZj6dbtOvXT1mg8RbU
        subject_person_id: p_xPMcLgCawstxHLrk7HL4Nq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_77xZoKtiK3NRKg79yXDSya
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uBZGGBLF5ILGVdVAE_mb4_
          claim_id: c_wBKFHZj6dbtOvXT1mg8RbU
          source_id: s_RVFBxD1wdCHL5QQhGSeNeN
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第六十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RVFBxD1wdCHL5QQhGSeNeN
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 207889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207889&o=json
            external_identifier: CBDB:207889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_77xZoKtiK3NRKg79yXDSya
        status: active
        display_name: 王璟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王本立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本立 | accepted |
| bio.summary | 王本立，明人物。正統四年進士，籍贯海州，入仕進士，曾任同知。（中国历代人物传记资料库 CBDB 237458） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_77xZoKtiK3NRKg79yXDSya | 王璟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本立（CBDB 237458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237458&o=json)
- [中国历代人物传记资料库：王璟（CBDB 207889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207889&o=json)
