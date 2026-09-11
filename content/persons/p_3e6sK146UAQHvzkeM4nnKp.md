---
schema: wang-person/v1
id: p_3e6sK146UAQHvzkeM4nnKp
status: active
merged_into: null
display_name: 王寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N63Rg3q39cFWAN7WWcT6dR
        subject_person_id: p_3e6sK146UAQHvzkeM4nnKp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vv5cSmwxwj1aBNwLfsZPyp
          claim_id: c_N63Rg3q39cFWAN7WWcT6dR
          source_id: s_puq4Vz1TBLmaZWUFeaDx2B
          stance: supports
          locator: CBDB:224127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（224127）
          source: &a1
            id: s_puq4Vz1TBLmaZWUFeaDx2B
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 224127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224127&o=json
            external_identifier: CBDB:224127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nsbtzjq6pP9izEpvJpHFuC
        subject_person_id: p_3e6sK146UAQHvzkeM4nnKp
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
        - id: cs_1wxnLHQ1EqfQ5p39Q91BPm
          claim_id: c_nsbtzjq6pP9izEpvJpHFuC
          source_id: s_puq4Vz1TBLmaZWUFeaDx2B
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_36o7RAm0aJzb64yjr0pKTE
        subject_person_id: p_3e6sK146UAQHvzkeM4nnKp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tEV3J8yPB3iuWF6kPPKTcz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nu7rhGdE4MZDEwXtP6__HM
          claim_id: c_36o7RAm0aJzb64yjr0pKTE
          source_id: s_puq4Vz1TBLmaZWUFeaDx2B
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tEV3J8yPB3iuWF6kPPKTcz
        status: active
        display_name: 王政
        merged_into_person_id: null
  other: []
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tEV3J8yPB3iuWF6kPPKTcz | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 224127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224127&o=json)
