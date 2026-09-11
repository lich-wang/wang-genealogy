---
schema: wang-person/v1
id: p_8dUV7JKHEchfA3MC69YFQ9
status: active
merged_into: null
display_name: 王亶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yjTGoQysHXQcCWp2mkTPJN
        subject_person_id: p_8dUV7JKHEchfA3MC69YFQ9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o1RQ4c1HBdERmf8zWZHHCD
          claim_id: c_yjTGoQysHXQcCWp2mkTPJN
          source_id: s_D6f6WSR9knTFSk7iYS5fkC
          stance: supports
          locator: CBDB:284246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284246）
          source: &a1
            id: s_D6f6WSR9knTFSk7iYS5fkC
            source_type: api_record
            title: 中国历代人物传记资料库：王亶（CBDB 284246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284246&o=json
            external_identifier: CBDB:284246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qo52BGJ9Vri7M5pu2tEj7j
        subject_person_id: p_8dUV7JKHEchfA3MC69YFQ9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亶，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 284246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ElVIS4mJybAcmC3m5HVO7R
          claim_id: c_qo52BGJ9Vri7M5pu2tEj7j
          source_id: s_D6f6WSR9knTFSk7iYS5fkC
          stance: supports
          locator: CBDB:284246
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
        id: c_R4vkDT81fz3zX9HMS0onD_
        subject_person_id: p_8dUV7JKHEchfA3MC69YFQ9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Auq7ByUPgoH6KuvOVnl6DQ
          claim_id: c_R4vkDT81fz3zX9HMS0onD_
          source_id: s_D6f6WSR9knTFSk7iYS5fkC
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ziFePMbdNLKAgyGGN4BwgX
        status: active
        display_name: 王洙
        merged_into_person_id: null
  other: []
---

# 王亶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亶 | accepted |
| bio.summary | 王亶，明人物。正德十六年進士。（中国历代人物传记资料库 CBDB 284246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ziFePMbdNLKAgyGGN4BwgX | 王洙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亶（CBDB 284246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284246&o=json)
