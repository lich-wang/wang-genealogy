---
schema: wang-person/v1
id: p_6hXXYs81UJV7CKKCJa99bX
status: active
merged_into: null
display_name: 王興業
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pQ4EuAh7uEbasnh1obH6da
        subject_person_id: p_6hXXYs81UJV7CKKCJa99bX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_12h78n7fhAHH96QM5ow1x3
          claim_id: c_pQ4EuAh7uEbasnh1obH6da
          source_id: s_uGkKmsqc5ogFzw7Q7qo59F
          stance: supports
          locator: CBDB:640037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640037）
          source: &a1
            id: s_uGkKmsqc5ogFzw7Q7qo59F
            source_type: api_record
            title: 中国历代人物传记资料库：王興業（CBDB 640037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640037&o=json
            external_identifier: CBDB:640037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.129Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MXpvq8dCtMVBSFk4RgE1HB
        subject_person_id: p_6hXXYs81UJV7CKKCJa99bX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興業，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640037）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__ge5hiMYrZLfQcMdnVA28P
          claim_id: c_MXpvq8dCtMVBSFk4RgE1HB
          source_id: s_uGkKmsqc5ogFzw7Q7qo59F
          stance: supports
          locator: CBDB:640037
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

# 王興業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興業 | accepted |
| bio.summary | 王興業，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640037） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興業（CBDB 640037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640037&o=json)
