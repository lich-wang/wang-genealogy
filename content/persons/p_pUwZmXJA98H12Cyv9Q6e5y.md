---
schema: wang-person/v1
id: p_pUwZmXJA98H12Cyv9Q6e5y
status: active
merged_into: null
display_name: 王時柯
cbdb_id: 68118
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WrV69eAmPfev9CvouD66Nd
        subject_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時柯，明人物。中国历代人物传记资料库（CBDB）以人物编号 68118 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_dzWHF1D68uQQbj9kAYBEJH
          claim_id: c_WrV69eAmPfev9CvouD66Nd
          source_id: s_cUp84FFRs6vaPx1eNGHyBC
          stance: supports
          locator: CBDB:68118
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_cUp84FFRs6vaPx1eNGHyBC
            source_type: api_record
            title: 中国历代人物传记资料库：王時柯（CBDB 68118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68118&o=json
            external_identifier: CBDB:68118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LbNnCADuyy8yiwkfkk6hqG
        subject_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時柯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Q1c1JNCiE3CycWhUcdoHUL
          claim_id: c_LbNnCADuyy8yiwkfkk6hqG
          source_id: s_cUp84FFRs6vaPx1eNGHyBC
          stance: supports
          locator: CBDB:68118
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_cUp84FFRs6vaPx1eNGHyBC
            source_type: api_record
            title: 中国历代人物传记资料库：王時柯（CBDB 68118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68118&o=json
            external_identifier: CBDB:68118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_gCuD7RHlOuQsscuFJevBI2
        subject_person_id: p_ik6XhKzKEHTrJABBhg9UnS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tUHwvvWfvVt4u2UbRy62Dl
          claim_id: c_gCuD7RHlOuQsscuFJevBI2
          source_id: s_EKYXJTNDt7coAE3zHh7A91
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EKYXJTNDt7coAE3zHh7A91
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 280634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280634&o=json
            external_identifier: CBDB:280634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ik6XhKzKEHTrJABBhg9UnS
        status: active
        display_name: 王憲
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王時柯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時柯，明人物。中国历代人物传记资料库（CBDB）以人物编号 68118 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王時柯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ik6XhKzKEHTrJABBhg9UnS | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時柯（CBDB 68118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68118&o=json)
- [中国历代人物传记资料库：王憲（CBDB 280634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280634&o=json)
