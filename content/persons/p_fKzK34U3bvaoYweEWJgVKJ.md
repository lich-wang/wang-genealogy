---
schema: wang-person/v1
id: p_fKzK34U3bvaoYweEWJgVKJ
status: active
merged_into: null
display_name: 王琚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uup8AinNww6j2SsTX9XoZH
        subject_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WQDM4ogpXGb12YufvHroa5
          claim_id: c_uup8AinNww6j2SsTX9XoZH
          source_id: s_HG7xHCtHy4d6Trj22KuRxk
          stance: supports
          locator: CBDB:200633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200633）
          source: &a1
            id: s_HG7xHCtHy4d6Trj22KuRxk
            source_type: api_record
            title: 中国历代人物传记资料库：王琚（CBDB 200633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200633&o=json
            external_identifier: CBDB:200633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WsukqSDmLGYPtJHmr1Y3VK
        subject_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JjoXWWG2Q9AYfg2Pui14tk
          claim_id: c_WsukqSDmLGYPtJHmr1Y3VK
          source_id: s_HG7xHCtHy4d6Trj22KuRxk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PVpdA5iFc3M4XDkmYLDfCj
        subject_person_id: p_fKzK34U3bvaoYweEWJgVKJ
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
        - id: cs_7yg3bfEQiy5agD342ZRTz3
          claim_id: c_PVpdA5iFc3M4XDkmYLDfCj
          source_id: s_HG7xHCtHy4d6Trj22KuRxk
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
  ancestors:
    - claim:
        id: c_yd-gWQWVT5JSutHLKHcRVZ
        subject_person_id: p_DKHnMPfXNx3PzrBPeCXQnA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x3akTynKTmeS-BELUwDU_7
          claim_id: c_yd-gWQWVT5JSutHLKHcRVZ
          source_id: s_Awyon3BuuSfDu9cMJ5NiBU
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百一十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Awyon3BuuSfDu9cMJ5NiBU
            source_type: api_record
            title: 中国历代人物传记资料库：王震隆（CBDB 260709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260709&o=json
            external_identifier: CBDB:260709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DKHnMPfXNx3PzrBPeCXQnA
        status: active
        display_name: 王震隆
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王琚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琚 | accepted |
| birth.date | 1450年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_DKHnMPfXNx3PzrBPeCXQnA | 王震隆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琚（CBDB 200633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200633&o=json)
- [中国历代人物传记资料库：王震隆（CBDB 260709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260709&o=json)
