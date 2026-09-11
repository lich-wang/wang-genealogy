---
schema: wang-person/v1
id: p_HqYjbtMRgPHeULCykmCryC
status: active
merged_into: null
display_name: 王塤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SggcU6T5NmQsWLtDPDjvKr
        subject_person_id: p_HqYjbtMRgPHeULCykmCryC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ihHcdzTvSHozui3FcNYc3h
          claim_id: c_SggcU6T5NmQsWLtDPDjvKr
          source_id: s_sx5MeYJzzx22YzHe4yqm5T
          stance: supports
          locator: CBDB:154911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154911）
          source: &a1
            id: s_sx5MeYJzzx22YzHe4yqm5T
            source_type: api_record
            title: 中国历代人物传记资料库：王塤（CBDB 154911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154911&o=json
            external_identifier: CBDB:154911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7oMFxgxkDf1EYfHp5btJQw
        subject_person_id: p_HqYjbtMRgPHeULCykmCryC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塤，唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 154911）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yIZ2HXNmVRpVSokOLtF4nq
          claim_id: c_7oMFxgxkDf1EYfHp5btJQw
          source_id: s_sx5MeYJzzx22YzHe4yqm5T
          stance: supports
          locator: CBDB:154911
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8C71kcPp-MJtNCMDSa7_P9
        subject_person_id: p_hBA95seF4jfn429UmR76Q6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HqYjbtMRgPHeULCykmCryC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__y6ZamjYUXBbwMXq88OdEi
          claim_id: c_8C71kcPp-MJtNCMDSa7_P9
          source_id: s_sx5MeYJzzx22YzHe4yqm5T
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 30：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hBA95seF4jfn429UmR76Q6
        status: active
        display_name: 王守質
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王塤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王塤 | accepted |
| bio.summary | 王塤，唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 154911） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hBA95seF4jfn429UmR76Q6 | 王守質 | accepted |

## 外部来源

- [中国历代人物传记资料库：王塤（CBDB 154911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154911&o=json)
