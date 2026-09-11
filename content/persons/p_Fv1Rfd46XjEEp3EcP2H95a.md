---
schema: wang-person/v1
id: p_Fv1Rfd46XjEEp3EcP2H95a
status: active
merged_into: null
display_name: 王澤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_awuiTPEbQJMg3U16vKfTiU
        subject_person_id: p_Fv1Rfd46XjEEp3EcP2H95a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H3CdhgaTGSZmYYZaRqz1QE
          claim_id: c_awuiTPEbQJMg3U16vKfTiU
          source_id: s_m29UJXvv9nrEKctQLtFMmP
          stance: supports
          locator: CBDB:274430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274430）
          source: &a1
            id: s_m29UJXvv9nrEKctQLtFMmP
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 274430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274430&o=json
            external_identifier: CBDB:274430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2BJvjgLgH3AnV4V6B26fvJ
        subject_person_id: p_Fv1Rfd46XjEEp3EcP2H95a
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
        - id: cs_HQ7nNUBShWA6B1SbzV7p6G
          claim_id: c_2BJvjgLgH3AnV4V6B26fvJ
          source_id: s_m29UJXvv9nrEKctQLtFMmP
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
        id: c_UUVSYxrbocdVl8J5HrL-96
        subject_person_id: p_Fv1Rfd46XjEEp3EcP2H95a
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ofDNL1hsFt1v6GYpjecDnr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NS1G8TJR04km2lRMPpJGXo
          claim_id: c_UUVSYxrbocdVl8J5HrL-96
          source_id: s_m29UJXvv9nrEKctQLtFMmP
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第七十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ofDNL1hsFt1v6GYpjecDnr
        status: active
        display_name: 王億
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ofDNL1hsFt1v6GYpjecDnr | 王億 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澤（CBDB 274430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274430&o=json)
