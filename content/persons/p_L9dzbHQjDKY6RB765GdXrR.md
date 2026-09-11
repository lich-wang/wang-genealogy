---
schema: wang-person/v1
id: p_L9dzbHQjDKY6RB765GdXrR
status: active
merged_into: null
display_name: 王重
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q3GQ6vAGiwDZ23t4yU8oFM
        subject_person_id: p_L9dzbHQjDKY6RB765GdXrR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HyoWgR4aP3cC8qGfWDruGg
          claim_id: c_Q3GQ6vAGiwDZ23t4yU8oFM
          source_id: s_vLWut7vV1mJ2CPrNGrJhgU
          stance: supports
          locator: CBDB:558248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558248）
          source: &a1
            id: s_vLWut7vV1mJ2CPrNGrJhgU
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 558248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558248&o=json
            external_identifier: CBDB:558248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o3NWeDvZESrJuQTh1qWi1Q
        subject_person_id: p_L9dzbHQjDKY6RB765GdXrR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJnchzQY12Y4t1CqxfjmPk
          claim_id: c_o3NWeDvZESrJuQTh1qWi1Q
          source_id: s_vLWut7vV1mJ2CPrNGrJhgU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_X9KMBTP_Z8T4VH-03ftst3
        subject_person_id: p_L9dzbHQjDKY6RB765GdXrR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mddk6SPKF95i3npAYgeV38
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ba24D9u7wDMGMSKaDimRRr
          claim_id: c_X9KMBTP_Z8T4VH-03ftst3
          source_id: s_cmBPEC5AL6bAz2NjSDfnNY
          stance: supports
          locator: (乾隆)信陽州志，lgid=868523：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cmBPEC5AL6bAz2NjSDfnNY
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 558385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558385&o=json
            external_identifier: CBDB:558385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mddk6SPKF95i3npAYgeV38
        status: active
        display_name: 王日新
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__Cpnle3jaHqhs8qbwU2q7y
        subject_person_id: p_L9dzbHQjDKY6RB765GdXrR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DpEobFjKd54GHfy3ud2iAJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v5TXksS8U-9HUfwE0q9xZn
          claim_id: c__Cpnle3jaHqhs8qbwU2q7y
          source_id: s_louaBRhpi8FHmc3AkXAoPL
          stance: supports
          locator: (乾隆)信陽州志，lgid=868523：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_louaBRhpi8FHmc3AkXAoPL
            source_type: api_record
            title: 中国历代人物传记资料库：任氏(王重妻)（CBDB 558247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558247&o=json
            external_identifier: CBDB:558247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DpEobFjKd54GHfy3ud2iAJ
        status: active
        display_name: 任氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mddk6SPKF95i3npAYgeV38 | 王日新 | accepted |
| spouses | p_DpEobFjKd54GHfy3ud2iAJ | 任氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：任氏(王重妻)（CBDB 558247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558247&o=json)
- [中国历代人物传记资料库：王日新（CBDB 558385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558385&o=json)
- [中国历代人物传记资料库：王重（CBDB 558248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558248&o=json)
