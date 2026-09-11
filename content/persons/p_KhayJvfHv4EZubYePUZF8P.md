---
schema: wang-person/v1
id: p_KhayJvfHv4EZubYePUZF8P
status: active
merged_into: null
display_name: 王子輝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FX8oZ9CCcZYgQsPXBJMeFB
        subject_person_id: p_KhayJvfHv4EZubYePUZF8P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子輝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DDDpphnCk7RKVmj18Ko9pV
          claim_id: c_FX8oZ9CCcZYgQsPXBJMeFB
          source_id: s_yoeNP2zLxD8vrmLdojv9HD
          stance: supports
          locator: CBDB:295408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295408）
          source: &a1
            id: s_yoeNP2zLxD8vrmLdojv9HD
            source_type: api_record
            title: 中国历代人物传记资料库：王子輝（CBDB 295408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295408&o=json
            external_identifier: CBDB:295408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6nu1hNBJXGgFvvNhChecGv
        subject_person_id: p_KhayJvfHv4EZubYePUZF8P
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
        - id: cs_K8DQtKqbDH2mgwKEvA1hGu
          claim_id: c_6nu1hNBJXGgFvvNhChecGv
          source_id: s_yoeNP2zLxD8vrmLdojv9HD
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
        id: c_8lb2PyCJM6McH2pG_wnzKU
        subject_person_id: p_KhayJvfHv4EZubYePUZF8P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1aSEaoGMDNBpuzQzMWAMPa
          claim_id: c_8lb2PyCJM6McH2pG_wnzKU
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MUbNoy15BYcB1rfWzY7dYg
            source_type: api_record
            title: 中国历代人物传记资料库：王立道（CBDB 34712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34712&o=json
            external_identifier: CBDB:34712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.094Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ghgtseEJkUC2ybxjB2cf7v
        status: active
        display_name: 王立道
        merged_into_person_id: null
  other: []
---

# 王子輝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子輝 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ghgtseEJkUC2ybxjB2cf7v | 王立道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立道（CBDB 34712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34712&o=json)
- [中国历代人物传记资料库：王子輝（CBDB 295408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295408&o=json)
