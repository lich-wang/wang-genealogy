---
schema: wang-person/v1
id: p_2E8J3qVo6HHNKQhDuGwNXL
status: active
merged_into: null
display_name: 王浩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pZ7uAtfhhb2FFTRjDLZvKW
        subject_person_id: p_2E8J3qVo6HHNKQhDuGwNXL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1E3tWhL8G3y6oZc8Q7KhBG
          claim_id: c_pZ7uAtfhhb2FFTRjDLZvKW
          source_id: s_h4s884XLpTzBCAn8zSGJ9C
          stance: supports
          locator: CBDB:29199
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29199）
          source: &a1
            id: s_h4s884XLpTzBCAn8zSGJ9C
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 29199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29199&o=json
            external_identifier: CBDB:29199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2rDdimC3MR7CX8b2a3ViDE
        subject_person_id: p_2E8J3qVo6HHNKQhDuGwNXL
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
        - id: cs_iCRMnRvzE5fmyBnAkdEDWy
          claim_id: c_2rDdimC3MR7CX8b2a3ViDE
          source_id: s_h4s884XLpTzBCAn8zSGJ9C
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
  ancestors:
    - claim:
        id: c_UNGeNN5N3wBzcaVq2H5brW
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2E8J3qVo6HHNKQhDuGwNXL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c1IFXnRSpq2RFH1VINHtWP
          claim_id: c_UNGeNN5N3wBzcaVq2H5brW
          source_id: s_h4s884XLpTzBCAn8zSGJ9C
          stance: supports
          locator: CBDB 双向互证（祖父 王忱 ⇄ 孫 王浩）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_DRV1HsEBatah9fyUGYScze
        status: active
        display_name: 王忱
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_DRV1HsEBatah9fyUGYScze | 王忱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 29199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29199&o=json)
