---
schema: wang-person/v1
id: p_WPx4EjSn2rHqao5Mj3syGV
status: active
merged_into: null
display_name: 王安道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BhXCmAg7Z1PRaC72av4HTW
        subject_person_id: p_WPx4EjSn2rHqao5Mj3syGV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EcYxKUTyymdyCzccmKxD2b
          claim_id: c_BhXCmAg7Z1PRaC72av4HTW
          source_id: s_yq9mCKspCWtUTKHyQYTDsv
          stance: supports
          locator: CBDB:287102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287102）
          source: &a1
            id: s_yq9mCKspCWtUTKHyQYTDsv
            source_type: api_record
            title: 中国历代人物传记资料库：王安道（CBDB 287102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287102&o=json
            external_identifier: CBDB:287102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gogsoAcCFuDmMEpWZBWc8c
        subject_person_id: p_WPx4EjSn2rHqao5Mj3syGV
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
        - id: cs_nUABFED24vw6Hd11A9BVm7
          claim_id: c_gogsoAcCFuDmMEpWZBWc8c
          source_id: s_yq9mCKspCWtUTKHyQYTDsv
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
        id: c_Xi8J0IaQCHQtZgOaIwKAjz
        subject_person_id: p_WPx4EjSn2rHqao5Mj3syGV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hMbDUQB1GaYNgCJcxGcWWL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UvNH0LJCMbaBZf_MizIDtU
          claim_id: c_Xi8J0IaQCHQtZgOaIwKAjz
          source_id: s_qBXgxBd99XeUmj4pBc6DTT
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第四十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qBXgxBd99XeUmj4pBc6DTT
            source_type: api_record
            title: 中国历代人物传记资料库：王璜（CBDB 202374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202374&o=json
            external_identifier: CBDB:202374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hMbDUQB1GaYNgCJcxGcWWL
        status: active
        display_name: 王璜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安道 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hMbDUQB1GaYNgCJcxGcWWL | 王璜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安道（CBDB 287102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287102&o=json)
- [中国历代人物传记资料库：王璜（CBDB 202374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202374&o=json)
