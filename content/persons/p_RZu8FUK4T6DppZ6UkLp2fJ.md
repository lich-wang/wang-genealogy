---
schema: wang-person/v1
id: p_RZu8FUK4T6DppZ6UkLp2fJ
status: active
merged_into: null
display_name: 王寶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vw1V2KAMvfh7DtQAVGiMpe
        subject_person_id: p_RZu8FUK4T6DppZ6UkLp2fJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6AmENGHTZ89LUyuB83SN9o
          claim_id: c_vw1V2KAMvfh7DtQAVGiMpe
          source_id: s_uYtdjwrZsaCBP22Z2x9cH5
          stance: supports
          locator: CBDB:216053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216053）
          source: &a1
            id: s_uYtdjwrZsaCBP22Z2x9cH5
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 216053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216053&o=json
            external_identifier: CBDB:216053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RxcNu6fE2cuKmNLkRtgrnG
        subject_person_id: p_RZu8FUK4T6DppZ6UkLp2fJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 216053）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vPoeGBFLZDBFpIo5024Rvc
          claim_id: c_RxcNu6fE2cuKmNLkRtgrnG
          source_id: s_uYtdjwrZsaCBP22Z2x9cH5
          stance: supports
          locator: CBDB:216053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_dp-2e34sMixmTRrYndyyb_
        subject_person_id: p_RZu8FUK4T6DppZ6UkLp2fJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EbU5HxFXjQt3D8gkdNvhGE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mdC18t3JDO9k8Olx0TqFk-
          claim_id: c_dp-2e34sMixmTRrYndyyb_
          source_id: s_uYtdjwrZsaCBP22Z2x9cH5
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EbU5HxFXjQt3D8gkdNvhGE
        status: active
        display_name: 王之麟
        merged_into_person_id: null
  other: []
---

# 王寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶 | accepted |
| bio.summary | 王寶，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 216053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_EbU5HxFXjQt3D8gkdNvhGE | 王之麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 216053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216053&o=json)
