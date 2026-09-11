---
schema: wang-person/v1
id: p_49bQCAKsowbC2hDZ6ijnTh
status: active
merged_into: null
display_name: 王處訥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NVVMcfAA9fLJJ9SEVeHU17
        subject_person_id: p_49bQCAKsowbC2hDZ6ijnTh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處訥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rBRUMNCVCtbxKqxGG3UqNk
          claim_id: c_NVVMcfAA9fLJJ9SEVeHU17
          source_id: s_6yNGtioborkT4W15oxsKda
          stance: supports
          locator: CBDB:38121
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38121）
          source: &a1
            id: s_6yNGtioborkT4W15oxsKda
            source_type: api_record
            title: 中国历代人物传记资料库：王處訥（CBDB 38121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38121&o=json
            external_identifier: CBDB:38121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pucA1SJPiSGgj5bJPZoFZf
        subject_person_id: p_49bQCAKsowbC2hDZ6ijnTh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 915年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6VcoKzgpzjFVsg91iZQR1Q
          claim_id: c_pucA1SJPiSGgj5bJPZoFZf
          source_id: s_6yNGtioborkT4W15oxsKda
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
        id: c_8d9RthhzVbbhVW2t4xQi6e
        subject_person_id: p_49bQCAKsowbC2hDZ6ijnTh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 982年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ERGjGDD9cJSnxEhzupqyRK
          claim_id: c_8d9RthhzVbbhVW2t4xQi6e
          source_id: s_6yNGtioborkT4W15oxsKda
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
        id: c_9X4xA8ckB72EazxzSiTt3L
        subject_person_id: p_49bQCAKsowbC2hDZ6ijnTh
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
        - id: cs_M4eNwhsWsXnher9GKuBRe2
          claim_id: c_9X4xA8ckB72EazxzSiTt3L
          source_id: s_6yNGtioborkT4W15oxsKda
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
        id: c_hlhygRj_bpneB4y5Gp4EP6
        subject_person_id: p_49bQCAKsowbC2hDZ6ijnTh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s86e5Cxbrnn3YRT3731Jiw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCnHVaIZqVg19L31iesOC0
          claim_id: c_hlhygRj_bpneB4y5Gp4EP6
          source_id: s_6yNGtioborkT4W15oxsKda
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1975：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s86e5Cxbrnn3YRT3731Jiw
        status: active
        display_name: 王熙元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王處訥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處訥 | accepted |
| birth.date | 915年 | accepted |
| death.date | 982年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_s86e5Cxbrnn3YRT3731Jiw | 王熙元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處訥（CBDB 38121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38121&o=json)
