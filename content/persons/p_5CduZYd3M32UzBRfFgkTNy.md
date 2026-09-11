---
schema: wang-person/v1
id: p_5CduZYd3M32UzBRfFgkTNy
status: active
merged_into: null
display_name: 王祿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c8kWWWD9gsQCVPWLGQA9MQ
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JXrvVkGwZcr3TMRZJkbUXp
          claim_id: c_c8kWWWD9gsQCVPWLGQA9MQ
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: CBDB:199491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199491）
          source: &a1
            id: s_VYJvgz4n1AbQdfJrLeEkYN
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 199491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199491&o=json
            external_identifier: CBDB:199491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RJVLty2Sk1wgKVUPWY3dbC
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1436年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_12BRohAFf45P8eH7rP34XU
          claim_id: c_RJVLty2Sk1wgKVUPWY3dbC
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ELEGXUDPzQJEzQp9CrYkD9
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
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
        - id: cs_73N6BfmwHs34zLazAxNWfP
          claim_id: c_ELEGXUDPzQJEzQp9CrYkD9
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-j2z-l9JM3nHa0w4FrRHRH
        subject_person_id: p_t5oHeornqu2QNuT9xayaao
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5CduZYd3M32UzBRfFgkTNy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Ng43zi1PIEtc3lp8TFQo5
          claim_id: c_-j2z-l9JM3nHa0w4FrRHRH
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t5oHeornqu2QNuT9xayaao
        status: active
        display_name: 王英
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ClVu-0E6DgN7futdSG-7hF
        subject_person_id: p_nYBJ8DhUaL2NcKE4G7AVS7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5CduZYd3M32UzBRfFgkTNy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpz9nZJ4vRQmBCgN1EdE5_
          claim_id: c_ClVu-0E6DgN7futdSG-7hF
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nYBJ8DhUaL2NcKE4G7AVS7
        status: active
        display_name: 王希遠
        merged_into_person_id: null
    - claim:
        id: c_eErsknKe6DJMlVpEf-H9_3
        subject_person_id: p_mTzxwAEMxvLCjgbpNJPkQq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5CduZYd3M32UzBRfFgkTNy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fbEQpyfowcJAOH5nW_ZOtD
          claim_id: c_eErsknKe6DJMlVpEf-H9_3
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mTzxwAEMxvLCjgbpNJPkQq
        status: active
        display_name: 王澤
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祿 | accepted |
| birth.date | 1436年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t5oHeornqu2QNuT9xayaao | 王英 | accepted |
| ancestors | p_nYBJ8DhUaL2NcKE4G7AVS7 | 王希遠 | accepted |
| ancestors | p_mTzxwAEMxvLCjgbpNJPkQq | 王澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祿（CBDB 199491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199491&o=json)
