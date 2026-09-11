---
schema: wang-person/v1
id: p_o6NSmGt2wjqPcWiQP6meF1
status: active
merged_into: null
display_name: 王崙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W71ehyYEKJFDjuDZ5CC5GH
        subject_person_id: p_o6NSmGt2wjqPcWiQP6meF1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zF6x6549kzbcDhbyTecuwu
          claim_id: c_W71ehyYEKJFDjuDZ5CC5GH
          source_id: s_9S8hjS5YaX7YL4YRTc5C2Y
          stance: supports
          locator: CBDB:227289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227289）
          source: &a1
            id: s_9S8hjS5YaX7YL4YRTc5C2Y
            source_type: api_record
            title: 中国历代人物传记资料库：王崙（CBDB 227289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227289&o=json
            external_identifier: CBDB:227289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3dGSg9zVLnTaLQTdJUV7Hq
        subject_person_id: p_o6NSmGt2wjqPcWiQP6meF1
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
        - id: cs_N6b1SVSZJi9RB7pcyinMiL
          claim_id: c_3dGSg9zVLnTaLQTdJUV7Hq
          source_id: s_9S8hjS5YaX7YL4YRTc5C2Y
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
        id: c_fCk_rbCAsfIkuXSuz1JdsK
        subject_person_id: p_o6NSmGt2wjqPcWiQP6meF1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jRGNXQ3a3N3Q8uk-g_ubrA
          claim_id: c_fCk_rbCAsfIkuXSuz1JdsK
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_avnRdC5KtG8zzfeDZxHPY8
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 207078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207078&o=json
            external_identifier: CBDB:207078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4UbRK7w6DiK7iFYWsav6v1
        status: active
        display_name: 王都
        merged_into_person_id: null
  other: []
---

# 王崙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崙 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4UbRK7w6DiK7iFYWsav6v1 | 王都 | accepted |

## 外部来源

- [中国历代人物传记资料库：王都（CBDB 207078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207078&o=json)
- [中国历代人物传记资料库：王崙（CBDB 227289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227289&o=json)
