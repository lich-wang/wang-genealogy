---
schema: wang-person/v1
id: p_jbCaYaEREyBMaLsesnHvJR
status: active
merged_into: null
display_name: 王蘭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HJKn9oZq7WrZw6nyVHd7kg
        subject_person_id: p_jbCaYaEREyBMaLsesnHvJR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x6L2CCi1CR75LKVhZNq9RX
          claim_id: c_HJKn9oZq7WrZw6nyVHd7kg
          source_id: s_MH3VajN5X84KDXGxde53Nn
          stance: supports
          locator: CBDB:557776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557776）
          source: &a1
            id: s_MH3VajN5X84KDXGxde53Nn
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 557776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557776&o=json
            external_identifier: CBDB:557776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e7oNw58LL3KJL812LsUYks
        subject_person_id: p_jbCaYaEREyBMaLsesnHvJR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭，清人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 557776）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R50W2omnWMTo0ZFMpQPBoM
          claim_id: c_e7oNw58LL3KJL812LsUYks
          source_id: s_MH3VajN5X84KDXGxde53Nn
          stance: supports
          locator: CBDB:557776
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
  spouses:
    - claim:
        id: c_NPp-TiAgr2h79g90lvt4Rd
        subject_person_id: p_jbCaYaEREyBMaLsesnHvJR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YxBkGaUFxRpjGnbkXVK4ob
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BErZxszmgyS3DE2mCHr2jE
          claim_id: c_NPp-TiAgr2h79g90lvt4Rd
          source_id: s_7jYHqbFKu7JJnK4tQFdpme
          stance: supports
          locator: 南陽府志，lgid=878792：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7jYHqbFKu7JJnK4tQFdpme
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王蘭妻)（CBDB 557777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557777&o=json
            external_identifier: CBDB:557777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YxBkGaUFxRpjGnbkXVK4ob
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭 | accepted |
| bio.summary | 王蘭，清人物。籍贯鄧州。（中国历代人物传记资料库 CBDB 557776） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_YxBkGaUFxRpjGnbkXVK4ob | 趙氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘭（CBDB 557776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557776&o=json)
- [中国历代人物传记资料库：趙氏(王蘭妻)（CBDB 557777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557777&o=json)
