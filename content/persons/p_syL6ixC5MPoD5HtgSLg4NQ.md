---
schema: wang-person/v1
id: p_syL6ixC5MPoD5HtgSLg4NQ
status: active
merged_into: null
display_name: 王純
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_psrqs6UA3ed2nY9BeLiHDf
        subject_person_id: p_syL6ixC5MPoD5HtgSLg4NQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PXm9hqvV9sjoUxjbadr28h
          claim_id: c_psrqs6UA3ed2nY9BeLiHDf
          source_id: s_hvFxpZJZ5MfpXDVtBPRuJQ
          stance: supports
          locator: CBDB:232692
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232692）
          source: &a1
            id: s_hvFxpZJZ5MfpXDVtBPRuJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 232692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232692&o=json
            external_identifier: CBDB:232692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZDoHHFuP68AqDpf2wDSzXM
        subject_person_id: p_syL6ixC5MPoD5HtgSLg4NQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_onu9BD2GD9EP4XZGw4jUUL
          claim_id: c_ZDoHHFuP68AqDpf2wDSzXM
          source_id: s_hvFxpZJZ5MfpXDVtBPRuJQ
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
  descendants:
    - claim:
        id: c_R_ZIVhS0RFKLhEK5swrPx-
        subject_person_id: p_syL6ixC5MPoD5HtgSLg4NQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AGu2tQLWEYnHDWgwKg7CBM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eGaEBicyMzhjsHT-hqUgpP
          claim_id: c_R_ZIVhS0RFKLhEK5swrPx-
          source_id: s_hvFxpZJZ5MfpXDVtBPRuJQ
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AGu2tQLWEYnHDWgwKg7CBM
        status: active
        display_name: 王喻
        merged_into_person_id: null
  other: []
---

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AGu2tQLWEYnHDWgwKg7CBM | 王喻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 232692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232692&o=json)
