---
schema: wang-person/v1
id: p_SvV71z7wuSBsk2C4dEE7Ss
status: active
merged_into: null
display_name: 王若濬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nb521kvUENRQadqgFTMxmf
        subject_person_id: p_SvV71z7wuSBsk2C4dEE7Ss
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LF3zk39ZuATnji9jzrF6QX
          claim_id: c_Nb521kvUENRQadqgFTMxmf
          source_id: s_6BdEW34EXxV1FWq7BZUJzm
          stance: supports
          locator: CBDB:700854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700854）
          source: &a1
            id: s_6BdEW34EXxV1FWq7BZUJzm
            source_type: api_record
            title: 中国历代人物传记资料库：王若濬（CBDB 700854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700854&o=json
            external_identifier: CBDB:700854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8A274BNQc5g6EW22T7PEhp
        subject_person_id: p_SvV71z7wuSBsk2C4dEE7Ss
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
        - id: cs_4sv4CSjDoMnMHs5T88SGyR
          claim_id: c_8A274BNQc5g6EW22T7PEhp
          source_id: s_6BdEW34EXxV1FWq7BZUJzm
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
        id: c_Ak5e_-6iB_khhndg3Zme95
        subject_person_id: p_SvV71z7wuSBsk2C4dEE7Ss
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C78gN9qfCLA1MBQ5bec93Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m-3wp9dRHAYM1aWrD3jg9T
          claim_id: c_Ak5e_-6iB_khhndg3Zme95
          source_id: s_qzDqQLkJyErCdBymqtiK8R
          stance: supports
          locator: 吳門補乘，lgid=177496：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qzDqQLkJyErCdBymqtiK8R
            source_type: api_record
            title: 中国历代人物传记资料库：王思恆（CBDB 700937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700937&o=json
            external_identifier: CBDB:700937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C78gN9qfCLA1MBQ5bec93Y
        status: active
        display_name: 王思恆
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_pgw47C7ktaX6xV2DNMvioY
        subject_person_id: p_SvV71z7wuSBsk2C4dEE7Ss
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CE7G4HPnAi5GTVuab7y6H9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MkCNz3MQ887MQpMGkPpn5K
          claim_id: c_pgw47C7ktaX6xV2DNMvioY
          source_id: s_yikWgcGV2yXTrhc0yVX0HF
          stance: supports
          locator: 吳門補乘，lgid=177495：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yikWgcGV2yXTrhc0yVX0HF
            source_type: api_record
            title: 中国历代人物传记资料库：陶氏(王若濬妻)（CBDB 700851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700851&o=json
            external_identifier: CBDB:700851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CE7G4HPnAi5GTVuab7y6H9
        status: active
        display_name: 陶氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王若濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若濬 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_C78gN9qfCLA1MBQ5bec93Y | 王思恆 | accepted |
| spouses | p_CE7G4HPnAi5GTVuab7y6H9 | 陶氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：陶氏(王若濬妻)（CBDB 700851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700851&o=json)
- [中国历代人物传记资料库：王若濬（CBDB 700854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700854&o=json)
- [中国历代人物传记资料库：王思恆（CBDB 700937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700937&o=json)
