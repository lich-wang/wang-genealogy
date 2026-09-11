---
schema: wang-person/v1
id: p_HooaQHi6HT221VAZHQM9oZ
status: active
merged_into: null
display_name: 王珍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zq7FDekfSdY8nQAzJ93ER2
        subject_person_id: p_HooaQHi6HT221VAZHQM9oZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gMtMyRTaTrQeGwQHcCzuPF
          claim_id: c_zq7FDekfSdY8nQAzJ93ER2
          source_id: s_FuTo1YqZGeJBhuKFmzyc4S
          stance: supports
          locator: CBDB:213976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213976）
          source: &a1
            id: s_FuTo1YqZGeJBhuKFmzyc4S
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 213976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213976&o=json
            external_identifier: CBDB:213976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xWSLtdMJ6yfxe7WA3fzhQ5
        subject_person_id: p_HooaQHi6HT221VAZHQM9oZ
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
        - id: cs_wU1oMupGYwaxLWLqC8pMtP
          claim_id: c_xWSLtdMJ6yfxe7WA3fzhQ5
          source_id: s_FuTo1YqZGeJBhuKFmzyc4S
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
        id: c_cQwxV4TvhGEwNKNrQsSydL
        subject_person_id: p_HooaQHi6HT221VAZHQM9oZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CjOmTVmky8zH3Me6DqABUf
          claim_id: c_cQwxV4TvhGEwNKNrQsSydL
          source_id: s_FuTo1YqZGeJBhuKFmzyc4S
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HfLk9ptSCZD1pXUYCky88S
        status: active
        display_name: 王一言
        merged_into_person_id: null
  other: []
---

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HfLk9ptSCZD1pXUYCky88S | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珍（CBDB 213976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213976&o=json)
