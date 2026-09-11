---
schema: wang-person/v1
id: p_vbAFBvD8E37BdKu2jDuyt9
status: active
merged_into: null
display_name: 王璋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v2s4EWpGJkToXwzbmpJExK
        subject_person_id: p_vbAFBvD8E37BdKu2jDuyt9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fWtRu1wAC3yHVejVA59Awf
          claim_id: c_v2s4EWpGJkToXwzbmpJExK
          source_id: s_eisnB7QtGBwPxHij9MZTrM
          stance: supports
          locator: CBDB:265486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265486）
          source: &a1
            id: s_eisnB7QtGBwPxHij9MZTrM
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 265486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265486&o=json
            external_identifier: CBDB:265486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.680Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uZ9LH4GLPn9r7raRoBF8Jj
        subject_person_id: p_vbAFBvD8E37BdKu2jDuyt9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋，明人物。弘治六年進士，籍贯平山，曾任鴻臚寺署丞。（中国历代人物传记资料库 CBDB 265486）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3yXLa93pV1kfPCw7mpzzVa
          claim_id: c_uZ9LH4GLPn9r7raRoBF8Jj
          source_id: s_eisnB7QtGBwPxHij9MZTrM
          stance: supports
          locator: CBDB:265486
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Wk5BITdbCbDbi4SqNCmcu6
        subject_person_id: p_vbAFBvD8E37BdKu2jDuyt9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dJj6NuaLRaohrqoTudZvBt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QjucAuVxzLnPhD7CA32WMQ
          claim_id: c_Wk5BITdbCbDbi4SqNCmcu6
          source_id: s_eisnB7QtGBwPxHij9MZTrM
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dJj6NuaLRaohrqoTudZvBt
        status: active
        display_name: 王慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | 王璋，明人物。弘治六年進士，籍贯平山，曾任鴻臚寺署丞。（中国历代人物传记资料库 CBDB 265486） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dJj6NuaLRaohrqoTudZvBt | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璋（CBDB 265486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265486&o=json)
