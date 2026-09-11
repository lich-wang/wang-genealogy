---
schema: wang-person/v1
id: p_Vv43N2CuZqbv1NMT55dzSf
status: active
merged_into: null
display_name: 王琴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pgy9zPbpUnvfUcgCCKiaDF
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kisBaVL7F326G7nLNaAbBh
          claim_id: c_Pgy9zPbpUnvfUcgCCKiaDF
          source_id: s_bFs428awY9FqQXkbBctHpr
          stance: supports
          locator: CBDB:317052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317052）
          source: &a1
            id: s_bFs428awY9FqQXkbBctHpr
            source_type: api_record
            title: 中国历代人物传记资料库：王琴（CBDB 317052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317052&o=json
            external_identifier: CBDB:317052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y11TxFMSpS1qexPGnrbu16
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
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
        - id: cs_oTteKz1taK68fa5Tj9iFMh
          claim_id: c_Y11TxFMSpS1qexPGnrbu16
          source_id: s_bFs428awY9FqQXkbBctHpr
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
        id: c_8w8x6k8zuNUBAha1eShPIK
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qVZ9wjgG1zX0-H9qzdN5zD
          claim_id: c_8w8x6k8zuNUBAha1eShPIK
          source_id: s_rpD9Xzyu7fDvD4yopAp4vQ
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rpD9Xzyu7fDvD4yopAp4vQ
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 198790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198790&o=json
            external_identifier: CBDB:198790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F4TvNBX2MG96q5zMnLQmVQ
        status: active
        display_name: 王應奎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琴 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_F4TvNBX2MG96q5zMnLQmVQ | 王應奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琴（CBDB 317052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317052&o=json)
- [中国历代人物传记资料库：王應奎（CBDB 198790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198790&o=json)
