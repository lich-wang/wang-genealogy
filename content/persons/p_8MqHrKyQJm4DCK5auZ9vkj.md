---
schema: wang-person/v1
id: p_8MqHrKyQJm4DCK5auZ9vkj
status: active
merged_into: null
display_name: 王讓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UViBbzksXzSCz9WGLXNjEM
        subject_person_id: p_8MqHrKyQJm4DCK5auZ9vkj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K8TzAg65sHisK76SHEj7Z6
          claim_id: c_UViBbzksXzSCz9WGLXNjEM
          source_id: s_JSbLMAGpYFFt96oFGRxVUk
          stance: supports
          locator: CBDB:263782
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263782）
          source: &a1
            id: s_JSbLMAGpYFFt96oFGRxVUk
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 263782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263782&o=json
            external_identifier: CBDB:263782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8qFbywsxz9VGjGB7KNAdGp
        subject_person_id: p_8MqHrKyQJm4DCK5auZ9vkj
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
        - id: cs_P8vaht2o8ETkp4JuXuEjkm
          claim_id: c_8qFbywsxz9VGjGB7KNAdGp
          source_id: s_JSbLMAGpYFFt96oFGRxVUk
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
        id: c_FfVjgZXzvfWG-j4ZA8n6pV
        subject_person_id: p_8MqHrKyQJm4DCK5auZ9vkj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5MQS7xTZ7xaRFjWYKoXEEG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tIOMhsDxg4pDcHf0SV5zKs
          claim_id: c_FfVjgZXzvfWG-j4ZA8n6pV
          source_id: s_nUcJwoZm9zoYm8ziRTQn3w
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二百零五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nUcJwoZm9zoYm8ziRTQn3w
            source_type: api_record
            title: 中国历代人物传记资料库：王序（CBDB 200871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200871&o=json
            external_identifier: CBDB:200871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5MQS7xTZ7xaRFjWYKoXEEG
        status: active
        display_name: 王序
        merged_into_person_id: null
    - claim:
        id: c_FQUYiRB0-2LH4nolRm3_NW
        subject_person_id: p_8MqHrKyQJm4DCK5auZ9vkj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dJj6NuaLRaohrqoTudZvBt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FaFk-j1LTUa3Kv7O3n9qCs
          claim_id: c_FQUYiRB0-2LH4nolRm3_NW
          source_id: s_JSbLMAGpYFFt96oFGRxVUk
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dJj6NuaLRaohrqoTudZvBt
        status: active
        display_name: 王慶
        merged_into_person_id: null
  other: []
---

# 王讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5MQS7xTZ7xaRFjWYKoXEEG | 王序 | accepted |
| descendants | p_dJj6NuaLRaohrqoTudZvBt | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讓（CBDB 263782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263782&o=json)
- [中国历代人物传记资料库：王序（CBDB 200871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200871&o=json)
