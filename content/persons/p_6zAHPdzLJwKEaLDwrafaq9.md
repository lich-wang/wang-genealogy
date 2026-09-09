---
schema: wang-person/v1
id: p_6zAHPdzLJwKEaLDwrafaq9
status: active
merged_into: null
display_name: 王羅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FXVReLmWfoxd2AoSKAcd9f
        subject_person_id: p_6zAHPdzLJwKEaLDwrafaq9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qAQKgK8ryusrJTkRn4kT4M
          claim_id: c_FXVReLmWfoxd2AoSKAcd9f
          source_id: s_Y7bvdW5GZEn12sBNaoKdCG
          stance: supports
          locator: CBDB:139281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139281）
          source: &a1
            id: s_Y7bvdW5GZEn12sBNaoKdCG
            source_type: api_record
            title: 中国历代人物传记资料库：王羅（CBDB 139281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139281&o=json
            external_identifier: CBDB:139281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vJsRdFBVGyT6AB79AFL8Ho
        subject_person_id: p_6zAHPdzLJwKEaLDwrafaq9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 587年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bhGjxfM8okGJoCQuqPqeJn
          claim_id: c_vJsRdFBVGyT6AB79AFL8Ho
          source_id: s_Y7bvdW5GZEn12sBNaoKdCG
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
        id: c_wK9e1RkT7H9EHtr3cPrj9z
        subject_person_id: p_6zAHPdzLJwKEaLDwrafaq9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 626年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9uY55iC5aBtyyNb3jBBL8M
          claim_id: c_wK9e1RkT7H9EHtr3cPrj9z
          source_id: s_Y7bvdW5GZEn12sBNaoKdCG
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
        id: c_fae6SEGDCtRoi2ip57HqxY
        subject_person_id: p_6zAHPdzLJwKEaLDwrafaq9
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
        - id: cs_ar1fBhN4pkTkCZ9FzTgHm1
          claim_id: c_fae6SEGDCtRoi2ip57HqxY
          source_id: s_Y7bvdW5GZEn12sBNaoKdCG
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

# 王羅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羅 | accepted |
| birth.date | 587年 | accepted |
| death.date | 626年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王羅（CBDB 139281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139281&o=json)
