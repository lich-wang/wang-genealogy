---
schema: wang-person/v1
id: p_a6iBVSH4AvDbFzM1nurSan
status: active
merged_into: null
display_name: 王真卿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nqyQ9io5EFneciJNh9w6X4
        subject_person_id: p_a6iBVSH4AvDbFzM1nurSan
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h4CmMarHpfAssFHceRoxcZ
          claim_id: c_nqyQ9io5EFneciJNh9w6X4
          source_id: s_LAuk3F1kbacfyKXtVc6fuu
          stance: supports
          locator: CBDB:700901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700901）
          source: &a1
            id: s_LAuk3F1kbacfyKXtVc6fuu
            source_type: api_record
            title: 中国历代人物传记资料库：王真卿（CBDB 700901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700901&o=json
            external_identifier: CBDB:700901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7ULBxbhwwkP9PYE5HUxrUu
        subject_person_id: p_a6iBVSH4AvDbFzM1nurSan
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真卿，宋人物。籍贯溫縣。（中国历代人物传记资料库 CBDB 700901）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mmdnBMYXLQ3Sq4BjqN0NJl
          claim_id: c_7ULBxbhwwkP9PYE5HUxrUu
          source_id: s_LAuk3F1kbacfyKXtVc6fuu
          stance: supports
          locator: CBDB:700901
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T6mIY6rLeeRuxk87DuVtM3
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a6iBVSH4AvDbFzM1nurSan
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZT-bJIExWkyUWRlaYs7Mtq
          claim_id: c_T6mIY6rLeeRuxk87DuVtM3
          source_id: s_LAuk3F1kbacfyKXtVc6fuu
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷226 王辯墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CNQq29PPARqLQdyYsUrpxT
        status: active
        display_name: 王辯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王真卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王真卿 | accepted |
| bio.summary | 王真卿，宋人物。籍贯溫縣。（中国历代人物传记资料库 CBDB 700901） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CNQq29PPARqLQdyYsUrpxT | 王辯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王真卿（CBDB 700901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700901&o=json)
