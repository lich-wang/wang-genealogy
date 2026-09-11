---
schema: wang-person/v1
id: p_CHdpKotTqGCeesrb6BoyJt
status: active
merged_into: null
display_name: 王暉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FhCCbBmmDaE5iSKLBaPLJ2
        subject_person_id: p_CHdpKotTqGCeesrb6BoyJt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jTKZfPZTLCbV8pmwWrK1vE
          claim_id: c_FhCCbBmmDaE5iSKLBaPLJ2
          source_id: s_ijY7M5uGK3JJJEtafPzPJD
          stance: supports
          locator: CBDB:140996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140996）
          source: &a1
            id: s_ijY7M5uGK3JJJEtafPzPJD
            source_type: api_record
            title: 中国历代人物传记资料库：王暉（CBDB 140996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140996&o=json
            external_identifier: CBDB:140996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kJ2Zj4BRkH4mQ1JteHpGyx
        subject_person_id: p_CHdpKotTqGCeesrb6BoyJt
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
        - id: cs_94uGRadmzNYZmnQFUqxUcd
          claim_id: c_kJ2Zj4BRkH4mQ1JteHpGyx
          source_id: s_ijY7M5uGK3JJJEtafPzPJD
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
  spouses:
    - claim:
        id: c_C_HN7tHtDD9zvAeToOo3LD
        subject_person_id: p_CHdpKotTqGCeesrb6BoyJt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wXTayaBsntS4omdP4sAnwP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TwjazN2ZAjDsx6N52mZifq
          claim_id: c_C_HN7tHtDD9zvAeToOo3LD
          source_id: s_IZdhJcAXxlsTipIrOWKtEi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 192：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_IZdhJcAXxlsTipIrOWKtEi
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王暉妻)（CBDB 154162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154162&o=json
            external_identifier: CBDB:154162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wXTayaBsntS4omdP4sAnwP
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王暉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暉 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wXTayaBsntS4omdP4sAnwP | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王暉妻)（CBDB 154162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154162&o=json)
- [中国历代人物传记资料库：王暉（CBDB 140996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140996&o=json)
