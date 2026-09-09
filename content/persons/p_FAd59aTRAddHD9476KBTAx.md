---
schema: wang-person/v1
id: p_FAd59aTRAddHD9476KBTAx
status: active
merged_into: null
display_name: 王廷壁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_deM3H7JKhugJE9JBPJ9J9Q
        subject_person_id: p_FAd59aTRAddHD9476KBTAx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷壁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4SXGH8KkKuWGeGzB6UFY3u
          claim_id: c_deM3H7JKhugJE9JBPJ9J9Q
          source_id: s_qQy2h5FCaTpGgRDGvfnCeH
          stance: supports
          locator: CBDB:637492
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637492）
          source: &a1
            id: s_qQy2h5FCaTpGgRDGvfnCeH
            source_type: api_record
            title: 中国历代人物传记资料库：王廷壁（CBDB 637492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637492&o=json
            external_identifier: CBDB:637492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.414Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_21J3HBCLzYBSvMUERDcnbw
        subject_person_id: p_FAd59aTRAddHD9476KBTAx
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
        - id: cs_hMHA9KsbvYP83MEZxnNK2w
          claim_id: c_21J3HBCLzYBSvMUERDcnbw
          source_id: s_qQy2h5FCaTpGgRDGvfnCeH
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

# 王廷壁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷壁 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷壁（CBDB 637492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637492&o=json)
