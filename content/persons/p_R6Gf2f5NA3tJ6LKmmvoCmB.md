---
schema: wang-person/v1
id: p_R6Gf2f5NA3tJ6LKmmvoCmB
status: active
merged_into: null
display_name: 王才
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b8Z5fF8BKufgTDWBSzXuE6
        subject_person_id: p_R6Gf2f5NA3tJ6LKmmvoCmB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GMBRksqMzDYWZZVnd8scTa
          claim_id: c_b8Z5fF8BKufgTDWBSzXuE6
          source_id: s_QH6BrX4L61PrbskM956mZh
          stance: supports
          locator: CBDB:139417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139417）
          source: &a1
            id: s_QH6BrX4L61PrbskM956mZh
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 139417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139417&o=json
            external_identifier: CBDB:139417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JTGoDPPqJ7KhdzVh3PjjdM
        subject_person_id: p_R6Gf2f5NA3tJ6LKmmvoCmB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 594年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zBVKs1WBgeiRLXUcQjG6Jh
          claim_id: c_JTGoDPPqJ7KhdzVh3PjjdM
          source_id: s_QH6BrX4L61PrbskM956mZh
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
        id: c_z9JJhCfSxTtrEN6VwL7BEA
        subject_person_id: p_R6Gf2f5NA3tJ6LKmmvoCmB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 642年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDMkuFeimRLD82daE4Xp8z
          claim_id: c_z9JJhCfSxTtrEN6VwL7BEA
          source_id: s_QH6BrX4L61PrbskM956mZh
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
        id: c_oPEAQjvW5ZyPmn4PwfznuC
        subject_person_id: p_R6Gf2f5NA3tJ6LKmmvoCmB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王才（594年—642年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 139417）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jUcuNpRbNfkLkzmwKTU_i_
          claim_id: c_oPEAQjvW5ZyPmn4PwfznuC
          source_id: s_QH6BrX4L61PrbskM956mZh
          stance: supports
          locator: CBDB:139417
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rdTG9WWG7rhKk9o1WimjlG
        subject_person_id: p_6iUqKv7XhE5gAtVLAZMfff
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R6Gf2f5NA3tJ6LKmmvoCmB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-YIUjTJD8qeQBp-oxjys1Q
          claim_id: c_rdTG9WWG7rhKk9o1WimjlG
          source_id: s_NBbohnhSLasNKVjyz5PprT
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 7：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NBbohnhSLasNKVjyz5PprT
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 147956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147956&o=json
            external_identifier: CBDB:147956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6iUqKv7XhE5gAtVLAZMfff
        status: active
        display_name: 王言
        merged_into_person_id: null
  children:
    - claim:
        id: c_vjBe-sgJ7abXsmPeFopvtd
        subject_person_id: p_R6Gf2f5NA3tJ6LKmmvoCmB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qz69kSDJ128SMxKWWsMnJ8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_koYswLldEQb58YSU8-tOqI
          claim_id: c_vjBe-sgJ7abXsmPeFopvtd
          source_id: s_9QRQSUwLCnFDyvPbdz11Ve
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 7：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9QRQSUwLCnFDyvPbdz11Ve
            source_type: api_record
            title: 中国历代人物传记资料库：王三師（CBDB 147957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147957&o=json
            external_identifier: CBDB:147957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_qz69kSDJ128SMxKWWsMnJ8
        status: active
        display_name: 王三師
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王才 | accepted |
| birth.date | 594年 | accepted |
| death.date | 642年 | accepted |
| bio.summary | 王才（594年—642年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 139417） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6iUqKv7XhE5gAtVLAZMfff | 王言 | accepted |
| children | p_qz69kSDJ128SMxKWWsMnJ8 | 王三師 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 139417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139417&o=json)
- [中国历代人物传记资料库：王三師（CBDB 147957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147957&o=json)
- [中国历代人物传记资料库：王言（CBDB 147956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147956&o=json)
