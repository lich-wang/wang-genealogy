---
schema: wang-person/v1
id: p_JQFD18pnN8g1zQ736jg5Dw
status: active
merged_into: null
display_name: 王瑾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iUp62hrjYpf9YQ9sQRu1QS
        subject_person_id: p_JQFD18pnN8g1zQ736jg5Dw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vwgMDTxpxbCchGSsG3nJ4H
          claim_id: c_iUp62hrjYpf9YQ9sQRu1QS
          source_id: s_XfAjBiZuXRkuEBHXcm7PAD
          stance: supports
          locator: CBDB:230045
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230045）
          source: &a1
            id: s_XfAjBiZuXRkuEBHXcm7PAD
            source_type: api_record
            title: 中国历代人物传记资料库：王瑾（CBDB 230045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230045&o=json
            external_identifier: CBDB:230045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2B8X4vkZ3vJxgJGotw4sT3
        subject_person_id: p_JQFD18pnN8g1zQ736jg5Dw
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
        - id: cs_385v5gUaZz6bbkHpFU9tNz
          claim_id: c_2B8X4vkZ3vJxgJGotw4sT3
          source_id: s_XfAjBiZuXRkuEBHXcm7PAD
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
        id: c_jekfO8IXiDEfGs4yxC9wI_
        subject_person_id: p_E9W2DShq5Qkj6ZiKVB1xLN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JQFD18pnN8g1zQ736jg5Dw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8_86_dNFhn05ljOvO9AKVk
          claim_id: c_jekfO8IXiDEfGs4yxC9wI_
          source_id: s_XfAjBiZuXRkuEBHXcm7PAD
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第四十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E9W2DShq5Qkj6ZiKVB1xLN
        status: active
        display_name: 王德完
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑾 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_E9W2DShq5Qkj6ZiKVB1xLN | 王德完 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑾（CBDB 230045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230045&o=json)
