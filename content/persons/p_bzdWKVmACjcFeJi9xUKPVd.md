---
schema: wang-person/v1
id: p_bzdWKVmACjcFeJi9xUKPVd
status: active
merged_into: null
display_name: 虞氏
revision: 1
cbdb_id: 309649
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Olm5-XWQc__kdmniVfqmd3
        subject_person_id: p_bzdWKVmACjcFeJi9xUKPVd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 虞氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h95looSTaXLknQzrkk4zr6
          claim_id: c_Olm5-XWQc__kdmniVfqmd3
          source_id: s_1VcPrQTLXzm_bxAhN3MzsY
          stance: supports
          locator: CBDB:309649
          quotation: null
          interpretation_note: CBDB 明确记录的王樵配偶
          source: &a1
            id: s_1VcPrQTLXzm_bxAhN3MzsY
            source_type: api_record
            title: 中国历代人物传记资料库：虞氏(王樵妻)（CBDB 309649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309649&o=json
            external_identifier: CBDB:309649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UI45gWUJ2T1_2-GWZ-W1IQ
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bzdWKVmACjcFeJi9xUKPVd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5pMxIpWNiqsafDqaMVZm9
          claim_id: c_UI45gWUJ2T1_2-GWZ-W1IQ
          source_id: s_1VcPrQTLXzm_bxAhN3MzsY
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_923xZ5qSMZFGgS46h7nLWU
        status: active
        display_name: 王樵
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 虞氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 虞氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_923xZ5qSMZFGgS46h7nLWU | 王樵 | accepted |

## 外部来源

- [中国历代人物传记资料库：虞氏(王樵妻)（CBDB 309649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309649&o=json)
