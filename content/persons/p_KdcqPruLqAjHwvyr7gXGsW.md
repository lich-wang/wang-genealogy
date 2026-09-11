---
schema: wang-person/v1
id: p_KdcqPruLqAjHwvyr7gXGsW
status: active
merged_into: null
display_name: 王繼昇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UFxrHym1Dcrd2mBuKKHJ5z
        subject_person_id: p_KdcqPruLqAjHwvyr7gXGsW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KhDRE5U5jZ8XtGbF9KWE9Y
          claim_id: c_UFxrHym1Dcrd2mBuKKHJ5z
          source_id: s_uC4WJXKbFJAC7KghSUo3CJ
          stance: supports
          locator: CBDB:1780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1780）
          source: &a1
            id: s_uC4WJXKbFJAC7KghSUo3CJ
            source_type: api_record
            title: 中国历代人物传记资料库：王繼昇（CBDB 1780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1780&o=json
            external_identifier: CBDB:1780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xHzM2HFbJHs3T48qUnn4cJ
        subject_person_id: p_KdcqPruLqAjHwvyr7gXGsW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 925年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHF4JVEyhXGHK16ySopGsu
          claim_id: c_xHzM2HFbJHs3T48qUnn4cJ
          source_id: s_uC4WJXKbFJAC7KghSUo3CJ
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
        id: c_2KNzKuA7mgqQxo5wezgq3Z
        subject_person_id: p_KdcqPruLqAjHwvyr7gXGsW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 988年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_irxA7y4HBTpeDLZaKmQJFn
          claim_id: c_2KNzKuA7mgqQxo5wezgq3Z
          source_id: s_uC4WJXKbFJAC7KghSUo3CJ
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
        id: c_DKxjzFgeMpA16Knbt4TdNd
        subject_person_id: p_KdcqPruLqAjHwvyr7gXGsW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3BSeJjyA6vTbMnZJiNcbSB
          claim_id: c_DKxjzFgeMpA16Knbt4TdNd
          source_id: s_uC4WJXKbFJAC7KghSUo3CJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VyuJ5xZW2Cdr9i0nJ8n5Hp
        subject_person_id: p_KdcqPruLqAjHwvyr7gXGsW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJyucbNuo6SKu4c6Y3x6DY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h_oeS9wxJgwsxxdQpwGqn7
          claim_id: c_VyuJ5xZW2Cdr9i0nJ8n5Hp
          source_id: s_cKy5x43g5JA2Y61AQNP51F
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cKy5x43g5JA2Y61AQNP51F
            source_type: api_record
            title: 中国历代人物传记资料库：王昭遠（CBDB 37682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37682&o=json
            external_identifier: CBDB:37682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aJyucbNuo6SKu4c6Y3x6DY
        status: active
        display_name: 王昭遠
        merged_into_person_id: null
    - claim:
        id: c_INEL5Vfn5TbCHYf-jQ8D5e
        subject_person_id: p_KdcqPruLqAjHwvyr7gXGsW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mPvn6cAvHte4h7vhugYUrv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h1JLJDH6u1RocL943HijKk
          claim_id: c_INEL5Vfn5TbCHYf-jQ8D5e
          source_id: s_uC4WJXKbFJAC7KghSUo3CJ
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1792：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mPvn6cAvHte4h7vhugYUrv
        status: active
        display_name: 王昭遠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼昇 | accepted |
| birth.date | 925年 | accepted |
| death.date | 988年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aJyucbNuo6SKu4c6Y3x6DY | 王昭遠 | accepted |
| children | p_mPvn6cAvHte4h7vhugYUrv | 王昭遠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼昇（CBDB 1780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1780&o=json)
- [中国历代人物传记资料库：王昭遠（CBDB 37682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37682&o=json)
