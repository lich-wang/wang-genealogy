---
schema: wang-person/v1
id: p_CQpanbYc9L4SQ7yTi4cv2B
status: active
merged_into: null
display_name: 王用言
cbdb_id: 321241
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i2FGv6Dqf8Ytz5voFU9XUP
        subject_person_id: p_CQpanbYc9L4SQ7yTi4cv2B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用言，明人物。嘉靖三十五年進士，籍贯臨淄。（中国历代人物传记资料库 CBDB 321241）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qC2_5uZQyoDQ5pPxvM9ZPD
          claim_id: c_i2FGv6Dqf8Ytz5voFU9XUP
          source_id: s_UT3Y85T7TEzFvGCQK8DUeg
          stance: supports
          locator: CBDB:321241
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UT3Y85T7TEzFvGCQK8DUeg
            source_type: api_record
            title: 中国历代人物传记资料库：王用言（CBDB 321241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321241&o=json
            external_identifier: CBDB:321241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KcXJ5TjFPr6xEgA4U5U2zq
        subject_person_id: p_CQpanbYc9L4SQ7yTi4cv2B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RRFh7rrfMG1kYYycSQ67cy
          claim_id: c_KcXJ5TjFPr6xEgA4U5U2zq
          source_id: s_UT3Y85T7TEzFvGCQK8DUeg
          stance: supports
          locator: CBDB:321241
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CqyiNW6m9DMcaLCygq-dl9
        subject_person_id: p_PRKaEr8menL16CrSqqwL5J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CQpanbYc9L4SQ7yTi4cv2B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B1QFJchoAgmuxOU2Ce6MPK
          claim_id: c_CqyiNW6m9DMcaLCygq-dl9
          source_id: s_pzOcgMz15d3BgIgdpllyFr
          stance: supports
          locator: CBDB：兄弟 王嘉言（204590）之父／母 王濂
          quotation: null
          interpretation_note: 由兄弟关系推断：王用言 与 王嘉言 为同胞（CBDB 记「兄」），王嘉言 之父／母即 王用言 之父／母。
          source:
            id: s_pzOcgMz15d3BgIgdpllyFr
            source_type: api_record
            title: 中国历代人物传记资料库：王用言（CBDB 321241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321241&o=json
            external_identifier: CBDB:321241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PRKaEr8menL16CrSqqwL5J
        status: active
        display_name: 王濂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_eljWd13iqViywUBQzLp6zV
        subject_person_id: p_CQpanbYc9L4SQ7yTi4cv2B
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tkFXjZ_b3DtzWlYIstCrh4
          claim_id: c_eljWd13iqViywUBQzLp6zV
          source_id: s_pzOcgMz15d3BgIgdpllyFr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204590 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pzOcgMz15d3BgIgdpllyFr
            source_type: api_record
            title: 中国历代人物传记资料库：王用言（CBDB 321241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321241&o=json
            external_identifier: CBDB:321241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FZsZBsVgtXYBR7R5He9YWs
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
---

# 王用言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用言，明人物。嘉靖三十五年進士，籍贯臨淄。（中国历代人物传记资料库 CBDB 321241） | accepted |
| name.primary | 王用言 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PRKaEr8menL16CrSqqwL5J | 王濂 | accepted |
| other | p_FZsZBsVgtXYBR7R5He9YWs | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用言（CBDB 321241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321241&o=json)
