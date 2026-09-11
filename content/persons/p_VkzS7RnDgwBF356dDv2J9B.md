---
schema: wang-person/v1
id: p_VkzS7RnDgwBF356dDv2J9B
status: active
merged_into: null
display_name: 王纉
cbdb_id: 305707
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S87a951uuExvCvmLWMNhMm
        subject_person_id: p_VkzS7RnDgwBF356dDv2J9B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YPznWUyL3VzXoHnHu819dY
          claim_id: c_S87a951uuExvCvmLWMNhMm
          source_id: s_D2QGDxwPQEyJqG7Hy6d39z
          stance: supports
          locator: Q45513436
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_D2QGDxwPQEyJqG7Hy6d39z
            source_type: api_record
            title: 维基数据：王纉（Q45513436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45513436
            external_identifier: Q45513436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_Dj7n43ETGNtaVs3sJ6hiqz
          claim_id: c_S87a951uuExvCvmLWMNhMm
          source_id: s_bDNxHGv8qYSaEYp3MUXwws
          stance: supports
          locator: CBDB:305707
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_bDNxHGv8qYSaEYp3MUXwws
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王纉（305707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305707&o=json
            external_identifier: CBDB:305707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8SHkD6B5M6sCSiJSG6s9hp
        subject_person_id: p_VkzS7RnDgwBF356dDv2J9B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 305707
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rwkqjR9qXvRoiuiSG6HK1C
          claim_id: c_8SHkD6B5M6sCSiJSG6s9hp
          source_id: s_D2QGDxwPQEyJqG7Hy6d39z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_KBDHuALM53XGeUWjnkWzGN
        subject_person_id: p_VkzS7RnDgwBF356dDv2J9B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GNLnPFw1Dr1HJibhmrHDQH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8rRs4rPjS8nfgBWZVc8jbG
          claim_id: c_KBDHuALM53XGeUWjnkWzGN
          source_id: s_5ypbt5HJwbj6QL1P1yo9cx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5ypbt5HJwbj6QL1P1yo9cx
            source_type: api_record
            title: 维基数据：王逸卿（Q45513501）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45513501
            external_identifier: Q45513501
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
        - id: cs_k9z4Ke2rjb6RFqrDGyc7tU
          claim_id: c_KBDHuALM53XGeUWjnkWzGN
          source_id: s_D2QGDxwPQEyJqG7Hy6d39z
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_GNLnPFw1Dr1HJibhmrHDQH
        status: active
        display_name: 王逸卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_PggZSAbKbSQm2Ep8G0gIw-
        subject_person_id: p_VkzS7RnDgwBF356dDv2J9B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AxnhzouFhPDEcn88n2bfsw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zqnWP4YhmDBrPsKXF3wFuP
          claim_id: c_PggZSAbKbSQm2Ep8G0gIw-
          source_id: s_bDNxHGv8qYSaEYp3MUXwws
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_AxnhzouFhPDEcn88n2bfsw
        status: active
        display_name: 王宗沐
        merged_into_person_id: null
  other: []
---

# 王纉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纉 | accepted |
| bio.summary | Ming dynasty person CBDB = 305707 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GNLnPFw1Dr1HJibhmrHDQH | 王逸卿 | accepted |
| descendants | p_AxnhzouFhPDEcn88n2bfsw | 王宗沐 | accepted |

## 外部来源

- [维基数据：王逸卿（Q45513501）](https://www.wikidata.org/wiki/Q45513501)
- [维基数据：王纉（Q45513436）](https://www.wikidata.org/wiki/Q45513436)
- [CBDB 中国历代人物传记资料库：王纉（305707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305707&o=json)
