---
schema: wang-person/v1
id: p_9KuNRr8o75Vr36yjwDeyAm
status: active
merged_into: null
display_name: 王應時
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TydyU58eCPMVm4VJPWp9F6
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LzBMoh91Yq4h6rrsMCuLoK
          claim_id: c_TydyU58eCPMVm4VJPWp9F6
          source_id: s_ELwwMtVZvNEXahCJxGjJDF
          stance: supports
          locator: CBDB:334172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334172）
          source: &a1
            id: s_ELwwMtVZvNEXahCJxGjJDF
            source_type: api_record
            title: 中国历代人物传记资料库：王應時（CBDB 334172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334172&o=json
            external_identifier: CBDB:334172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cc3bg6qJU5mdr7WoqW5PVz
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
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
        - id: cs_vD5EdVDPQAA6oWaV1VGTzL
          claim_id: c_Cc3bg6qJU5mdr7WoqW5PVz
          source_id: s_ELwwMtVZvNEXahCJxGjJDF
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
        id: c_r6-lCLt6ab0q6hEnvdos9t
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Que1Sc9ugp524zabUcC6Bk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lqk90QISX27lbqdrJaIvo2
          claim_id: c_r6-lCLt6ab0q6hEnvdos9t
          source_id: s_ELwwMtVZvNEXahCJxGjJDF
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Que1Sc9ugp524zabUcC6Bk
        status: active
        display_name: 王體復
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應時 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Que1Sc9ugp524zabUcC6Bk | 王體復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應時（CBDB 334172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334172&o=json)
