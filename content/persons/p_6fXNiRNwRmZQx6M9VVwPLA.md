---
schema: wang-person/v1
id: p_6fXNiRNwRmZQx6M9VVwPLA
status: active
merged_into: null
display_name: 王中正
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5u6GvSxw37sV5as5GArQWs
        subject_person_id: p_6fXNiRNwRmZQx6M9VVwPLA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1qDcYrCAC3Qs4dn3WM21hq
          claim_id: c_5u6GvSxw37sV5as5GArQWs
          source_id: s_FYyj3Up2prwknpFJQLpcD6
          stance: supports
          locator: CBDB:208930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208930）
          source: &a1
            id: s_FYyj3Up2prwknpFJQLpcD6
            source_type: api_record
            title: 中国历代人物传记资料库：王中正（CBDB 208930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208930&o=json
            external_identifier: CBDB:208930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y17BzmNDmx7ygDgL5H71D4
        subject_person_id: p_6fXNiRNwRmZQx6M9VVwPLA
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
        - id: cs_UF1QJkqrHPTX8NuqQcGqT1
          claim_id: c_y17BzmNDmx7ygDgL5H71D4
          source_id: s_FYyj3Up2prwknpFJQLpcD6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_hsk_Ox9giJeWNBXhH3hXlm
        subject_person_id: p_6fXNiRNwRmZQx6M9VVwPLA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yGIqO7w_jsmazo5ZDilC8d
          claim_id: c_hsk_Ox9giJeWNBXhH3hXlm
          source_id: s_FYyj3Up2prwknpFJQLpcD6
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Sg6kuXv7Vis1mLCj6EFgTh
        status: active
        display_name: 王希元
        merged_into_person_id: null
  other: []
---

# 王中正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中正 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Sg6kuXv7Vis1mLCj6EFgTh | 王希元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王中正（CBDB 208930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208930&o=json)
