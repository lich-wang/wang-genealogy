---
schema: wang-person/v1
id: p_DFBB1wf3KnWXdiqbE3dZP2
status: active
merged_into: null
display_name: 王珍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X49KhwAQpXjoi2iQ3QCayG
        subject_person_id: p_DFBB1wf3KnWXdiqbE3dZP2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MGf9rgbGyBisXao3nCAWMG
          claim_id: c_X49KhwAQpXjoi2iQ3QCayG
          source_id: s_dbprwWF2YhUSG3z55gD6GJ
          stance: supports
          locator: CBDB:253207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253207）
          source: &a1
            id: s_dbprwWF2YhUSG3z55gD6GJ
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 253207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253207&o=json
            external_identifier: CBDB:253207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.296Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WxSphPUJPs4pgMMUSz2YFP
        subject_person_id: p_DFBB1wf3KnWXdiqbE3dZP2
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
        - id: cs_8rZj2DF3nFjMHHGqmdPSMM
          claim_id: c_WxSphPUJPs4pgMMUSz2YFP
          source_id: s_dbprwWF2YhUSG3z55gD6GJ
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
        id: c_E2f-FCUeXkEhHk99-v0qmq
        subject_person_id: p_DFBB1wf3KnWXdiqbE3dZP2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C2E2SSj6sXsm1th4M87rCJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i75_WmqsikCD0YnrWwWuZp
          claim_id: c_E2f-FCUeXkEhHk99-v0qmq
          source_id: s_DeNL8vWuD2G72jS8kGaaJ8
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百六十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DeNL8vWuD2G72jS8kGaaJ8
            source_type: api_record
            title: 中国历代人物传记资料库：王存禮（CBDB 200053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200053&o=json
            external_identifier: CBDB:200053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C2E2SSj6sXsm1th4M87rCJ
        status: active
        display_name: 王存禮
        merged_into_person_id: null
  other: []
---

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_C2E2SSj6sXsm1th4M87rCJ | 王存禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存禮（CBDB 200053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200053&o=json)
- [中国历代人物传记资料库：王珍（CBDB 253207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253207&o=json)
