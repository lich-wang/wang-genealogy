---
schema: wang-person/v1
id: p_VKYr12dajBvBAdcr7RZ7cc
status: active
merged_into: null
display_name: 王承弁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VxCRSW3L7Qo3cWuk4EDAuf
        subject_person_id: p_VKYr12dajBvBAdcr7RZ7cc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承弁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bW8rk85vC5bQM2D9TKFV34
          claim_id: c_VxCRSW3L7Qo3cWuk4EDAuf
          source_id: s_DFpUW4M4gmMHHBPdavLKFE
          stance: supports
          locator: CBDB:382832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382832）
          source: &a1
            id: s_DFpUW4M4gmMHHBPdavLKFE
            source_type: api_record
            title: 中国历代人物传记资料库：王承弁（CBDB 382832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382832&o=json
            external_identifier: CBDB:382832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HUSCXBnDp6babT1FbHwT55
        subject_person_id: p_VKYr12dajBvBAdcr7RZ7cc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T4dWrrm6yVanfRRNMTT8uw
          claim_id: c_HUSCXBnDp6babT1FbHwT55
          source_id: s_DFpUW4M4gmMHHBPdavLKFE
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

# 王承弁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承弁 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承弁（CBDB 382832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382832&o=json)
