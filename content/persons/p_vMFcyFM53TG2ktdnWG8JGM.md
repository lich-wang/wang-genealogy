---
schema: wang-person/v1
id: p_vMFcyFM53TG2ktdnWG8JGM
status: active
merged_into: null
display_name: 王銘琮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NLDECTR25LksiFh6pjbYZx
        subject_person_id: p_vMFcyFM53TG2ktdnWG8JGM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GoWLuCiUgAmxHbuofP3PC4
          claim_id: c_NLDECTR25LksiFh6pjbYZx
          source_id: s_e35UDKD7L9UaBm2kLBCsF6
          stance: supports
          locator: CBDB:640562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640562）
          source: &a1
            id: s_e35UDKD7L9UaBm2kLBCsF6
            source_type: api_record
            title: 中国历代人物传记资料库：王銘琮（CBDB 640562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640562&o=json
            external_identifier: CBDB:640562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3P6XJjCC2XD6htcEV9cdBC
        subject_person_id: p_vMFcyFM53TG2ktdnWG8JGM
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
        - id: cs_BqALD4zkMGuv1RmEExQNmk
          claim_id: c_3P6XJjCC2XD6htcEV9cdBC
          source_id: s_e35UDKD7L9UaBm2kLBCsF6
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

# 王銘琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘琮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銘琮（CBDB 640562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640562&o=json)
