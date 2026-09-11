---
schema: wang-person/v1
id: p_zh22hgc9HcdTB4iT3BjRYN
status: active
merged_into: null
display_name: 王興吾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nENd5WBAGygP2WPQNcZbdr
        subject_person_id: p_zh22hgc9HcdTB4iT3BjRYN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興吾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GRaFBHse9MBPzFeLPPuKbn
          claim_id: c_nENd5WBAGygP2WPQNcZbdr
          source_id: s_MMQL1L7LkzNPv3C8NoVJX6
          stance: supports
          locator: CBDB:69625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69625）
          source: &a1
            id: s_MMQL1L7LkzNPv3C8NoVJX6
            source_type: api_record
            title: 中国历代人物传记资料库：王興吾（CBDB 69625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69625&o=json
            external_identifier: CBDB:69625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AwXeDoQByXAr7BahNo7bGg
        subject_person_id: p_zh22hgc9HcdTB4iT3BjRYN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1703年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NdRvrq5eWhSLHXBAqyu424
          claim_id: c_AwXeDoQByXAr7BahNo7bGg
          source_id: s_MMQL1L7LkzNPv3C8NoVJX6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PFhxsN3zNR1rxYbsnd9fuG
        subject_person_id: p_zh22hgc9HcdTB4iT3BjRYN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1757年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gPi2az6CL8KEFrME6pXGYY
          claim_id: c_PFhxsN3zNR1rxYbsnd9fuG
          source_id: s_MMQL1L7LkzNPv3C8NoVJX6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hW4B5CX5ixxRPTj9tTeN9B
        subject_person_id: p_zh22hgc9HcdTB4iT3BjRYN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kWCMpP6MBMPCb5uF3PxWs5
          claim_id: c_hW4B5CX5ixxRPTj9tTeN9B
          source_id: s_MMQL1L7LkzNPv3C8NoVJX6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EXlbToWooyOvEZcmFJ-3qI
        subject_person_id: p_EP4PqN7524Z7izDZZrdxRb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zh22hgc9HcdTB4iT3BjRYN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gysQL5HDE4E6sCEX2Gxmgz
          claim_id: c_EXlbToWooyOvEZcmFJ-3qI
          source_id: s_MMQL1L7LkzNPv3C8NoVJX6
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #687, HuWenKai #734：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EP4PqN7524Z7izDZZrdxRb
        status: active
        display_name: 王图炜
        merged_into_person_id: null
    - claim:
        id: c_NtKXP-SbycDfX1y7Qy0jmY
        subject_person_id: p_FGUECt8UEJVxrFA7xCMHw4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zh22hgc9HcdTB4iT3BjRYN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ChbuHlHFbek3aT-T2J_uWG
          claim_id: c_NtKXP-SbycDfX1y7Qy0jmY
          source_id: s_s1eKiLfrzS45phbjJMsD7Z
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #687, HuWenKai #734：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_s1eKiLfrzS45phbjJMsD7Z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：蔣季錫（55820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55820&o=json
            external_identifier: CBDB:55820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:52.217Z
            metadata_json: null
      object_person:
        id: p_FGUECt8UEJVxrFA7xCMHw4
        status: active
        display_name: 蒋季锡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王興吾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興吾 | accepted |
| birth.date | 1703年 | accepted |
| death.date | 1757年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EP4PqN7524Z7izDZZrdxRb | 王图炜 | accepted |
| parents | p_FGUECt8UEJVxrFA7xCMHw4 | 蒋季锡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王興吾（CBDB 69625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69625&o=json)
- [CBDB 中国历代人物传记资料库：蔣季錫（55820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55820&o=json)
