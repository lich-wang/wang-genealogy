---
schema: wang-person/v1
id: p_jUfc5vCsBkQrPPCvwGCB11
status: active
merged_into: null
display_name: 王堯臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vYRvhPJe9aSrVytRhUkfJy
        subject_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cY4rGyqz2EmKgPYDhMs6t4
          claim_id: c_vYRvhPJe9aSrVytRhUkfJy
          source_id: s_oc1QNAEk7i97afFuxniTAJ
          stance: supports
          locator: CBDB:23477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23477）
          source: &a1
            id: s_oc1QNAEk7i97afFuxniTAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 23477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23477&o=json
            external_identifier: CBDB:23477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vb3DXFoTeMApyo3HHB7uLr
        subject_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1111年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uvi9CcRg1sqsA1c4N6G8y9
          claim_id: c_vb3DXFoTeMApyo3HHB7uLr
          source_id: s_oc1QNAEk7i97afFuxniTAJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_M9Qkmyd3XbRyBfbsYxmuat
        subject_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1169年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ui6EevWZrLoPyjf87ayyoL
          claim_id: c_M9Qkmyd3XbRyBfbsYxmuat
          source_id: s_oc1QNAEk7i97afFuxniTAJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r4vuN7HUjNq2DD4BPX84vF
        subject_person_id: p_jUfc5vCsBkQrPPCvwGCB11
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
        - id: cs_k9iy73rh7Nt19FzoAej3YQ
          claim_id: c_r4vuN7HUjNq2DD4BPX84vF
          source_id: s_oc1QNAEk7i97afFuxniTAJ
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

# 王堯臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯臣 | accepted |
| birth.date | 1111年 | accepted |
| death.date | 1169年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堯臣（CBDB 23477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23477&o=json)
