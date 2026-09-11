---
schema: wang-person/v1
id: p_MrCsfTxuyRoFQSJAD6tSx8
status: active
merged_into: null
display_name: 王思誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hdrd7H92u6F8QF8oz97XTN
        subject_person_id: p_MrCsfTxuyRoFQSJAD6tSx8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q6KTEBvfXFFZj6z2CQfzwz
          claim_id: c_hdrd7H92u6F8QF8oz97XTN
          source_id: s_iRF7Z5ES8sXjh48q3pDpTA
          stance: supports
          locator: CBDB:281196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281196）
          source: &a1
            id: s_iRF7Z5ES8sXjh48q3pDpTA
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 281196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281196&o=json
            external_identifier: CBDB:281196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_23PChPhznLupQFuv5VHGSB
        subject_person_id: p_MrCsfTxuyRoFQSJAD6tSx8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠，明人物。景泰二年進士。（中国历代人物传记资料库 CBDB 281196）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Meh_c5bgkdMUCfDNvyQZlu
          claim_id: c_23PChPhznLupQFuv5VHGSB
          source_id: s_iRF7Z5ES8sXjh48q3pDpTA
          stance: supports
          locator: CBDB:281196
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
        id: c_hD4Mj0WB1L5BQZTj51PY5E
        subject_person_id: p_MrCsfTxuyRoFQSJAD6tSx8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G4qJhuZsQYn7A9yfHcTR6Z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_galEMY3HiunxRn7HRyijyF
          claim_id: c_hD4Mj0WB1L5BQZTj51PY5E
          source_id: s_iRF7Z5ES8sXjh48q3pDpTA
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第二甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G4qJhuZsQYn7A9yfHcTR6Z
        status: active
        display_name: 王獻
        merged_into_person_id: null
  other: []
---

# 王思誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思誠 | accepted |
| bio.summary | 王思誠，明人物。景泰二年進士。（中国历代人物传记资料库 CBDB 281196） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_G4qJhuZsQYn7A9yfHcTR6Z | 王獻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思誠（CBDB 281196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281196&o=json)
