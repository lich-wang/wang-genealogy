---
schema: wang-person/v1
id: p_g8XCS3Mm7vNB6WdvCP6osQ
status: active
merged_into: null
display_name: 王思惠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jVzDLLpcBexC9MtR7NTZg1
        subject_person_id: p_g8XCS3Mm7vNB6WdvCP6osQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5WsusmyM6cF5GzZ1Kyfqbn
          claim_id: c_jVzDLLpcBexC9MtR7NTZg1
          source_id: s_jgPEMzVCRc2jSi7A5DKaxN
          stance: supports
          locator: CBDB:261840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261840）
          source: &a1
            id: s_jgPEMzVCRc2jSi7A5DKaxN
            source_type: api_record
            title: 中国历代人物传记资料库：王思惠（CBDB 261840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261840&o=json
            external_identifier: CBDB:261840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oZGhEENcWkpXu6Kovu4KcD
        subject_person_id: p_g8XCS3Mm7vNB6WdvCP6osQ
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
        - id: cs_uMF5hw4upBqW5iPDCEppXN
          claim_id: c_oZGhEENcWkpXu6Kovu4KcD
          source_id: s_jgPEMzVCRc2jSi7A5DKaxN
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
        id: c_dan2qIG0WGgQnvIwCy01dY
        subject_person_id: p_g8XCS3Mm7vNB6WdvCP6osQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O6vmWvjdRx8zz48wQD64E8
          claim_id: c_dan2qIG0WGgQnvIwCy01dY
          source_id: s_jgPEMzVCRc2jSi7A5DKaxN
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JhT8MPbcy6fqyD8xKqm8c7
        status: active
        display_name: 王奎
        merged_into_person_id: null
  other: []
---

# 王思惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思惠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JhT8MPbcy6fqyD8xKqm8c7 | 王奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思惠（CBDB 261840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261840&o=json)
