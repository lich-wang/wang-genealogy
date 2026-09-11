---
schema: wang-person/v1
id: p_PHmf79xTwWuj1qPnsJFVAk
status: active
merged_into: null
display_name: 王渙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CnYLMgmGJGTixMEGj1is7Y
        subject_person_id: p_PHmf79xTwWuj1qPnsJFVAk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gBHQZAtP4zfF2yTNU25YY4
          claim_id: c_CnYLMgmGJGTixMEGj1is7Y
          source_id: s_6vZqmm2TfAhNawEMnYVp9B
          stance: supports
          locator: CBDB:570907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570907）
          source: &a1
            id: s_6vZqmm2TfAhNawEMnYVp9B
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 570907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570907&o=json
            external_identifier: CBDB:570907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hJuTKiUK28Uu4UqGQgEtE6
        subject_person_id: p_PHmf79xTwWuj1qPnsJFVAk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_341nEgAh5VwZL8Nxnp6MAa
          claim_id: c_hJuTKiUK28Uu4UqGQgEtE6
          source_id: s_6vZqmm2TfAhNawEMnYVp9B
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
  spouses:
    - claim:
        id: c_Dj-3VBxIcufNTU20AYjjXN
        subject_person_id: p_PHmf79xTwWuj1qPnsJFVAk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bQwD7YMKM2SJaiTrj8D3q5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hBFcIXnSlY_DIXawHiZJub
          claim_id: c_Dj-3VBxIcufNTU20AYjjXN
          source_id: s_R2XP4OAuN31G-PNK-MhGuH
          stance: supports
          locator: CBDB 双向互证（妻子 焦騁）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R2XP4OAuN31G-PNK-MhGuH
            source_type: api_record
            title: 中国历代人物传记资料库：焦騁（CBDB 572812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572812&o=json
            external_identifier: CBDB:572812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bQwD7YMKM2SJaiTrj8D3q5
        status: active
        display_name: 焦騁
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Muc_2-QUVZCbWEC-02Xp0i
        subject_person_id: p_KwbmAJ2D4cYa2NFwUSg9RA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PHmf79xTwWuj1qPnsJFVAk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0pSPbuuMbicWIbs7b8HH0W
          claim_id: c_Muc_2-QUVZCbWEC-02Xp0i
          source_id: s_6vZqmm2TfAhNawEMnYVp9B
          stance: supports
          locator: CBDB 双向互证（祖父 王溥 ⇄ 孫 王渙）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_KwbmAJ2D4cYa2NFwUSg9RA
        status: active
        display_name: 王溥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王渙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渙 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_bQwD7YMKM2SJaiTrj8D3q5 | 焦騁 | accepted |
| ancestors | p_KwbmAJ2D4cYa2NFwUSg9RA | 王溥 | accepted |

## 外部来源

- [中国历代人物传记资料库：焦騁（CBDB 572812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572812&o=json)
- [中国历代人物传记资料库：王渙（CBDB 570907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570907&o=json)
