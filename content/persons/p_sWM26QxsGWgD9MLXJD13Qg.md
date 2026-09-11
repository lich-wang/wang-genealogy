---
schema: wang-person/v1
id: p_sWM26QxsGWgD9MLXJD13Qg
status: active
merged_into: null
display_name: 王銘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iRhEdtUFkmZVWsD676VFsJ
        subject_person_id: p_sWM26QxsGWgD9MLXJD13Qg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Sh4AQ1fdD74BXLdaapKLzm
          claim_id: c_iRhEdtUFkmZVWsD676VFsJ
          source_id: s_jduCSWqon1Gb77wbEJDkJg
          stance: supports
          locator: CBDB:265222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265222）
          source: &a1
            id: s_jduCSWqon1Gb77wbEJDkJg
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 265222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265222&o=json
            external_identifier: CBDB:265222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M2zC1FBKKLqNBotpgDN6hP
        subject_person_id: p_sWM26QxsGWgD9MLXJD13Qg
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
        - id: cs_ETRT7KAntvg3gRZaeUrG8G
          claim_id: c_M2zC1FBKKLqNBotpgDN6hP
          source_id: s_jduCSWqon1Gb77wbEJDkJg
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
        id: c__8VYJDp5WyOuHSYPBVGT_e
        subject_person_id: p_sWM26QxsGWgD9MLXJD13Qg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5vDjPyewsQNr1vDc9fypfb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_onk5gySy4M2Y8XTG1YjrAI
          claim_id: c__8VYJDp5WyOuHSYPBVGT_e
          source_id: s_SG9XzYnQAGNaRPC96Wixq5
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第五十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SG9XzYnQAGNaRPC96Wixq5
            source_type: api_record
            title: 中国历代人物传记资料库：王時（CBDB 200965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200965&o=json
            external_identifier: CBDB:200965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5vDjPyewsQNr1vDc9fypfb
        status: active
        display_name: 王時
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5vDjPyewsQNr1vDc9fypfb | 王時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銘（CBDB 265222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265222&o=json)
- [中国历代人物传记资料库：王時（CBDB 200965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200965&o=json)
