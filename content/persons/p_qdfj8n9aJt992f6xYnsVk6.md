---
schema: wang-person/v1
id: p_qdfj8n9aJt992f6xYnsVk6
status: active
merged_into: null
display_name: 王之道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tNMibwAuvm73hNvcYxd97s
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N4B1wDFKYWhRWh5DKbAxkZ
          claim_id: c_tNMibwAuvm73hNvcYxd97s
          source_id: s_1hCzGChYAR9f6yAtLzbQMr
          stance: supports
          locator: CBDB:1786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1786）
          source: &a1
            id: s_1hCzGChYAR9f6yAtLzbQMr
            source_type: api_record
            title: 中国历代人物传记资料库：王之道（CBDB 1786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1786&o=json
            external_identifier: CBDB:1786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZC3JpBwDHcqc3QQKsf81EK
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1093年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBsqvfKPNw7KWDBjiDPpnJ
          claim_id: c_ZC3JpBwDHcqc3QQKsf81EK
          source_id: s_1hCzGChYAR9f6yAtLzbQMr
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
        id: c_EhP7e2jmK6HB7K3ehLAZAy
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1169年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SSFjvk1EHqEp84Q8Gw78nw
          claim_id: c_EhP7e2jmK6HB7K3ehLAZAy
          source_id: s_1hCzGChYAR9f6yAtLzbQMr
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
        id: c_XQGtJ5RGqKpf5BC7f9o1Vo
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
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
        - id: cs_j1PRX3HZVyahrM6zA1fnCV
          claim_id: c_XQGtJ5RGqKpf5BC7f9o1Vo
          source_id: s_1hCzGChYAR9f6yAtLzbQMr
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
        id: c_hMv4Z7-6Yt4dF8nQ5bBQFC
        subject_person_id: p_XLkZGVxRBQSEaHVjzv1aDG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qdfj8n9aJt992f6xYnsVk6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NQUi_trhohtDQrZZEzC371
          claim_id: c_hMv4Z7-6Yt4dF8nQ5bBQFC
          source_id: s_1hCzGChYAR9f6yAtLzbQMr
          stance: supports
          locator: CBDB 双向互证（父 王奇 ⇄ 子 王之道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_XLkZGVxRBQSEaHVjzv1aDG
        status: active
        display_name: 王奇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之道 | accepted |
| birth.date | 1093年 | accepted |
| death.date | 1169年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XLkZGVxRBQSEaHVjzv1aDG | 王奇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之道（CBDB 1786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1786&o=json)
