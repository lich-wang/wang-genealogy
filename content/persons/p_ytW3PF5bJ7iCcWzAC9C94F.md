---
schema: wang-person/v1
id: p_ytW3PF5bJ7iCcWzAC9C94F
status: active
merged_into: null
display_name: 王守正
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rNuhmsVbvfLtbNQmBUg77i
        subject_person_id: p_ytW3PF5bJ7iCcWzAC9C94F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_226sDBVEDTfrw3EsZZqWGx
          claim_id: c_rNuhmsVbvfLtbNQmBUg77i
          source_id: s_q8iRyBSDuo6zCcCWaBf7iQ
          stance: supports
          locator: CBDB:247644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247644）
          source: &a1
            id: s_q8iRyBSDuo6zCcCWaBf7iQ
            source_type: api_record
            title: 中国历代人物传记资料库：王守正（CBDB 247644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247644&o=json
            external_identifier: CBDB:247644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oK2U6CwsvQQzEKhi4UQFkN
        subject_person_id: p_ytW3PF5bJ7iCcWzAC9C94F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守正，明人物。成化十一年進士，曾任兵部主事、侍講、右庶子。（中国历代人物传记资料库 CBDB 247644）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iA6LE_AL2H_EWM7Pu7XhU4
          claim_id: c_oK2U6CwsvQQzEKhi4UQFkN
          source_id: s_q8iRyBSDuo6zCcCWaBf7iQ
          stance: supports
          locator: CBDB:247644
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_zDb8k8ZIcftD2AaU1QoKle
        subject_person_id: p_ytW3PF5bJ7iCcWzAC9C94F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AUAav2wMYc11o1wGoqCa9M
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q6UhLeik1sCo1Y1nubG9Yh
          claim_id: c_zDb8k8ZIcftD2AaU1QoKle
          source_id: s_7sKxut838DNA7k1qTDbBK1
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第二甲第五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7sKxut838DNA7k1qTDbBK1
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 126526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126526&o=json
            external_identifier: CBDB:126526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AUAav2wMYc11o1wGoqCa9M
        status: active
        display_name: 王沂
        merged_into_person_id: null
  other: []
---

# 王守正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守正 | accepted |
| bio.summary | 王守正，明人物。成化十一年進士，曾任兵部主事、侍講、右庶子。（中国历代人物传记资料库 CBDB 247644） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AUAav2wMYc11o1wGoqCa9M | 王沂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守正（CBDB 247644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247644&o=json)
- [中国历代人物传记资料库：王沂（CBDB 126526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126526&o=json)
