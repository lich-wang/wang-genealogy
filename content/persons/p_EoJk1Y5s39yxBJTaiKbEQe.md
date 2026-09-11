---
schema: wang-person/v1
id: p_EoJk1Y5s39yxBJTaiKbEQe
status: active
merged_into: null
display_name: 王昊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zo4Sd1YcW6LGCfQ1FfQTdu
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SN72tEFqhZ5B3zJdbKhoU7
          claim_id: c_Zo4Sd1YcW6LGCfQ1FfQTdu
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: CBDB:200990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200990）
          source: &a1
            id: s_c86NwDAvjxnvgHHxfBCn5p
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 200990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json
            external_identifier: CBDB:200990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pV8SD44RRvZZTF7sdaqMK4
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1456年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K7Kjp2UX42FhjAYz1giHXu
          claim_id: c_pV8SD44RRvZZTF7sdaqMK4
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V6vCfqmVpdG9Z4gX2VeMBd
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
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
        - id: cs_eS7d62vouqNoesfLZvK2Ai
          claim_id: c_V6vCfqmVpdG9Z4gX2VeMBd
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
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
        id: c_EWZvwX3aecOPL1E4sXJzzi
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p6yqU9aBKMuAfGbUZvUkQx
          claim_id: c_EWZvwX3aecOPL1E4sXJzzi
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_URk2BrLDKqiyhHZQPHt91g
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_kYxYm5jeDHlOwRWUIvvoXb
        subject_person_id: p_evzD6qcskC5Si9w9ieb42z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6gohs3DCX_HbZJlyJc34X-
          claim_id: c_kYxYm5jeDHlOwRWUIvvoXb
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_evzD6qcskC5Si9w9ieb42z
        status: active
        display_name: 王思誠
        merged_into_person_id: null
    - claim:
        id: c_d_VPA8qhOxK6JSsWUIf86p
        subject_person_id: p_JyC3UvQ5oVNT52HSy7kSZc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gk1KQHgYqD0KYjfV2-EGqc
          claim_id: c_d_VPA8qhOxK6JSsWUIf86p
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JyC3UvQ5oVNT52HSy7kSZc
        status: active
        display_name: 王添勝
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王昊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昊 | accepted |
| birth.date | 1456年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_URk2BrLDKqiyhHZQPHt91g | 王貴 | accepted |
| ancestors | p_evzD6qcskC5Si9w9ieb42z | 王思誠 | accepted |
| ancestors | p_JyC3UvQ5oVNT52HSy7kSZc | 王添勝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昊（CBDB 200990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json)
