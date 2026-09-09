---
schema: wang-person/v1
id: p_w2fsxbumj33mZw6GSb4BD5
status: active
merged_into: null
display_name: 王弘義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z1VFJb6XLaGWANwN2Phq3s
        subject_person_id: p_w2fsxbumj33mZw6GSb4BD5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s3kvSWkxmK1GD177D5Xhzb
          claim_id: c_Z1VFJb6XLaGWANwN2Phq3s
          source_id: s_21UNT4VEhnmi2pWbxv1EAJ
          stance: supports
          locator: CBDB:637613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637613）
          source: &a1
            id: s_21UNT4VEhnmi2pWbxv1EAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王弘義（CBDB 637613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637613&o=json
            external_identifier: CBDB:637613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.465Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SH2CdcUP6o8bQf3j9LTgtV
        subject_person_id: p_w2fsxbumj33mZw6GSb4BD5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ywxtgZY6iTTmAHWYTmM9eC
          claim_id: c_SH2CdcUP6o8bQf3j9LTgtV
          source_id: s_21UNT4VEhnmi2pWbxv1EAJ
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
  descendants: []
  other: []
---

# 王弘義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘義 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘義（CBDB 637613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637613&o=json)
