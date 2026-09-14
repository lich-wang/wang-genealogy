---
schema: wang-person/v1
id: p_RuSLTh9boFqmMpRBv7wnJ1
status: active
merged_into: null
display_name: 王子謨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6FSjAfmd3zoMLYMJ6VqcSq
        subject_person_id: p_RuSLTh9boFqmMpRBv7wnJ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9x1tzhE3wrNbeqkwCcvNbj
          claim_id: c_6FSjAfmd3zoMLYMJ6VqcSq
          source_id: s_TWGkCDtckFJ7VC99pQJ75k
          stance: supports
          locator: CBDB:251783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251783）
          source: &a1
            id: s_TWGkCDtckFJ7VC99pQJ75k
            source_type: api_record
            title: 中国历代人物传记资料库：王子謨（CBDB 251783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251783&o=json
            external_identifier: CBDB:251783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AQCqx7m5FAWWrZsktBwo3n
        subject_person_id: p_RuSLTh9boFqmMpRBv7wnJ1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子謨，明人物。成化十四年進士，籍贯進賢。（中国历代人物传记资料库 CBDB 251783）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EyARpM_-JhTHr6dLKLWqxp
          claim_id: c_AQCqx7m5FAWWrZsktBwo3n
          source_id: s_TWGkCDtckFJ7VC99pQJ75k
          stance: supports
          locator: CBDB:251783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YBS6eqPcd0oIPec_B3PPis
        subject_person_id: p_RuSLTh9boFqmMpRBv7wnJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kBqE6QprrhgLRYUsgfWdoz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_srFBTifsPbnNuwwf9hAIpb
          claim_id: c_YBS6eqPcd0oIPec_B3PPis
          source_id: s_GVkM3ScQfpkZuNtBgD5koE
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GVkM3ScQfpkZuNtBgD5koE
            source_type: api_record
            title: 中国历代人物传记资料库：王建（CBDB 199946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199946&o=json
            external_identifier: CBDB:199946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kBqE6QprrhgLRYUsgfWdoz
        status: active
        display_name: 王建
        merged_into_person_id: null
    - claim:
        id: c_ausqArftW6c4RyBpIg1F3L
        subject_person_id: p_RuSLTh9boFqmMpRBv7wnJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DrX1CF3RKxMrGUy578cf2P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uMuucNSe_gNkh7aWGz7Pe1
          claim_id: c_ausqArftW6c4RyBpIg1F3L
          source_id: s_VRBpNSHzKIHTVT1oCb8PNs
          stance: supports
          locator: CBDB：兄弟 王建（199946）之父／母 王子謨
          quotation: null
          interpretation_note: 由兄弟关系推断：王選 与 王建 为同胞（CBDB 记「弟」），王建 之父／母即 王選 之父／母。
          source:
            id: s_VRBpNSHzKIHTVT1oCb8PNs
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 251788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251788&o=json
            external_identifier: CBDB:251788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DrX1CF3RKxMrGUy578cf2P
        status: active
        display_name: 王選
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子謨 | accepted |
| bio.summary | 王子謨，明人物。成化十四年進士，籍贯進賢。（中国历代人物传记资料库 CBDB 251783） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kBqE6QprrhgLRYUsgfWdoz | 王建 | accepted |
| children | p_DrX1CF3RKxMrGUy578cf2P | 王選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建（CBDB 199946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199946&o=json)
- [中国历代人物传记资料库：王選（CBDB 251788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251788&o=json)
- [中国历代人物传记资料库：王子謨（CBDB 251783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251783&o=json)
