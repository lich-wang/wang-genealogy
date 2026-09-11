---
schema: wang-person/v1
id: p_S9Uyn97iSFVdQ3re6cu4c5
status: active
merged_into: null
display_name: 王洪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3QzPeaXDbX9t1KTfHvuKGC
        subject_person_id: p_S9Uyn97iSFVdQ3re6cu4c5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pLT1FZX67uMe93o2jKd4Y3
          claim_id: c_3QzPeaXDbX9t1KTfHvuKGC
          source_id: s_RY2gtXo28CBLJfw48spG8Z
          stance: supports
          locator: CBDB:39624
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39624）
          source: &a1
            id: s_RY2gtXo28CBLJfw48spG8Z
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 39624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39624&o=json
            external_identifier: CBDB:39624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X9iZwppqQy5KBfoMf5bS3J
        subject_person_id: p_S9Uyn97iSFVdQ3re6cu4c5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪，宋人物。籍贯四川，身份为畫家。（中国历代人物传记资料库 CBDB 39624）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_niSmn6Wl_1OVOkEB4n8yl1
          claim_id: c_X9iZwppqQy5KBfoMf5bS3J
          source_id: s_RY2gtXo28CBLJfw48spG8Z
          stance: supports
          locator: CBDB:39624
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪 | accepted |
| bio.summary | 王洪，宋人物。籍贯四川，身份为畫家。（中国历代人物传记资料库 CBDB 39624） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洪（CBDB 39624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39624&o=json)
