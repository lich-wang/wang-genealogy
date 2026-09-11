---
schema: wang-person/v1
id: p_PgoiUvZcQsZszmNYM1gvRj
status: active
merged_into: null
display_name: 王璋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qZX2j1qJP6Nk2zkVs4dHzJ
        subject_person_id: p_PgoiUvZcQsZszmNYM1gvRj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xf7vze1enzTE7Gj7iEs8U5
          claim_id: c_qZX2j1qJP6Nk2zkVs4dHzJ
          source_id: s_Zys46vsgWPdoDjompKCr5b
          stance: supports
          locator: CBDB:302949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302949）
          source: &a1
            id: s_Zys46vsgWPdoDjompKCr5b
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 302949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302949&o=json
            external_identifier: CBDB:302949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDxdxtpzCxJvyBeut4maN3
        subject_person_id: p_PgoiUvZcQsZszmNYM1gvRj
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
        - id: cs_4sTLCybHic91oTw3atmKqB
          claim_id: c_GDxdxtpzCxJvyBeut4maN3
          source_id: s_Zys46vsgWPdoDjompKCr5b
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
        id: c_Yz8m2apQ9RCUnpwl1Ojl4z
        subject_person_id: p_PgoiUvZcQsZszmNYM1gvRj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVFXHpMXC51UOD1DqWH8E4
          claim_id: c_Yz8m2apQ9RCUnpwl1Ojl4z
          source_id: s_gvmN9L8q5G1ePp6BD45Nem
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gvmN9L8q5G1ePp6BD45Nem
            source_type: api_record
            title: 中国历代人物传记资料库：王撫民（CBDB 203316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203316&o=json
            external_identifier: CBDB:203316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hYn35dM9vxJfRx8fWZf7jx
        status: active
        display_name: 王撫民
        merged_into_person_id: null
  other: []
---

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hYn35dM9vxJfRx8fWZf7jx | 王撫民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王撫民（CBDB 203316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203316&o=json)
- [中国历代人物传记资料库：王璋（CBDB 302949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302949&o=json)
