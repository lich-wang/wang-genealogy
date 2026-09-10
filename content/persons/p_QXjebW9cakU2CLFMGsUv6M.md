---
schema: wang-person/v1
id: p_QXjebW9cakU2CLFMGsUv6M
status: active
merged_into: null
display_name: 葉慧光
revision: 1
cbdb_id: 56403
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9yM0v-lpvQaqDTFXdn9oNc
        subject_person_id: p_QXjebW9cakU2CLFMGsUv6M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 葉慧光
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mBwOJwmfXZ_M3WQavUs57T
          claim_id: c_9yM0v-lpvQaqDTFXdn9oNc
          source_id: s_Et_fwgfFfSeGK_uUtmuqtM
          stance: supports
          locator: CBDB:56403
          quotation: null
          interpretation_note: CBDB 明确记录的王進之配偶
          source: &a1
            id: s_Et_fwgfFfSeGK_uUtmuqtM
            source_type: api_record
            title: 中国历代人物传记资料库：葉慧光（CBDB 56403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56403&o=json
            external_identifier: CBDB:56403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_sh1iWUlCRvxFcHNKYrw3mI
        subject_person_id: p_QXjebW9cakU2CLFMGsUv6M
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_19HhxBBa41LXR8XidmLDzC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i-rcA3bQR4XYDu3UkUBC6m
          claim_id: c_sh1iWUlCRvxFcHNKYrw3mI
          source_id: s_Et_fwgfFfSeGK_uUtmuqtM
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #890：丈夫"
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_19HhxBBa41LXR8XidmLDzC
        status: active
        display_name: 王進之
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 葉慧光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 葉慧光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_19HhxBBa41LXR8XidmLDzC | 王進之 | accepted |

## 外部来源

- [中国历代人物传记资料库：葉慧光（CBDB 56403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56403&o=json)
