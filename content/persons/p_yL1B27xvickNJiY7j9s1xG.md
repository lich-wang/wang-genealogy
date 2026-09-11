---
schema: wang-person/v1
id: p_yL1B27xvickNJiY7j9s1xG
status: active
merged_into: null
display_name: 王辛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kCp6oPxDKGGSNDWf1Ta8L9
        subject_person_id: p_yL1B27xvickNJiY7j9s1xG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vJ8m8djoZhRdSpTsVGuNy2
          claim_id: c_kCp6oPxDKGGSNDWf1Ta8L9
          source_id: s_LVB92ogDaRu72p2PMAzrXb
          stance: supports
          locator: CBDB:241288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241288）
          source: &a1
            id: s_LVB92ogDaRu72p2PMAzrXb
            source_type: api_record
            title: 中国历代人物传记资料库：王辛（CBDB 241288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241288&o=json
            external_identifier: CBDB:241288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nN82xKZHw7PCCc6obUjhf8
        subject_person_id: p_yL1B27xvickNJiY7j9s1xG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辛，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 241288）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u0eGy-ZPoWFpaOqBciS_HH
          claim_id: c_nN82xKZHw7PCCc6obUjhf8
          source_id: s_LVB92ogDaRu72p2PMAzrXb
          stance: supports
          locator: CBDB:241288
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
        id: c_WyOU09YG-gCFwh2X-kYSQF
        subject_person_id: p_yL1B27xvickNJiY7j9s1xG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGc1mumtvpAKQtoruQmh_G
          claim_id: c_WyOU09YG-gCFwh2X-kYSQF
          source_id: s_6M4qEeJfDYH98dZB9CiF5G
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第七十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6M4qEeJfDYH98dZB9CiF5G
            source_type: api_record
            title: 中国历代人物传记资料库：王豪（CBDB 208164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208164&o=json
            external_identifier: CBDB:208164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CwH6PHR1XzMwocJ8ZwHSPP
        status: active
        display_name: 王豪
        merged_into_person_id: null
  other: []
---

# 王辛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王辛 | accepted |
| bio.summary | 王辛，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 241288） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CwH6PHR1XzMwocJ8ZwHSPP | 王豪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王豪（CBDB 208164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208164&o=json)
- [中国历代人物传记资料库：王辛（CBDB 241288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241288&o=json)
