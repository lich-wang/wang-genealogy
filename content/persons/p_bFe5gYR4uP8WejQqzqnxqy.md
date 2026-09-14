---
schema: wang-person/v1
id: p_bFe5gYR4uP8WejQqzqnxqy
status: active
merged_into: null
display_name: 王象某
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bCxC9JFB4PxaQMtEHPbWL7
        subject_person_id: p_bFe5gYR4uP8WejQqzqnxqy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p93TMesE3GD3Ap59Nm7RHp
          claim_id: c_bCxC9JFB4PxaQMtEHPbWL7
          source_id: s_NqxC61R86Wa3LKeoRKzp89
          stance: supports
          locator: CBDB:220281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220281）
          source: &a1
            id: s_NqxC61R86Wa3LKeoRKzp89
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 220281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220281&o=json
            external_identifier: CBDB:220281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tFa4a2z2yTg5n5MAPotr9f
        subject_person_id: p_bFe5gYR4uP8WejQqzqnxqy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象某，明人物。萬曆八年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220281）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_szo8exJSqsqAIUNty65XN8
          claim_id: c_tFa4a2z2yTg5n5MAPotr9f
          source_id: s_NqxC61R86Wa3LKeoRKzp89
          stance: supports
          locator: CBDB:220281
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ol9sg1-Xq2Yv_l2SJb61j1
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bFe5gYR4uP8WejQqzqnxqy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HVWtYMx4bSBQ6z9mUoOdei
          claim_id: c_ol9sg1-Xq2Yv_l2SJb61j1
          source_id: s_kQf1PI7D-rgiyxHNTJrhlu
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象某 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象某 之父／母。
          source:
            id: s_kQf1PI7D-rgiyxHNTJrhlu
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 220281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220281&o=json
            external_identifier: CBDB:220281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WEEJFIQTLEObpEqnK8qyui
        subject_person_id: p_UCuWmdu88wkXMEGK9geKmL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bFe5gYR4uP8WejQqzqnxqy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MqCxJAYFdZX0J-YvTshFoW
          claim_id: c_WEEJFIQTLEObpEqnK8qyui
          source_id: s_kQf1PI7D-rgiyxHNTJrhlu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kQf1PI7D-rgiyxHNTJrhlu
            source_type: api_record
            title: 中国历代人物传记资料库：王象某（CBDB 220281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220281&o=json
            external_identifier: CBDB:220281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
---

# 王象某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象某 | accepted |
| bio.summary | 王象某，明人物。萬曆八年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220281） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| other | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象某（CBDB 220281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220281&o=json)
