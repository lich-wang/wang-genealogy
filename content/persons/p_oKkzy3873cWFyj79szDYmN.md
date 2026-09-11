---
schema: wang-person/v1
id: p_oKkzy3873cWFyj79szDYmN
status: active
merged_into: null
display_name: 王廉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yFYBcg9YrY4n4Acr6afnM8
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NPdcHWRxi2XHh5MR73aQy4
          claim_id: c_yFYBcg9YrY4n4Acr6afnM8
          source_id: s_t6T5gjq9QBMp5d8GaptmV5
          stance: supports
          locator: CBDB:283882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283882）
          source: &a1
            id: s_t6T5gjq9QBMp5d8GaptmV5
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 283882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283882&o=json
            external_identifier: CBDB:283882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mfX5HP23NJTN6RNZ1U6kGY
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
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
        - id: cs_w7WzDQMJi5BfzSQ5MtLwTo
          claim_id: c_mfX5HP23NJTN6RNZ1U6kGY
          source_id: s_t6T5gjq9QBMp5d8GaptmV5
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
        id: c_r0Wd1xNXhNmCprr1w9DZw_
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vDtBh1kto7gV1VoE7a-HLE
          claim_id: c_r0Wd1xNXhNmCprr1w9DZw_
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yeDS7MthSZ69rfW6mZGg3S
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 202119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202119&o=json
            external_identifier: CBDB:202119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AfLhoGsLbskzeER6Tw4Mw8
        status: active
        display_name: 王道
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AfLhoGsLbskzeER6Tw4Mw8 | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 202119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202119&o=json)
- [中国历代人物传记资料库：王廉（CBDB 283882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283882&o=json)
