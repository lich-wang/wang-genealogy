---
schema: wang-person/v1
id: p_Bhyq8KpDMhr92aGbfiB4zn
status: active
merged_into: null
display_name: 王敬之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gsGkAveiiwpDGFqAQmH3YD
        subject_person_id: p_Bhyq8KpDMhr92aGbfiB4zn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q4XhEKQ5RmAzcEfJduV9cj
          claim_id: c_gsGkAveiiwpDGFqAQmH3YD
          source_id: s_yZB89dhwfjMu4av4KFxq1b
          stance: supports
          locator: CBDB:213581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213581）
          source: &a1
            id: s_yZB89dhwfjMu4av4KFxq1b
            source_type: api_record
            title: 中国历代人物传记资料库：王敬之（CBDB 213581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213581&o=json
            external_identifier: CBDB:213581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x3A5g2YQv9ye86qXv7n1GH
        subject_person_id: p_Bhyq8KpDMhr92aGbfiB4zn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬之，明人物。天順八年進士，籍贯大名府。（中国历代人物传记资料库 CBDB 213581）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hwUEyzFZS39RzxlcE97yYJ
          claim_id: c_x3A5g2YQv9ye86qXv7n1GH
          source_id: s_yZB89dhwfjMu4av4KFxq1b
          stance: supports
          locator: CBDB:213581
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oFz8RHmOb80NlEC-IpKnr2
        subject_person_id: p_efTyspVBuWnU6D3LVRN3aM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bhyq8KpDMhr92aGbfiB4zn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__M6d5mMj7iRv8fTjbmFoJ1
          claim_id: c_oFz8RHmOb80NlEC-IpKnr2
          source_id: s_xreXeOhFczYG26dYlwMTBX
          stance: supports
          locator: CBDB：兄弟 王崇之（126685）之父／母 王憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王敬之 与 王崇之 为同胞（CBDB 记「兄」），王崇之 之父／母即 王敬之 之父／母。
          source:
            id: s_xreXeOhFczYG26dYlwMTBX
            source_type: api_record
            title: 中国历代人物传记资料库：王敬之（CBDB 213581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213581&o=json
            external_identifier: CBDB:213581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_efTyspVBuWnU6D3LVRN3aM
        status: active
        display_name: 王憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nGd49rdxHV2QWRg8eF9Kvn
        subject_person_id: p_Bhyq8KpDMhr92aGbfiB4zn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sMjY6kwGmS2PR67RexN7yL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AE7BhiRdlu-I7X_d6dpfHY
          claim_id: c_nGd49rdxHV2QWRg8eF9Kvn
          source_id: s_xreXeOhFczYG26dYlwMTBX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126685 王崇之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xreXeOhFczYG26dYlwMTBX
            source_type: api_record
            title: 中国历代人物传记资料库：王敬之（CBDB 213581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213581&o=json
            external_identifier: CBDB:213581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sMjY6kwGmS2PR67RexN7yL
        status: active
        display_name: 王崇之
        merged_into_person_id: null
---

# 王敬之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬之 | accepted |
| bio.summary | 王敬之，明人物。天順八年進士，籍贯大名府。（中国历代人物传记资料库 CBDB 213581） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_efTyspVBuWnU6D3LVRN3aM | 王憲 | accepted |
| other | p_sMjY6kwGmS2PR67RexN7yL | 王崇之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬之（CBDB 213581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213581&o=json)
