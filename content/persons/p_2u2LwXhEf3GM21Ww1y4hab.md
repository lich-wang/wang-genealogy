---
schema: wang-person/v1
id: p_2u2LwXhEf3GM21Ww1y4hab
status: active
merged_into: null
display_name: 王文煥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R44JjJNBYpZn3v9gtKDjVQ
        subject_person_id: p_2u2LwXhEf3GM21Ww1y4hab
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fhBpYJcYaWw8jDRYqBASJw
          claim_id: c_R44JjJNBYpZn3v9gtKDjVQ
          source_id: s_32C6t2Dj2gag3M2DwPqaa6
          stance: supports
          locator: CBDB:260053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260053）
          source: &a1
            id: s_32C6t2Dj2gag3M2DwPqaa6
            source_type: api_record
            title: 中国历代人物传记资料库：王文煥（CBDB 260053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260053&o=json
            external_identifier: CBDB:260053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2THM87qRsTJt443ZDSVzEK
        subject_person_id: p_2u2LwXhEf3GM21Ww1y4hab
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
        - id: cs_8ZyAn8fkrJWBDybuJ5AcBv
          claim_id: c_2THM87qRsTJt443ZDSVzEK
          source_id: s_32C6t2Dj2gag3M2DwPqaa6
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
        id: c_I0nhlYiVluebJB0-E2z7lj
        subject_person_id: p_2u2LwXhEf3GM21Ww1y4hab
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vnNgpS2EoPkSDWNJdYVAh5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v9YAQbQ77dIMhKjSAcBKK0
          claim_id: c_I0nhlYiVluebJB0-E2z7lj
          source_id: s_32C6t2Dj2gag3M2DwPqaa6
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百五十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vnNgpS2EoPkSDWNJdYVAh5
        status: active
        display_name: 王資良
        merged_into_person_id: null
  other: []
---

# 王文煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文煥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vnNgpS2EoPkSDWNJdYVAh5 | 王資良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文煥（CBDB 260053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260053&o=json)
