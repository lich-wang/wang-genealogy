---
schema: wang-person/v1
id: p_UZ7pm5B2PxB8to42zu3tRz
status: active
merged_into: null
display_name: 王居仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S9Aq1Ch8RSw3Xt4j5g5sY4
        subject_person_id: p_UZ7pm5B2PxB8to42zu3tRz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XwDmB1x645Dhyp1e8wsymG
          claim_id: c_S9Aq1Ch8RSw3Xt4j5g5sY4
          source_id: s_LuV4LR84sK9gA1KEpxx7mK
          stance: supports
          locator: CBDB:101239
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101239）
          source: &a1
            id: s_LuV4LR84sK9gA1KEpxx7mK
            source_type: api_record
            title: 中国历代人物传记资料库：王居仁（CBDB 101239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101239&o=json
            external_identifier: CBDB:101239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BzL5Vzrq6tCKhLaAhCg8Kj
        subject_person_id: p_UZ7pm5B2PxB8to42zu3tRz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居仁，元人物。曾任吏部尚書、行中書省參政、中書省參政。（中国历代人物传记资料库 CBDB 101239）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mOTjIWgYghan8npgG-1l3L
          claim_id: c_BzL5Vzrq6tCKhLaAhCg8Kj
          source_id: s_LuV4LR84sK9gA1KEpxx7mK
          stance: supports
          locator: CBDB:101239
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

# 王居仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居仁 | accepted |
| bio.summary | 王居仁，元人物。曾任吏部尚書、行中書省參政、中書省參政。（中国历代人物传记资料库 CBDB 101239） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居仁（CBDB 101239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101239&o=json)
