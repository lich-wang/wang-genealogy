---
schema: wang-person/v1
id: p_kczQmxP52MnpzK7NJpeo6m
status: active
merged_into: null
display_name: 王克誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tszEtoziogGMCDvMBP9NUX
        subject_person_id: p_kczQmxP52MnpzK7NJpeo6m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SJLDnzWH5TLcgbTZEQ8VQ3
          claim_id: c_tszEtoziogGMCDvMBP9NUX
          source_id: s_qDfyLES5d8BYBFzHttHiHM
          stance: supports
          locator: CBDB:287040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287040）
          source: &a1
            id: s_qDfyLES5d8BYBFzHttHiHM
            source_type: api_record
            title: 中国历代人物传记资料库：王克誠（CBDB 287040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287040&o=json
            external_identifier: CBDB:287040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NYZ1DCZTBmq62HReb1w1ma
        subject_person_id: p_kczQmxP52MnpzK7NJpeo6m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克誠，明人物。永樂十年進士。（中国历代人物传记资料库 CBDB 287040）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0k8EdcriuG5TtvjnFzvBJu
          claim_id: c_NYZ1DCZTBmq62HReb1w1ma
          source_id: s_qDfyLES5d8BYBFzHttHiHM
          stance: supports
          locator: CBDB:287040
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
        id: c_JU5C2Q5IjHMjFU8Ol5dcT4
        subject_person_id: p_kczQmxP52MnpzK7NJpeo6m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wKQiP1EfRixbApmFB2CXep
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gbP_pLu05ZAMW46ISkoWkT
          claim_id: c_JU5C2Q5IjHMjFU8Ol5dcT4
          source_id: s_qDfyLES5d8BYBFzHttHiHM
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wKQiP1EfRixbApmFB2CXep
        status: active
        display_name: 王詢
        merged_into_person_id: null
  other: []
---

# 王克誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克誠 | accepted |
| bio.summary | 王克誠，明人物。永樂十年進士。（中国历代人物传记资料库 CBDB 287040） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_wKQiP1EfRixbApmFB2CXep | 王詢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克誠（CBDB 287040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287040&o=json)
