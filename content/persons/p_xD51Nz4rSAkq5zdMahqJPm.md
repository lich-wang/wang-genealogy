---
schema: wang-person/v1
id: p_xD51Nz4rSAkq5zdMahqJPm
status: active
merged_into: null
display_name: 王儔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x6TnNMXUUFcMiwq1fXetNK
        subject_person_id: p_xD51Nz4rSAkq5zdMahqJPm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7thZG11QkeMQmiB8BjNnAA
          claim_id: c_x6TnNMXUUFcMiwq1fXetNK
          source_id: s_WPi7kxzgVh5TtLVo7kn3DJ
          stance: supports
          locator: CBDB:37158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37158）
          source: &a1
            id: s_WPi7kxzgVh5TtLVo7kn3DJ
            source_type: api_record
            title: 中国历代人物传记资料库：王儔（CBDB 37158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37158&o=json
            external_identifier: CBDB:37158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H5ydVE4rLMqxnep4nKPzKr
        subject_person_id: p_xD51Nz4rSAkq5zdMahqJPm
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
        - id: cs_eC2WomD1uujBWQvsTcEDKw
          claim_id: c_H5ydVE4rLMqxnep4nKPzKr
          source_id: s_WPi7kxzgVh5TtLVo7kn3DJ
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
        id: c_3ROurSGv01N23yjwWO2z2Z
        subject_person_id: p_5GnA47Cgm5MBJ7VM1ouCen
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xD51Nz4rSAkq5zdMahqJPm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EM3p9e6X7S-2V-TQDNqGse
          claim_id: c_3ROurSGv01N23yjwWO2z2Z
          source_id: s_WPi7kxzgVh5TtLVo7kn3DJ
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1237：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5GnA47Cgm5MBJ7VM1ouCen
        status: active
        display_name: 王慶長
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王儔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儔 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5GnA47Cgm5MBJ7VM1ouCen | 王慶長 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儔（CBDB 37158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37158&o=json)
