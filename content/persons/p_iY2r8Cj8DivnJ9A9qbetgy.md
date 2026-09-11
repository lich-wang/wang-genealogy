---
schema: wang-person/v1
id: p_iY2r8Cj8DivnJ9A9qbetgy
status: active
merged_into: null
display_name: 王瑛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uC9KG8FK77vSFx62nHUXRJ
        subject_person_id: p_iY2r8Cj8DivnJ9A9qbetgy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BPPz2H4taxYT2NUW4jWS4X
          claim_id: c_uC9KG8FK77vSFx62nHUXRJ
          source_id: s_HNHFLLA38Qhgr3JZnJqY4L
          stance: supports
          locator: CBDB:244420
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244420）
          source: &a1
            id: s_HNHFLLA38Qhgr3JZnJqY4L
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 244420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244420&o=json
            external_identifier: CBDB:244420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.032Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hYBMVJtFSd2kj69LJxeWxY
        subject_person_id: p_iY2r8Cj8DivnJ9A9qbetgy
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
        - id: cs_sv2WfNDWfsWwPNAqb8gqhg
          claim_id: c_hYBMVJtFSd2kj69LJxeWxY
          source_id: s_HNHFLLA38Qhgr3JZnJqY4L
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
        id: c_4RHMbJbKqJTQiq7JY9IBrd
        subject_person_id: p_iY2r8Cj8DivnJ9A9qbetgy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aYH4Kd4bjhZaTFXvNipRQE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HtzGPJ8Drm4i-Bb_4L20hR
          claim_id: c_4RHMbJbKqJTQiq7JY9IBrd
          source_id: s_CGQ86w881YJNLc94NAKZrQ
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百零六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CGQ86w881YJNLc94NAKZrQ
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 126565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126565&o=json
            external_identifier: CBDB:126565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aYH4Kd4bjhZaTFXvNipRQE
        status: active
        display_name: 王坦
        merged_into_person_id: null
  other: []
---

# 王瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aYH4Kd4bjhZaTFXvNipRQE | 王坦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坦（CBDB 126565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126565&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 244420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244420&o=json)
